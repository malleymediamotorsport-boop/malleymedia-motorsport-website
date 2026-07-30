import { NextResponse } from "next/server";

const recipient = "contact@malleymediamotorsport.com";
const enquiryLabels: Record<string, string> = {
  general: "General message",
  media: "Media accreditation",
  event: "Event enquiry",
  collab: "Creator collaboration"
};

function clean(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getApiKey() {
  return process.env.RESEND_API_KEY ?? process.env.MESSAGING_RESEND_API_KEY;
}

export async function GET() {
  return NextResponse.json({ configured: Boolean(getApiKey()) });
}

export async function POST(request: Request) {
  const apiKey = getApiKey();

  if (!apiKey) {
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const name = clean(body?.name, 100);
  const email = clean(body?.email, 254);
  const message = clean(body?.message, 5000);
  const enquiryType = clean(body?.enquiryType, 30);
  const website = clean(body?.website, 200);
  const enquiryLabel = enquiryLabels[enquiryType] ?? enquiryLabels.general;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all fields with a valid email address." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "MalleyMedia Motorsport <contact@malleymediamotorsport.com>",
      to: [recipient],
      reply_to: email,
      subject: `Website enquiry: ${enquiryLabel}`,
      html: `
        <h2>New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryLabel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `
    })
  });

  if (!response.ok) {
    console.error("Resend contact form error", response.status, await response.text());
    return NextResponse.json({ error: "The message could not be sent. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
