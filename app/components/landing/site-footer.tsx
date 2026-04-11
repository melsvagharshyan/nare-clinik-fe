import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { BrandLogo } from "./brand-logo";
import { PRIMARY_PHONE_LABEL, PRIMARY_PHONE_TEL } from "./content";

export function SiteFooter() {
  return (
    <footer
      id="visit"
      className="glass-footer border-t border-white/45 bg-dental-cta-soft/50 py-14 text-[#1e1e1e] shadow-[0_-8px_32px_-12px_rgba(30,30,30,0.06)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-cta-soft"
          >
            <BrandLogo className="h-12 w-auto sm:h-14" />
          </Link>
          <address className="mt-6 not-italic text-sm leading-relaxed text-[#1e1e1e]">
            ул. Примерная, 201
            <br />
            Бруклин, NY 11222, США
          </address>
        </div>
        <div>
          <p className="font-reviews-serif text-xl font-medium tracking-tight text-[#1e1e1e] sm:text-2xl">
            Режим работы
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#1e1e1e]">
            <li>Пн–чт: 8:00–18:00</li>
            <li>Пт: 8:00–17:00</li>
            <li>Сб: 9:00–15:00</li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-reviews-serif text-xl font-medium tracking-tight text-[#1e1e1e] sm:text-2xl">
            Связаться
          </p>
          <p className="mt-4 text-sm text-[#1e1e1e]">
            <a
              href={PRIMARY_PHONE_TEL}
              className="inline-flex items-center gap-2 font-medium text-[#1e1e1e] hover:underline"
            >
              <LuPhone className="size-4 shrink-0 text-[#1e1e1e]" aria-hidden />
              <span>{PRIMARY_PHONE_LABEL}</span>
            </a>
          </p>
          <p className="mt-6 text-xs text-[#1e1e1e]">
            Цветовая палитра вдохновлена тёплой атмосферой студии клиники{" "}
            <a
              href="https://www.smileloungebk.com/"
              className="text-[#1e1e1e] underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMILELOUNGE
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
