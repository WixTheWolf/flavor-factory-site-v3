import { NextResponse } from "next/server";
import { checkBotId } from "botid/server";

export const runtime = "nodejs";

const DEFAULT_TO = "matt@flavorfactory.net";
const IP_RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const IP_RATE_LIMIT_MAX = 10;
const MIN_FORM_AGE_MS = 1_500;
const MAX_REQUEST_BYTES = 30_000;
const submissionLog = new Map<string, number[]>();

const RATING_KEYS = [
  "rating_quality",
  "rating_consistency",
  "rating_leadTimes",
  "rating_orderAccuracy",
  "rating_onTimeDelivery",
  "rating_communication",
  "rating_samplesRd",
  "rating_technicalRegulatory",
  "rating_easeOfBusiness",
] as const;

const RATING_LABELS: Record<(typeof RATING_KEYS)[number], string> = {
  rating_quality: "Flavor / Product Quality",
  rating_consistency: "Product Consistency",
  rating_leadTimes: "Lead Times",
  rating_orderAccuracy: "Order Accuracy",
  rating_onTimeDelivery: "On-Time Delivery",
  rating_communication: "Communication & Responsiveness",
  rating_samplesRd: "Samples & R&D Support",
  rating_technicalRegulatory: "Technical / Regulatory Support",
  rating_easeOfBusiness: "Overall Ease of Doing Business With Us",
};

const ALLOWED_RATINGS = new Set(["Excellent", "Good", "Fair", "Needs Improvement", "Not Applicable"]);
const ALLOWED_ROLES = new Set([
  "",
  "Purchasing / Procurement",
  "R&D / Product Development",
  "Quality / Regulatory",
  "Operations / Supply Chain",
  "Sales / Marketing",
  "Executive / Management",
  "Other",
]);

type FeedbackBody = {
  satisfaction?: string;
  rating_quality?: string;
  rating_consistency?: string;
  rating_leadTimes?: string;
  rating_orderAccuracy?: string;
  rating_onTimeDelivery?: string;
  rating_communication?: string;
  rating_samplesRd?: string;
  rating_technicalRegulatory?: string;
  rating_easeOfBusiness?: string;
  ratingReason?: string;
  oneChange?: string;
  switchingRisk?: string;
  wishList?: string;
  recommendation?: string;
  role?: string;
  name?: string;
  company?: string;
  email?: string;
  source?: string;
  website?: string;
  fax?: string;
  formStartedAt?: string;
  [key: string]: unknown;
};

