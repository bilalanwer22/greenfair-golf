import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blog posts from GreenFair Golf Club.",
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
          {/* WordPress blog posts will be fetched here */}
        </div>
      </section>
    </>
  );
}
