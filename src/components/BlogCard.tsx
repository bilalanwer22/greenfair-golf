import Image from "next/image";
import Link from "next/link";
import type { CmsPost } from "@/lib/cms";
import { formatPostDate } from "@/lib/cms";

interface BlogCardProps {
  post: CmsPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const image = post.featured_image;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-golf-green/10 bg-white shadow-sm transition hover:border-golf-fairway/30 hover:shadow-lg">
      <Link href={`/blogs/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-golf-cream">
        {image ? (
          <Image
            src={image.url}
            alt={image.alt || post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">⛳</div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {post.categories.length > 0 && (
          <p className="text-xs font-semibold uppercase tracking-wider text-golf-fairway">
            {post.categories[0]}
          </p>
        )}
        <h2 className="mt-2 font-display text-xl font-bold text-golf-green">
          <Link href={`/blogs/${post.slug}`} className="hover:text-golf-light">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {post.author.name && <span>{post.author.name}</span>}
        </div>
      </div>
    </article>
  );
}
