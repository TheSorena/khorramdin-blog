import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Archive, BookOpen, Clock, Mail, Search, Send, Tags } from "lucide-react";
import { allTags, archiveMonths, posts } from "../data/posts";
import { contact, site } from "../data/site";

function Box({ title, icon: Icon, children }: { title: string; icon: typeof Search; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-paper p-5 shadow-card">
      <h2 className="mb-4 flex items-center gap-2 border-b border-line-soft pb-3 text-sm font-bold text-navy-900">
        <span className="h-4 w-1 rounded-full bg-gold-500" />
        <Icon size={16} className="text-navy-700" />
        {title}
      </h2>
      {children}
    </section>
  );
}

const faNum = (n: number) => n.toLocaleString("fa-IR");

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <aside className="space-y-5">
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-b from-navy-800 to-navy-950 p-6 text-center shadow-card">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 ring-1 ring-gold-400/30">
            <BookOpen size={24} />
          </span>
          <p className="mt-3 text-lg font-bold text-paper">{site.name}</p>
          <p className="mt-1 text-[10px] tracking-[0.3em] text-gold-400">{site.latinName}</p>
          <p className="mt-3 text-xs leading-6 text-paper/60">{site.tagline}</p>
        </div>
      </section>

      <Box title="جستجو" icon={Search}>
        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            navigate(query.trim() ? `/posts?q=${encodeURIComponent(query.trim())}` : "/posts");
          }}
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جستجو در مطالب…"
            aria-label="جستجو در مطالب"
            className="min-w-0 flex-1 rounded-lg border border-line bg-paper-2 px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-gold-500 focus:bg-paper focus:outline-none"
          />
          <button
            type="submit"
            aria-label="جستجو"
            className="rounded-lg bg-navy-900 px-3 text-paper transition-colors hover:bg-navy-700"
          >
            <Search size={16} />
          </button>
        </form>
      </Box>

      <Box title="جدیدترین یادداشت‌ها" icon={Clock}>
        <ol className="divide-y divide-line-soft">
          {posts.map((post, i) => (
            <li key={post.slug} className="flex gap-3 py-3 first:pt-0 last:pb-0">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  i === 0 ? "bg-gold-400/20 text-gold-600" : "bg-paper-2 text-navy-700"
                }`}
              >
                {faNum(i + 1)}
              </span>
              <Link to={`/post/${post.slug}`} className="group min-w-0">
                <span className="block text-sm font-medium text-ink-soft transition-colors group-hover:text-gold-600">
                  {post.title}
                </span>
                <span className="mt-0.5 block text-[11px] text-faint">{post.dateFa}</span>
              </Link>
            </li>
          ))}
        </ol>
        <Link to="/posts" className="mt-4 flex items-center gap-1 text-xs font-bold text-navy-900 transition-colors hover:text-gold-600">
          همه عناوین
          <span aria-hidden>←</span>
        </Link>
      </Box>

      <Box title="ابر برچسب" icon={Tags}>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-line bg-paper-2 px-3 py-1 text-xs text-muted transition-colors hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-600"
            >
              {tag}
            </Link>
          ))}
        </div>
      </Box>

      <Box title="بایگانی" icon={Archive}>
        <ul className="space-y-2">
          {archiveMonths.map((entry) => (
            <li key={entry.month}>
              <Link
                to={`/posts?month=${encodeURIComponent(entry.month)}`}
                className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-ink-soft transition-colors hover:bg-paper-2 hover:text-gold-600"
              >
                {entry.month}
                <span className="rounded-full bg-navy-900/5 px-2 py-0.5 text-[11px] font-medium text-navy-700">
                  {faNum(entry.count)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box title="راه‌های ارتباطی" icon={Send}>
        <ul className="space-y-3 text-sm text-muted">
          <li className="flex items-center gap-2">
            <Send size={14} className="shrink-0 text-gold-600" />
            <span dir="ltr">{contact.telegram}</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} className="shrink-0 text-gold-600" />
            <a href={`mailto:${contact.email}`} dir="ltr" className="transition-colors hover:text-gold-600">
              {contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} className="shrink-0 text-gold-600" />
            <span className="text-xs">{contact.workingHours}</span>
          </li>
        </ul>
        <Link to="/contact" className="mt-4 flex items-center gap-1 text-xs font-bold text-navy-900 transition-colors hover:text-gold-600">
          صفحه تماس با ما
          <span aria-hidden>←</span>
        </Link>
      </Box>
    </aside>
  );
}