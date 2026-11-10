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
      <div className="rounded-xl border border-line bg-paper p-6 shadow-card">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-navy-900">
          <span className="h-6 w-1 rounded-full bg-gold-500" />
          {heading}
        </h1>
        <p className="mt-2 pr-3 text-xs text-muted">{toFa(filtered.length)} مطلب</p>
        {(query || tag || month) && (
          <Link to="/posts" className="mt-3 inline-block pr-3 text-xs font-bold text-gold-600 transition-colors hover:text-navy-900">
            پاک کردن فیلترها ←
          </Link>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-line bg-paper p-10 text-center shadow-card">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper-2 text-faint">
            <SearchX size={28} />
          </span>
          <p className="text-sm text-muted">مطلبی مطابق جستجوی شما یافت نشد.</p>
        </div>
      ) : (
        filtered.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </BlogLayout>
  );
}