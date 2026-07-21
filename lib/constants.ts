import { Brain, Instagram, Leaf, Linkedin, Mail, Sparkles } from "lucide-react";
import type { AudienceItem, JourneyCard, ProcessStep, SocialLink } from "./types";

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

/**
 * Tally form linki. Formu Tally'de oluşturduktan sonra sadece bu satırı güncelle,
 * sayfadaki tüm CTA butonları otomatik olarak yeni forma yönlenir.
 */
export const TALLY_FORM_URL = "https://tally.so/r/ob1XQe";

export const TALLY_FORM_ID = TALLY_FORM_URL.split("/").filter(Boolean).pop() ?? "";

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
  serverErrorMessage: "Bir şeyler ters gitti, lütfen tekrar dene.",
} as const;

/* ---------------------------------------------------------------------- */
/* /on-gorusme — Regülasyon Koçluğu ücretsiz ön görüşme başvuru sayfası    */
/* ---------------------------------------------------------------------- */

export const PRE_CONSULTATION_SEO = {
  title: "Ücretsiz Ön Görüşme — Regülasyon Koçluğu | Elflantis",
  description:
    "Bunca zaman değişemediysen bu senin yetersiz olduğun anlamına gelmiyor. Bedenin henüz kendini güvende hissetmiyor demek — önce o güveni birlikte inşa ediyoruz.",
} as const;

export const PRE_CONSULTATION_HERO_CONTENT = {
  eyebrow: "Regülasyon Koçluğu · Ücretsiz Ön Görüşme",
  title: "Sorun sen değilsin. Hiçbir zaman sen olmadın.",
  photoAlt: "Elif Özge'nin profil fotoğrafı",
  leadIn: "Bunca zaman değişemediysen, bu senin yetersiz olduğun anlamına gelmiyor.",
  emphasis: "Bedenin henüz kendini güvende hissetmiyor demek.",
  trailingParagraph:
    "Ve güvende hissetmeyen bir beden, ne kadar istersen iste, değişime izin vermez.",
  closing: "Birlikte önce o güveni inşa ediyoruz. Gerisi zaten geliyor.",
  cta: "Ücretsiz Ön Görüşmeye Başvur",
} as const;

export const QUESTION_SECTION_CONTENT = {
  title: "Sana bir şey sorayım.",
  lead: "Ne yapman gerektiğini aslında biliyorsun, değil mi?",
  paragraphs: [
    "Kitapları okudun. Videoları izledin. Kaç kere \"bu sefer farklı olacak\" dedin, kim bilir.",
    "Ama sabahları hâlâ o tarifsiz gerginlikle uyanıyorsun. Önemli işleri erteliyorsun ve sonra kendine kızıyorsun. Zihnin geceleri bile susmuyor. Tam toparlandım derken küçücük bir şey seni yine başa sarıyor.",
    "Ve belki de en yorucu olanı şu: Kendinle sürekli bir savaş halindesin. Kendini itekleyerek, zorlayarak, suçlayarak değişmeye çalışıyorsun.",
  ],
  closing: "Peki hiç işe yaradı mı?",
} as const;

export const TRUTH_SECTION_CONTENT = {
  title: "Şimdi sana kimsenin söylemediği şeyi söyleyeyim.",
  emphasis: "Bu bir irade sorunu değil. Tembellik hiç değil.",
  paragraphs: [
    "Sinir sistemin hâlâ hayatta kalmaya çalışıyor. Senin haberin bile olmadan, gün boyu seni korumaya çalışıyor. Erteleme dediğin şey aslında bir koruma. Kaygı dediğin şey, alarm zilini kapatmayı unutmuş bir bedenin sesi.",
    "İnsanlar değişemedikleri için başarısız değildir. Güvende hissetmedikleri için değişemezler.",
    "Sen de öylesin. Ve bu, düzeltilmesi gereken bir kusur değil. Anlaşılmayı bekleyen bir sistem.",
  ],
} as const;

