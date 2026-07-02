import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-golf-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⛳</span>
              <span className="font-display text-xl font-bold">GreenFair</span>
            </div>
            <p className="mt-4 text-sm text-green-100/80">
              Where passion meets precision. Experience championship golf in a
              setting of natural beauty and timeless elegance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-golf-sand">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-100/80 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-golf-sand">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-green-100/80">
              <li>123 Fairway Drive, Green Valley, CA 90210</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@greenfairgolf.com</li>
              <li>Hours: Mon–Sun, 6:00 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-green-100/60">
          © {new Date().getFullYear()} GreenFair Golf Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
