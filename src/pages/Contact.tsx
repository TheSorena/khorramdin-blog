import { Clock, Handshake, Instagram, Mail, Send } from "lucide-react";
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
          className="flex flex-col gap-3 rounded-xl border border-gold/10 bg-navy-800 p-6 transition-colors hover:border-gold/40"
        >
          <Send size={24} className="text-gold" />
          <span className="font-extrabold text-cream">تلگرام</span>
          <span dir="ltr" className="text-sm text-cream/60">{contact.telegram}</span>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-3 rounded-xl border border-gold/10 bg-navy-800 p-6 transition-colors hover:border-gold/40"
        >
          <Instagram size={24} className="text-gold" />
          <span className="font-extrabold text-cream">اینستاگرام</span>
          <span dir="ltr" className="text-sm text-cream/60">{contact.instagram}</span>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="flex flex-col gap-3 rounded-xl border border-gold/10 bg-navy-800 p-6 transition-colors hover:border-gold/40"
        >
          <Mail size={24} className="text-gold" />
          <span className="font-extrabold text-cream">ایمیل</span>
          <span dir="ltr" className="text-sm text-cream/60">{contact.email}</span>
        </a>

        <div className="flex flex-col gap-3 rounded-xl border border-gold/10 bg-navy-800 p-6">
          <Clock size={24} className="text-gold" />
          <span className="font-extrabold text-cream">ساعات کاری</span>
          <span className="text-sm text-cream/60">{contact.workingHours}</span>
        </div>

        <div className="flex flex-col gap-3 rounded-xl border border-gold/25 bg-gold/5 p-6 sm:col-span-2">
          <Handshake size={24} className="text-gold" />
          <span className="font-extrabold text-cream">همکاری با خرمدین</span>
          <p className="text-sm leading-7 text-cream/75">{contact.collaboration}</p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-cream/40">
        اطلاعات تماس نمونه است و پیش از انتشار نهایی باید با اطلاعات واقعی جایگزین شود.
      </p>
    </div>
  );
}