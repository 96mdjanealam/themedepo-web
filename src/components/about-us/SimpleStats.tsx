import { Award, Briefcase, Download, Users } from "lucide-react";
import { ComponentType } from "react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface Stat {
  value: string;
  label: string;
  Icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  featured?: boolean;
}

const STATS: Stat[] = [
  { value: "25k+", label: "Happy Customers", Icon: Users, featured: true },
  { value: "140k+", label: "Total Downloads", Icon: Download },
  { value: "45+", label: "Premium Themes", Icon: Briefcase },
  { value: "12+", label: "Awards Won", Icon: Award },
];

// ---------------------------------------------------------------------------
// Stat card
// ---------------------------------------------------------------------------

const StatCard = ({ stat }: { stat: Stat }) => {
  return (
    <div
      className={`flex flex-col group items-center justify-center text-center py-14 px-6 border border-light-gray/20 ${
        stat.featured ? "bg-primary" : "bg-white"
      }`}
    >
      <stat.Icon
        size={28}
        strokeWidth={1.5}
        className={`mb-6 ${stat.featured ? "text-white/80" : "text-custom-gray"}`}
      />
      <p
        className={`font-syne font-bold text-4xl sm:text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${
          stat.featured
            ? "text-white"
            : "text-foreground group-hover:text-primary"
        }`}
      >
        {stat.value}
      </p>
      <p
        className={`text-[0.65rem] font-bold tracking-[0.15em] uppercase ${
          stat.featured ? "text-white/70" : "text-custom-gray"
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const SimpleStats = () => (
  <section className="py-20 lg:py-32 bg-light-gray/20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </div>
  </section>
);

export default SimpleStats;
