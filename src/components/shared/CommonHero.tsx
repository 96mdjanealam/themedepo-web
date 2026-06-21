import { commonHeroBg } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Breadcrumb {
  label: string;
  href: string;
}

interface CommonHeroProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumbs: Breadcrumb[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const CommonHero = ({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumbs,
}: CommonHeroProps) => (
  <section className="relative overflow-hidden bg-[#0e0e0e] py-24 lg:py-32 px-4">
    {/* Background image */}
    <Image
      src={commonHeroBg}
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-center"
      aria-hidden="true"
      priority
    />

    <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="inline-flex items-center bg-light-gray gap-2 px-4 py-2 border border-white/50">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.label} className="inline-flex items-center gap-2">
              {i > 0 && (
                <span
                  className="w-1 h-1 bg-white/80"
                  aria-hidden="true"
                />
              )}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-dark-gray">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white hover:text-white transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary/40 bg-primary/10 mb-6">
        <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
        <span className="text-white">{title} </span>
        {highlightedWord && (
          <span className="text-primary">{highlightedWord}</span>
        )}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-light-gray leading-relaxed max-w-lg">
        {description}
      </p>
    </div>
  </section>
);

export default CommonHero;
