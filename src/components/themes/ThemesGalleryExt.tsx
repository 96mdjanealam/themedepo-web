"use client";

import { themeFilters, THEMES } from "@/constants/data";

import { themeFilterKey, Theme } from "@/constants/types";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Theme card
// ---------------------------------------------------------------------------

const ThemeCard = ({ theme }: { theme: Theme }) => (
  <div className="flex flex-col border border-gray-200 group hover:bg-primary/5 transition-colors">
    {/* Card header */}
    <div className="flex items-start justify-between px-5 pt-5 pb-4">
      <div>
        <h3 className="font-syne font-semibold text-xl text-foreground">
          {theme.name}
        </h3>
        <p className="text-sm text-medium-gray mt-0.5">{theme.category}</p>
      </div>
      {theme.badge && (
        <span className="text-[0.6rem] font-bold tracking-[0.15em] px-2.5 py-1 bg-primary text-white">
          {theme.badge}
        </span>
      )}
    </div>

    {/* Theme image */}
    <div className="relative overflow-hidden mx-4 flex-1 min-h-56 group-hover:shadow-lg transition-shadow">
      <Image
        src={theme.image}
        alt={`${theme.name} theme preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Card footer */}
    <div className="flex items-center justify-between px-5 py-4 mt-2">
      <span className="font-bold text-xl text-foreground">{theme.price}</span>
      <Link
        href={theme.href}
        className={`w-9 h-9 flex items-center justify-center transition-colors duration-200 ${
          theme.badge === "FEATURED"
            ? "bg-primary text-white hover:bg-primary/90"
            : "border border-gray-200 text-foreground hover:border-primary hover:text-primary"
        }`}
        aria-label={`View ${theme.name}`}
      >
        {theme.badge === "FEATURED" ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowRight size={16} />
        )}
      </Link>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const ThemesGalleryExt = () => {
  const [activeFilter, setActiveFilter] = useState<themeFilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? THEMES
      : THEMES.filter((t) => t.filter === activeFilter);

  return (
    <section className="py-20 lg:py-32 px-4 bg-light-gray/5">
      <div className="container mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 mb-4">
              <span
                className="w-2 h-2 shrink-0 bg-primary"
                aria-hidden="true"
              />
              <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
                Store Showcase
              </span>
            </div>
            <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground leading-tight">
              Explore our
              <br />
              theme Gallery
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 flex-wrap">
            {themeFilters.map(({ label, key }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-5 py-2 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ${
                  activeFilter === key
                    ? "bg-light-gray text-white"
                    : "text-medium-gray hover:bg-light-gray/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-10" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <Link
            href="/themes"
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground hover:bg-primary text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            View All Stores
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThemesGalleryExt;
