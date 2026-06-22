import {
  Clock,
  Headphones,
  LayoutGrid,
  RefreshCw,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface Advantage {
  label: string;
  description: string;
  Icon: LucideIcon;
  iconStyle: "primary" | "muted";
}

const ROW_ONE: Advantage[] = [
  {
    label: "Data Security",
    description:
      "Our website, data, and payment details are protected with enterprise-grade security and strict confidentiality.",
    Icon: ShieldCheck,
    iconStyle: "primary",
  },
  {
    label: "Save Time & Cost",
    description:
      "Save hours of development time and money with our fast, cost-efficient React solutions — no shortcuts taken.",
    Icon: Clock,
    iconStyle: "muted",
  },
  {
    label: "Customer Focused",
    description:
      "Every decision is guided by your goals - your website built around your brand, audience, and growth strategy.",
    Icon: Users,
    iconStyle: "primary",
  },
  {
    label: "Friendly Support",
    description:
      "Real web experts, no jargon, no delays - clear and helpful answers whenever you need them, for any platform.",
    Icon: Headphones,
    iconStyle: "muted",
  },
];

const ROW_TWO: Advantage[] = [
  {
    label: "Built on Quality",
    description:
      "Clean code, perfect design, and solid performance - built to the highest standards on any medium stack.",
    Icon: Settings,
    iconStyle: "primary",
  },
  {
    label: "Regular Updates",
    description:
      "Stay modern, secure, and stable with regular updates - on any medium-built solution ensuring longevity.",
    Icon: RefreshCw,
    iconStyle: "muted",
  },
  {
    label: "Unique Design & Functionality",
    description:
      "Stand out online with unique web designs packed with advanced functionality. Our solutions combine stunning visuals with powerful features for a truly medium experience.",
    Icon: LayoutGrid,
    iconStyle: "primary",
  },
];

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

const AdvantageCard = ({
  item,
  className = "",
}: {
  item: Advantage;
  className?: string;
}) => (
  <div
    className={`flex flex-col gap-6 p-8 bg-white border border-light-gray/20 hover:shadow-md transition-shadow duration-200 ${className}`}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-xl ${
        item.iconStyle === "primary"
          ? "bg-primary/10 text-primary"
          : "bg-gray-100 text-light-gray"
      }`}
    >
      <item.Icon size={22} strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="font-syne font-bold text-base text-foreground mb-2">
        {item.label}
      </h3>
      <p className="text-sm text-light-gray leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const ThemeDepoAdvantage = () => (
  <section className="py-20 lg:py-32 px-4 bg-light-gray/5">
    <div className="container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-light-gray mb-4">
          Why Choose Us
        </p>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5">
          The ThemeDepo Advantage
        </h2>
        <p className="text-sm sm:text-base text-medium-gray leading-relaxed max-w-xl">
          Elevate your web with ThemeDepo&apos;s highest-rated solutions —
          here&apos;s what sets us apart.
        </p>
      </div>

      {/* Row 1 — 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {ROW_ONE.map((item) => (
          <AdvantageCard key={item.label} item={item} />
        ))}
      </div>

      {/* Row 2 — first two take 1 col each, last takes 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ROW_TWO.map((item, i) => (
          <AdvantageCard
            key={item.label}
            item={item}
            className={i === ROW_TWO.length - 1 ? "lg:col-span-2" : ""}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ThemeDepoAdvantage;
