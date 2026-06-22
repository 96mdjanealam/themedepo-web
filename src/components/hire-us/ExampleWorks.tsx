import { popularThemes } from "@/constants/data";
import { IPopularTheme } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------
const ThemeCard = ({ theme }: { theme: IPopularTheme }) => (
  <Link 
    href={theme.href} 
    className="group flex flex-col text-center"
  >
    {/* Image Container */}
    <div className="relative h-80 sm:h-94.25 overflow-hidden rounded-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100">
      <Image
        src={theme.image}
        alt={`${theme.name} theme preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Card Body */}
    <div className="flex flex-col gap-5 p-6 text-white lg:text-transparent">
      <h3 className="font-syne text-xl font-bold transition-colors duration-300 group-hover:text-white">
        {theme.name.toUpperCase()}
      </h3>
      <p className="transition-colors duration-300 group-hover:text-white/50">
        {theme.category}
      </p>
    </div>
  </Link>
);

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
const ExampleWorks = () => (
  <section className="bg-linear-to-t from-primary-dark to-foreground to-50% px-4 py-20 lg:py-32">
    <div className="container mx-auto">
      {/* Header */}
      <header className="mb-14 flex flex-col items-center text-center">
        <span className="mb-4 border border-white/50 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/80">
          See our works
        </span>
        <h2 className="font-syne text-4xl font-bold text-background sm:text-5xl lg:text-6xl">
          Example of our works
        </h2>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularThemes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  </section>
);

export default ExampleWorks;