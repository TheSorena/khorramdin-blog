import { Link, useSearchParams } from "react-router-dom";
import { SearchX } from "lucide-react";
import BlogLayout from "../components/BlogLayout";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import { usePageTitle } from "../hooks/usePageTitle";

const toFa = (n: number) => n.toLocaleString("fa-IR");

export default function Archive() {
  const [params] = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const tag = params.get("tag") ?? "";
  const month = params.get("month") ?? "";
  usePageTitle("عناوین مطالب");

  const filtered = posts.filter((post) => {
    const matchesQuery =
      !query ||
      post.title.includes(query) ||
      post.excerpt.includes(query) ||
      post.tags.some((t) => t.includes(query));
    const matchesTag = !tag || post.tags.includes(tag);
    const matchesMonth = !month || post.monthFa === month;
    return matchesQuery && matchesTag && matchesMonth;
  });

  const heading = query ? `جستجو برای «${query}»` : tag ? `برچسب: ${tag}` : month ? `بایگانی ${month}` : "عناوین مطالب";

  return (
    <BlogLayout>
      <div className="rounded-xl border border-gold/10 bg-navy-800 p-6">
        <h1 className="text-2xl font-black text-cream">{heading}</h1>
        <p className="mt-2 text-xs text-cream/55">{toFa(filtered.length)} مطلب</p>
        {(query || tag || month) && (
          <Link to="/posts" className="mt-3 inline-block text-xs font-bold text-gold transition-colors hover:text-gold-300">
            پاک کردن فیلترها ←
          </Link>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-gold/10 bg-navy-800 p-10 text-center">
          <SearchX size={32} className="text-gold/60" />
          <p className="text-sm text-cream/70">مطلبی مطابق جستجوی شما یافت نشد.</p>
        </div>
      ) : (
        filtered.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </BlogLayout>
  );
}