const FIELD_LIMITS: Record<string, number> = {
  ratingReason: 2500,
  oneChange: 2500,
  switchingRisk: 2500,
  wishList: 2500,
  role: 100,
  name: 120,
  company: 160,
  email: 254,
  source: 50,
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

function fieldOverLimit(body: FeedbackBody) {
  for (const [name, limit] of Object.entries(FIELD_LIMITS)) {
    if (clean(body[name]).length > limit) return name;
  }
  return "";
}

function looksLikeSpam(body: FeedbackBody) {
  const text = [
    clean(body.ratingReason),
    clean(body.oneChange),
    clean(body.switchingRisk),
    clean(body.wishList),
    clean(body.name),
    clean(body.company),
  ].join(" ");

  const urlCount = (text.match(/(?:https?:\/\/|www\.)/gi) || []).length;
  const containsActiveHtml = /<\s*(?:script|iframe|style|img|a)\b|\[url=/i.test(text);
  const containsSpamLanguage = /\b(?:guest posts?|backlinks?|seo services?|casino|crypto investment|payday loans?|viagra|adult dating|link building)\b/i.test(text);
  const repeatedCharacters = /(.)\1{18,}/.test(text);

  return urlCount > 2 || containsActiveHtml || containsSpamLanguage || repeatedCharacters;
}

function npsGroup(score: number) {
  if (score >= 9) return "Promoter";
  if (score >= 7) return "Passive";
  return "Detractor";
}

function makeText(body: FeedbackBody) {
  const satisfaction = Number(clean(body.satisfaction));
  const recommendation = Number(clean(body.recommendation));
  const contactProvided = Boolean(clean(body.name) || clean(body.company) || clean(body.email));

  return [
    "New customer feedback submission",
    "",
    `Overall satisfaction: ${satisfaction}/10`,
    `Likelihood to recommend: ${recommendation}/10 (${npsGroup(recommendation)})`,
    `Role: ${clean(body.role) || "Not provided"}`,
    `Source: ${clean(body.source) || "direct"}`,
    "",
    "Experience ratings:",
    ...RATING_KEYS.map((key) => `${RATING_LABELS[key]}: ${clean(body[key])}`),
    "",
    "Main reason for ratings:",
    clean(body.ratingReason) || "Not provided",
    "",
    "ONE thing they would change:",
    clean(body.oneChange),
    "",
    "What could cause them to consider another supplier:",
    clean(body.switchingRisk) || "Not provided",
    "",
    "What would make The Flavor Factory more valuable:",
    clean(body.wishList) || "Not provided",
    "",
    contactProvided ? "Optional contact information:" : "Submitted anonymously.",
    ...(contactProvided ? [
      `Name: ${clean(body.name) || "Not provided"}`,
      `Company: ${clean(body.company) || "Not provided"}`,
      `Email: ${clean(body.email) || "Not provided"}`,
    ] : []),
  ].join("\n");
}

function makeHtml(body: FeedbackBody) {
  const satisfaction = Number(clean(body.satisfaction));
  const recommendation = Number(clean(body.recommendation));
  const name = clean(body.name);
  const company = clean(body.company);
  const email = clean(body.email);
  const contactProvided = Boolean(name || company || email);

  const summaryRows: [string, string][] = [
    ["Overall satisfaction", `${satisfaction}/10`],
    ["Likelihood to recommend", `${recommendation}/10 — ${npsGroup(recommendation)}`],
    ["Role", clean(body.role) || "Not provided"],
    ["Source", clean(body.source) || "direct"],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#172019;line-height:1.5;max-width:760px">
      <h1 style="font-size:24px;margin:0 0 16px">New customer feedback</h1>
      <table style="border-collapse:collapse;width:100%;margin-bottom:22px">
        ${summaryRows.map(([label, value]) => `
          <tr>
            <td style="border:1px solid #e2e7e3;padding:8px 10px;font-weight:700;background:#f6f8f6">${escapeHtml(label)}</td>
            <td style="border:1px solid #e2e7e3;padding:8px 10px">${escapeHtml(value)}</td>
          </tr>
        `).join("")}
      </table>

      <h2 style="font-size:17px;margin:22px 0 8px">Experience ratings</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:22px">
        ${RATING_KEYS.map((key) => `
          <tr>
            <td style="border:1px solid #e2e7e3;padding:8px 10px;font-weight:700;background:#f6f8f6">${escapeHtml(RATING_LABELS[key])}</td>
            <td style="border:1px solid #e2e7e3;padding:8px 10px">${escapeHtml(clean(body[key]))}</td>
          </tr>
        `).join("")}
      </table>

      <h2 style="font-size:17px;margin:22px 0 6px">Main reason for ratings</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(body.ratingReason) || "Not provided")}</p>

      <h2 style="font-size:17px;margin:22px 0 6px">ONE thing they would change</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(body.oneChange))}</p>

      <h2 style="font-size:17px;margin:22px 0 6px">What could cause them to consider another supplier</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(body.switchingRisk) || "Not provided")}</p>

      <h2 style="font-size:17px;margin:22px 0 6px">What would make The Flavor Factory more valuable</h2>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(clean(body.wishList) || "Not provided")}</p>

      <h2 style="font-size:17px;margin:22px 0 6px">Contact</h2>
      ${contactProvided ? `
        <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name || "Not provided")}<br />
        <strong>Company:</strong> ${escapeHtml(company || "Not provided")}<br />
        <strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
      ` : `<p style="margin:0"><strong>Submitted anonymously.</strong></p>`}
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
    console.error("BotID verification unavailable for customer feedback", error);
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ error: "Request is too large" }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request" }, { status: 415 });
  }

  let body: FeedbackBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const startedAt = Number(clean(body.formStartedAt));
  const userAgent = request.headers.get("user-agent") || "";

  if (
    clean(body.website) ||
    clean(body.fax) ||
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

  const satisfaction = Number(clean(body.satisfaction));
  const recommendation = Number(clean(body.recommendation));
  const oneChange = clean(body.oneChange);
  const role = clean(body.role);
  const email = clean(body.email).toLowerCase();

  if (!Number.isInteger(satisfaction) || satisfaction < 1 || satisfaction > 10) {
    return NextResponse.json({ error: "Overall satisfaction is required" }, { status: 400 });
  }

  if (!Number.isInteger(recommendation) || recommendation < 0 || recommendation > 10) {
    return NextResponse.json({ error: "Recommendation score is required" }, { status: 400 });
  }

  if (!oneChange) {
    return NextResponse.json({ error: "Please answer the improvement question" }, { status: 400 });
  }

  for (const key of RATING_KEYS) {
    if (!ALLOWED_RATINGS.has(clean(body[key]))) {
      return NextResponse.json({ error: "Please rate each experience area" }, { status: 400 });
    }
  }

  if (!ALLOWED_ROLES.has(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  if (email && !validEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address or leave it blank" }, { status: 400 });
  }

  const ip = clientIp(request);
  if (isRateLimited(`feedback:${ip}`, IP_RATE_LIMIT_WINDOW_MS, IP_RATE_LIMIT_MAX)) {
    return NextResponse.json({ error: "Too many submissions" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CUSTOMER_FEEDBACK_TO || DEFAULT_TO;
  const from = process.env.CUSTOMER_FEEDBACK_FROM
    || process.env.SAMPLE_REQUEST_FROM
    || "The Flavor Factory <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ error: "Email provider is not configured" }, { status: 503 });
  }

  const company = clean(body.company);
  const subject = `Customer feedback: ${satisfaction}/10 — ${company || "Anonymous"}`;
  const emailPayload: Record<string, unknown> = {
    from,
    to,
    subject,
    text: makeText(body),
    html: makeHtml(body),
  };
  if (email) emailPayload.reply_to = email;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    console.error("Customer feedback email failed", await response.text());
    return NextResponse.json({ error: "Unable to deliver feedback" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
