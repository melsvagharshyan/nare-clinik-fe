import Image from "next/image";
import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { PRIMARY_PHONE_LABEL, PRIMARY_PHONE_TEL } from "./content";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-dental-line/60"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-[url('/h-mobile.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/h.jpg')]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/80" aria-hidden />

      <div id="book" className="scroll-mt-20" tabIndex={-1} />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#675447]">
            Ваши стоматологи в районе
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#675447] sm:text-5xl sm:leading-[1.1]"
          >
            Забота, к которой хочется возвращаться
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#675447]">
            Современная стоматология в тёплой атмосфере студии — понятные планы
            лечения, деликатный подход и команда, для которой визит не в стресс.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-[#C9A287] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#b89176] active:bg-[#a67b62]"
            >
              Записаться онлайн
            </Link>
            <a
              href={PRIMARY_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DFCEC0] px-8 py-3.5 text-base font-semibold text-[#675447] transition hover:bg-[#d1bfae] active:bg-[#c4b0a0]"
            >
              <LuPhone className="size-5 shrink-0" aria-hidden />
              <span>{PRIMARY_PHONE_LABEL}</span>
            </a>
          </div>
        </div>

        <Image
          src="/hero-home-banner.png"
          alt="Интерьер клиники Nare"
          width={1200}
          height={900}
          className="h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
