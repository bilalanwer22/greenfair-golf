import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/data";

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export function Hero({
  title,
  subtitle,
  image = images.hero,
  cta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${
        compact ? "min-h-[40vh]" : "min-h-[85vh]"
      }`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        unoptimized
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-golf-green/90 via-golf-green/70 to-golf-green/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-green-100/90 md:text-xl">{subtitle}</p>
          {(cta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {cta && (
                <Link
                  href={cta.href}
                  className="rounded-full bg-golf-sand px-8 py-3 text-sm font-semibold text-golf-green transition hover:bg-white"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-golf-green"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
