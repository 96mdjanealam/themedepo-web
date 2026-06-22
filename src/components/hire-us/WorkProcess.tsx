import { ArrowRight, ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Step {
  number: string;
  label: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    label: "Planning and Strategy",
    description:
      "We define your goals, audience, and project roadmap before writing a single line of code.",
  },
  {
    number: "02",
    label: "Structure and Design",
    description:
      "Clean, modern layouts tailored to your brand — designed for seamless navigation and conversions.",
  },
  {
    number: "03",
    label: "Development & Implementation",
    description:
      "Fast, responsive, and fully compatible web builds with clean, efficient code.",
  },
  {
    number: "04",
    label: "Testing and Launch",
    description:
      "Tested across all devices and browsers — launched on time, every time.",
  },
];

// ---------------------------------------------------------------------------
// Step item
// ---------------------------------------------------------------------------

const StepItem = ({ step, isLast }: { step: Step; isLast: boolean }) => (
  <div className="flex gap-6">
    {/* Timeline — dot + line */}
    <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center shrink-0 z-10">
        <ChevronRight size={16} className="text-white" strokeWidth={2} />
      </div>
      {!isLast && <div className="w-px flex-1 bg-gray-200 mt-2" />}
    </div>

    {/* Content */}
    <div className={`pb-12 ${isLast ? "pb-0" : ""}`}>
      <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary mb-2">
        Step {step.number}
      </p>
      <h3 className="font-syne font-semibold text-xl text-foreground mb-3">
        {step.label}
      </h3>
      <p className="text-sm text-medium-gray leading-relaxed max-w-lg">
        {step.description}
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const WorkProcess = () => (
  <section className="py-20 lg:py-32 px-4 bg-[#f5f5f5]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left — header + browse card */}
        <div className="lg:w-2/5 shrink-0">
          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-medium-gray mb-5">
            Work Process
          </p>

          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-6 flex items-center gap-3">
            <span
              className="w-1 h-10 bg-primary rounded-full shrink-0"
              aria-hidden="true"
            />
            Smart Work Process
          </h2>

          <p className="text-sm text-medium-gray leading-relaxed mb-10 max-w-xs">
            Our streamlined development process delivers results quickly,
            transparently, and without technical surprises.
          </p>

          {/* Browse card */}
          <div className="flex items-center gap-5 p-6 bg-white border border-gray-200 max-w-sm">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
              <LayoutGrid size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-snug mb-2">
                Browse templates directly from the marketplace for your project!
              </p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://themeforest.net/user/themedepo1/portfolio"
                className="inline-flex items-center gap-1 text-xs font-bold tracking-[0.12em] uppercase text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Browse
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right — timeline */}
        <div className="flex-1 pt-2">
          {STEPS.map((step, i) => (
            <StepItem
              key={step.number}
              step={step}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkProcess;
