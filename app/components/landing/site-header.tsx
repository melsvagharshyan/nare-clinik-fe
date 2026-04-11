import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { BrandLogo } from "./brand-logo";
import { navItems, PRIMARY_PHONE_LABEL, PRIMARY_PHONE_TEL } from "./content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-dental-line/80 bg-dental-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dental-cream"
        >
          <BrandLogo className="h-12 w-auto sm:h-14" priority />
        </Link>
        <nav
          aria-label="Основное меню"
          className="hidden items-center gap-8 text-sm font-medium text-[#1e1e1e] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:opacity-75"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <a
            href={PRIMARY_PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DFCEC0] px-4 py-2 text-sm font-semibold text-[#675447] transition hover:bg-[#d1bfae] active:bg-[#c4b0a0]"
          >
            <LuPhone className="size-4 shrink-0" aria-hidden />
            <span>{PRIMARY_PHONE_LABEL}</span>
          </a>
          <Link
            href="#book"
            className="rounded-full bg-[#C9A287] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b89176] active:bg-[#a67b62]"
          >
            Записаться онлайн
          </Link>
        </div>
      </div>
    </header>
  );
}
