"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "slick-carousel/slick/slick.css";

const ACCENT = "#c5a48a";

const items = [
  {
    quote:
      "Не думала, что у стоматолога может быть так спокойно. Зубы чувствуют себя отлично.",
    name: "Мария К.",
  },
  {
    quote:
      "С порога чувствовала себя спокойно. На каждом шаге всё объяснили понятно.",
    name: "Анна Л.",
  },
  {
    quote:
      "Лучший опыт у стоматолога — доброжелательно, внимательно и очень аккуратно.",
    name: "Елена В.",
  },
  {
    quote:
      "Атмосфера как в студии: уютно, чисто, без ощущения «больницы».",
    name: "Ольга С.",
  },
  {
    quote:
      "Запись онлайн сработала идеально, на приёме всё по времени и без суеты.",
    name: "Дмитрий П.",
  },
  {
    quote:
      "Делали чистку и осмотр — мягко, без боли, с рекомендациями на будущее.",
    name: "Ирина М.",
  },
];

function testimonialDotButton(i: number) {
  return (
    <button type="button" aria-label={`Перейти к отзыву ${i + 1}`} />
  );
}

export function TestimonialsSlider() {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    customPaging: testimonialDotButton,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          customPaging: testimonialDotButton,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          customPaging: testimonialDotButton,
        },
      },
    ],
  };

  return (
    <section
      className="testimonials-slick-root border-y border-dental-line/40 bg-[#faf6f3] py-16 sm:py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <h2
              id="reviews-heading"
              className="font-reviews-serif text-3xl font-medium leading-tight tracking-tight text-[#675447] sm:text-4xl lg:text-[2.75rem]"
            >
              История, рассказанная улыбками
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#1e1e1e]/70 sm:text-base">
              Более 400 отзывов с пятью звёздами в Google!
            </p>
          </div>
          <div className="flex shrink-0 gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="flex size-11 items-center justify-center rounded-full border-2 transition hover:bg-white/80"
              style={{ borderColor: ACCENT, color: ACCENT }}
              aria-label="Предыдущий отзыв"
            >
              <LuChevronLeft className="size-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="flex size-11 items-center justify-center rounded-full border-2 transition hover:bg-white/80"
              style={{ borderColor: ACCENT, color: ACCENT }}
              aria-label="Следующий отзыв"
            >
              <LuChevronRight className="size-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {items.map((t, i) => (
            <div key={i} className="px-2 sm:px-3">
              <article
                className="flex min-h-[240px] flex-col rounded-[28px] border bg-white p-7 sm:min-h-[260px] sm:p-8"
                style={{ borderColor: `${ACCENT}55` }}
              >
                <span
                  className="font-reviews-serif select-none text-[3.25rem] leading-[0.85] sm:text-[3.5rem]"
                  style={{ color: ACCENT }}
                  aria-hidden
                >
                  “
                </span>
                <p className="mt-1 flex-1 text-[15px] leading-relaxed text-[#1e1e1e] sm:text-base">
                  {t.quote}
                </p>
                <p className="testimonial-author-name mt-6 text-lg text-[#675447] sm:text-xl">
                  {t.name}
                </p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
