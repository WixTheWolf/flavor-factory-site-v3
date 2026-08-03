import { createHmac, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function signingSecret() {
  return process.env.SAMPLE_FORM_SECRET || process.env.RESEND_API_KEY || "";
}

export async function GET() {
  const secret = signingSecret();

  if (!secret) {
    return NextResponse.json({ error: "Form protection is unavailable" }, { status: 503 });
  }

  const issuedAt = String(Date.now());
  const nonce = randomBytes(18).toString("base64url");
  const payload = `${issuedAt}.${nonce}`;
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");

  return NextResponse.json(
    { token: `${payload}.${signature}` },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
