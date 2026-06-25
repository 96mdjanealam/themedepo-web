import { Theme } from "@/constants/types";
import {
  ExternalLink,
  Layers,
  Lock,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const SectionHeading = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="w-8 h-0.5 bg-primary shrink-0" aria-hidden="true" />
    <h2 className="font-syne font-bold text-3xl sm:text-4xl text-foreground">
      {label}
    </h2>
  </div>
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const ThemeDetails = ({ themeDetails }: { themeDetails: Theme }) => {
  const {
    // name,
    overview,
    techStack,
    keyFeatures,
    price,
    purchaseLink,
    previewLink,
  } = themeDetails;

  return (
    <section className="py-16 lg:py-32 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* ── LEFT — main content ── */}
          <div className="flex-1 flex flex-col gap-14">

            {/* Overview */}
            <div>
              <SectionHeading label="Overview" />
              <p className="text-sm sm:text-base text-medium-gray leading-relaxed mb-8">
                {overview}
              </p>

              {/* Tech stack card */}
              <div className="relative overflow-hidden border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Layers size={14} className="text-primary" strokeWidth={1.5} />
                  <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
                    Tech Stack &amp; Built With
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 border border-primary/20 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-foreground bg-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Decorative faint icon */}
                <div className="absolute -bottom-4 -right-4 text-gray-100 pointer-events-none" aria-hidden="true">
                  <Layers size={120} strokeWidth={0.5} />
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <SectionHeading label="Key Features" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {keyFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-5 border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded-sm">
                      <feature.Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-medium-gray/70 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT — purchase card ── */}
          <div className="w-full lg:w-md shrink-0 lg:sticky lg:top-30">
            <div className="border border-gray-200 p-6 flex flex-col gap-5">

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="font-syne font-bold text-4xl text-foreground">
                  {price}
                </span>
                <span className="text-sm text-medium-gray">/ one time</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* License row */}
              <div className="flex items-center justify-between">
                <span className="font-syne font-semibold text-base text-foreground">
                  License
                </span>
                <span className="px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-green-50 text-green-600 border border-green-200">
                  In Stock
                </span>
              </div>

              {/* Purchase CTA */}
              <Link
                href={purchaseLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 bg-foreground hover:bg-primary text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
              >
                <ShoppingCart size={14} />
                Purchase Theme
              </Link>

              {/* Live preview */}
              {previewLink && (
                <Link
                  href={previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 border border-gray-200 hover:border-primary hover:text-primary text-foreground text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
                >
                  Live Preview
                  <ExternalLink size={13} />
                </Link>
              )}

              {/* Secure checkout note */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <Lock size={15} className="text-medium-gray" strokeWidth={1.5} />
                <span className="text-sm text-medium-gray tracking-wide uppercase">
                  Secure Checkout
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThemeDetails;