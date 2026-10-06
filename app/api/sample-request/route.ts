import { resolveMx } from "node:dns/promises";
import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";
import { optionalIndustryFieldNames } from "@/data/industry-form-fields";
import { industryLabel } from "@/lib/industry-utils";

export const runtime = "nodejs";

const DEFAULT_TO = "samples@flavorfactory.net";
const IP_RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const IP_RATE_LIMIT_MAX = 6;
const EMAIL_RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const EMAIL_RATE_LIMIT_MAX = 3;
const MIN_FORM_AGE_MS = 1_500;
const MAX_REQUEST_BYTES = 20_000;
const submissionLog = new Map<string, number[]>();

const ALLOWED_FORMATS = new Set(["Water Soluble", "Oil Soluble", "Powder", "Emulsion", "Extract"]);
const ALLOWED_LABEL_GOALS = new Set(["Natural", "WONF", "N&A", "Artificial", "No Preference/Flexible"]);

const REGULATORY_FIELDS = [
  ["kosher", "Kosher"],
  ["halal", "Halal"],
  ["ttbCompliant", "TTB Compliant"],
  ["alcoholFree", "Alcohol-Free"],
  ["nonGmo", "Non-GMO"],
  ["organicCompliant", "Organic Compliant"],
] as const;

type SampleRequest = {
  firstName?: string;
  lastName?: string;
  name?: string;
  company?: string;
  companyWebsite?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  shippingAddress?: string;
  industry?: string;
  otherApplication?: string;
  productBase?: string;
  flavorTarget?: string;
  format?: string;
  declaration?: string;
  kosher?: string;
  halal?: string;
  ttbCompliant?: string;
  alcoholFree?: string;
  nonGmo?: string;
  organicCompliant?: string;
  challenge?: string;
  benchmark?: string;
  projectScale?: string;
  volumeUnit?: string;
  useLevel?: string;
  timeline?: string;
  notes?: string;
  website?: string;
  fax?: string;
  formStartedAt?: string;
  humanConfirmed?: string;
  [key: string]: unknown;
};

const FIELD_LIMITS: Record<string, number> = {
  firstName: 80,
  lastName: 80,
  name: 161,
  company: 160,
  companyWebsite: 300,
  email: 254,
  phone: 50,
  street: 200,
  city: 120,
  state: 120,
  postalCode: 40,
  country: 100,
  shippingAddress: 600,
  industry: 100,
  otherApplication: 160,
  productBase: 240,
  flavorTarget: 500,
  format: 100,
  declaration: 100,
  kosher: 10,
  halal: 10,
  ttbCompliant: 10,
  alcoholFree: 10,
  nonGmo: 10,
  organicCompliant: 10,
  challenge: 120,
  benchmark: 240,
  projectScale: 80,
  volumeUnit: 20,
  useLevel: 100,
  timeline: 160,
  notes: 4000,
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeCompanyWebsite(value: string) {
  if (!value) return "";

  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(candidate);
    if (!["http:", "https:"].includes(url.protocol)) return "";
    if (!url.hostname.includes(".") || url.hostname.startsWith(".") || url.hostname.endsWith(".")) return "";
    if (url.username || url.password) return "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return "";
  }
}

function formatShippingAddress(street: string, city: string, state: string, postalCode: string, country: string) {
  return [street, `${city}, ${state} ${postalCode}`.trim(), country].filter(Boolean).join("\n");
}

function selectedRegulatory(body: SampleRequest) {
  return REGULATORY_FIELDS
    .filter(([name]) => clean(body[name]) === "yes")
    .map(([, label]) => label);
}

function requestCameFromThisSite(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (!origin || !host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")?.trim()
    || "";
}

function isRateLimited(key: string, windowMs: number, max: number) {
  if (!key) return false;

  const now = Date.now();
  const recent = (submissionLog.get(key) || []).filter((timestamp) => now - timestamp < windowMs);

  if (recent.length >= max) {
    submissionLog.set(key, recent);
    return true;
  }

  submissionLog.set(key, [...recent, now]);
  return false;
}

function fieldOverLimit(body: SampleRequest) {
  for (const [name, limit] of Object.entries(FIELD_LIMITS)) {
    if (clean(body[name]).length > limit) return name;
  }

  for (const name of optionalIndustryFieldNames) {
    if (clean(body[name]).length > 240) return name;
  }

  return "";
}

function looksLikeSpam(body: SampleRequest) {
  const text = Object.entries(body)
    .filter(([name, value]) => !["formStartedAt", "humanConfirmed", "companyWebsite"].includes(name) && typeof value === "string")
    .map(([, value]) => String(value))
    .join(" ");

  const urlCount = (text.match(/(?:https?:\/\/|www\.)/gi) || []).length;
  const emailCount = (text.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) || []).length;
  const containsActiveHtml = /<\s*(?:script|iframe|style|img|a)\b|\[url=/i.test(text);
  const containsSpamLanguage = /\b(?:guest posts?|backlinks?|seo services?|casino|crypto investment|payday loans?|viagra|adult dating|web design services|marketing agency|link building)\b/i.test(text);
  const repeatedCharacters = /(.)\1{14,}/.test(text);

  return urlCount > 1 || emailCount > 2 || containsActiveHtml || containsSpamLanguage || repeatedCharacters;
}

async function emailDomainAcceptsMail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  try {
    return (await resolveMx(domain)).length > 0;
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOTFOUND" || code === "ENODATA") return false;
    return true;
  }
}

