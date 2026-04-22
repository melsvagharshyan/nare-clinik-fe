import { LuPhone } from "react-icons/lu";
import { PRIMARY_PHONE_LABEL, PRIMARY_PHONE_TEL } from "./content";

export function FloatingCallButton() {
  return (
    <a
      href={PRIMARY_PHONE_TEL}
      aria-label={`Позвонить: ${PRIMARY_PHONE_LABEL}`}
      className="floating-call-button fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-dental-gold text-white shadow-[0_14px_34px_-14px_rgba(26,35,31,0.6)] transition-transform hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-dental-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dental-cream active:scale-[0.97] sm:right-6 sm:bottom-6"
    >
      <LuPhone className="size-6 shrink-0" aria-hidden />
    </a>
  );
}
