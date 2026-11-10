import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import BookCard from "../components/BookCard";
import PageHeader from "../components/PageHeader";
import { books } from "../data/books";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Products() {
  usePageTitle("محصولات");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader title="محصولات" subtitle="کتاب‌های منتخب خرمدین؛ برای دوست‌داران کتاب و اندیشه" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="mt-10 flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-cream/80">
        <Info size={18} className="mt-1 shrink-0 text-gold" />
        <p>
          برای ثبت سفارش، نام کتاب و تعداد نسخه را از طریق راه‌های ارتباطی ارسال کنید؛ جزئیات در
          صفحه{" "}
          <Link to="/how-to-order" className="font-bold text-gold underline-offset-4 hover:underline">
            نحوه سفارش
          </Link>{" "}
          آمده است.
        </p>
      </div>
    </div>
  );
}