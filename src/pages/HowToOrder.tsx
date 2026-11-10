import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { usePageTitle } from "../hooks/usePageTitle";

const steps = [
  "انتخاب کتاب از بخش محصولات.",
  "ارسال نام کتاب و تعداد نسخه موردنظر از طریق راه‌های ارتباطی.",
  "دریافت تأیید موجودی و قیمت نهایی.",
  "هماهنگی پرداخت و ارسال سفارش.",
];

const numbers = ["۱", "۲", "۳", "۴"];

export default function HowToOrder() {
  usePageTitle("نحوه سفارش");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader title="نحوه سفارش" subtitle="ثبت سفارش در چهار گام ساده" />
      <ol className="mx-auto max-w-2xl space-y-4">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-start gap-4 rounded-xl border border-gold/10 bg-navy-800 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-lg font-extrabold text-gold">
              {numbers[index]}
            </span>
            <p className="pt-1.5 leading-8 text-cream/85">{step}</p>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-8 max-w-2xl">
        <div className="flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-cream/80">
          <Info size={18} className="mt-1 shrink-0 text-gold" />
          <p>
            این صفحه صرفاً اطلاع‌رسانی است؛ سایت سبد خرید و پرداخت آنلاین ندارد و ثبت سفارش از
            طریق راه‌های ارتباطی انجام می‌شود.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-lg bg-gold px-6 py-3 text-sm font-extrabold text-navy transition-colors hover:bg-gold-300"
          >
            راه‌های ارتباطی
          </Link>
          <Link
            to="/products"
            className="rounded-lg border border-gold/40 px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
    </div>
  );
}