import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/cms";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog posts from GreenFair Golf Club.",
};

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const data = await getBlogPosts(page);
  const posts = data?.posts ?? [];
  const pagination = data?.pagination;

  return (
    <>
      <Hero
        title="Golf Blog"
        subtitle="Expert tips, inspiring stories, and everything you need to elevate your game."
        compact
        image={images.beginner}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-golf-green/10 bg-white p-12 text-center">
              <p className="text-lg text-gray-600">No blog posts yet.</p>
              <p className="mt-2 text-sm text-gray-500">
                Publish a post in WordPress and assign it to Green Fair Golf.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {pagination && pagination.total_pages > 1 && (
                <nav className="mt-12 flex items-center justify-center gap-4">
                  {page > 1 && (
                    <Link
                      href={`/blogs?page=${page - 1}`}
                      className="btn-outline"
                    >
                      ← Previous
                    </Link>
                  )}
                  <span className="text-sm text-gray-600">
                    Page {pagination.current_page} of {pagination.total_pages}
                  </span>
                  {page < pagination.total_pages && (
                    <Link
                      href={`/blogs?page=${page + 1}`}
                      className="btn-outline"
                    >
                      Next →
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
