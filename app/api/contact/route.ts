import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL;
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL ?? SENDGRID_TO_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL || !SENDGRID_FROM_EMAIL) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await sgMail.send({
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `Portfolio inquiry from ${name}`,
    replyTo: email,
    text: message,
  });

  return NextResponse.json({ ok: true });
}

