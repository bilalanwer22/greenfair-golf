import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Hero } from "@/components/Hero";
import { images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GreenFair Golf Club for tee times, memberships, lessons, and events.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for tee times, memberships, or any questions."
        compact
        image={images.contact}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="section-subheading">
                Whether you&apos;re interested in membership, booking a tee time,
                or planning an event, our team is here to help.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Address",
                    detail: "123 Fairway Drive\nGreen Valley, CA 90210",
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    detail: "(555) 123-4567",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    detail: "info@greenfairgolf.com",
                  },
                  {
                    icon: "🕐",
                    title: "Hours",
                    detail: "Monday – Sunday\n6:00 AM – 8:00 PM",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-golf-green">{item.title}</h3>
                      <p className="mt-1 whitespace-pre-line text-sm text-gray-600">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl bg-golf-green/5 p-6">
                <h3 className="font-display text-lg font-bold text-golf-green">
                  Tee Time Booking
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Members can book tee times online through our member portal.
                  Guest tee times are available by calling our pro shop at
                  (555) 123-4567 or using the contact form.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
