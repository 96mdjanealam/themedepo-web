import { Star } from "lucide-react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface Review {
  id: number;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const ROW_ONE: Review[] = [
  {
    id: 1,
    quote:
      "The absolute highest standard for structural UI components I've come across. Saved us weeks.",
    name: "Sarah K.",
    role: "Staff Engineer @ Vercel",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "A paradigm shift. Finally a UI repository that treats design and engineering as equal citizens.",
    name: "David M.",
    role: "Design Lead @ Linear",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We bootstrap our sites exclusively using ThemeDpo templates. It feels like an unfair advantage.",
    name: "Elena R.",
    role: "Founder @ Raycast",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Outstanding quality. The components are production-ready right out of the box.",
    name: "James L.",
    role: "CTO @ Loom",
    rating: 5,
  },
];

const ROW_TWO: Review[] = [
  {
    id: 5,
    quote:
      "A design system that works beautifully out of the box. Highly recommended to every team.",
    name: "Alex T.",
    role: "Lead Dev @ Notion",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Flawless execution. The attention to detail in every component is unmatched in the ecosystem.",
    name: "Marcus T.",
    role: "CTO @ Supabase",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "It's rare to find a design system that feels this robust out of the box. Highly recommended.",
    name: "Julia L.",
    role: "Product @ Stripe",
    rating: 5,
  },
  {
    id: 8,
    quote:
      "ThemeDpo is the backbone of our rapid prototyping. Outstanding quality throughout.",
    name: "Chen W.",
    role: "Lead Dev @ Fig",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const StarRating = ({ light }: { light: boolean }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        strokeWidth={2}
        className={light ? "text-white/80 " : "text-primary"}
      />
    ))}
  </div>
);

const Avatar = ({ name, light }: { name: string; light: boolean }) => (
  <div
    className={`w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0 ${light ? "bg-white/80 text-primary" : "bg-gray-100 text-dark-gray border border-light-gray/30"}`}
  >
    {name.charAt(0)}
  </div>
);

// isPrimary driven purely by index — odd = primary, even = default
const ReviewCard = ({ review, index }: { review: Review; index: number }) => {
  const isPrimary = index % 2 === 0;

  return (
    <div
      className={`w-80 shrink-0 flex flex-col justify-between shadow-sm my-2 gap-6 p-6 ${isPrimary ? "bg-primary text-white" : "bg-white border border-gray-200"}`}
    >
      <div className="flex flex-col gap-4">
        <StarRating light={isPrimary} />
        <p
          className={`font-syne leading-relaxed ${isPrimary ? "text-white" : "text-foreground"}`}
        >
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div
        className={`flex items-center gap-3 pt-4 border-t ${isPrimary ? "border-white/20" : "border-gray-100"}`}
      >
        <Avatar name={review.name} light={isPrimary} />
        <div>
          <p
            className={`text-[0.65rem] font-bold tracking-widest uppercase ${isPrimary ? "text-white" : "text-foreground"}`}
          >
            {review.name}
          </p>
          <p
            className={`text-[0.6rem] tracking-wide uppercase mt-0.5 ${isPrimary ? "text-white/60" : "text-custom-gray"}`}
          >
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Marquee row — tripled for seamless infinite scroll
// ---------------------------------------------------------------------------

const MarqueeRow = ({
  reviews,
  reverse = false,
}: {
  reviews: Review[];
  reverse?: boolean;
}) => {
  // Triple the items so there's always content visible during the loop reset
  const items = [...reviews, ...reviews, ...reviews];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} index={i} />
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const Review = () => (
  <section className="py-20 lg:py-32 overflow-hidden bg-light-gray/5">
    {/* Header */}
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-primary bg-primary/10 mb-5">
            <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-primary">
              Success Stories
            </span>
          </div>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-foreground leading-tight">
            Loved by
            <br />
            <span className="text-primary">Our Respected User</span>
          </h2>
        </div>
        <p className="text-sm text-custom-gray leading-relaxed max-w-xs lg:text-right">
          Join thousands of developers and designers building production-grade
          applications.
        </p>
      </div>
    </div>

    {/* Marquee rows */}
    <div className="flex flex-col gap-3">
      <MarqueeRow reviews={ROW_ONE} />
      <MarqueeRow reviews={ROW_TWO} reverse />
    </div>
  </section>
);

export default Review;
