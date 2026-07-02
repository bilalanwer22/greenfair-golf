import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const dummyContent: Record<string, string[]> = {
  "perfect-your-swing": [
    "A great golf swing starts with a solid foundation. Your grip, stance, and posture form the building blocks of every shot you take on the course. Without proper fundamentals, even the most athletic players struggle with consistency.",
    "Focus on keeping your head still during the backswing and follow-through. Many amateur golfers lift their head too early, which causes topped shots and loss of power. Practice with a mirror or record yourself to identify this common mistake.",
    "Tempo is everything. Rushing your swing leads to poor contact and wayward shots. Try counting 'one-two' during your swing — 'one' on the backswing, 'two' on the downswing. This simple rhythm drill can transform your ball striking.",
    "Don't forget to rotate your hips. Power in golf comes from the ground up, and hip rotation is the engine of your swing. Allow your hips to lead the downswing while keeping your upper body connected.",
    "Finally, practice with purpose. Instead of mindlessly hitting balls at the range, set specific goals for each session. Work on one aspect of your swing at a time, and track your progress over weeks and months.",
  ],
  "choosing-the-right-clubs": [
    "Selecting the right golf clubs can feel overwhelming with so many options on the market. The key is to match your equipment to your skill level, swing speed, and playing style.",
    "Start with a driver that suits your swing speed. Players with slower swing speeds benefit from drivers with higher loft (10.5°–12°) and lighter shafts. Faster swingers can handle lower loft and stiffer shafts for maximum distance.",
    "Your iron set should provide consistent distance gaps between clubs. Most amateur golfers benefit from cavity-back irons, which offer forgiveness on off-center hits while still providing good feel.",
    "Wedges are often overlooked but critical for scoring. At minimum, carry a pitching wedge, sand wedge, and lob wedge. The bounce angle should match your typical course conditions — more bounce for soft sand, less for firm turf.",
    "Get fitted by a professional. A club fitting session analyzes your swing dynamics and recommends specifications tailored to your game. It's one of the best investments you can make as a golfer.",
  ],
  "mental-game-mastery": [
    "The mental aspect of golf is what separates good players from great ones. While physical skills are important, your mindset on the course determines how well you perform under pressure.",
    "Develop a pre-shot routine and stick to it on every shot. This routine acts as an anchor, keeping you focused and calm regardless of the situation. Tiger Woods famously uses the same routine whether he's on the first tee or the 18th at Augusta.",
    "Learn to let go of bad shots. Golf is a game of recovery — even the best players hit poor shots. The key is not letting one bad shot lead to another. Take a deep breath, refocus, and commit fully to your next shot.",
    "Visualization is a powerful tool. Before each shot, see the ball flight and landing spot in your mind. This mental rehearsal improves confidence and helps you execute with conviction.",
    "Stay present. Don't think about your score or what happened three holes ago. Golf is played one shot at a time, and the only shot that matters is the one you're about to hit.",
  ],
  "best-courses-to-play": [
    "Every golfer has a bucket list of courses they dream of playing. These iconic destinations represent the pinnacle of golf course design and offer experiences that stay with you forever.",
    "Pebble Beach Golf Links in California is arguably the most famous public course in the world. With stunning Pacific Ocean views on nearly every hole, it's a must-play for any serious golfer visiting the West Coast.",
    "St Andrews Old Course in Scotland is the home of golf. Walking the same fairways where the game was born is a pilgrimage every golfer should make at least once in their lifetime.",
    "Augusta National needs no introduction. While getting a ticket to the Masters is nearly impossible, the course itself represents the gold standard of golf architecture and conditioning.",
    "Other must-play courses include Pinehurst No. 2, Royal County Down, Cypress Point, and Bandon Dunes. Each offers a unique challenge and unforgettable scenery that captures the essence of the game.",
  ],
  "golf-fitness-guide": [
    "Physical fitness plays a crucial role in golf performance. A strong, flexible body allows for a more powerful and consistent swing while reducing the risk of injury.",
    "Core strength is paramount. Your core connects your upper and lower body during the swing. Exercises like planks, Russian twists, and medicine ball rotations build the stability needed for a powerful turn.",
    "Flexibility in the hips and shoulders enables a full backswing and smooth follow-through. Incorporate dynamic stretching before your round and static stretching afterward. Yoga is also excellent for golfers.",
    "Cardiovascular endurance helps you maintain focus and energy throughout an 18-hole round, especially during hot weather. Walking the course instead of riding a cart is itself a great workout.",
    "Create a simple 20-minute routine you can do before teeing off. Include hip rotations, shoulder stretches, torso twists, and a few practice swings with increasing intensity. Your body — and your scorecard — will thank you.",
  ],
  "beginners-guide-to-golf": [
    "Welcome to the wonderful world of golf! Whether you're picking up a club for the first time or returning after a long break, this guide will help you get started on the right foot.",
    "Start with a few lessons from a PGA professional. Learning proper fundamentals from the beginning prevents bad habits that are difficult to break later. Most clubs offer affordable intro lesson packages for new players.",
    "Understand basic etiquette: repair divots, rake bunkers, keep pace of play, and remain quiet while others are hitting. Golf etiquette is part of what makes the game special and enjoyable for everyone.",
    "You don't need expensive equipment to start. Many courses offer rental clubs, and starter sets are available at reasonable prices. Focus on learning the game before investing in premium equipment.",
    "Be patient with yourself. Golf has a steep learning curve, and everyone struggles at first. Celebrate small improvements, enjoy time outdoors with friends, and remember that even the best players in the world started as beginners.",
  ],
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const content = dummyContent[slug] || [
    "This is a sample blog post about golf. Check back soon for the full article with detailed tips and insights to improve your game.",
  ];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <article>
      <div className="relative h-[50vh] min-h-[320px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-golf-green/90 to-golf-green/30" />
        <div className="absolute bottom-0 mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
          <span className="rounded-full bg-golf-sand px-3 py-1 text-xs font-semibold text-golf-green">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-green-100/80">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xl font-medium leading-relaxed text-gray-700">
          {post.excerpt}
        </p>

        <div className="mt-8 space-y-6">
          {content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-golf-fairway hover:text-golf-green"
          >
            ← Back to All Posts
          </Link>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-golf-green">
              Related Posts
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blogs/${related.slug}`}
                  className="group rounded-xl bg-white p-4 shadow-md transition hover:shadow-lg"
                >
                  <span className="text-xs font-semibold text-golf-fairway">
                    {related.category}
                  </span>
                  <h3 className="mt-1 font-display font-bold text-golf-green group-hover:text-golf-fairway">
                    {related.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{related.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
