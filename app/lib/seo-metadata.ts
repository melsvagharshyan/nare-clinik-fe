import type { Metadata } from "next";
import { PRIMARY_PHONE_TEL } from "@/app/components/landing/content";
import {
  CLINIC_ADDRESS,
  CLINIC_GEO,
  CLINIC_LEGAL_NAME,
  SITE_CANONICAL_ORIGIN,
  SITE_HOST_WWW,
} from "./site-config";

/** Главный заголовок вкладки и поиска — локация + услуга + бренд. */
export const SEO_TITLE_DEFAULT =
  "Стоматология в Белёве — Наре Дент | Тульская область | nare-dent.ru";

/**
 * Описание для сниппета: русский основной текст + английский для запросов вроде
 * «dental clinic Belev», «dentist Tula region» (одна страница, без отдельной en-версии).
 */
export const SEO_DESCRIPTION =
  "Стоматология «Наре Дент» в г. Белёв, Тульская обл., ул. Истоминская, 13А. Терапия, эстетика, инвизилайн, имплантация, ортопедия и хирургия. Запись онлайн и телефон на nare-dent.ru. " +
  "Nare Dent dental clinic in Belev, Tula Oblast, Russia — therapy, aesthetics, aligners, implants.";

export const SEO_DESCRIPTION_SHORT =
  "Стоматология «Наре Дент» в г. Белёв, Тульская область. Ул. Истоминская, 13А. Официальный сайт nare-dent.ru.";

const abstract =
  "Стоматологическая клиника «Наре Дент», г. Белёв, Тульская область. Ул. Истоминская, д. 13 А. Телефон для записи и консультаций указан на сайте nare-dent.ru.";

const clinicAddressFull = `${CLINIC_ADDRESS.streetAddress}, ${CLINIC_ADDRESS.addressLocality}, ${CLINIC_ADDRESS.addressRegion}, ${CLINIC_ADDRESS.addressCountry}`;

const telE164 = PRIMARY_PHONE_TEL.replace(/^tel:/, "");

/** Дополнительные name=* метаданные для краулеров и каталогов (Dublin Core, регион). */
const clinicMetaOther: Record<string, string> = {
  subject: `${CLINIC_LEGAL_NAME}: стоматология, лечение и профилактика зубов в г. Белёв.`,
  classification: "Стоматология; медицинские услуги; частная стоматологическая клиника",
  coverage: `${CLINIC_ADDRESS.addressLocality}, ${CLINIC_ADDRESS.addressRegion}, Россия`,
  distribution: "global",
  rating: "general",
  handheldfriendly: "true",
  mobileoptimized: "width",
  "DC.title": SEO_TITLE_DEFAULT,
  "DC.subject":
    "стоматология; стоматологическая клиника; Белёв; белев стоматология; Тульская область; Наре Дент; Nare Dent; dental clinic Belev; dentist Tula region",
  "DC.creator": CLINIC_LEGAL_NAME,
  "DC.publisher": CLINIC_LEGAL_NAME,
  "DC.language": "ru",
  "DC.coverage": clinicAddressFull,
  "DC.identifier": SITE_CANONICAL_ORIGIN,
  "geo.region": "RU-TUL",
  "geo.placename": CLINIC_ADDRESS.addressLocality,
  "geo.position": `${CLINIC_GEO.latitude};${CLINIC_GEO.longitude}`,
  ICBM: `${CLINIC_GEO.latitude}, ${CLINIC_GEO.longitude}`,
};

/** Ключевые фразы: русские + английские и транслит (Яндекс/Google). */
const seoKeywords = [
  CLINIC_LEGAL_NAME,
  "Nare Dent",
  "nare-dent.ru",
  SITE_HOST_WWW,
  "стоматология Белёв",
  "стоматология белев",
  "стоматологическая клиника Белёв",
  "стоматология Тульская область",
  "стоматолог Тульская область",
  "стоматолог Белёв",
  "зубной врач Белёв",
  "ул. Истоминская 13А",
  "Истоминская 13",
  "инвизилайн Белёв",
  "имплантация зубов Белёв",
  "частная стоматология Белёв",
  "dental clinic Belev",
  "dentist Belev Russia",
  "stomatology Tula oblast",
  "dental clinic Tula region",
  "Nare Dent Belev",
] as const;

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_ORIGIN),
  title: {
    default: SEO_TITLE_DEFAULT,
    template: "%s | Наре Дент",
  },
  description: SEO_DESCRIPTION,
  abstract,
  keywords: [...seoKeywords],
  applicationName: CLINIC_LEGAL_NAME,
  authors: [{ name: CLINIC_LEGAL_NAME, url: SITE_CANONICAL_ORIGIN }],
  creator: CLINIC_LEGAL_NAME,
  publisher: CLINIC_LEGAL_NAME,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      "ru-RU": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: SITE_CANONICAL_ORIGIN,
    siteName: CLINIC_LEGAL_NAME,
    title: SEO_TITLE_DEFAULT,
    description: SEO_DESCRIPTION,
    phoneNumbers: telE164,
    countryName: "Russia",
    images: [
      {
        url: "/hero-home-banner.avif",
        width: 1200,
        height: 900,
        alt: "Интерьер стоматологии Наре Дент, г. Белёв — стоматологическая клиника",
      },
      {
        url: "/main_logo.svg",
        width: 512,
        height: 512,
        alt: "Логотип стоматологии Наре Дент",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE_DEFAULT,
    description: SEO_DESCRIPTION,
    images: ["/hero-home-banner.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  verification: {
    google: "jWv8bJnWf8Fh1gtlCFHlFus2hk_H5N5Y_S5yjQ87P-g",
    yandex: "f0e2eaef6ade35f2",
  },
  other: clinicMetaOther,
};
