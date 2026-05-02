import type { Metadata } from "next";
import { PRIMARY_PHONE_TEL } from "@/app/components/landing/content";
import {
  CLINIC_ADDRESS,
  CLINIC_GEO,
  CLINIC_LEGAL_NAME,
  SITE_CANONICAL_ORIGIN,
  SITE_HOST_WWW,
} from "./site-config";

const titleDefault =
  "Наре Дент — стоматология в Белёве | nare-dent.ru";

const description =
  "Стоматология «Наре Дент» в г. Белёв, Тульская обл., ул. Истоминская, 13А. Терапия, эстетика, элайнеры, имплантация. Официальный сайт nare-dent.ru — запись на приём.";

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
  "DC.title": titleDefault,
  "DC.subject":
    "стоматология; стоматологическая клиника; Белёв; Тульская область; Наре Дент",
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

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_ORIGIN),
  title: {
    default: titleDefault,
    template: "%s | Наре Дент",
  },
  description,
  abstract,
  keywords: [
    "Наре Дент",
    "nare-dent.ru",
    SITE_HOST_WWW,
    "стоматология Белёв",
    "стоматология Тульская область",
    "стоматологическая клиника Белёв",
    "ул. Истоминская 13А",
    "стоматолог Белёв",
    "инвизилайн Белёв",
    "имплантация зубов Белёв",
    "стоматология частная клиника",
    "зубной врач Белёв",
  ],
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
      "ru-RU": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_CANONICAL_ORIGIN,
    siteName: CLINIC_LEGAL_NAME,
    title: titleDefault,
    description,
    phoneNumbers: telE164,
    countryName: "Russia",
  },
  twitter: {
    card: "summary",
    title: titleDefault,
    description,
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
    yandex: "f0e2eaef6ade35f2",
  },
  other: clinicMetaOther,
};
