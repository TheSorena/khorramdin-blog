import { Link } from "react-router-dom";
import { ArrowLeft, Pin } from "lucide-react";
import type { Post } from "../data/posts";
import PostMeta from "./PostMeta";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:shadow-raised">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-gold-500 to-gold-300 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="p-6 sm:p-7">
        {post.pinned && (
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-2.5 py-1 text-[11px] font-medium text-gold-600">
            <Pin size={12} />
            یادداشت سنجاق‌شده
          </span>
        )}
        <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
          <Link to={`/post/${post.slug}`} className="transition-colors hover:text-gold-600">
            {post.title}
          </Link>
        </h2>
        <div className="mt-3">
          <PostMeta post={post} />
        </div>
        <p className="mt-4 text-sm leading-8 text-muted">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/posts?tag=${encodeURIComponent(tag)}`}
                className="rounded-full border border-line bg-paper-2 px-2.5 py-0.5 text-[11px] text-muted transition-colors hover:border-gold-400 hover:text-gold-600"
              >
                {tag}
              </Link>
            ))}
          </div>
          <Link
            to={`/post/${post.slug}`}
            className="flex items-center gap-1.5 text-sm font-bold text-navy-900 transition-colors group-hover:text-gold-600"
          >
            ادامه مطلب
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}