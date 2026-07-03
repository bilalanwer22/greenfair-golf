const CMS_URL = process.env.WP_CMS_URL ?? "http://localhost/multiblogs";
const SITE_SLUG = process.env.MSBM_SITE_SLUG ?? "greenfair-golf";
const API_KEY = process.env.MSBM_API_KEY ?? "";

export interface CmsFeaturedImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface CmsPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  modified: string;
  author: { id: number; name: string };
  featured_image: CmsFeaturedImage | null;
  categories: string[];
  tags: string[];
  site_slug: string;
  seo: {
    seo_title: string;
    seo_description: string;
    og_title: string;
    og_description: string;
    og_image: string;
    canonical_url: string;
  };
  content?: string;
}

export interface CmsPostsResponse {
  site: { site_slug: string; site_name: string; domain: string };
  posts: CmsPost[];
  pagination: {
    total: number;
    total_pages: number;
    current_page: number;
    per_page: number;
  };
}

function apiBase(): string {
  return `${CMS_URL.replace(/\/$/, "")}/wp-json/msbm/v1`;
}

function apiHeaders(): HeadersInit {
  const headers: HeadersInit = { Accept: "application/json" };
  if (API_KEY) {
    headers["X-MSBM-API-Key"] = API_KEY;
  }
  return headers;
}

async function fetchCms<T>(path: string, revalidate = 60): Promise<T | null> {
  try {
    const res = await fetch(`${apiBase()}${path}`, {
      headers: apiHeaders(),
      next: { revalidate },
    });

    if (!res.ok) {
      console.error(`CMS fetch failed: ${path} (${res.status})`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`CMS fetch error: ${path}`, error);
    return null;
  }
}

export async function getBlogPosts(
  page = 1,
  perPage = 12
): Promise<CmsPostsResponse | null> {
  return fetchCms<CmsPostsResponse>(
    `/posts/${SITE_SLUG}?page=${page}&per_page=${perPage}`
  );
}

export async function getBlogPost(slug: string): Promise<CmsPost | null> {
  return fetchCms<CmsPost>(`/posts/${SITE_SLUG}/${slug}`, 120);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const first = await getBlogPosts(1, 100);
  if (!first) {
    return [];
  }

  const slugs = first.posts.map((post) => post.slug);
  const totalPages = first.pagination.total_pages;

  for (let page = 2; page <= totalPages; page++) {
    const batch = await getBlogPosts(page, 100);
    if (batch) {
      slugs.push(...batch.posts.map((post) => post.slug));
    }
  }

  return slugs;
}

export function formatPostDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
