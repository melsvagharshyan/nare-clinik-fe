const strings: Record<string, string> = {
  "consultation.hero.description":
    "Современная стоматология в тёплой атмосфере студии.\nЗапишитесь на консультацию — без спешки и давления.",
  "about.contact_button": "Связаться с нами",
  "servicesStrip.marquee":
    "Профилактика · Терапия · Хирургия · Ортопедия · Имплантология · Эстетика · Гигиена · Детская стоматология",
  "servicesStrip.aria_label": "Направления и услуги клиники",
};

export function useSafeTranslation() {
  const t = (key: string) => strings[key] ?? key;
  return { t };
}
