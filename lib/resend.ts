import "server-only";
import { Resend } from "resend";

let resendClient: Resend | null = null;

/** Resend client'ını ilk kullanımda oluşturur, build sırasında env değişkeni olmasa bile derlemenin çökmemesi için. */
export const resend = new Proxy({} as Resend, {
  get(_target, prop, receiver) {
    if (!resendClient) {
      resendClient = new Resend(process.env.RESEND_API_KEY);
    }
    return Reflect.get(resendClient, prop, receiver);
  },
});

export const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;
export const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO!;
