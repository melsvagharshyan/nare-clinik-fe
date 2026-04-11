import Link from "next/link";
import { services } from "./content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-dental-paper/50 py-16 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="font-reviews-serif text-2xl font-medium tracking-tight text-[#675447] sm:text-3xl"
        >
          Всё для вашей улыбки
        </h2>
        <p className="mt-3 max-w-2xl text-[#1e1e1e]/70">
          Полный спектр решений в одном месте — план лечения остаётся простым и
          последовательным.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="glass-card group rounded-2xl border border-white/60 bg-white/50 p-8 shadow-[0_6px_28px_-10px_rgba(30,30,30,0.08)] ring-1 ring-white/35 transition hover:border-dental-cta/40 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-[#675447] transition group-hover:opacity-90">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1e1e1e]/70">
                {s.blurb}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="#visit"
            className="inline-flex font-semibold text-[#675447] underline-offset-4 hover:underline hover:opacity-90"
          >
            Все услуги
          </Link>
        </p>
      </div>
    </section>
  );
}
