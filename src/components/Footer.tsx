import { Link } from "react-router-dom";
import { Clock, Mail, Send } from "lucide-react";
import { contact, navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-paper/70">
      <div className="h-px bg-gradient-to-l from-transparent via-gold-500 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <img src="/images/logo-light.png" alt={`${site.name} | ${site.latinName}`} className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-7 text-paper/55">
            {site.tagline}؛ معرفی و عرضه کتاب‌های ارزشمند در ادبیات، تاریخ، روان‌شناسی و توسعه فردی.
          </p>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold text-gold-400">
            <span className="h-4 w-1 rounded-full bg-gold-500" />
            دسترسی سریع
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-paper/65 transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold text-gold-400">
            <span className="h-4 w-1 rounded-full bg-gold-500" />
            ارتباط با ما
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-paper/65">
            <li className="flex items-center gap-2">
              <Send size={15} className="shrink-0 text-gold-400/80" />
              <span dir="ltr">{contact.telegram}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-gold-400/80" />
              <a href={`mailto:${contact.email}`} dir="ltr" className="transition-colors hover:text-gold-300">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={15} className="shrink-0 text-gold-400/80" />
              <span>{contact.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-paper/45 sm:flex-row sm:px-6">
          <p>© ۱۴۰۵ {site.name} — تمامی حقوق محفوظ است.</p>
          <p className="tracking-[0.25em]">{site.latinName}</p>
        </div>
      </div>
    </footer>
  );
}