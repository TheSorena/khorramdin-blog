import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Menu, Search, X } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-md px-3 py-2 text-sm transition-colors ${
      isActive
        ? "font-bold text-navy-900 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold-500"
        : "font-medium text-muted hover:bg-paper-2 hover:text-navy-900"
    }`;

  const mobileClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg border-r-2 px-4 py-3 text-sm transition-colors ${
      isActive
        ? "border-gold-500 bg-paper-2 font-bold text-navy-900"
        : "border-transparent font-medium text-muted hover:bg-paper-2 hover:text-navy-900"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : "border-b border-line-soft"
      }`}
    >
      <div className="h-[3px] bg-gradient-to-l from-navy-900 via-gold-500 to-navy-900" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-card">
            <BookOpen size={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-navy-900">{site.name}</span>
            <span className="block text-[10px] tracking-[0.3em] text-faint">{site.latinName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={desktopClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            to="/posts"
            aria-label="جستجو در مطالب"
            className="rounded-full p-2.5 text-muted transition-colors hover:bg-paper-2 hover:text-navy-900"
          >
            <Search size={19} />
          </Link>
          <button
            type="button"
            className="rounded-lg p-2.5 text-navy-900 transition-colors hover:bg-paper-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-line-soft bg-paper px-4 pb-4 pt-3 md:hidden" aria-label="ناوبری موبایل">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)} className={mobileClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}