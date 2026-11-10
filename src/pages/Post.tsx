import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, Info, Pin, User } from "lucide-react";
import BlogLayout from "../components/BlogLayout";
import BookEntry from "../components/BookEntry";
import PostMeta from "../components/PostMeta";
import { books } from "../data/books";
import { posts } from "../data/posts";
import { usePageTitle } from "../hooks/usePageTitle";

const steps = [
  "انتخاب کتاب از بخش محصولات.",
  "ارسال نام کتاب و تعداد نسخه موردنظر از طریق راه‌های ارتباطی.",
  "دریافت تأیید موجودی و قیمت نهایی.",
  "هماهنگی پرداخت و ارسال سفارش.",
];

const numbers = ["۱", "۲", "۳", "۴"];

export default function Post() {
  const { slug } = useParams();
  const index = posts.findIndex((post) => post.slug === slug);
  const post = posts[index];
  usePageTitle(post?.title);

  if (!post) return <Navigate to="/posts" replace />;

  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <BlogLayout>
      <nav className="flex items-center gap-1.5 text-xs text-faint" aria-label="مسیر صفحه">
        <Link to="/" className="transition-colors hover:text-gold-600">خانه</Link>
        <ChevronLeft size={13} />
        <Link to="/posts" className="transition-colors hover:text-gold-600">عناوین مطالب</Link>
        <ChevronLeft size={13} />
        <span className="text-muted">{post.title}</span>
      </nav>

      <article className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-8">
        {post.pinned && (
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-2.5 py-1 text-[11px] font-medium text-gold-600">
            <Pin size={12} />
            یادداشت سنجاق‌شده
          </span>
        )}
        <h1 className="text-2xl font-bold text-navy-900 sm:text-3xl">{post.title}</h1>
        <div className="mt-4">
          <PostMeta post={post} />
        </div>
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

        {post.kind === "books" ? (
          <div className="space-y-5">
            <p className="text-sm leading-8 text-ink-soft">
              کتاب‌های منتخب خرمدین را در ادامه ببینید؛ هر عنوان همراه با دسته‌بندی و معرفی کوتاه
              تا انتخابی آگاهانه و لذت‌بخش داشته باشید.
            </p>
            {books.map((book) => (
              <BookEntry key={book.id} book={book} />
            ))}
            <div className="flex items-start gap-3 rounded-xl border border-info/20 bg-info-soft p-5 text-sm leading-7 text-ink-soft">
              <Info size={18} className="mt-1 shrink-0 text-info" />
              <p>
                برای ثبت سفارش، مراحل یادداشت{" "}
                <Link to="/post/how-to-order" className="font-bold text-info underline-offset-4 hover:underline">
                  نحوه سفارش
                </Link>{" "}
                را دنبال کنید.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-xl border border-line bg-paper-2 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-gold-400 shadow-card">
                    {numbers[i]}
                  </span>
                  <p className="pt-1.5 text-sm leading-8 text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-8 text-ink-soft">
              برای ثبت سفارش و دریافت اطلاعات بیشتر می‌توانید از طریق راه‌های ارتباطی مجموعه با ما
              در تماس باشید.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-bold text-paper shadow-card transition-colors hover:bg-navy-700"
            >
              راه‌های ارتباطی
              <ArrowLeft size={15} />
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2 border-t border-line-soft pt-6">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-line bg-paper-2 px-3 py-1 text-xs text-muted transition-colors hover:border-gold-400 hover:text-gold-600"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-line bg-paper-2 p-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-gold-400">
            <User size={18} />
          </span>
          <span>
            <span className="block text-sm font-bold text-navy-900">{post.author}</span>
            <span className="block text-xs text-faint">نویسنده وبلاگ خرمدین</span>
          </span>
        </div>
      </article>

      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            to={`/post/${prev.slug}`}
            className="group rounded-xl border border-line bg-paper p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:shadow-raised"
          >
            <span className="flex items-center gap-1.5 text-[11px] text-faint">
              <ArrowRight size={13} />
              مطلب پیشین
            </span>
            <span className="mt-1 block text-sm font-bold text-ink-soft transition-colors group-hover:text-gold-600">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={`/post/${next.slug}`}
            className="group rounded-xl border border-line bg-paper p-4 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:shadow-raised"
          >
            <span className="flex items-center justify-end gap-1.5 text-[11px] text-faint">
              مطلب بعدی
              <ArrowLeft size={13} />
            </span>
            <span className="mt-1 block text-sm font-bold text-ink-soft transition-colors group-hover:text-gold-600">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </BlogLayout>
  );
}