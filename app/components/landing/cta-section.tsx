import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { PRIMARY_PHONE_LABEL, PRIMARY_PHONE_TEL } from "./content";

export function CtaSection() {
  return (
    <section
      id="new-patients"
      className="bg-[#675447] py-16 text-white sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-dark mx-auto max-w-2xl rounded-3xl border border-white/20 bg-white/10 px-6 py-10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] sm:px-10 sm:py-12">
          <h2 id="cta-heading" className="text-2xl font-semibold sm:text-3xl">
            Мы готовы, когда вы готовы
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/90">
            Запишитесь за пару минут, спросите про страховку и абонемент или
            позвоните — поможем выбрать удобный первый визит.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
      </div>
    </section>
  );
}
