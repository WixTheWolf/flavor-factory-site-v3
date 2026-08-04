import { createHmac, timingSafeEqual } from "node:crypto";
import { resolveMx } from "node:dns/promises";
import { NextResponse } from "next/server";
import { optionalIndustryFieldNames } from "@/data/industry-form-fields";

export const runtime = "nodejs";

const DEFAULT_TO = "samples@flavorfactory.net";
const IP_RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const IP_RATE_LIMIT_MAX = 6;
const EMAIL_RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const EMAIL_RATE_LIMIT_MAX = 3;
const MIN_FORM_AGE_MS = 1_500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;
const MAX_REQUEST_BYTES = 20_000;
const submissionLog = new Map<string, number[]>();

type SampleRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  shippingAddress?: string;
  industry?: string;
  otherApplication?: string;
  productBase?: string;
  flavorTarget?: string;
  format?: string;
  declaration?: string;
  challenge?: string;
  benchmark?: string;
  projectScale?: string;
  useLevel?: string;
  timeline?: string;
  notes?: string;
  website?: string;
  fax?: string;
  formStartedAt?: string;
  formToken?: string;
  [key: string]: unknown;
};

const FIELD_LIMITS: Record<string, number> = {
  name: 120,
  company: 160,
  email: 254,
  phone: 50,
  shippingAddress: 500,
  industry: 100,
  otherApplication: 160,
  productBase: 240,
  flavorTarget: 240,
  format: 100,
  declaration: 100,
  challenge: 120,
  benchmark: 240,
  projectScale: 160,
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

function signingSecret() {
  return process.env.SAMPLE_FORM_SECRET || process.env.RESEND_API_KEY || "";
}

function validFormToken(token: string, secret: string) {
  const [issuedAtValue, nonce, suppliedSignature, ...extra] = token.split(".");
  if (!issuedAtValue || !nonce || !suppliedSignature || extra.length > 0) return false;

  const issuedAt = Number(issuedAtValue);
  const age = Date.now() - issuedAt;
  if (!Number.isFinite(issuedAt) || age < MIN_FORM_AGE_MS || age > MAX_FORM_AGE_MS) return false;

  const payload = `${issuedAtValue}.${nonce}`;
  const expectedSignature = createHmac("sha256", secret).update(payload).digest("base64url");
  const supplied = Buffer.from(suppliedSignature);
  const expected = Buffer.from(expectedSignature);

  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
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
    .filter(([name, value]) => !["formToken", "formStartedAt"].includes(name) && typeof value === "string")
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

type RequiredValues = Required<Pick<SampleRequest, "name" | "company" | "email" | "shippingAddress">> & SampleRequest;

function makeText(values: RequiredValues) {
  const optionalRows = optionalIndustryRows(values);
  return [
    "New sample request from the website",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${clean(values.phone) || "Not provided"}`,
    `Shipping address: ${values.shippingAddress}`,
    `Product application: ${clean(values.industry) || "Not provided"}`,
    `Finished product base: ${clean(values.productBase) || "Not provided"}`,
    `Flavor direction: ${clean(values.flavorTarget) || "Not provided"}`,
    `Preferred format: ${clean(values.format) || "Not provided"}`,
    `Label goal: ${clean(values.declaration) || "Not provided"}`,
    `Primary challenge: ${clean(values.challenge) || "Not provided"}`,
    `Benchmark or existing flavor: ${clean(values.benchmark) || "Not provided"}`,
    `Project scale: ${clean(values.projectScale) || "Not provided"}`,
    `Target use level: ${clean(values.useLevel) || "Not provided"}`,
    `Timeline: ${clean(values.timeline) || "Not provided"}`,
    ...(optionalRows.length ? ["", "Application-specific details:", ...optionalRows.map(([label, value]) => `${label}: ${value}`)] : []),
    "",
    "Project notes:",
    clean(values.notes) || "Not provided",
  ].join("\n");
}

function makeHtml(values: RequiredValues) {
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", clean(values.phone) || "Not provided"],
    ["Shipping address", values.shippingAddress],
    ["Product application", clean(values.industry) || "Not provided"],
    ["Finished product base", clean(values.productBase) || "Not provided"],
    ["Flavor direction", clean(values.flavorTarget) || "Not provided"],
    ["Preferred format", clean(values.format) || "Not provided"],
    ["Label goal", clean(values.declaration) || "Not provided"],
    ["Primary challenge", clean(values.challenge) || "Not provided"],
    ["Benchmark or existing flavor", clean(values.benchmark) || "Not provided"],
    ["Project scale", clean(values.projectScale) || "Not provided"],
    ["Target use level", clean(values.useLevel) || "Not provided"],
    ["Timeline", clean(values.timeline) || "Not provided"],
    ...optionalIndustryRows(values),
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h1 style="font-size:22px;margin:0 0 16px">New sample request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows.map(([label, value]) => `
          <tr>
            <td style="border:1px solid #e5e7eb;padding:8px 10px;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
            <td style="border:1px solid #e5e7eb;padding:8px 10px">${escapeHtml(value)}</td>
          </tr>
        `).join("")}
      </table>
      <h2 style="font-size:16px;margin:20px 0 8px">Project notes</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(values.notes) || "Not provided")}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const secret = signingSecret();
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
  const token = clean(body.formToken);
  const startedAt = Number(clean(body.formStartedAt));
  const userAgent = request.headers.get("user-agent") || "";

  // Quietly discard obvious automated submissions so bots do not learn which check caught them.
  if (
    honeypot ||
    !secret ||
    !requestCameFromThisSite(request) ||
    userAgent.length < 8 ||
    !validFormToken(token, secret) ||
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

  const values = {
    ...body,
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email).toLowerCase(),
    phone: clean(body.phone),
    shippingAddress: clean(body.shippingAddress),
    industry: clean(body.industry),
    otherApplication: clean(body.otherApplication),
    productBase: clean(body.productBase),
    flavorTarget: clean(body.flavorTarget),
    format: clean(body.format),
    declaration: clean(body.declaration),
    challenge: clean(body.challenge),
    benchmark: clean(body.benchmark),
    projectScale: clean(body.projectScale),
    useLevel: clean(body.useLevel),
    timeline: clean(body.timeline),
    notes: clean(body.notes),
  };

  if (!values.name || !values.company || !values.email || !values.shippingAddress) {
    return NextResponse.json({ error: "Name, company, email, and shipping address are required" }, { status: 400 });
  }

  if (
    values.name.length < 2 ||
    values.company.length < 2 ||
    values.shippingAddress.length < 8 ||
    /(?:https?:\/\/|www\.|@|[<>])/i.test(values.name) ||
    /(?:https?:\/\/|www\.|[<>])/i.test(values.company) ||
    /(?:https?:\/\/|www\.|[<>])/i.test(values.shippingAddress)
  ) {
    return NextResponse.json({ error: "Please enter valid contact and shipping information" }, { status: 400 });
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
      subject: `Sample request: ${values.company}`,
      text: makeText(values),
      html: makeHtml(values),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: await response.text() }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
