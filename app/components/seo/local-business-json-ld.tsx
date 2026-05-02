import { PRIMARY_PHONE_TEL } from "@/app/components/landing/content";
import {
  CLINIC_ADDRESS,
  CLINIC_GEO,
  CLINIC_LEGAL_NAME,
  SITE_CANONICAL_ORIGIN,
} from "@/app/lib/site-config";

const telE164 = PRIMARY_PHONE_TEL.replace(/^tel:/, "");

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_CANONICAL_ORIGIN}/#website`,
        name: CLINIC_LEGAL_NAME,
        url: SITE_CANONICAL_ORIGIN,
        inLanguage: "ru-RU",
        publisher: { "@id": `${SITE_CANONICAL_ORIGIN}/#localbusiness` },
      },
      {
        "@type": "Dentist",
        "@id": `${SITE_CANONICAL_ORIGIN}/#localbusiness`,
        name: CLINIC_LEGAL_NAME,
        url: SITE_CANONICAL_ORIGIN,
        telephone: telE164,
        image: `${SITE_CANONICAL_ORIGIN}/main_logo.svg`,
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
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
