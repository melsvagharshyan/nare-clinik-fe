"use client";

import clsx from "clsx";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { LuCalendar, LuMenu, LuPhone, LuX } from "react-icons/lu";
import {
  navItems,
  PRIMARY_PHONE_LABEL,
  PRIMARY_PHONE_TEL,
} from "./content";
import { HashLink } from "./hash-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    prevFocusRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocusRef.current?.focus?.();
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (closeBtnRef.current?.contains(target)) return;
      close();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, close]);

  return (
    <div className="relative md:hidden">
      {/* Overlay first in DOM; toggle button below stays above when menu is open (z-index). */}
      <div
        className={clsx(
          "fixed inset-0 z-40 md:hidden transition-[opacity,visibility] duration-200 ease-out",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[#1e1e1e]/45 backdrop-blur-[2px]"
          aria-hidden
        />
        <nav
          ref={panelRef}
          id={menuId}
          className={clsx(
            "absolute right-0 top-0 flex h-full min-h-dvh w-[min(100%,20rem)] flex-col border-l border-white/40 bg-dental-cream/98 py-4 shadow-2xl backdrop-blur-lg transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Мобильное меню"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) close();
          }}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-dental-line/80 px-4 pb-4">
            <span className="font-reviews-serif text-lg font-medium text-[#675447]">
              Меню
            </span>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full text-[#675447] hover:bg-[#675447]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/40"
              aria-label="Закрыть меню"
              onClick={close}
            >
              <LuX className="size-5" aria-hidden />
            </button>
          </div>
          <ul className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <HashLink
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[#1e1e1e] transition hover:bg-[#675447]/10 active:bg-[#675447]/15"
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="shrink-0 border-t border-dental-line/80 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#675447]/80">
              Связь и запись
            </p>
            <a
              href={PRIMARY_PHONE_TEL}
              className="mb-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#DFCEC0] px-4 py-3 text-sm font-semibold text-[#675447] transition hover:bg-[#d1bfae] active:bg-[#c4b0a0]"
            >
              <LuPhone className="size-4 shrink-0" aria-hidden />
              {PRIMARY_PHONE_LABEL}
            </a>
            <HashLink
              href="/#book"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A287] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b89176] active:bg-[#a67b62]"
            >
              <LuCalendar className="size-4 shrink-0" aria-hidden />
              Записаться онлайн
            </HashLink>
          </div>
        </nav>
      </div>

      <button
        type="button"
        ref={closeBtnRef}
        className={clsx(
          "relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#675447]/25 bg-white/90 text-[#675447] shadow-sm transition hover:bg-white hover:border-[#675447]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#675447]/40",
          open && "border-[#675447]/40 shadow-md",
        )}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <LuX className="size-5" aria-hidden />
        ) : (
          <LuMenu className="size-5" aria-hidden />
        )}
      </button>
    </div>
  );
}
