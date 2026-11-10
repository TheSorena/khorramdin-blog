export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      <div className="mx-auto mb-5 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <h1 className="text-3xl font-black text-cream sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 text-sm text-cream/60 sm:text-base">{subtitle}</p>}
      <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}