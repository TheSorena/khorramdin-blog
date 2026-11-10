export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  cover: string | null;
}

export const books: Book[] = [
  {
    id: "alchemist",
    title: "کیمیاگر",
    author: "پائولو کوئیلو",
    category: "رمان و فلسفی",
    cover: "/images/books/alchemist.jpg",
    description:
      "داستان چوپان جوانی به نام سانتیاگو که برای یافتن گنجی پنهان سفری پرماجرا را آغاز می‌کند. داستانی درباره رؤیاها، شناخت خود و معنای زندگی.",
  },
  {
    id: "atomic-habits",
    title: "عادت‌های اتمی",
    author: "جیمز کلیر",
    category: "توسعه فردی",
    cover: "/images/books/atomic-habits.jpg",
    description:
      "کتابی کاربردی درباره ساخت عادت‌های مثبت و کنار گذاشتن رفتارهای مخرب و تأثیر تغییرات کوچک و مستمر در زندگی.",
  },
  {
    id: "sapiens",
    title: "انسان خردمند",
    author: "یووال نوح هراری",
    category: "تاریخ و علوم انسانی",
    cover: "/images/books/sapiens.jpg",
    description:
      "مروری بر تاریخ بشر از پیدایش انسان خردمند تا شکل‌گیری تمدن‌های امروزی و تحولات اجتماعی و فرهنگی.",
  },
  {
    id: "1984",
    title: "۱۹۸۴",
    author: "جورج اورول",
    category: "رمان و ادبیات کلاسیک",
    cover: "/images/books/1984.jpg",
    description:
      "رمانی تأمل‌برانگیز درباره جامعه‌ای خیالی که حکومت بر زندگی مردم نظارت دارد؛ اثری درباره آزادی، حقیقت و قدرت.",
  },
  {
    id: "little-prince",
    title: "شازده کوچولو",
    author: "آنتوان دو سنت‌اگزوپری",
    category: "ادبیات و داستان",
    cover: "/images/books/little-prince.jpg",
    description:
      "داستانی زیبا درباره سفر یک شاهزاده کوچک و آشنایی با شخصیت‌های مختلف؛ کتابی درباره دوستی، عشق و ارزش‌های انسانی.",
  },
];