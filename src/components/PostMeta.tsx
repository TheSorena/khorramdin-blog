import { CalendarDays, Clock, User } from "lucide-react";
import type { Post } from "../data/posts";

export default function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
      <span className="flex items-center gap-1.5">
        <CalendarDays size={14} className="text-gold-600" />
        <time dateTime={post.dateIso}>{post.dateFa}</time>
      </span>
      <span className="hidden h-3 w-px bg-line sm:block" />
      <span className="flex items-center gap-1.5">
        <User size={14} className="text-gold-600" />
        {post.author}
      </span>
      <span className="hidden h-3 w-px bg-line sm:block" />
      <span className="flex items-center gap-1.5">
        <Clock size={14} className="text-gold-600" />
        مطالعه در {post.readingMinutes}
      </span>
    </div>
  );
}