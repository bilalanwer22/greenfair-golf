import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, stats, features, images } from "@/lib/data";

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero
        title="Welcome to GreenFair Golf Club"
        subtitle="Experience championship golf on pristine fairways surrounded by rolling hills and natural beauty. Your perfect round awaits."
        cta={{ label: "Book a Tee Time", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Course", href: "/about" }}
      />

      {/* Stats */}
      <section className="bg-golf-green py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-golf-sand md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-green-100/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl lg:h-[28rem]">
              <Image
                src={images.course}
                alt="Golf course aerial view"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="section-heading">A Legacy of Excellence</h2>
              <p className="section-subheading">
                Since 1974, GreenFair Golf Club has been the premier destination
                for golfers who demand the best. Our championship course, designed
                by Robert Trent Jones, offers 7,200 yards of meticulously maintained
                fairways and greens.
              </p>
              <p className="mt-4 text-gray-600">
                Whether you&apos;re a seasoned pro or picking up a club for the
                first time, our welcoming community and world-class facilities
                ensure an unforgettable experience every time you visit.
              </p>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Why Choose GreenFair?</h2>
            <p className="section-subheading mx-auto">
              Everything you need for the ultimate golf experience, all in one place.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-golf-green/10 bg-golf-cream p-6 transition hover:border-golf-fairway/30 hover:shadow-lg"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-golf-green">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="section-heading">Latest from Our Blog</h2>
              <p className="section-subheading">
                Tips, stories, and insights from the world of golf.
              </p>
            </div>
            <Link href="/blogs" className="btn-outline shrink-0">
              View All Posts
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-golf-green py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to Tee Off?
          </h2>
          <p className="mt-4 text-lg text-green-100/80">
            Book your tee time today and discover why GreenFair is the choice of
            discerning golfers. Memberships and guest play available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-golf-sand px-8 py-3 text-sm font-semibold text-golf-green transition hover:bg-white"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-golf-green"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
