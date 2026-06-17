import { pixelPerfectBg } from "@/constants/images";
import { ArrowUpRight, Layers, Star, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const SectionLabel = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 w-fit">
    <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
      {label}
    </span>
  </div>
);

const cardHover = "transition-colors duration-200 hover:bg-primary/5";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const OurStory = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-medium-gray">
              Our Story
            </span>
          </div>
          <h2 className="font-syne font-semibold text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight">
            <span className="text-foreground block">Built by engineers</span>
            <span className="text-light-gray block">for visionaries.</span>
          </h2>
        </div>

        {/* Bento */}
        <div className="flex flex-col border border-gray-200">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row">
            {/* Philosophy */}
            <div
              className={`flex flex-col justify-between p-8 border-b border-gray-200 lg:border-b-0 lg:border-r lg:w-1/2 min-h-64 bg-light-gray/5 ${cardHover}`}
            >
              <div>
                <SectionLabel label="Our Philosophy" />
                <p className="mt-6 text-2xl sm:text-3xl font-syne font-medium text-foreground leading-snug">
                  We engineered the perfect templates so you don&apos;t have to.
                </p>
              </div>
              <Link
                href="/story"
                className="inline-flex items-center gap-2 mt-8 text-xs font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-200 w-fit"
              >
                Read Full Story
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Exclusive Author */}
            <div className="bg-primary p-8 flex flex-col justify-between border-b border-gray-200 lg:border-b-0 lg:border-r lg:w-1/4 hover:brightness-105 transition-[filter] duration-200">
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-syne text-4xl text-white leading-tight">
                  Exclusive
                  <br />
                  Author
                </h3>
                <Star
                  size={28}
                  className="text-white/40 mt-1 shrink-0"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col gap-2 mb-6">
                {["ThemeForest", "TemplateMonster"].map((name) => (
                  <span
                    key={name}
                    className="self-start px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.15em] uppercase bg-black/25 text-white"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Recognized as a top-tier premium theme author across leading
                global marketplaces.
              </p>
            </div>

            {/* Experience */}
            <div
              className={`flex flex-col justify-between p-8 lg:w-1/4 bg-light-gray/5 ${cardHover}`}
            >
              <SectionLabel label="Experience" />
              <div className="mt-6">
                <p className="font-syne font-bold text-6xl text-foreground leading-none">
                  10<span className="text-primary">+</span>
                </p>
                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-medium-gray mt-3">
                  Years of Coding
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row border-t border-gray-200">
            {/* Zero-Latency */}
            <div
              className={`flex flex-col justify-between p-8 border-b border-gray-200 sm:border-b-0 sm:border-r sm:w-1/3 min-h-52 bg-light-gray/5 ${cardHover}`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                <Zap size={18} />
              </div>
              <div className="mt-10">
                <h4 className="font-syne font-medium text-xl text-foreground mb-3">
                  Zero-Latency
                </h4>
                <p className="text-sm text-medium-gray leading-relaxed">
                  Optimized for extreme speed. Guaranteed to pass Core Web
                  Vitals out of the box with flawless scores.
                </p>
              </div>
            </div>

            {/* Enterprise Code */}
            <div
              className={`flex flex-col justify-between p-8 border-b border-gray-200 sm:border-b-0 sm:border-r sm:w-1/3 min-h-52 ${cardHover}`}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                <Layers size={18} />
              </div>
              <div className="mt-10">
                <h4 className="font-syne font-medium text-xl text-foreground mb-3">
                  Enterprise Code
                </h4>
                <p className="text-sm text-medium-gray leading-relaxed">
                  Built by senior engineers for maximum scalability,
                  maintainability, and bullet-proof technical SEO.
                </p>
              </div>
            </div>

            {/* Pixel Perfect */}
            <div className="relative overflow-hidden sm:w-1/3 min-h-64 group">
              <Image
                src={pixelPerfectBg}
                alt="Pixel perfect theme preview"
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-200" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 bg-white text-[0.65rem] font-bold tracking-[0.18em] uppercase text-foreground">
                  Pixel Perfect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
