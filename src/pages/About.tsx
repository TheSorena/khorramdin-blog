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
      <div className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-gold/10 bg-navy-800 p-8 leading-8 text-cream/85 sm:p-10">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="border-t border-gold/15 pt-6 text-center text-lg font-extrabold text-gold">
          خرمدین؛ دریچه‌ای به دنیای کتاب و اندیشه.
        </p>
      </div>
    </div>
  );
}