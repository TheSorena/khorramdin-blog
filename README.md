# خرمدین | KHORRAMDIN

وبلاگ ساده و فارسی کتاب برای برند خرمدین — پروژه مدرسه‌ای.
ساخته‌شده با React ،TypeScript ،Vite ،Tailwind CSS و Lucide React.

## اجرای محلی

```bash
npm install
npm run dev
```

سایت روی `http://localhost:5173` باز می‌شود.

## بیلد و پیش‌نمایش

```bash
npm run build
npm run preview
```

خروجی بیلد در پوشه `dist` قرار می‌گیرد.

## دیپلوی روی Render (Static Site)

ریپازیتوری شامل `render.yaml` است؛ ساده‌ترین راه:

1. در Render گزینه **New → Blueprint** را بزنید و ریپازیتوری GitHub را انتخاب کنید.
2. Render به‌صورت خودکار سایت استاتیک را با این تنظیمات می‌سازد:
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `dist`
   - Rewrite: `/* → /index.html` (برای مسیریابی SPA)
   - Node Version: `22.12.0`

روش دستی: **New → Static Site** را بزنید، ریپو را وصل کنید و مقادیر بالا را وارد کنید؛
سپس در بخش **Redirects/Rewrites** قانون `/* → /index.html` از نوع Rewrite را اضافه کنید.

## ویرایش محتوا

- اطلاعات کتاب‌ها (عنوان، نویسنده، دسته، قیمت، توضیح، جلد): `src/data/books.ts`
- اطلاعات تماس و ساعات کاری (فعلاً نمونه): `src/data/site.ts`
- تصاویر جلدها و بنر: `public/images/`
- فونت وزیرمتن: `public/fonts/`

جلد «شازده کوچولو» در سایت مرجع موجود نبود؛ به‌جای آن یک جلد جایگزین هم‌خوان با برند نمایش داده می‌شود.