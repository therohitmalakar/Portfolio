import emailjs from "emailjs-com";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export async function sendEmail(payload: ContactPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("Missing EmailJS environment variables. See README for setup.");
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
}

/**
 * Optional server-side delivery via SendGrid. Uncomment in ContactForm to use instead of EmailJS.
 */
export async function sendViaServer(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Server email failed");
  }

  return response.json();
}

