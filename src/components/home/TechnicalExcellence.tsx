import { technicalExcellence_bg } from "@/constants/images";
import {
  Layers,
  Search,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";

const MockBrowser = () => (
  <div className="rounded-lg overflow-hidden bg-[#111827] border border-white/10">
    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10">
      {["bg-white/20", "bg-white/20", "bg-white/20"].map((cls, i) => (
        <span key={i} className={`w-2 h-2 rounded-full ${cls}`} />
      ))}
    </div>
    <div className="p-4 flex flex-col gap-2">
      <span className="h-2 w-4/5 rounded-full bg-white/15" />
      <span className="h-2 w-3/5 rounded-full bg-white/10" />
      <span className="h-2 w-2/3 rounded-full bg-white/10" />
    </div>
    <div className="mx-4 mb-4 rounded px-4 py-3 bg-[#2a3047] text-white/40 text-xs font-mono">
      {"<Hero />"}
    </div>
  </div>
);

const TechnicalExcellence = () => (
  <section className="relative overflow-hidden py-20 lg:py-32 px-4 bg-[#0e0e0e]">
    <Image
      src={technicalExcellence_bg}
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-center opacity-70"
      aria-hidden="true"
    />

    <div className="relative z-10 container mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 mb-6">
          <Layers size={14} className="text-primary" strokeWidth={1.5} />
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/60">
            Developer First
          </span>
        </div>
        <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          <span className="text-white block">Technical excellence</span>
          <span className="text-primary block">under the hood.</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left — large feature card */}
        <div className="bg-dark-gray rounded-xl p-8 flex flex-col justify-between lg:w-[45%] min-h-96">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 mb-6">
              <Sparkles size={12} className="text-primary" />
              <span className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-primary">
                Modern Stack
              </span>
            </div>
            <h3 className="font-syne font-semibold text-2xl sm:text-3xl text-white mb-4">
              Built with Tailwind &amp; React
            </h3>
            <p className="text-sm text-light-gray leading-relaxed max-w-xs">
              Developed using industry-leading technologies like Next.js, React,
              and Tailwind CSS. Experience unparalleled performance and
              scalability.
            </p>
          </div>

          {/* Stats + mock browser */}
          <div className="flex items-end justify-between gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-start gap-8 shrink-0">
              <div>
                <p className="font-syne font-semibold text-2xl text-white">
                  100/100
                </p>
                <p className="text-[0.55rem] font-semibold tracking-[0.15em] uppercase text-white/40 mt-1">
                  Lighthouse Score
                </p>
              </div>
              <div className="border-l pl-6 border-white/10">
                <p className="font-syne font-semibold text-2xl text-white">
                  Strict
                </p>
                <p className="text-[0.55rem] font-semibold tracking-[0.15em] uppercase text-white/40 mt-1">
                  TypeScript Typing
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-44 shrink-0">
              <MockBrowser />
            </div>
          </div>
        </div>

        {/* Right — 3 smaller cards */}
        <div className="flex flex-col gap-4 lg:flex-1">
          {/* High Performance */}
          <div className="bg-dark-gray rounded-xl p-8 flex flex-col justify-between min-h-44 relative">
            <div>
              <h3 className="font-syne font-semibold text-xl text-white mb-3">
                High Performance
              </h3>
              <p className="text-sm text-light-gray leading-relaxed max-w-sm">
                Optimized for speed with clean code, lazy loading, and modern
                web vitals practices to ensure lightning-fast load times.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Zap size={16} className="text-light-gray" strokeWidth={1.5} />
            </div>
          </div>

          {/* SEO + Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 h-full">
            <div className="bg-dark-gray rounded-xl p-8 flex flex-col gap-6 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#111827] border border-medium-gray flex items-center justify-center">
                <Search size={18} className="text-blue-500" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-syne font-semibold text-lg text-white mb-2">
                  SEO Optimized
                </h3>
                <p className="text-sm text-light-gray leading-relaxed">
                  Built with semantic HTML and optimized for search engine
                  visibility.
                </p>
              </div>
            </div>

            <div className="bg-dark-gray rounded-xl p-8 flex flex-col gap-6 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[#111827] border border-medium-gray flex items-center justify-center">
                <Smartphone
                  size={18}
                  className="text-violet-500"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-syne font-semibold text-lg text-white mb-2">
                  Fully Responsive
                </h3>
                <p className="text-sm text-light-gray leading-relaxed">
                  Pixel-perfect rendering on desktops, tablets, and mobile
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalExcellence;
