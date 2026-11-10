import { Link } from "react-router-dom";
import { ArrowLeft, Pin } from "lucide-react";
import type { Post } from "../data/posts";
import PostMeta from "./PostMeta";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-xl border border-gold/10 bg-navy-800 p-6 transition-colors hover:border-gold/35 sm:p-7">
      {post.pinned && (
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-[11px] text-gold">
          <Pin size={12} />
          یادداشت سنجاق‌شده
        </span>
      )}
      <h2 className="text-xl font-extrabold text-cream sm:text-2xl">
        <Link to={`/post/${post.slug}`} className="transition-colors hover:text-gold">
          {post.title}
        </Link>
      </h2>
      <div className="mt-3">
        <PostMeta post={post} />
      </div>
      <p className="mt-4 text-sm leading-8 text-cream/75">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-gold/20 bg-navy px-2.5 py-0.5 text-[11px] text-cream/60 transition-colors hover:border-gold/50 hover:text-gold"
            >
              {tag}
            </Link>
          ))}
        </div>
        <Link
          to={`/post/${post.slug}`}
          className="flex items-center gap-1.5 text-sm font-bold text-gold transition-colors hover:text-gold-300"
        >
          ادامه مطلب
          <ArrowLeft size={15} />
        </Link>
      </div>
    </article>
  );
}