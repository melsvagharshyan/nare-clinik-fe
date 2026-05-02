import type { Metadata } from "next";
import {
  CLINIC_ADDRESS,
  CLINIC_GEO,
  SITE_CANONICAL_ORIGIN,
  SITE_HOST_WWW,
} from "./site-config";

const titleDefault =
  "Наре Дент — стоматология в Белёве | nare-dent.ru";

const description =
  "Стоматология «Наре Дент» в г. Белёв, Тульская обл., ул. Истоминская, 13А. Терапия, эстетика, элайнеры, имплантация. Официальный сайт nare-dent.ru — запись на приём.";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_CANONICAL_ORIGIN),
  title: {
    default: titleDefault,
    template: "%s | Наре Дент",
  },
  description,
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
  ],
  applicationName: "Наре Дент",
  authors: [{ name: "Наре Дент", url: SITE_CANONICAL_ORIGIN }],
  creator: "Наре Дент",
  publisher: "Наре Дент",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_CANONICAL_ORIGIN,
    siteName: "Наре Дент",
    title: titleDefault,
    description,
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
  },
  other: {
    "geo.region": "RU-TUL",
    "geo.placename": CLINIC_ADDRESS.addressLocality,
    "geo.position": `${CLINIC_GEO.latitude};${CLINIC_GEO.longitude}`,
    ICBM: `${CLINIC_GEO.latitude}, ${CLINIC_GEO.longitude}`,
  },
};
