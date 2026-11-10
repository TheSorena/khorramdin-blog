import BlogLayout from "../components/BlogLayout";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";
import { site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle();

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <img
          src="/images/banner.jpg"
          alt="بنر خرمدین — دریچه‌ای به دنیای کتاب و اندیشه"
          className="h-44 w-full rounded-2xl border border-gold/20 object-cover sm:h-auto"
        />
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-black text-cream sm:text-3xl">{site.blogTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-cream/70">{site.welcome}</p>
        </div>
      </div>
      <BlogLayout>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </BlogLayout>
    </>
  );
}