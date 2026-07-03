import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("X-MSBM-Webhook-Secret");
  const expected = process.env.MSBM_WEBHOOK_SECRET;

  if (expected && secret !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let postSlug = "";
  try {
    const body = await request.json();
    postSlug = typeof body.post_slug === "string" ? body.post_slug : "";
  } catch {
    // Empty body is fine — revalidate listing only.
  }

  revalidatePath("/blogs");
  if (postSlug) {
    revalidatePath(`/blogs/${postSlug}`);
  }

  return NextResponse.json({ revalidated: true, post_slug: postSlug || null });
}
