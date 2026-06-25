import { commonHeroBg } from "@/constants/images";
import { Theme } from "@/constants/types";
import { ArrowLeft, ExternalLink, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleThemeHero = ({ themeDetails }: { themeDetails: Theme }) => {
  const {
    name,
    category,
    rating,
    // totalSales,
    overview,
    price,
    previewLink,
    purchaseLink,
  } = themeDetails;
  //   console.log(themeDetails)

  const shortDesc = overview.split(".")[0];

  return (
    <section className="relative overflow-hidden bg-[#0e0e0e] pt-24 pb-60 px-4">
      {/* Background */}
      <Image
        src={commonHeroBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-60"
        aria-hidden="true"
        priority
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8">
        {/* Back button */}
        <Link
          href="/themes"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 bg-white/50 hover:bg-white/40 transition-colors duration-200"
        >
          <ArrowLeft size={14} className="text-white/70" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/70">
            Back to Themes
          </span>
        </Link>

        {/* Category + rating badges */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/20 border border-primary/40">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
              aria-hidden="true"
            />
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">
              {category}
            </span>
          </div>

          <div className=" inline-flex items-center gap-2 px-3 py-2 bg-white/80 border border-white/15">
            <Star size={12} className="text-primary fill-primary" />
            <span className="text-xs font-bold">{rating}</span>
          </div>
        </div>

        {/* Theme name */}
        <h1 className="font-syne font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-wide leading-none">
          {name.toUpperCase()}
        </h1>

        {/* Overview */}
        <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-2xl">
          {`${shortDesc}.`}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {previewLink && (
            <Link
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
            >
              Live Preview
              <ExternalLink size={14} />
            </Link>
          )}
          <Link
            href={purchaseLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-primary hover:text-white text-foreground text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            <ShoppingCart size={14} />
            Purchase — {price}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleThemeHero;
