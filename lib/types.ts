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

/** E-posta kayıt formunun gönderim sonucu. */
export type EmailSignupStatus = "idle" | "submitting" | "success" | "error";
