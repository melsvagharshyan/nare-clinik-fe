import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 bg-dental-cream px-4 py-24 text-center text-[#1e1e1e]">
      <h1 className="text-2xl font-semibold text-[#675447] sm:text-3xl">
        Страница не найдена
      </h1>
      <p className="max-w-md text-sm text-[#1e1e1e]/70">
        Запрашиваемая страница отсутствует или ссылка устарела.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#C9A287] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b89176]"
      >
        На главную
      </Link>
    </div>
  );
}
