"use client";

import clsx from "clsx";
import { useSafeTranslation } from "~/hooks/useSafeTranslation";

function MarqueeSegment({
  line,
  ariaHidden,
}: {
  line: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="services-marquee-segment flex shrink-0 items-center justify-center px-6 sm:px-10 bg-[#675447]"
      aria-hidden={ariaHidden}
    >
      <div
        className={clsx(
          "group relative inline-flex flex-col justify-center items-center ",
          "min-h-12.5 transition-all duration-500 ease-out",
        )}
      >
        <div
          className="absolute  inset-0 opacity-0 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_70%)]"
          aria-hidden
        />

        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden
        >
          <div className="services-marquee-shine absolute top-0 h-full w-1/2 bg-white/40 blur-xl" />
        </div>

        <p
          className={clsx(
            "relative z-10 whitespace-nowrap uppercase font-bold text-sm sm:text-base md:text-lg tracking-wide",
            "bg-linear-to-r from-white via-white/85 to-white/65 bg-clip-text text-transparent",
          )}
        >
          {line}
        </p>
      </div>
    </div>
  );
}

export default function ServicesMarquee() {
  const { t } = useSafeTranslation();
  const line = t("servicesStrip.marquee");

  return (
    <section
      className="w-full flex justify-center items-center bg-white/10 backdrop-blur-sm overflow-hidden py-3 sm:py-4"
      aria-label={t("servicesStrip.aria_label")}
    >
      <div className="relative w-full min-w-0 overflow-hidden">
        <div className="services-marquee-track flex w-max flex-nowrap">
          <MarqueeSegment line={line} />
          <MarqueeSegment line={line} ariaHidden />
        </div>
      </div>
    </section>
  );
}