function optionalIndustryRows(body: SampleRequest) {
  const rows: [string, string][] = [];
  const otherApplication = clean(body.otherApplication);
  if (otherApplication) rows.push(["Other application detail", otherApplication]);

  for (const name of optionalIndustryFieldNames) {
    const value = clean(body[name]);
    if (value) rows.push([name, value]);
  }

  return rows;
}

type RequiredValues = SampleRequest & {
  firstName: string;
  lastName: string;
  name: string;
  company: string;
  companyWebsite: string;
  email: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  shippingAddress: string;
  industry: string;
  flavorTarget: string;
  format: string;
  declaration: string;
};

function annualVolume(values: RequiredValues) {
  const amount = clean(values.projectScale);
  if (!amount) return "Not provided";
  return `${amount} ${clean(values.volumeUnit) || ""}`.trim();
}

function makeText(values: RequiredValues) {
  const optionalRows = optionalIndustryRows(values);
  const regulatory = selectedRegulatory(values);

  return [
    "New sample request from the website",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Company website: ${values.companyWebsite}`,
    `Email: ${values.email}`,
    `Phone: ${clean(values.phone) || "Not provided"}`,
    "Shipping address:",
    values.shippingAddress,
    "",
    `Product application: ${industryLabel(values.industry)}`,
    `Finished product / base: ${clean(values.productBase) || "Not provided"}`,
    `Flavor(s) requested: ${values.flavorTarget}`,
    `Flavor format: ${values.format}`,
    `Flavor label goal: ${values.declaration}`,
    `Other regulatory / label requirements: ${regulatory.length ? regulatory.join(", ") : "None specified"}`,
    `Estimated annual flavor volume: ${annualVolume(values)}`,
    `Primary challenge: ${clean(values.challenge) || "Not provided"}`,
    `Benchmark or existing flavor: ${clean(values.benchmark) || "Not provided"}`,
    `Target use level: ${clean(values.useLevel) || "Not provided"}`,
    `Target timeline: ${clean(values.timeline) || "Not provided"}`,
    ...(optionalRows.length ? ["", "Application-specific details:", ...optionalRows.map(([label, value]) => `${label}: ${value}`)] : []),
    "",
    "Additional notes:",
    clean(values.notes) || "Not provided",
  ].join("\n");
}

function makeHtml(values: RequiredValues) {
  const regulatory = selectedRegulatory(values);
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Company", values.company],
    ["Company website", values.companyWebsite],
    ["Email", values.email],
    ["Phone", clean(values.phone) || "Not provided"],
    ["Shipping address", values.shippingAddress],
    ["Product application", industryLabel(values.industry)],
    ["Finished product / base", clean(values.productBase) || "Not provided"],
    ["Flavor(s) requested", values.flavorTarget],
    ["Flavor format", values.format],
    ["Flavor label goal", values.declaration],
    ["Other regulatory / label requirements", regulatory.length ? regulatory.join(", ") : "None specified"],
    ["Estimated annual flavor volume", annualVolume(values)],
    ["Primary challenge", clean(values.challenge) || "Not provided"],
    ["Benchmark or existing flavor", clean(values.benchmark) || "Not provided"],
    ["Target use level", clean(values.useLevel) || "Not provided"],
    ["Target timeline", clean(values.timeline) || "Not provided"],
    ...optionalIndustryRows(values),
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">New sample request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="border:1px solid #e5e7eb;padding:8px 10px;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
            <td style="border:1px solid #e5e7eb;padding:8px 10px;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>
        `).join("")}
      </table>
      <h2 style="font-size:16px;margin:20px 0 8px">Additional notes</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(values.notes) || "Not provided")}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const verification = await checkBotId();
    if (verification.isBot) {
      return NextResponse.json({ error: "Automated submission blocked" }, { status: 403 });
    }
  } catch (error) {
    console.error("BotID verification unavailable", error);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SAMPLE_REQUEST_TO || DEFAULT_TO;
  const from = process.env.SAMPLE_REQUEST_FROM || "The Flavor Factory <onboarding@resend.dev>";

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: "Request is too large" }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  let body: SampleRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const honeypot = clean(body.website) || clean(body.fax);
  const humanConfirmed = clean(body.humanConfirmed) === "yes";
  const startedAt = Number(clean(body.formStartedAt));
  const userAgent = request.headers.get("user-agent") || "";

  if (
    honeypot ||
    !humanConfirmed ||
    !requestCameFromThisSite(request) ||
    userAgent.length < 8 ||
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < MIN_FORM_AGE_MS ||
    looksLikeSpam(body)
  ) {
    return NextResponse.json({ ok: true });
  }

  const overLimit = fieldOverLimit(body);
  if (overLimit) {
    return NextResponse.json({ error: `Field is too long: ${overLimit}` }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const companyWebsite = normalizeCompanyWebsite(clean(body.companyWebsite));
  const street = clean(body.street);
  const city = clean(body.city);
  const state = clean(body.state);
  const postalCode = clean(body.postalCode);
  const country = clean(body.country);
  const shippingAddress = formatShippingAddress(street, city, state, postalCode, country);

  const values: RequiredValues = {
    ...body,
    firstName,
    lastName,
    name: [firstName, lastName].filter(Boolean).join(" "),
    company: clean(body.company),
    companyWebsite,
    email: clean(body.email).toLowerCase(),
    phone: clean(body.phone),
    street,
    city,
    state,
    postalCode,
    country,
    shippingAddress,
    industry: clean(body.industry),
    otherApplication: clean(body.otherApplication),
    productBase: clean(body.productBase),
    flavorTarget: clean(body.flavorTarget),
    format: clean(body.format),
    declaration: clean(body.declaration),
    challenge: clean(body.challenge),
    benchmark: clean(body.benchmark),
    projectScale: clean(body.projectScale),
    volumeUnit: clean(body.volumeUnit),
    useLevel: clean(body.useLevel),
    timeline: clean(body.timeline),
    notes: clean(body.notes),
  };

  if (
    !values.firstName ||
    !values.lastName ||
    !values.company ||
    !values.companyWebsite ||
    !values.email ||
    !values.street ||
    !values.city ||
    !values.state ||
    !values.postalCode ||
    !values.country ||
    !values.industry ||
    !values.flavorTarget ||
    !values.format ||
    !values.declaration
  ) {
    return NextResponse.json({ error: "Complete every required field before submitting" }, { status: 400 });
  }

  if (
    values.firstName.length < 2 ||
    values.lastName.length < 2 ||
    values.company.length < 2 ||
    values.street.length < 4 ||
    values.city.length < 2 ||
    values.state.length < 2 ||
    values.postalCode.length < 3 ||
    values.country.length < 2 ||
    values.flavorTarget.length < 2 ||
    /(?:https?:\/\/|www\.|@|[<>])/i.test(values.firstName) ||
    /(?:https?:\/\/|www\.|@|[<>])/i.test(values.lastName) ||
    /(?:https?:\/\/|www\.|[<>])/i.test(values.company) ||
    /[<>]/.test(values.shippingAddress) ||
    /[<>]/.test(values.flavorTarget)
  ) {
    return NextResponse.json({ error: "Please enter valid company, contact, shipping, and flavor information" }, { status: 400 });
  }

  if (!ALLOWED_FORMATS.has(values.format) || !ALLOWED_LABEL_GOALS.has(values.declaration)) {
    return NextResponse.json({ error: "Select a valid flavor format and label goal" }, { status: 400 });
  }

  if (values.industry === "other" && !clean(values.otherApplication)) {
    return NextResponse.json({ error: "Describe the product application" }, { status: 400 });
  }

  if (!validEmail(values.email) || !(await emailDomainAcceptsMail(values.email))) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  const ip = clientIp(request);
  if (
    isRateLimited(`ip:${ip}`, IP_RATE_LIMIT_WINDOW_MS, IP_RATE_LIMIT_MAX) ||
    isRateLimited(`email:${values.email}`, EMAIL_RATE_LIMIT_WINDOW_MS, EMAIL_RATE_LIMIT_MAX)
  ) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!apiKey) {
    return NextResponse.json({ error: "Email provider is not configured" }, { status: 503 });
  }

  const flavorSubject = values.flavorTarget.replace(/\s+/g, " ").slice(0, 70);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: values.email,
      subject: `Sample request: ${values.company} — ${flavorSubject}`,
      text: makeText(values),
      html: makeHtml(values),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: await response.text() }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
