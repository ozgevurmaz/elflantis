import type { LucideIcon } from "lucide-react";

/** "Bu 7 günde neler yaşayacaksın?" bölümündeki tek bir kart. */
export interface JourneyCard {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** "Kimler için?" bölümündeki tek bir madde. */
export interface AudienceItem {
  id: string;
  text: string;
}

/** Footer ve Hakkımda bölümünde kullanılan sosyal medya bağlantısı. */
export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

/** /on-gorusme sayfasındaki "Peki bunu nasıl yapıyoruz?" bölümünde tek bir adım. */
export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

/** E-posta kayıt formunun gönderim sonucu. */
export type EmailSignupStatus = "idle" | "submitting" | "success" | "error";

/** POST /api/newsletter request body. */
export interface NewsletterSignupPayload {
  email: string;
  source?: string;
}

/** POST /api/newsletter response body. */
export interface NewsletterSignupResponse {
  success: boolean;
  error?: string;
}

/** POST /api/contact request body. */
export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

/** POST /api/contact response body. */
export interface ContactFormResponse {
  success: boolean;
  error?: string;
}
