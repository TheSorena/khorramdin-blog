export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      <span className="mx-auto mb-4 block h-1 w-12 rounded-full bg-gold-500" />
      <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>}
    </div>
  );
}