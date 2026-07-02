import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Golf tips, equipment guides, course reviews, and more from the GreenFair Golf Club blog.",
};

export default function BlogsPage() {
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
          <div className="mb-10 flex flex-wrap gap-3">
            {["All", "Technique", "Equipment", "Mindset", "Travel", "Fitness", "Beginners"].map(
              (cat) => (
                <span
                  key={cat}
                  className={`cursor-default rounded-full px-4 py-2 text-sm font-medium ${
                    cat === "All"
                      ? "bg-golf-green text-white"
                      : "bg-white text-gray-600 shadow-sm hover:bg-golf-green/10"
                  }`}
                >
                  {cat}
                </span>
              )
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
