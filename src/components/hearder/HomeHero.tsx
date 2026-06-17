import { homeHeroBg, heroThemes } from "@/constants/images";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TrendingTag {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const TRENDING_TAGS: TrendingTag[] = [
  { label: "SaaS Platform", href: "/themes/saas-platform" },
  { label: "E-commerce", href: "/themes/e-commerce" },
  { label: "Portfolio", href: "/themes/portfolio" },
  { label: "Dashboard", href: "/themes/dashboard" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const HomeHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={homeHeroBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        {/* dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/40" />
        {/* mobile bottom gradient — primary tint */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-primary/30 to-transparent sm:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-0">
        {/* Announcement badge */}
        <a
          href="/architecture-2"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
        >
          <span
            className="w-3 h-3 rounded-sm bg-primary shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs font-bold text-light-gray tracking-[0.18em] uppercase">
            New: Architecture 2.0
          </span>
          <ArrowRight size={14} className="text-white/70" />
        </a>

        {/* Headline */}
        <h1 className="font-syne font-bold leading-none mb-6">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white">
            Premium Themes
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-primary">
            For Everyone.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-lg text-sm sm:text-base text-light-gray leading-relaxed mb-10">
          We build easy-to-use premium themes and plugins for WordPress,
          Shopify, Webflow, and React. Grow your digital presence quickly.
        </p>

        {/* Search bar */}
        <div className="w-full max-w-xl mb-6">
          <div className="flex items-center bg-white rounded-none overflow-hidden shadow-lg">
            <Search size={18} className="ml-5 text-light-gray shrink-0" />
            <input
              type="text"
              placeholder="Search Theme & plugins..."
              className="flex-1 px-4 py-4 text-sm text-gray-700 placeholder:text-light-gray outline-none bg-transparent"
              aria-label="Search themes and plugins"
            />
            <button
              className="flex items-center justify-center w-14 h-full min-h-13 bg-primary hover:bg-primary/90 transition-colors duration-200 shrink-0"
              aria-label="Submit search"
            >
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>
        </div>

        {/* Trending tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          <span className="text-xs font-bold tracking-[0.15em] text-white/40 uppercase mr-1">
            Trending
          </span>
          {TRENDING_TAGS.map((tag) => (
            <div
              key={tag.label}
              //   href={tag.href}
              className="px-4 py-1.5 text-xs font-medium tracking-wide text-white border border-white/20 hover:border-white/30 transition-colors duration-200 rounded-sm"
            >
              {tag.label}
            </div>
          ))}
        </div>

        {/* Theme preview image */}
        <div className="w-full max-w-4xl mx-auto overflow-hidden">
          <Image
            src={heroThemes}
            alt="Theme preview"
            width={1200}
            height={800}
            className="object-cover object-top w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
