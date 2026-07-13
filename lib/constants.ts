import { Brain, Instagram, Leaf, Linkedin, Mail, Sparkles } from "lucide-react";
import type { AudienceItem, JourneyCard, SocialLink } from "./types";

export const SITE_CONFIG = {
  name: "Elflantis",
  title: "Elflantis — Sinir Sisteminle Tanış",
  description:
    "7 günlük ücretsiz e-posta deneyimiyle bedenini daha yakından tanı, sinir sistemini anla ve günlük hayatına küçük somatik pratikler ekle.",
  url: "https://elflantis.com",
} as const;

export const NAV_CONFIG = {
  logo: "/logomor.png",
  brandName: "Elflantis",
} as const;

export const HERO_CONTENT = {
  eyebrow: "7 Günlük Ücretsiz Deneyim",
  title: "Önce bedenini dinlemeyi öğren.",
  description:
    "Somatik egzersizler ve sinir sistemi temelli çalışmalarla bedeninle yeniden bağ kur çünkü bedenin güvende hissettiğinde, dönüşüm başlar.",
  photoAlt: "Elif Özge'nin profil fotoğrafı",

} as const;

export const JOURNEY_CONTENT = {
  title: "Bu 7 günde neler yaşayacaksın?",
  description:
    "Her e-posta kısa, sade ve uygulanabilir. Teoriyle değil, bedeninle ilerliyorsun.",
} as const;

export const JOURNEY_CARDS: JourneyCard[] = [
  {
    id: "fark-etmek",
    icon: Brain,
    title: "Fark et",
    description: "Bedeninin verdiği sinyalleri fark etmeye başlayacaksın.",
  },
  {
    id: "kucuk-pratikler",
    icon: Leaf,
    title: "Küçük pratikler",
    description:
      "Günlük hayatına kolayca ekleyebileceğin küçük somatik pratikler deneyimleyeceksin.",
  },
  {
    id: "alan-acmak",
    icon: Sparkles,
    title: "Alan aç",
    description:
      "Duygularını değiştirmeye çalışmadan onlara alan açmayı keşfedeceksin.",
  },
  {
    id: "yeni-bir-iliski",
    icon: Brain,
    title: "Yeni bir ilişki",
    description:
      "Sinir sistemini daha yakından tanırken bedeninle yeni bir ilişki kurmaya başlayacaksın.",
  },
];

export const WHO_IS_IT_FOR_CONTENT = {
  title: "Kimler için?",
  description: "Bu deneyim, özellikle şunlar için sade bir başlangıç noktası.",
} as const;

export const AUDIENCE_ITEMS: AudienceItem[] = [
  { id: "zihni-calisanlar", text: "Sürekli zihni çalışanlar" },
  { id: "gergin-hissedenler", text: "Kendini sık sık gergin hissedenler" },
  { id: "bedenini-anlamak", text: "Bedenini daha iyi anlamak isteyenler" },
  {
    id: "sade-giris",
    text: "Sinir sistemi regülasyonuna sade bir giriş yapmak isteyenler",
  },
];

export const ABOUT_CONTENT = {
  title: "Merhaba, ben Elif Özge.",
  description:
    "İnsanların kendileriyle savaşmadan dönüşebileceklerine inanıyorum. Çünkü gerçek değişim, daha çok çabalamakla değil; bedenini, sinir sistemini ve eski kalıplarını anlamakla başlar. Amacım, insanların kendi otantik benlikleriyle yeniden hizalanmalarına ve bunu güven hissiyle sürdürebilmelerine rehberlik etmek.",
  photoAlt: "Elif Özge'nin profil fotoğrafı",
} as const;

export const CTA_CONTENT = {
  title: "Hazırsan başlayalım.",
  description: "İlk e-postanı hemen göndereceğim.",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/elflantis",
    icon: Instagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/elflantis",
    icon: Linkedin,
  },
  {
    id: "email",
    label: "E-posta",
    href: "mailto:merhaba@elflantis.com",
    icon: Mail,
  },
];

export const FOOTER_CONTENT = {
  brandName: "Elflantis",
  tagline: "Sinir sistemine sade bir bakış.",
} as const;

export const EMAIL_FORM_CONTENT = {
  label: "E-posta adresi",
  placeholder: "E-posta adresin",
  submitLabel: "Ücretsiz Katıl",
  submittingLabel: "Gönderiliyor…",
  successTitle: "Katıldın!",
  successMessage: "İlk e-postanı yakında alacaksın.",
  errorMessage: "Geçerli bir e-posta adresi gir.",
} as const;
