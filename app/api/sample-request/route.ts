import { NextResponse } from "next/server";

const DEFAULT_TO = "samples@flavorfactory.net";

type SampleRequest = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  flavorTarget?: string;
  format?: string;
  declaration?: string;
  useLevel?: string;
  timeline?: string;
  notes?: string;
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

function makeText(values: Required<SampleRequest>) {
  return [
    "New sample request from the website",
    "",
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Application or industry: ${values.industry || "Not provided"}`,
    `Flavor target: ${values.flavorTarget || "Not provided"}`,
    `Preferred format: ${values.format || "Not provided"}`,
    `Flavor declaration: ${values.declaration || "Not provided"}`,
    `Target use level: ${values.useLevel || "Not provided"}`,
    `Timeline: ${values.timeline || "Not provided"}`,
    "",
    "Application and profile notes:",
    values.notes || "Not provided",
  ].join("\n");
}

function makeHtml(values: Required<SampleRequest>) {
  const rows = [
    ["Name", values.name],
    ["Company", values.company],
    ["Email", values.email],
    ["Phone", values.phone || "Not provided"],
    ["Application or industry", values.industry || "Not provided"],
    ["Flavor target", values.flavorTarget || "Not provided"],
    ["Preferred format", values.format || "Not provided"],
    ["Flavor declaration", values.declaration || "Not provided"],
    ["Target use level", values.useLevel || "Not provided"],
    ["Timeline", values.timeline || "Not provided"],
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
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(values.notes || "Not provided")}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SAMPLE_REQUEST_TO || DEFAULT_TO;
  const from = process.env.SAMPLE_REQUEST_FROM || "The Flavor Factory <samples@flavorfactory.net>";

  let body: SampleRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const values: Required<SampleRequest> = {
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email),
    phone: clean(body.phone),
    industry: clean(body.industry),
    flavorTarget: clean(body.flavorTarget),
    format: clean(body.format),
    declaration: clean(body.declaration),
    useLevel: clean(body.useLevel),
    timeline: clean(body.timeline),
    notes: clean(body.notes),
  };

  if (!values.name || !values.company || !values.email) {
    return NextResponse.json({ error: "Name, company, and email are required" }, { status: 400 });
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
