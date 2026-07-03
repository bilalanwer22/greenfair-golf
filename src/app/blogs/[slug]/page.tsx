import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog Post",
};

export default function BlogPostPage() {
  return (
    <>
      <Hero title="Blog Post" subtitle="" compact image={images.beginner} />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* WordPress blog content will be fetched here */}
        </div>
      </section>
    </>
  );
}
