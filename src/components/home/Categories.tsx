import { categoryBg } from "@/constants/images";
import { Layers, LayoutGrid, Monitor, Puzzle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ComponentType } from "react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface Category {
  label: string;
  count: string;
  href: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

const CATEGORIES: Category[] = [
  { label: "Web Template", count: "60+ Templates", href: "/categories/web-template", Icon: Monitor },
  { label: "WordPress Theme", count: "100+ Templates", href: "/categories/wordpress-theme", Icon: LayoutGrid },
  { label: "Smart Plugins", count: "5+ Templates", href: "/categories/smart-plugins", Icon: Puzzle },
  { label: "UI Template", count: "24+ Templates", href: "/categories/ui-template", Icon: Layers },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Categories = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map(({ label, count, href, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group relative overflow-hidden border border-white/10 hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center gap-6 py-16 px-8 text-center lg:h-110.75"
            >
              {/* Card background image */}
              <Image
                src={categoryBg}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Icon box */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-dark-gray group-hover:bg-primary transition-colors duration-300 text-white">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-syne font-semibold text-lg text-white mb-1">{label}</p>
                  <p className="text-sm text-white/40 group-hover:text-primary transition-colors duration-300">
                    {count}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;