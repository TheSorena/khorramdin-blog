import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-navy-800 text-gold">
            <BookOpen size={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-cream">{site.name}</span>
            <span className="block text-[10px] tracking-[0.3em] text-gold">{site.latinName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="ناوبری اصلی">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-gold/10 font-bold text-gold"
                    : "text-cream/80 hover:bg-navy-800 hover:text-gold"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-gold/25 p-2 text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/10 bg-navy px-4 pb-4 pt-2 md:hidden" aria-label="ناوبری موبایل">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2.5 text-sm transition-colors ${
                  isActive ? "bg-gold/10 font-bold text-gold" : "text-cream/80 hover:bg-navy-800 hover:text-gold"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}