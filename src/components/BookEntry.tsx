import { useState } from "react";
import { BookOpen } from "lucide-react";
import type { Book } from "../data/books";
import { site } from "../data/site";

export default function BookEntry({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);
  const showImage = book.cover !== null && !failed;

  return (
    <article className="flex flex-col gap-5 rounded-xl border border-line bg-paper-2 p-5 transition-colors hover:border-gold-400/50 sm:flex-row sm:p-6">
      <div className="mx-auto aspect-[2/3] w-36 shrink-0 overflow-hidden rounded-lg shadow-raised ring-1 ring-line sm:mx-0">
        {showImage ? (
          <img
            src={book.cover!}
            alt={`جلد کتاب ${book.title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-4 border-double border-gold-400/50 bg-gradient-to-b from-navy-800 to-navy-950 p-3 text-center">
            <BookOpen size={22} className="text-gold-400" />
            <span className="text-sm font-bold text-gold-300">{book.title}</span>
            <span className="text-[9px] tracking-[0.2em] text-gold-400/60">{site.latinName}</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-navy-900">{book.title}</h3>
          <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-[11px] font-medium text-gold-600">
            {book.category}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">{book.author}</p>
        <p className="mt-3 text-sm leading-8 text-ink-soft">{book.description}</p>
      </div>
    </article>
  );
}