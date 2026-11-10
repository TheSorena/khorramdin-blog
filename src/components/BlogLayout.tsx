import Sidebar from "./Sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="min-w-0 space-y-6">{children}</div>
      <Sidebar />
    </div>
  );
}