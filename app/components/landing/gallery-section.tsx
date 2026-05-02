"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { LuX, LuZoomIn } from "react-icons/lu";
import { galleryItems } from "./content";

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();
  const descId = useId();

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close]);

  return (
    <section
      id="gallery"
      className="scroll-mt-20 border-b border-dental-line/60 bg-linear-to-b from-dental-sage-soft/35 via-dental-cream to-dental-cream py-16 sm:py-24"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#675447]/90">
            Здание клиники
          </p>
          <h2
            id={titleId}
            className="font-reviews-serif mt-3 text-3xl font-medium tracking-tight text-[#675447] sm:text-4xl"
          >
            Как выглядит наше здание
          </h2>
          <p
            id={descId}
            className="mt-4 text-[#1e1e1e]/75 sm:text-lg sm:leading-relaxed"
          >
            Два фото здания стоматологии Наре Дент в Белёве — фасад и вход с
            улицы, чтобы вы заранее знали, куда идти.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
          {galleryItems.map((item, index) => (
            <figure
              key={item.src}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/50 shadow-[0_20px_60px_-24px_rgba(30,30,30,0.18)] ring-1 ring-white/45 transition hover:shadow-[0_28px_70px_-28px_rgba(30,30,30,0.22)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-cream"
                aria-label={`Открыть фото: ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1e1e1e]/45 via-transparent to-transparent opacity-80 transition group-hover:opacity-95"
                  aria-hidden
                />
                <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#675447] shadow-md backdrop-blur-sm">
                  <LuZoomIn className="size-3.5" aria-hidden />
                  Увеличить
                </span>
              </button>
              <figcaption className="glass-card border-t border-white/50 bg-white/55 px-5 py-5 sm:px-6">
                <h3 className="font-reviews-serif text-xl font-medium text-[#675447]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1e1e1e]/75">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {openIndex !== null && galleryItems[openIndex] ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0f1412]/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[openIndex].title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-110 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-[#1e1e1e] shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/50"
            aria-label="Закрыть просмотр"
          >
            <LuX className="size-5" aria-hidden />
          </button>
          <div
            className="relative max-h-[min(90vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
              <Image
                src={galleryItems[openIndex].src}
                alt={galleryItems[openIndex].alt}
                fill
                className="object-contain bg-black/40"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/90">
              {galleryItems[openIndex].title}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
