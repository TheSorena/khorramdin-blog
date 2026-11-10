import { Quote } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";

const paragraphs = [
  "خرمدین با هدف معرفی، ترجمه و عرضه کتاب‌های ارزشمند از سراسر جهان فعالیت می‌کند.",
  "ما تلاش می‌کنیم آثار برجسته و خواندنی در زمینه‌های ادبیات، تاریخ، روان‌شناسی و توسعه فردی را به علاقه‌مندان کتاب معرفی کنیم.",
  "در خرمدین باور داریم هر کتاب می‌تواند دریچه‌ای تازه به دنیای دانش، اندیشه و تجربه باشد.",
  "هدف ما فراهم کردن تجربه‌ای لذت‌بخش از کشف و مطالعه کتاب‌های ارزشمند است.",
];

export default function About() {
  usePageTitle("درباره ما");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader title="درباره خرمدین" subtitle="معرفی، ترجمه و عرضه کتاب‌های ارزشمند" />
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-line bg-paper p-8 shadow-card sm:p-10">
        <Quote size={64} className="absolute -left-2 -top-2 text-gold-400/10" aria-hidden />
        <div className="relative space-y-6 text-[15px] leading-9 text-ink-soft">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-t border-line-soft pt-6 text-center text-lg font-bold text-navy-900">
            خرمدین؛ <span className="text-gold-600">دریچه‌ای به دنیای کتاب و اندیشه.</span>
          </p>
        </div>
      </div>
    </div>
  );
}