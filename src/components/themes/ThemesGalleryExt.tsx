"use client";

import { themeFilters, THEMES } from "@/constants/data";

import { themeFilterKey, Theme } from "@/constants/types";
import { ArrowRight, ExternalLink, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Theme card
// ---------------------------------------------------------------------------

const ThemeCard = ({ theme }: { theme: Theme }) => (
  <div className="flex flex-col border border-gray-200 group bg-white">
    {/* Full-bleed image */}
    <div className="relative overflow-hidden w-full aspect-4/3">
      <Image
        src={theme.image}
        alt={`${theme.name} theme preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Body */}
    <div className="flex flex-col p-5 gap-4">
      {/* Category + name + rating */}
      <div>
        <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-primary mb-1">
          {theme.category}
        </p>
        <div className="flex items-center justify-between">
          <h3 className="font-syne font-bold text-xl text-foreground tracking-wide">
            {theme.name.toUpperCase()}
          </h3>
          {theme.rating && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-sm">
              <Star size={12} className="text-foreground fill-foreground" />
              <span className="text-xs font-bold text-foreground">
                {theme.rating}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3">
        {theme.previewLink && (
          <Link
            href={theme.previewLink ?? theme.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-gray-200 text-xs font-bold tracking-widest uppercase text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
          >
            <ExternalLink size={13} />
            Live Preview
          </Link>
        )}
        <Link
          href={theme.purchaseLink ?? theme.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 border border-gray-200 text-xs font-bold tracking-widest uppercase text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
        >
          <ShoppingCart size={13} />
          Purchase
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Price + View Info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[0.55rem] font-bold tracking-[0.15em] uppercase text-medium-gray mb-0.5">
            Price
          </p>
          <p className="font-syne font-bold text-xl text-foreground">
            {theme.price}
          </p>
        </div>
        <Link
          href={theme.href}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase text-foreground hover:text-primary transition-colors duration-200"
        >
          View Info
          <ArrowRight size={13} />
        </Link>
      </div>
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

        {filtered.length < 1 && (
          <div className="py-10 text-center">
            <span>OOPS! No Items Found.</span>
          </div>
        )}

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://themeforest.net/user/themedepo1/portfolio"
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground hover:bg-primary text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            Explore us at Marketplace
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThemesGalleryExt;
