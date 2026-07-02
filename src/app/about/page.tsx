import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { teamMembers, stats, images } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GreenFair Golf Club's history, mission, and the team behind our championship course.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About GreenFair Golf Club"
        subtitle="Five decades of passion, precision, and community on the fairways."
        compact
        image={images.course}
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded in 1974 by a group of passionate golfers, GreenFair Golf
                Club began as a vision to create a world-class golfing destination
                nestled in the heart of Green Valley. What started as 9 holes has
                grown into an 18-hole championship course that has hosted regional
                tournaments and welcomed golfers from around the world.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our mission is simple: to provide an exceptional golf experience
                in a welcoming environment where members and guests alike can enjoy
                the game they love. We believe golf is more than a sport — it&apos;s
                a way to connect with nature, challenge yourself, and build lasting
                friendships.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Today, GreenFair stands as a testament to that original vision,
                combining tradition with modern amenities to serve a diverse
                community of over 2,500 members.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl lg:h-[28rem]">
              <Image
                src={images.golfer}
                alt="Golfer on the course"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-golf-green py-16">
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

      {/* Mission & Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Our Mission & Values</h2>
            <p className="section-subheading mx-auto">
              The principles that guide everything we do at GreenFair.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Excellence",
                description:
                  "We maintain our course and facilities to the highest standards, ensuring every visit exceeds expectations.",
                icon: "⭐",
              },
              {
                title: "Community",
                description:
                  "We foster a welcoming environment where golfers of all backgrounds and skill levels feel at home.",
                icon: "🌿",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the traditions and etiquette of golf, promoting fair play and respect on and off the course.",
                icon: "🏅",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 text-center shadow-md"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-golf-green">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="section-subheading mx-auto">
              The dedicated professionals who make GreenFair exceptional.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl bg-golf-cream shadow-md"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-golf-green">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-golf-fairway">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl lg:h-[28rem]">
              <Image
                src={images.course}
                alt="Golf course landscape"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="section-heading">The Course</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Designed by renowned architect Robert Trent Jones, our 18-hole
                par-72 championship course spans 7,200 yards of rolling terrain
                with strategically placed bunkers, water hazards, and undulating
                greens that challenge players of every skill level.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "18 holes, Par 72, 7,200 yards",
                  "Bentgrass greens and Bermuda fairways",
                  "Driving range with 30 stations",
                  "Practice putting and chipping greens",
                  "Fully stocked pro shop",
                  "Clubhouse with dining and event facilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-golf-fairway/20 text-xs text-golf-fairway">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
