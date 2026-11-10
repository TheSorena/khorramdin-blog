import { AlertTriangle, ArrowUpLeft, Clock, Handshake, Instagram, Mail, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { contact } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("تماس با ما");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader title="تماس با ما" subtitle="از راه‌های زیر با ما در ارتباط باشید" />

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <a
          href={contact.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col gap-3 rounded-xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-info/40 hover:shadow-raised"
        >
          <ArrowUpLeft size={16} className="absolute left-5 top-5 text-faint transition-colors group-hover:text-info" />
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-info-soft text-info">
            <Send size={22} />
          </span>
          <span className="font-bold text-navy-900">تلگرام</span>
          <span dir="ltr" className="text-sm text-muted">{contact.telegram}</span>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col gap-3 rounded-xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-magenta/40 hover:shadow-raised"
        >
          <ArrowUpLeft size={16} className="absolute left-5 top-5 text-faint transition-colors group-hover:text-magenta" />
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-magenta/10 text-magenta">
            <Instagram size={22} />
          </span>
          <span className="font-bold text-navy-900">اینستاگرام</span>
          <span dir="ltr" className="text-sm text-muted">{contact.instagram}</span>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="group flex flex-col gap-3 rounded-xl border border-line bg-paper p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:shadow-raised"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-600">
            <Mail size={22} />
          </span>
          <span className="font-bold text-navy-900">ایمیل</span>
          <span dir="ltr" className="text-sm text-muted">{contact.email}</span>
        </a>

        <div className="flex flex-col gap-3 rounded-xl border border-line bg-paper p-6 shadow-card">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-soft text-success">
            <Clock size={22} />
          </span>
          <span className="font-bold text-navy-900">ساعات کاری</span>
          <span className="text-sm text-muted">{contact.workingHours}</span>
        </div>

        <div className="relative flex flex-col gap-3 overflow-hidden rounded-xl bg-gradient-to-l from-navy-800 to-navy-950 p-6 shadow-card sm:col-span-2">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative flex flex-col gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-400 ring-1 ring-gold-400/30">
              <Handshake size={22} />
            </span>
            <span className="font-bold text-paper">همکاری با خرمدین</span>
            <p className="text-sm leading-7 text-paper/70">{contact.collaboration}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl items-start gap-2.5 rounded-lg border border-warning/20 bg-warning-soft p-4 text-xs leading-6 text-warning">
        <AlertTriangle size={16} className="mt-0.5 shrink-0" />
        <p>اطلاعات تماس نمونه است و پیش از انتشار نهایی باید با اطلاعات واقعی جایگزین شود.</p>
      </div>
    </div>
  );
}