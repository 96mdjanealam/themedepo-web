import { popularThemes } from "@/constants/data";
import { IPopularTheme } from "@/constants/types";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Theme card
// ---------------------------------------------------------------------------

const ThemeCard = ({ theme }: { theme: IPopularTheme }) => (
  <div className="flex flex-col border group border-gray-200">
    {/* Image area */}
    <div className="relative overflow-hidden">
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1.5 bg-white text-[0.6rem] font-bold tracking-[0.15em] uppercase text-foreground shadow-sm">
          {theme.category}
        </span>
      </div>

      <div className="relative h-80 sm:h-94.25 overflow-hidden">
        <Image
          src={theme.image}
          alt={`${theme.name} theme preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top  transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>

    {/* Card body */}
    <div className="flex flex-col gap-5 p-6 border-t border-gray-200">
      {/* Name + rating */}
      <div className="flex items-center justify-between">
        <h3
          className="font-syne font-bold text-xl tracking-wide text-foreground group-hover:text-primary transition-colors duration-300
          "
        >
          {theme.name.toUpperCase()}
        </h3>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <Star
            size={14}
            className="text-foreground fill-foreground group-hover:text-primary group-hover:fill-primary transition-colors duration-300"
          />
          <span className="group-hover:text-primary transition-colors duration-300">
            {theme.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Sales + CTA */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-medium-gray mb-1">
            Total Sales
          </p>
          <p className="font-semibold text-lg text-foreground">
            {theme.totalSales}
          </p>
        </div>

        <Link
          href={theme.href}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 text-foreground hover:text-primary
          "
          aria-label={`View info for ${theme.name}`}
        >
          View Info
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const PopularThemes = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star size={14} className="text-primary" strokeWidth={1.5} />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-medium-gray">
              Trending Now
            </span>
          </div>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground">
            Popular Themes
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-0">
          {popularThemes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularThemes;
