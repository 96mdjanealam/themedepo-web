"use client";

import { themeFilters, THEMES } from "@/constants/data";
import { themeFilterKey, Theme } from "@/constants/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Card background colors — cycles through per index
// ---------------------------------------------------------------------------

const CARD_COLORS = [
  "bg-[#7B3A1E]", // warm brown — card 1
  "bg-[#1E3A2F]", // dark green — card 2
  "bg-[#1A2744]", // navy blue — card 3
  "bg-[#3B2F6B]", // purple — card 4
];

// ---------------------------------------------------------------------------
// Theme card — horizontal layout
// ---------------------------------------------------------------------------

const ThemeCard = ({ theme, index }: { theme: Theme; index: number }) => {
  const bgColor = CARD_COLORS[index % CARD_COLORS.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className={`relative overflow-hidden flex flex-col lg:flex-row ${bgColor} rounded-xl group`}>

      {/* Left — image */}
      <div className="relative w-full lg:w-2/5 aspect-4/3 lg:aspect-auto lg:min-h-72 shrink-0 overflow-hidden m-5 rounded-lg">
        <Image
          src={theme.image}
          alt={`${theme.name} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Right — content */}
      <div className="relative flex flex-col justify-between gap-6 p-8 lg:p-10 flex-1">

        {/* Large number — top right */}
        <p className="absolute top-6 right-8 font-syne font-bold text-5xl lg:text-6xl text-white/20 leading-none select-none">
          {number}
        </p>

        <div className="flex flex-col gap-5">
          {/* Category pill */}
          <div className="inline-flex w-fit">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10 text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/70">
              {theme.category}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-syne font-bold text-3xl sm:text-4xl text-white leading-tight">
            {theme.name}
          </h3>

          {/* Overview */}
          <p className="text-sm text-white/60 leading-relaxed max-w-lg">
            {theme.overview}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {theme.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 border border-white/20 text-[0.6rem] font-bold tracking-[0.12em] uppercase text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={theme.href}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-primary hover:text-white text-foreground text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 w-fit"
        >
          View Details
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState<themeFilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? THEMES
      : THEMES.filter((t) => t.filter === activeFilter);

  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="container mx-auto">

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-1 flex-wrap mb-12">
          {themeFilters.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                activeFilter === key
                  ? "bg-dark-gray text-white"
                  : "text-medium-gray hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length < 1 && (
          <div className="py-20 text-center">
            <p className="text-medium-gray font-syne font-semibold text-lg">
              No themes found for this filter.
            </p>
          </div>
        )}

        {/* Cards list */}
        <div className="flex flex-col gap-12">
          {filtered.map((theme, i) => (
            <ThemeCard key={theme.id} theme={theme} index={i} />
          ))}
        </div>

        {/* Load more / marketplace CTA */}
        <div className="flex justify-center mt-14">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://themeforest.net/user/themedepo1/portfolio"
            className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors duration-200"
          >
            Visit Marketplace
            <ArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioGallery;