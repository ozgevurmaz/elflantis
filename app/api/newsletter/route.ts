import { NextResponse } from "next/server";

import { CONTACT_EMAIL_TO, RESEND_FROM_EMAIL, resend } from "@/lib/resend";
import { createServiceClient } from "@/lib/supabase/server";
import type { NewsletterSignupPayload, NewsletterSignupResponse } from "@/lib/types";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as NewsletterSignupPayload | null;
  const email = body?.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json<NewsletterSignupResponse>(
      { success: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  const supabase = createServiceClient();
  const { error: insertError } = await supabase
    .from("newsletter_subscribers")
    .insert({ email, source: body?.source ?? null });

  if (insertError && insertError.code !== "23505") {
    console.error("newsletter_subscribers insert failed", insertError);
    return NextResponse.json<NewsletterSignupResponse>(
      { success: false, error: "server_error" },
      { status: 500 },
    );
  }

  const alreadySubscribed = insertError?.code === "23505";

  if (!alreadySubscribed) {
    const { error: emailError } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: email,
      replyTo: CONTACT_EMAIL_TO,
      subject: "Elflantis'e hoş geldin",
      text: "Elflantis'e hoş geldin! İlk e-postanı 7 günlük deneyim başladığında alacaksın.",
    });

    if (emailError) {
      console.error("welcome email failed", emailError);
    }
  }

  return NextResponse.json<NewsletterSignupResponse>({ success: true });
}
