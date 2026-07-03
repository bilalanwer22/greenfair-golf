import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { formatPostDate, getAllBlogSlugs, getBlogPost } from "@/lib/cms";
import { images } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.seo.seo_title || post.title,
    description: post.seo.seo_description || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const image = post.featured_image;

  return (
    <>
      <Hero title={post.title} subtitle={post.excerpt} compact image={images.beginner} />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-golf-green hover:text-golf-light"
          >
            ← Back to all posts
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.author.name && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.author.name}</span>
              </>
            )}
            {post.categories.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.categories.join(", ")}</span>
              </>
            )}
          </div>

          {image && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={image.url}
                alt={image.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {post.content && (
            <article
              className="blog-content mt-10 space-y-4 text-gray-700 leading-relaxed [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-golf-green [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </div>
      </section>
    </>
  );
}
