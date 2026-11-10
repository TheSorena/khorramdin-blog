import { useState } from "react";
import { BookOpen } from "lucide-react";
import type { Book } from "../data/books";
import { site } from "../data/site";

export default function BookEntry({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);
  const showImage = book.cover !== null && !failed;

  return (
    <article className="flex flex-col gap-5 rounded-xl border border-gold/10 bg-navy p-5 sm:flex-row sm:p-6">
      <div className="mx-auto aspect-[2/3] w-36 shrink-0 overflow-hidden rounded-lg border border-gold/20 bg-navy-800 sm:mx-0">
        {showImage ? (
          <img
            src={book.cover!}
            alt={`جلد کتاب ${book.title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-4 border-double border-gold/40 bg-gradient-to-b from-navy-800 to-navy p-3 text-center">
            <BookOpen size={22} className="text-gold" />
            <span className="text-sm font-extrabold text-gold">{book.title}</span>
            <span className="text-[9px] tracking-[0.2em] text-gold/60">{site.latinName}</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-extrabold text-cream">{book.title}</h3>
          <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-[11px] text-gold">
            {book.category}
          </span>
        </div>
        <p className="mt-1 text-sm text-cream/60">{book.author}</p>
        <p className="mt-3 text-sm leading-8 text-cream/80">{book.description}</p>
      </div>
    </article>
  );
}