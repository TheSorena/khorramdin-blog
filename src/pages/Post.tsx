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
      <nav className="flex items-center gap-1.5 text-xs text-cream/50" aria-label="مسیر صفحه">
        <Link to="/" className="transition-colors hover:text-gold">خانه</Link>
        <ChevronLeft size={13} />
        <Link to="/posts" className="transition-colors hover:text-gold">عناوین مطالب</Link>
        <ChevronLeft size={13} />
        <span className="text-cream/80">{post.title}</span>
      </nav>

      <article className="rounded-xl border border-gold/10 bg-navy-800 p-6 sm:p-8">
        {post.pinned && (
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-[11px] text-gold">
            <Pin size={12} />
            یادداشت سنجاق‌شده
          </span>
        )}
        <h1 className="text-2xl font-black text-cream sm:text-3xl">{post.title}</h1>
        <div className="mt-4">
          <PostMeta post={post} />
        </div>
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {post.kind === "books" ? (
          <div className="space-y-5">
            <p className="text-sm leading-8 text-cream/80">
              کتاب‌های منتخب خرمدین را در ادامه ببینید؛ هر عنوان همراه با دسته‌بندی و معرفی کوتاه
              تا انتخابی آگاهانه و لذت‌بخش داشته باشید.
            </p>
            {books.map((book) => (
              <BookEntry key={book.id} book={book} />
            ))}
            <div className="flex items-start gap-3 rounded-xl border border-gold/25 bg-gold/5 p-5 text-sm leading-7 text-cream/80">
              <Info size={18} className="mt-1 shrink-0 text-gold" />
              <p>
                برای ثبت سفارش، مراحل یادداشت{" "}
                <Link to="/post/how-to-order" className="font-bold text-gold underline-offset-4 hover:underline">
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
                <li key={step} className="flex items-start gap-4 rounded-xl border border-gold/10 bg-navy p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-lg font-extrabold text-gold">
                    {numbers[i]}
                  </span>
                  <p className="pt-1.5 text-sm leading-8 text-cream/85">{step}</p>
                </li>
              ))}
            </ol>
            <p className="text-sm leading-8 text-cream/80">
              برای ثبت سفارش و دریافت اطلاعات بیشتر می‌توانید از طریق راه‌های ارتباطی مجموعه با ما
              در تماس باشید.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-extrabold text-navy transition-colors hover:bg-gold-300"
            >
              راه‌های ارتباطی
              <ArrowLeft size={15} />
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2 border-t border-gold/10 pt-6">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-gold/20 bg-navy px-3 py-1 text-xs text-cream/65 transition-colors hover:border-gold/50 hover:text-gold"
            >
              {tag}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-gold/10 bg-navy p-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <User size={18} />
          </span>
          <span>
            <span className="block text-sm font-extrabold text-cream">{post.author}</span>
            <span className="block text-xs text-cream/50">نویسنده وبلاگ خرمدین</span>
          </span>
        </div>
      </article>

      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            to={`/post/${prev.slug}`}
            className="group rounded-xl border border-gold/10 bg-navy-800 p-4 transition-colors hover:border-gold/35"
          >
            <span className="flex items-center gap-1.5 text-[11px] text-cream/50">
              <ArrowRight size={13} />
              مطلب پیشین
            </span>
            <span className="mt-1 block text-sm font-bold text-cream/85 transition-colors group-hover:text-gold">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={`/post/${next.slug}`}
            className="group rounded-xl border border-gold/10 bg-navy-800 p-4 text-left transition-colors hover:border-gold/35"
          >
            <span className="flex items-center justify-end gap-1.5 text-[11px] text-cream/50">
              مطلب بعدی
              <ArrowLeft size={13} />
            </span>
            <span className="mt-1 block text-sm font-bold text-cream/85 transition-colors group-hover:text-gold">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </BlogLayout>
  );
}