import { FileText, HeartHandshake, Layers, Palette } from "lucide-react";
import { ComponentType } from "react";

interface Feature {
  label: string;
  description: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  active?: boolean;
}

const FEATURES: Feature[] = [
  {
    label: "Modern Design",
    description: "Forget tired templates and yesteryear trends.",
    Icon: Palette,
    active: true,
  },
  {
    label: "Friendly Support",
    description: "Our support heroes are just a click away!",
    Icon: HeartHandshake,
  },
  {
    label: "Regular Updates",
    description: "Regular updates keep you ahead of the curve.",
    Icon: Layers,
  },
  {
    label: "Well Documented",
    description: "Our documentation makes you a development wizard.",
    Icon: FileText,
    active: true,
  },
];

const STATS = [
  { value: "99%", label: "Satisfaction" },
  { value: "24/7", label: "Premium Support" },
];

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <div
    className={`flex flex-col gap-6 lg:gap-10 p-8 border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
      feature.active
        ? "border-primary bg-primary/5"
        : "border-gray-200"
    }`}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-sm ${
        feature.active ? "bg-primary text-white" : "bg-gray-100 text-foreground"
      }`}
    >
      <feature.Icon size={20} strokeWidth={1.5} />
    </div>
    <div>
      <h3
        className={`font-syne font-semibold text-lg mb-2 ${
          feature.active ? "text-primary" : "text-foreground"
        }`}
      >
        {feature.label}
      </h3>
      <p className="text-sm leading-relaxed">{feature.description}</p>
    </div>
  </div>
);

const WhyChooseOurTheme = () => (
  <section className="py-20 lg:py-32 px-4 bg-background">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">

        {/* Left — text */}
        <div className="lg:w-2/5 lg:pr-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 w-fit mb-8">
            <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-medium-gray">
              Why Us
            </span>
          </div>

          <h2 className="font-syne font-semibold text-4xl sm:text-5xl text-foreground leading-tight mb-6">
            Why choose
            <br />
            our themes<span className="text-primary">?</span>
          </h2>

          <p className="text-sm leading-relaxed max-w-xs mb-10">
            Elevate your online business with highest-rated themes from us. Get
            powerful infrastructure with unmatched support.
          </p>

          <div className="border-t border-gray-200 mb-8" />

          <div className="flex items-center gap-10">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-syne font-semibold text-4xl text-foreground">{value}</p>
                <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-medium-gray mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 2x2 feature grid */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.label} feature={feature} />
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default WhyChooseOurTheme;