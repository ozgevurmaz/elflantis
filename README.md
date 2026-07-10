# Elflantis — Landing Page

7 günlük ücretsiz e-posta deneyimi için tek amaçlı, satışsız bir landing page.
Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide Icons.

## Kurulum

```bash
npm install
npm run dev
```

`http://localhost:3000` adresini aç.

## Proje yapısı

```
app/
  layout.tsx        → Fontlar (Fraunces + Inter), SEO metadata
  page.tsx           → Sadece section component'lerini birleştirir
  globals.css         → Tailwind v4 tema token'ları (renk, font)
components/
  HeroSection.tsx
  JourneySection.tsx
  WhoIsItForSection.tsx
  AboutSection.tsx
  CTASection.tsx
  Footer.tsx
  email-signup-form.tsx  → Client component, tek yerden yönetilen e-posta formu
  profile-photo.tsx       → Fotoğraf placeholder'ı + "nefes çemberi" animasyonu
  ui/
    button.tsx
    input.tsx
lib/
  constants.ts   → Tüm metinler burada (hardcode yok)
  types.ts
  utils.ts
```

## Yapman gerekenler

1. **Gerçek fotoğraf:** `HeroSection` ve `AboutSection` içinde
   `<ProfilePhoto alt="..." />` çağrılarına `src="/senin-fotografin.jpg"`
   prop'unu ekle. Fotoğrafı `public/` klasörüne koy.
2. **E-posta kayıt entegrasyonu:** `components/email-signup-form.tsx`
   içindeki `handleSubmit` fonksiyonunda mock `setTimeout` çağrısı var.
   Bunu gerçek servisine (Mailchimp, ConvertKit, kendi API route'un vb.)
   yapılan bir `fetch` isteğiyle değiştir.
3. **Sosyal medya linkleri:** `lib/constants.ts` içindeki `SOCIAL_LINKS`
   ve `metadataBase` URL'ini kendi domainin ile güncelle.

## Tasarım notları

- **Renk sistemi:** Soft Lavender (ana), Sage Green (ikincil), Warm White
  (zemin), Ink (metin) — `app/globals.css` içinde `@theme` altında tanımlı.
- **Tipografi:** Başlıklarda Fraunces (yumuşak serif), gövde metinde Inter.
- **İmza animasyonu:** Profil fotoğrafının arkasındaki iki halka yavaşça
  genişleyip daralarak nefes almayı çağrıştırır — sayfanın tek "gösterişli"
  hareketi budur, `prefers-reduced-motion` kullanıcılarında otomatik kapanır.
- **Erişilebilirlik:** Görünür focus ring, form label'ları (`sr-only`),
  `aria-live` durum mesajları, semantik başlık hiyerarşisi.
