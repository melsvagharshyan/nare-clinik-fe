import { PRIMARY_PHONE_TEL, services } from "@/app/components/landing/content";
import {
  CLINIC_ADDRESS,
  CLINIC_GEO,
  CLINIC_LEGAL_NAME,
  CLINIC_MAP_SEARCH_URL,
  CLINIC_SAME_AS,
  SITE_CANONICAL_ORIGIN,
} from "@/app/lib/site-config";
import { SEO_DESCRIPTION, SEO_TITLE_DEFAULT } from "@/app/lib/seo-metadata";

const telE164 = PRIMARY_PHONE_TEL.replace(/^tel:/, "");

const businessId = `${SITE_CANONICAL_ORIGIN}/#localbusiness`;
const websiteId = `${SITE_CANONICAL_ORIGIN}/#website`;
const webpageId = `${SITE_CANONICAL_ORIGIN}/#webpage`;

export function LocalBusinessJsonLd() {
  const localBusiness: Record<string, unknown> = {
    "@type": ["Dentist", "MedicalClinic"],
    "@id": businessId,
    name: CLINIC_LEGAL_NAME,
    alternateName: ["Nare Dent", "Nare-Dent", "nare-dent.ru"],
    description: SEO_DESCRIPTION,
    url: SITE_CANONICAL_ORIGIN,
    telephone: telE164,
    image: [
      `${SITE_CANONICAL_ORIGIN}/hero-home-banner.avif`,
      `${SITE_CANONICAL_ORIGIN}/main_logo.svg`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CANONICAL_ORIGIN}/main_logo.svg`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC_ADDRESS.streetAddress,
      addressLocality: CLINIC_ADDRESS.addressLocality,
      addressRegion: CLINIC_ADDRESS.addressRegion,
      addressCountry: CLINIC_ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC_GEO.latitude,
      longitude: CLINIC_GEO.longitude,
    },
    hasMap: CLINIC_MAP_SEARCH_URL,
    /** Вс: выходной — день не указываем (только дни работы). */
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: CLINIC_ADDRESS.addressLocality,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: CLINIC_ADDRESS.addressRegion,
        },
      },
    ],
    medicalSpecialty: "https://schema.org/Dentistry",
    knowsAbout: [
      "Стоматология",
      "Dental clinic",
      "Имплантация зубов",
      "Инвизилайн",
      "Протезирование зубов",
    ],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.blurb,
        serviceType: "Dental care",
        provider: { "@id": businessId },
      },
    })),
    mainEntityOfPage: { "@id": webpageId },
    ...(CLINIC_SAME_AS.length > 0 ? { sameAs: CLINIC_SAME_AS } : {}),
  };

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: CLINIC_LEGAL_NAME,
      url: SITE_CANONICAL_ORIGIN,
      inLanguage: "ru-RU",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE_CANONICAL_ORIGIN,
      name: SEO_TITLE_DEFAULT,
      description: SEO_DESCRIPTION,
      inLanguage: "ru-RU",
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_CANONICAL_ORIGIN}/hero-home-banner.avif`,
        width: 1200,
        height: 900,
      },
    },
    localBusiness,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
