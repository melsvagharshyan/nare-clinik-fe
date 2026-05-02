/** Canonical site URL (apex). Use for metadata, sitemap, JSON-LD. */
export const SITE_CANONICAL_ORIGIN = "https://nare-dent.ru";

export const SITE_HOST_PRIMARY = "nare-dent.ru";
export const SITE_HOST_WWW = "www.nare-dent.ru";

export const CLINIC_LEGAL_NAME = "Наре Дент";

export const CLINIC_ADDRESS = {
  streetAddress: "ул. Истоминская, д. 13 А",
  addressLocality: "Белёв",
  addressRegion: "Тульская область",
  addressCountry: "RU",
} as const;

/** Центр г. Белёв (Тульская обл.) — для geo и локальной выдачи. */
export const CLINIC_GEO = {
  latitude: 53.811,
  longitude: 36.126,
} as const;
