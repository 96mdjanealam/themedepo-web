import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STEPS = [
  {
    label: "Ideation & Strategy",
    description:
      "We start by understanding your goals, audience, and market to formulate a winning strategy.",
  },
  {
    label: "Design & Prototyping",
    description:
      "Crafting visually appealing, functional wireframes and interactive prototypes for your approval.",
  },
  {
    label: "Development",
    description:
      "Writing clean, modular, and performant code to bring the approved designs to life.",
  },
  {
    label: "Deployment & QA",
    description:
      "Rigorous testing and seamless deployment to ensure your product is bug-free and ready.",
  },
];

const STATS = [
  { value: "350+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const OurWorkProcess = () => (
  <section className="relative overflow-hidden bg-[#0e0e0e] py-20 lg:py-32 px-4">
    {/* Subtle right-side orange glow */}
    <div
      className="absolute right-0 inset-y-0 w-1/3 bg-linear-to-l from-primary/15 to-transparent pointer-events-none"
      aria-hidden="true"
    />

    <div className="relative z-10 container mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* ── LEFT ── */}
        <div className="lg:w-1/2 flex flex-col justify-between gap-10">
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-white leading-tight">
            Built for speed, styled for impact, designed for humans.
          </h2>

          <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-md">
            Whether you need a custom-built solution from scratch or require an
            enhancement to your existing system, our elite team of engineers
            ensures every pixel and function is perfectly aligned with your
            objectives.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-12">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-syne font-bold text-5xl text-white leading-none mb-1">
                  {value}
                </p>
                <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-primary">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 w-fit"
          >
            Start a Project
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── RIGHT — process card ── */}
        <div className="lg:w-1/2 self-stretch bg-[#1a1a1a] p-8 lg:p-10">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck size={22} className="text-primary" strokeWidth={2} />
            <span className="font-syne font-semibold text-base text-white">
              Our Work Process
            </span>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                {/* Bullet */}
                <div className="border border-white/20 rounded-full p-1.5 shrink-0">
                  <span
                    className="block w-2 h-2 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3 className="font-syne font-semibold text-sm text-white mb-1.5">
                    {i + 1}. {step.label}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurWorkProcess;
