export function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[92%] max-w-md gap-3 rounded-full bg-white/95 p-2 shadow-soft backdrop-blur sm:hidden">
      <a
        href="#contact"
        className="flex-1 rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white"
      >
        お問い合わせ
      </a>
      <a
        href="#recruit"
        className="flex-1 rounded-full border border-brand-200 bg-brand-50 px-4 py-3 text-center text-sm font-semibold text-brand-700"
      >
        採用情報
      </a>
    </div>
  );
}
