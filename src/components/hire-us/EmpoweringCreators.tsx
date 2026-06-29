import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STATS = [
  { value: "10+", label1: "Years Of", label2: " Experience", primary: true },
  { value: "100+", label1: "Amazing", label2: "Products", primary: false },
  { value: "15+", label1: "Team", label2: "Members", primary: true },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const EmpoweringCreators = () => {
  const gradients = [
    "bg-gradient-to-br from-primary/15 to-white",
    "bg-gradient-to-br from-gray-200 to-white",
    "bg-gradient-to-br from-yellow-200/60 to-white",
  ];

  return (
    <section className="py-20 lg:py-32 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-medium-gray mb-4">
            Explore Our Company
          </p>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6 max-w-4xl">
            Empowering Creators to Build Better
          </h2>
          <p className="text-sm sm:text-base text-medium-gray leading-relaxed max-w-md mb-10">
            We combine expert web development, intuitive design, and reliable
            support — so you focus on growth, we handle the rest.
          </p>
          <Link
            href="/about-us"
            className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full transition-colors duration-200"
          >
            About our Company
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {STATS.map(({ value, label1, label2, primary }, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 px-10 py-10 shadow-md ${gradients[index]}`}
            >
              <span
                className={`font-syne font-bold text-5xl leading-none ${
                  primary ? "text-primary" : "text-foreground"
                }`}
              >
                {value}
              </span>
              <span className="text-sm font-semibold text-medium-gray leading-snug">
                <span className="block">{label1}</span>
                <span className="block">{label2}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCreators;
