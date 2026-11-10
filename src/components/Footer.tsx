import { Link } from "react-router-dom";
import { BookOpen, Clock, Mail, Send } from "lucide-react";
import { contact, navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-800/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-navy text-gold">
              <BookOpen size={20} />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-cream">{site.name}</span>
              <span className="block text-[10px] tracking-[0.3em] text-gold">{site.latinName}</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-cream/60">
            {site.tagline}؛ معرفی و عرضه کتاب‌های ارزشمند در ادبیات، تاریخ، روان‌شناسی و توسعه فردی.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-gold">دسترسی سریع</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-gold">ارتباط با ما</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/70">
            <li className="flex items-center gap-2">
              <Send size={15} className="shrink-0 text-gold/70" />
              <span dir="ltr">{contact.telegram}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-gold/70" />
              <a href={`mailto:${contact.email}`} dir="ltr" className="transition-colors hover:text-gold">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={15} className="shrink-0 text-gold/70" />
              <span>{contact.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:px-6">
          <p>© ۱۴۰۵ {site.name} — تمامی حقوق محفوظ است.</p>
          <p className="tracking-[0.25em]">{site.latinName}</p>
        </div>
      </div>
    </footer>
  );
}