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

/** Поисковая ссылка на карты (для JSON-LD `hasMap` и rich results). */
export const CLINIC_MAP_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Наре Дент, ул. Истоминская, 13А, Белёв, Тульская область, Россия",
  );

/**
 * Официальные профили клиники (дополняйте: Google Business Profile, 2ГИС и т.д.).
 * Пустой массив — только сайт; добавьте URL — усилит `sameAs` в structured data.
 */
export const CLINIC_SAME_AS: string[] = [];