export const TRANSFORMATION_SECTION_CONTENT = {
  title: "Beden güvende hissetmeye başlayınca ne oluyor?",
  paragraphs: [
    "Önce küçük şeyler fark ediyorsun. Nefesin biraz daha derin. Omuzların biraz daha aşağıda. O sürekli aciliyet hissi biraz daha sessiz.",
    "Sonra daha büyükleri geliyor. Yıllardır ertelediğin işe bir sabah öylece başladığını fark ediyorsun. Kimse seni zorlamadan. Zor bir konuşmanın ortasında dağılmadığını görüyorsun. Duygular geliyor, sen onlarla savaşmıyorsun, onlar da geçip gidiyor.",
  ],
  emphasisLeadIn: "Ve en derinde şu değişiyor:",
  emphasis: "Hayatını artık korkuların yönetmiyor. Sen yönetiyorsun.",
  emphasisTrailing: "Bilinçli, sakin, kendi seçimlerinle.",
  closingParagraphs: [
    "Benim işim işte bu. Seni oraya kadar götürmek değil. Seninle oraya kadar yürümek.",
  ],
} as const;

export const PROCESS_SECTION_CONTENT = {
  title: "Peki bunu nasıl yapıyoruz?",
  description: "Beş adımda ilerliyoruz. Acele etmeden, bedenin izin verdiği hızda.",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "fark-et",
    number: "01",
    title: "Fark Et.",
    description: "Önce durup dinliyoruz. Bedenin şu anda ne söylüyor? Sinir sistemin hangi durumda?",
  },
  {
    id: "regule-et",
    number: "02",
    title: "Regüle Et.",
    description: "Hedeflere koşmadan önce zemini sağlamlaştırıyoruz. Önce güven. Önce beden. Önce kapasite.",
  },
  {
    id: "anlamlandir",
    number: "03",
    title: "Anlamlandır.",
    description:
      "O döngü neden var, birlikte anlıyoruz. Çünkü seni zorlayan her davranışın, bir zamanlar seni koruyan bir hikayesi var.",
  },
  {
    id: "yeniden-sec",
    number: "04",
    title: "Yeniden Seç.",
    description: "Otomatik tepkilerin yerine, artık sen geçiyorsun. Bu sefer korkudan değil, seçerek.",
  },
  {
    id: "entegre-et",
    number: "05",
    title: "Entegre Et.",
    description: "Yeni olanı günlük hayatına taşıyoruz. Çünkü kalıcı olan, seansta olan değil, hayatında kalandır.",
  },
];

export const FIT_SECTION_CONTENT = {
  title: "Bu çalışma sana göre mi?",
  description: "Dürüst olalım, bu herkes için değil. Ve bunu baştan konuşmak ikimiz için de iyi.",
  yesTitle: "Sana göre olabilir, eğer:",
  noTitle: "Sana göre olmayabilir, eğer:",
} as const;

export const FIT_YES_ITEMS: AudienceItem[] = [
  {
    id: "tanidik-cumle",
    text: "\"Ne yapacağımı biliyorum ama bir türlü sürdüremiyorum\" cümlesi sana tanıdıksa.",
  },
  {
    id: "tetikte-hissetmek",
    text: "Kendini sık sık tetikte, gergin ya da tükenmiş hissediyorsan.",
  },
  {
    id: "savasmadan-degismek",
    text: "Kendinle savaşmadan değişmenin mümkün olduğuna inanmak istiyorsan.",
  },
  {
    id: "kalici-sey",
    text: "Ve hızlı bir motivasyon patlaması değil, gerçekten kalıcı bir şey arıyorsan.",
  },
];

export const FIT_NO_ITEMS: AudienceItem[] = [
  {
    id: "hazir-recete",
    text: "Birinin sana hazır bir reçete vermesini bekliyorsan.",
  },
  {
    id: "zaman-ayiramamak",
    text: "Şu dönem sürece düzenli zaman ayıramayacaksan.",
  },
  {
    id: "uc-gunde-degisim",
    text: "Ya da üç günde hayatının değişmesini istiyorsan. O sözü sana veremem. Çünkü doğru değil ve sana yalan söylemeyeceğim.",
  },
];

