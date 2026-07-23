import fs from "fs/promises";
import path from "path";

import { NextResponse } from "next/server";

import { GUIDE_EMAIL_CONTENT, GUIDE_WORKSHOP_CTA_CONTENT, SITE_CONFIG } from "@/lib/constants";
import { CONTACT_EMAIL_TO, RESEND_FROM_EMAIL, resend } from "@/lib/resend";
import { createServiceClient } from "@/lib/supabase/server";
import type { GuideSignupPayload, GuideSignupResponse } from "@/lib/types";
import { isValidEmail } from "@/lib/utils";

const GUIDE_SOURCE = "5-isaret-rehberi";
const GUIDE_PDF_PATH = path.join(process.cwd(), "public", "rehberler", "5-isaret-rehberi.pdf");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as GuideSignupPayload | null;
  const email = body?.email?.trim().toLowerCase();
  const name = body?.name?.trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json<GuideSignupResponse>(
      { success: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  if (!body?.consent) {
    return NextResponse.json<GuideSignupResponse>(
      { success: false, error: "consent_required" },
      { status: 400 },
    );
  }

  const supabase = createServiceClient();
  const { error: insertError } = await supabase
    .from("newsletter_subscribers")
    .insert({ email, source: GUIDE_SOURCE });

  if (insertError && insertError.code !== "23505") {
    console.error("newsletter_subscribers insert failed", insertError);
    return NextResponse.json<GuideSignupResponse>(
      { success: false, error: "server_error" },
      { status: 500 },
    );
  }

  const pdfBuffer = await fs.readFile(GUIDE_PDF_PATH);
  const greeting = name ? `${GUIDE_EMAIL_CONTENT.greeting} ${name},` : GUIDE_EMAIL_CONTENT.greeting;

  const textBody = [
    greeting,
    "",
    ...GUIDE_EMAIL_CONTENT.paragraphs,
    "",
    GUIDE_EMAIL_CONTENT.upsellLeadIn,
    "",
    ...GUIDE_EMAIL_CONTENT.upsellParagraphs,
    "",
    GUIDE_EMAIL_CONTENT.workshopLinkLeadIn,
    `${GUIDE_EMAIL_CONTENT.workshopLinkLabel}: ${SITE_CONFIG.url}${GUIDE_WORKSHOP_CTA_CONTENT.href}`,
    "",
    GUIDE_EMAIL_CONTENT.signoff,
  ].join("\n");

  const { error: emailError } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: email,
    replyTo: CONTACT_EMAIL_TO,
    subject: GUIDE_EMAIL_CONTENT.subject,
    text: textBody,
    attachments: [
      {
        filename: "5-Isaret-Rehberi.pdf",
        content: pdfBuffer,
      },
    ],
  });

  if (emailError) {
    console.error("guide email failed", emailError);
    return NextResponse.json<GuideSignupResponse>(
      { success: false, error: "server_error" },
      { status: 500 },
    );
  }

  return NextResponse.json<GuideSignupResponse>({ success: true });
}
