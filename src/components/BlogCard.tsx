import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
  image,
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-golf-green px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-golf-green group-hover:text-golf-fairway">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">{author}</span>
          <Link
            href={`/blogs/${slug}`}
            className="text-sm font-semibold text-golf-fairway hover:text-golf-green"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
