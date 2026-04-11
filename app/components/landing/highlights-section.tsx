import { highlights } from "./content";

export function HighlightsSection() {
  return (
    <section
      id="about"
      className="border-b border-dental-line/60 bg-dental-cream py-16 sm:py-20"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="highlights-heading"
          className="text-center text-2xl font-semibold text-[#675447] sm:text-3xl"
        >
          Где забота о зубах становится удовольствием
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#1e1e1e]/70">
          Продуманные детали делают визит понятным, прозрачным и расслабленным.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-dental-line bg-white/70 p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#675447]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1e1e1e]/70">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