/* ---------------------------------------------------------------------- */
/* /yedi-gunluk — anasayfanın farklı değerlendirilecek kopyası             */
/* ---------------------------------------------------------------------- */

export const YEDI_GUNLUK_HERO_CONTENT = {
  eyebrow: "7 Günlük Ücretsiz Deneyim",
  title: "Önce bedenini dinlemeyi öğren.",
  description:
    "Somatik egzersizler ve sinir sistemi temelli çalışmalarla bedeninle yeniden bağ kur çünkü bedenin güvende hissettiğinde, dönüşüm başlar.",
  photoAlt: "Elif Özge'nin profil fotoğrafı",
} as const;

export const YEDI_GUNLUK_JOURNEY_CONTENT = {
  title: "Bu 7 günde neler yaşayacaksın?",
  description:
    "Her e-posta kısa, sade ve uygulanabilir. Teoriyle değil, bedeninle ilerliyorsun.",
} as const;

export const YEDI_GUNLUK_JOURNEY_CARDS: JourneyCard[] = [
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

export const YEDI_GUNLUK_WHO_IS_IT_FOR_CONTENT = {
  title: "Kimler için?",
  description: "Bu deneyim, özellikle şunlar için sade bir başlangıç noktası.",
} as const;

export const YEDI_GUNLUK_AUDIENCE_ITEMS: AudienceItem[] = [
  { id: "zihni-calisanlar", text: "Sürekli zihni çalışanlar" },
  { id: "gergin-hissedenler", text: "Kendini sık sık gergin hissedenler" },
  { id: "bedenini-anlamak", text: "Bedenini daha iyi anlamak isteyenler" },
  {
    id: "sade-giris",
    text: "Sinir sistemi regülasyonuna sade bir giriş yapmak isteyenler",
  },
];

export const YEDI_GUNLUK_ABOUT_CONTENT = {
  title: "Merhaba, ben Elif Özge.",
  description:
    "İnsanların kendileriyle savaşmadan dönüşebileceklerine inanıyorum. Çünkü gerçek değişim, daha çok çabalamakla değil; bedenini, sinir sistemini ve eski kalıplarını anlamakla başlar. Amacım, insanların kendi otantik benlikleriyle yeniden hizalanmalarına ve bunu güven hissiyle sürdürebilmelerine rehberlik etmek.",
  photoAlt: "Elif Özge'nin profil fotoğrafı",
} as const;

export const YEDI_GUNLUK_CTA_CONTENT = {
  title: "Hazırsan başlayalım.",
  description: "İlk e-postanı hemen göndereceğim.",
} as const;

export const EXPECTATION_SECTION_CONTENT = {
  title: "Ön görüşmede seni ne bekliyor?",
  paragraphs: [
    "Birlikte çalışmaya başlamadan önce 30 dakikalık ücretsiz bir online görüşme yapıyoruz. Kamera karşısında bir sınav değil bu. Sadece iki insanın tanışması.",
    "Seni dinliyorum. Seni buraya getiren şeyi anlamaya çalışıyorum. Regülasyon Koçluğu'nun sana nasıl eşlik edebileceğini konuşuyoruz. Ve sonunda dürüstçe bakıyoruz: Birbirimize uygun muyuz?",
    "Şunu da bil: Bu görüşmede sana bir şey satmaya çalışmayacağım. İkimiz de \"evet\" hissedersek, ücretli programın detaylarını konuşuruz. Hissetmezsek, sana en doğru yönü söyleyerek vedalaşırız. Bu da tamamen iyidir.",
  ],
  emphasis: "Başvurunu 48 saat içinde yanıtlıyorum. Söz.",
} as const;

export const PRE_CONSULTATION_CLOSING_CONTENT = {
  title: "Yıllardır kendini zorluyorsun. Bir kere de kendine şefkatle yaklaşmayı dene.",
  description: "İlk adım sadece 30 dakika. Ücretsiz. Baskısız. Ve belki de her şeyin başlangıcı.",
  cta: "Ücretsiz Ön Görüşmeye Başvur",
} as const;
