import { useState } from "react";
import { BookOpen } from "lucide-react";
import type { Book } from "../data/books";
import { site } from "../data/site";

export default function BookCard({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);
  const showImage = book.cover !== null && !failed;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gold/10 bg-navy-800 transition-colors hover:border-gold/40">
      <div className="aspect-[2/3] w-full overflow-hidden bg-navy">
        {showImage ? (
          <img
            src={book.cover!}
            alt={`جلد کتاب ${book.title}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-8 border-double border-gold/40 bg-gradient-to-b from-navy-800 to-navy p-6 text-center">
            <BookOpen size={36} className="text-gold" />
            <span className="text-2xl font-extrabold text-gold">{book.title}</span>
            <span className="text-sm text-cream/70">{book.author}</span>
            <span className="text-[10px] tracking-[0.25em] text-gold/60">{site.latinName}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-extrabold text-cream">{book.title}</h3>
          <span className="shrink-0 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-[11px] text-gold">
            {book.category}
          </span>
        </div>
        <p className="text-sm text-cream/60">{book.author}</p>
        <p className="text-sm leading-7 text-cream/80">{book.description}</p>
        <p className="mt-auto pt-3 text-base font-extrabold text-gold">{book.price}</p>
      </div>
    </article>
  );
}