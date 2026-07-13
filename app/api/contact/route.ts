import { NextResponse } from "next/server";

import { CONTACT_EMAIL_TO, RESEND_FROM_EMAIL, resend } from "@/lib/resend";
import type { ContactFormPayload, ContactFormResponse } from "@/lib/types";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactFormPayload | null;
  const name = body?.name?.trim();
  const email = body?.email?.trim().toLowerCase();
  const message = body?.message?.trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json<ContactFormResponse>(
      { success: false, error: "invalid_input" },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: CONTACT_EMAIL_TO,
    replyTo: email,
    subject: `Yeni iletişim formu mesajı — ${name}`,
    text: `İsim: ${name}\nE-posta: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("contact email failed", error);
    return NextResponse.json<ContactFormResponse>(
      { success: false, error: "server_error" },
      { status: 500 },
    );
  }

  return NextResponse.json<ContactFormResponse>({ success: true });
}
