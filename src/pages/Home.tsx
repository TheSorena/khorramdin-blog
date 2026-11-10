import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Library, Mail, ShoppingBag } from "lucide-react";
import BookCard from "../components/BookCard";
import { books } from "../data/books";
import { site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

const sections = [
  { to: "/products", icon: BookOpen, title: "محصولات", text: "کتاب‌های منتخب خرمدین" },
  { to: "/about", icon: Library, title: "درباره ما", text: "داستان و هدف خرمدین" },
  { to: "/how-to-order", icon: ShoppingBag, title: "نحوه سفارش", text: "چهار گام تا دریافت کتاب" },
  { to: "/contact", icon: Mail, title: "تماس با ما", text: "راه‌های ارتباطی و همکاری" },
];

export default function Home() {
  usePageTitle();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <img
          src="/images/banner.jpg"
          alt="بنر خرمدین — دریچه‌ای به دنیای کتاب و اندیشه"
          className="h-44 w-full rounded-2xl border border-gold/20 object-cover sm:h-auto"
        />

        <div className="mx-auto max-w-2xl py-12 text-center sm:py-16">
          <p className="text-sm font-bold text-gold">به {site.name} خوش آمدید</p>
          <h1 className="mt-4 text-2xl font-black leading-relaxed text-cream sm:text-3xl">
            {site.tagline}
          </h1>
          <p className="mt-5 leading-8 text-cream/70">
            خرمدین وبلاگی ساده برای دوست‌داران کتاب است؛ اینجا آثار خواندنی در ادبیات، تاریخ،
            روان‌شناسی و توسعه فردی را معرفی می‌کنیم و شما را به کشف و مطالعه کتاب‌های ارزشمند
            دعوت می‌کنیم.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="rounded-lg bg-gold px-6 py-3 text-sm font-extrabold text-navy transition-colors hover:bg-gold-300"
            >
              مشاهده محصولات
            </Link>
            <Link
              to="/how-to-order"
              className="rounded-lg border border-gold/40 px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
            >
              نحوه سفارش
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="flex items-center gap-3 text-xl font-extrabold text-cream">
            <span className="h-6 w-1 rounded bg-gold" />
            کتاب‌های منتخب
          </h2>
          <Link to="/products" className="flex items-center gap-1 text-sm text-gold transition-colors hover:text-gold-300">
            همه محصولات
            <ArrowLeft size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="border-t border-gold/10 bg-navy-800/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="mb-8 flex items-center gap-3 text-xl font-extrabold text-cream">
            <span className="h-6 w-1 rounded bg-gold" />
            بخش‌های سایت
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section) => (
              <Link
                key={section.to}
                to={section.to}
                className="group flex flex-col gap-3 rounded-xl border border-gold/10 bg-navy-800 p-5 transition-colors hover:border-gold/40"
              >
                <section.icon size={24} className="text-gold" />
                <span className="font-extrabold text-cream">{section.title}</span>
                <span className="text-sm text-cream/60">{section.text}</span>
                <ArrowLeft size={18} className="mt-auto text-gold/50 transition-colors group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}