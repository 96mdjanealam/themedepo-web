import { Star } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const WORDS = ["Design", "Engineer", "Launch"];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const MarqueeWords = () => {
  // Repeat enough times for a long seamless strip, then duplicate the whole
  // set once more for the infinite-loop illusion.

    const sequence = Array.from({ length: 6 }).flatMap(() => WORDS);
    const items = [...sequence, ...sequence, ...sequence];

  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="flex items-center gap-8 w-max animate-marquee">
        {items.map((word, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="font-syne font-bold text-2xl sm:text-3xl text-foreground uppercase tracking-wide">
              {word}
            </span>
            <Star
              size={16}
              className="text-yellow-500 fill-yellow-500 shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeWords;
