import { NextResponse } from "next/server";
import { optionalIndustryFieldNames } from "@/data/industry-form-fields";

const DEFAULT_TO = "samples@flavorfactory.net";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
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
  formStartedAt?: string;
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

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || "";
}

function isRateLimited(ip: string) {
  if (!ip) return false;

  const now = Date.now();
  const recent = (submissionLog.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(ip, recent);
    return true;
  }

  submissionLog.set(ip, [...recent, now]);
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

function optionalIndustryRows(body: SampleRequest) {
  const rows: [string, string][] = [];

  const otherApplication = clean(body.otherApplication);
  if (otherApplication) {
    rows.push(["Other application detail", otherApplication]);
  }

  for (const name of optionalIndustryFieldNames) {
    const value = clean(body[name]);
    if (value) {
      rows.push([name, value]);
    }
  }

  return rows;
}

function makeText(values: Required<Pick<SampleRequest, "name" | "company" | "email">> & SampleRequest) {
  const optionalRows = optionalIndustryRows(values);
  return [
    "New sample request from the website",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${clean(values.phone) || "Not provided"}`,
    `Shipping address: ${clean(values.shippingAddress) || "Not provided"}`,
    `Product application: ${clean(values.industry) || "Not provided"}`,
    `Finished product base: ${clean(values.productBase) || "Not provided"}`,
    `Flavor target: ${clean(values.flavorTarget) || "Not provided"}`,
    `Preferred format: ${clean(values.format) || "Not provided"}`,
    `Label goal: ${clean(values.declaration) || "Not provided"}`,
    `Primary challenge: ${clean(values.challenge) || "Not provided"}`,
    `Benchmark or existing flavor: ${clean(values.benchmark) || "Not provided"}`,
    `Project scale: ${clean(values.projectScale) || "Not provided"}`,
    `Target use level: ${clean(values.useLevel) || "Not provided"}`,
    `Timeline: ${clean(values.timeline) || "Not provided"}`,
    ...(optionalRows.length > 0
      ? ["", "Application-specific details:", ...optionalRows.map(([label, value]) => `${label}: ${value}`)]
      : []),
    "",
    "Application and profile notes:",
    clean(values.notes) || "Not provided",
  ].join("\n");
}

function makeHtml(values: Required<Pick<SampleRequest, "name" | "company" | "email">> & SampleRequest) {
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", clean(values.phone) || "Not provided"],
    ["Shipping address", clean(values.shippingAddress) || "Not provided"],
    ["Product application", clean(values.industry) || "Not provided"],
    ["Finished product base", clean(values.productBase) || "Not provided"],
    ["Flavor target", clean(values.flavorTarget) || "Not provided"],
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
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:8px 10px;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
                <td style="border:1px solid #e5e7eb;padding:8px 10px">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
      <h2 style="font-size:16px;margin:20px 0 8px">Application and profile notes</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(values.notes) || "Not provided")}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SAMPLE_REQUEST_TO || DEFAULT_TO;
  const from = process.env.SAMPLE_REQUEST_FROM || "The Flavor Factory <onboarding@resend.dev>";

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  let body: SampleRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const honeypot = clean(body.website);
  const startedAtValue = clean(body.formStartedAt);
  const startedAt = Number(startedAtValue);
  const elapsed = Date.now() - startedAt;

  // Quietly accept obvious bot submissions so automated senders do not learn how to bypass the form.
  if (honeypot || !startedAtValue || !Number.isFinite(startedAt) || elapsed < 1200) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const overLimit = fieldOverLimit(body);
  if (overLimit) {
    return NextResponse.json({ error: `Field is too long: ${overLimit}` }, { status: 400 });
  }

  const values = {
    ...body,
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email),
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

  if (!values.name || !values.company || !values.email || !values.shippingAddress || !values.industry || !values.flavorTarget) {
    return NextResponse.json(
      { error: "Name, company, email, shipping address, application, and flavor direction are required" },
      { status: 400 },
    );
  }

  if (values.industry === "other" && !values.otherApplication) {
    return NextResponse.json({ error: "Application detail is required" }, { status: 400 });
  }

  if (!validEmail(values.email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json({ error: "Email provider is not configured" }, { status: 503 });
  }

  const subject = `Sample request: ${values.company || values.name}`;
  const emailBody = makeText(values);

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
      subject,
      text: emailBody,
      html: makeHtml(values),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json({ error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
