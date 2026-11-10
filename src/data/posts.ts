export interface Post {
  slug: string;
  title: string;
  dateFa: string;
  dateIso: string;
  monthFa: string;
  author: string;
  tags: string[];
  pinned: boolean;
  excerpt: string;
  readingMinutes: string;
  kind: "books" | "steps";
}

export const posts: Post[] = [
  {
    slug: "how-to-order",
    title: "نحوه سفارش",
    dateFa: "سه‌شنبه ۱۹ آبان ۱۴۰۵",
    dateIso: "2026-11-10",
    monthFa: "آبان ۱۴۰۵",
    author: "محمدامین طهماسبی",
    tags: ["خرمدین", "کتاب"],
    pinned: true,
    excerpt:
      "ثبت سفارش کتاب در چهار گام ساده؛ از انتخاب کتاب از بخش محصولات تا هماهنگی پرداخت و ارسال سفارش.",
    readingMinutes: "۱ دقیقه",
    kind: "steps",
  },
  {
    slug: "products",
    title: "محصولات",
    dateFa: "سه‌شنبه ۱۹ آبان ۱۴۰۵",
    dateIso: "2026-11-10",
    monthFa: "آبان ۱۴۰۵",
    author: "محمدامین طهماسبی",
    tags: ["خرمدین", "کتاب"],
    pinned: true,
    excerpt:
      "معرفی کتاب‌های منتخب خرمدین؛ از کیمیاگر و عادت‌های اتمی تا انسان خردمند، ۱۹۸۴ و شازده کوچولو، همراه با دسته‌بندی و معرفی کوتاه.",
    readingMinutes: "۳ دقیقه",
    kind: "books",
  },
];

export const allTags = [...new Set(posts.flatMap((post) => post.tags))];

export const archiveMonths = [...new Set(posts.map((post) => post.monthFa))].map((month) => ({
  month,
  count: posts.filter((post) => post.monthFa === month).length,
}));