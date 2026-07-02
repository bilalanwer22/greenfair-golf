"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-golf-green/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⛳</span>
          <span className="font-display text-xl font-bold text-golf-green">
            GreenFair
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-golf-fairway ${
                pathname === link.href
                  ? "text-golf-green underline decoration-golf-sand decoration-2 underline-offset-4"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2 !text-xs">
            Book a Tee Time
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-golf-green md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-golf-green/10 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-golf-green/10 text-golf-green"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 text-center"
            >
              Book a Tee Time
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
