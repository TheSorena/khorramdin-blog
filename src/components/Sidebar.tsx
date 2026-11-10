import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Archive, Clock, Mail, Search, Send, Tags } from "lucide-react";
import { allTags, archiveMonths, posts } from "../data/posts";
import { contact, site } from "../data/site";

function Box({ title, icon: Icon, children }: { title: string; icon: typeof Search; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-gold/10 bg-navy-800 p-5">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-extrabold text-gold">
        <Icon size={15} />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <aside className="space-y-5">
      <section className="rounded-xl border border-gold/20 bg-gradient-to-b from-navy-800 to-navy p-5 text-center">
        <p className="text-lg font-extrabold text-cream">{site.name}</p>
        <p className="mt-1 text-[10px] tracking-[0.3em] text-gold">{site.latinName}</p>
        <p className="mt-3 text-xs leading-6 text-cream/65">{site.tagline}</p>
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
            className="min-w-0 flex-1 rounded-lg border border-gold/20 bg-navy px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-gold/60 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="جستجو"
            className="rounded-lg bg-gold px-3 text-navy transition-colors hover:bg-gold-300"
          >
            <Search size={16} />
          </button>
        </form>
      </Box>

      <Box title="جدیدترین یادداشت‌ها" icon={Clock}>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/post/${post.slug}`} className="group block">
                <span className="block text-sm font-bold text-cream/85 transition-colors group-hover:text-gold">
                  {post.title}
                </span>
                <span className="mt-0.5 block text-[11px] text-cream/45">{post.dateFa}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/posts" className="mt-4 block text-xs font-bold text-gold transition-colors hover:text-gold-300">
          همه عناوین ←
        </Link>
      </Box>

      <Box title="ابر برچسب" icon={Tags}>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-gold/20 bg-navy px-3 py-1 text-xs text-cream/70 transition-colors hover:border-gold/50 hover:text-gold"
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
                className="flex items-center justify-between text-sm text-cream/75 transition-colors hover:text-gold"
              >
                {entry.month}
                <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[11px] text-gold">{entry.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Box>

      <Box title="راه‌های ارتباطی" icon={Send}>
        <ul className="space-y-3 text-sm text-cream/70">
          <li className="flex items-center gap-2">
            <Send size={14} className="shrink-0 text-gold/70" />
            <span dir="ltr">{contact.telegram}</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} className="shrink-0 text-gold/70" />
            <a href={`mailto:${contact.email}`} dir="ltr" className="transition-colors hover:text-gold">
              {contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Clock size={14} className="shrink-0 text-gold/70" />
            <span className="text-xs">{contact.workingHours}</span>
          </li>
        </ul>
        <Link to="/contact" className="mt-4 block text-xs font-bold text-gold transition-colors hover:text-gold-300">
          صفحه تماس با ما ←
        </Link>
      </Box>
    </aside>
  );
}