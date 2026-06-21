import { technicalExcellence_bg } from "@/constants/images";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Principle {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Simplicity",
    description:
      "Complex problems deserve simple, elegantly conceived solutions that scale naturally without friction or technical debt over time.",
  },
  {
    number: "02",
    title: "Performance",
    description:
      "Every millisecond counts. We engineer for extreme speed, optimizing every layer from DOM paint times to edge network delivery.",
  },
  {
    number: "03",
    title: "Design Craft",
    description:
      "Form and function must exist in perfect harmony. Exceptional interface design is an art form that we respect and practice daily.",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Manifesto = () => (
  <section className="relative overflow-hidden py-20 lg:py-32 px-4 bg-[#0e0e0e]">
    <Image
      src={technicalExcellence_bg}
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-center opacity-70"
      aria-hidden="true"
    />

    <div className="relative z-10 container mx-auto">
      {/* Header */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/60">
            Our Manifesto
          </span>
        </div>
        <h2 className="font-syne font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          <span className="text-white block">We believe in building</span>
          <span className="text-primary block">beautifully engineered</span>
          <span className="text-white block">products that stand the test</span>
          <span className="text-white block">of time.</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="max-w-4xl border-t border-medium-gray mb-12" />

      {/* Principles */}
      <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
        {PRINCIPLES.map((principle, i) => (
          <div
            key={principle.number}
            className={`pr-8 ${i > 0 ? "sm:pl-8 sm:border-l sm:border-medium-gray" : ""}`}
          >
            <p className="font-syne font-bold text-3xl text-white/15 mb-4">
              {principle.number}
            </p>
            <p className="font-syne font-bold tracking-[0.15em] uppercase text-primary mb-3">
              {principle.title}
            </p>
            <p className="text-sm text-light-gray leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
