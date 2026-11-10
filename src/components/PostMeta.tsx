import { CalendarDays, Clock, User } from "lucide-react";
import type { Post } from "../data/posts";

export default function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-cream/55">
      <span className="flex items-center gap-1.5">
        <CalendarDays size={13} className="text-gold/70" />
        <time dateTime={post.dateIso}>{post.dateFa}</time>
      </span>
      <span className="flex items-center gap-1.5">
        <User size={13} className="text-gold/70" />
        {post.author}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock size={13} className="text-gold/70" />
        مطالعه در {post.readingMinutes}
      </span>
    </div>
  );
}