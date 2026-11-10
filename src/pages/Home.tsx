import { Link } from "react-router-dom";
import { ArrowLeft, BookMarked, CalendarDays, FileText } from "lucide-react";
import BlogLayout from "../components/BlogLayout";
import PostCard from "../components/PostCard";
import { books } from "../data/books";
import { posts } from "../data/posts";
import { site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

const faNum = (n: number) => n.toLocaleString("fa-IR");

export default function Home() {
  usePageTitle();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <img
          src="/images/banner.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-950 via-navy-900/92 to-navy-800/70" />
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            وبلاگ رسمی خرمدین
          </span>
          <h1
            className="mt-5 animate-fade-up text-3xl font-bold leading-tight text-paper sm:text-4xl lg:text-[2.75rem]"
            style={{ animationDelay: "60ms" }}
          >
            {site.blogTitle}
          </h1>
          <p className="mt-3 animate-fade-up text-lg font-medium text-gold-400" style={{ animationDelay: "120ms" }}>
            {site.tagline}
          </p>
          <p className="mt-4 max-w-2xl animate-fade-up text-sm leading-8 text-paper/70" style={{ animationDelay: "180ms" }}>
            {site.welcome}
          </p>
          <div className="mt-7 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Link
              to="/post/products"
              className="flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-raised transition-colors hover:bg-gold-300"
            >
              مشاهده محصولات
              <ArrowLeft size={16} />
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-paper/25 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
            >
              درباره خرمدین
            </Link>
          </div>
          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 text-xs text-paper/55"
            style={{ animationDelay: "300ms" }}
          >
            <span className="flex items-center gap-1.5">
              <BookMarked size={14} className="text-gold-400/80" />
              {faNum(books.length)} کتاب منتخب
            </span>
            <span className="flex items-center gap-1.5">
              <FileText size={14} className="text-gold-400/80" />
              {faNum(posts.length)} یادداشت
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} className="text-gold-400/80" />
              به‌روزرسانی آبان ۱۴۰۵
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <h2 className="flex items-center gap-2 text-lg font-bold text-navy-900">
            <span className="h-5 w-1 rounded-full bg-gold-500" />
            تازه‌ترین یادداشت‌ها
          </h2>
          <Link to="/posts" className="flex items-center gap-1 text-xs font-bold text-muted transition-colors hover:text-gold-600">
            مشاهده همه
            <ArrowLeft size={14} />
          </Link>
        </div>
      </div>

      <BlogLayout>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </BlogLayout>
    </>
  );
}