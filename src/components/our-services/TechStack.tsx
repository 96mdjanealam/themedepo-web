import Image, { StaticImageData } from "next/image";
import { stackImages } from "@/constants/images";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface Tech {
  name: string;
  image?: StaticImageData;
}

// Add image imports here when ready, e.g:
// import nextjsIcon from "@/constants/images/tech/nextjs.png";

const TECHS: Tech[] = [
  { name: "Next.js", image: stackImages.nextjs },
  { name: "Node.js", image: stackImages.nodejs },
  { name: "Tailwind CSS", image: stackImages.tailwind },
  { name: "TypeScript", image: stackImages.typescript },
  { name: "PostgreSQL", image: stackImages.postGreSQL },
  { name: "React", image: stackImages.react },
  { name: "Prisma", image: stackImages.prismaOrm },
  { name: "Laravel", image: stackImages.laravel },
  { name: "MySQL", image: stackImages.mySql },
  { name: "PHP", image: stackImages.php },
  { name: "Figma", image: stackImages.figma },
];

// ---------------------------------------------------------------------------
// Tech card
// ---------------------------------------------------------------------------

const TechCard = ({ tech }: { tech: Tech }) => (
  <div className="flex flex-col items-center aspect-square justify-center gap-4 p-6 border border-gray-200 w-36 shrink-0 transition-opacity duration-200 bg-light-gray/5 ">
    {/* Icon or fallback initial */}
    <div className="w-16 h-16  flex items-center justify-center border border-gray-200 rounded-sm bg-white">
      {tech.image ? (
        <Image
          src={tech.image}
          alt={tech.name}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      ) : (
        <span className="text-lg font-bold text-gray-300 select-none">
          {tech.name.charAt(0)}
        </span>
      )}
    </div>

    {/* Name */}
    <p className="text-xs font-semibold text-foreground text-center leading-tight">
      {tech.name}
    </p>
  </div>
);

// ---------------------------------------------------------------------------
// Marquee row
// ---------------------------------------------------------------------------

const TechMarquee = () => {
  const base = [...TECHS, ...TECHS, ...TECHS];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 inset-y-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 w-max animate-marquee">
        {base.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

const TechStack = () => (
  <section className="py-20 lg:py-32 bg-background overflow-hidden">
    {/* Header */}
    <div className="flex flex-col items-center text-center mb-14 px-4">
      <div className="inline-flex items-center px-4 py-2 border border-gray-200 mb-6">
        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-medium-gray">
          Our Capabilities
        </span>
      </div>
      <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5">
        Modern Tech Stack
      </h2>
      <p className="text-sm sm:text-base text-medium-gray leading-relaxed max-w-md">
        We utilize the latest edge technologies to build robust, scalable, and
        secure digital foundations.
      </p>
    </div>

    {/* Marquee */}
    <TechMarquee />
  </section>
);

export default TechStack;
