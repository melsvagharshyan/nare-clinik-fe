"use client";

import type { AnchorHTMLAttributes } from "react";

export type HashLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
};

/** Якорные ссылки без «лишних» хэшей в адресе (избегаем /#x#x#x при разборе с Next.js Link). */
export function HashLink({ href, onClick, ...rest }: HashLinkProps) {
  const normalized =
    href.startsWith("/#") ? href : href.startsWith("#") ? `/${href}` : href;

  const isSingleHashPath =
    /^\/#[^#/]+$/.test(normalized) && normalized.length > 2;

  return (
    <a
      href={normalized}
      {...rest}
      onClick={(e) => {
        if (!isSingleHashPath) {
          onClick?.(e);
          return;
        }

        const id = normalized.slice(2);
        const target = document.getElementById(id);
        if (!target) {
          onClick?.(e);
          return;
        }

        e.preventDefault();
        window.history.replaceState(null, "", normalized);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (id === "main") {
          target.focus({ preventScroll: true });
        }
        onClick?.(e);
      }}
    />
  );
}
