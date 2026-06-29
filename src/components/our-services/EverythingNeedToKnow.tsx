import { servicesPageImg1 } from "@/constants/images";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Globe,
  LayoutTemplate,
  Megaphone,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Shared card base classes
// ---------------------------------------------------------------------------

const darkCard =
  "relative bg-[#111111] p-8 flex flex-col justify-between min-h-52 group";
const lightCard =
  "relative overflow-hidden bg-gray-100 p-8 flex flex-col justify-between min-h-52";
const iconBox = "w-10 h-10 flex items-center justify-center shrink-0";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const EverythingNeedToKnow = () => (
  <section className="py-20 lg:py-32 px-4 bg-background">
    <div className="container mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-5">
          Everything you need to <span className="text-primary">scale</span>.
        </h2>
        <p className="text-sm sm:text-base text-medium-gray leading-relaxed max-w-md">
          We provide end-to-end digital services, from pixel-perfect UI design
          to scalable enterprise architecture.
        </p>
      </div>

      {/* Bento */}
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Website UI/UX — large card */}
          <div className="relative overflow-hidden bg-gray-100 border border-gray-100 flex flex-col lg:flex-row lg:justify-between min-h-96 lg:w-3/5 p-8">
            <div className="flex flex-col justify-between lg:w-3/5 z-10">
              <div
                className={`${iconBox} border border-gray-200 bg-white text-foreground`}
              >
                <LayoutTemplate size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 mb-3 bg-white border px-2 py-1 border-gray-200">
                  <span
                    className="w-2 h-2 bg-primary shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-primary">
                    Flagship Service
                  </span>
                </div>
                <h3 className="font-syne font-bold text-3xl text-foreground mb-3">
                  Website UI/UX
                </h3>
                <p className="text-sm text-medium-gray leading-relaxed">
                  We craft highly converting, visually stunning digital
                  experiences combining spatial aesthetics with performance.
                </p>
              </div>
            </div>

            <div className="relative min-h-64 aspect-3/4 mt-6 lg:mt-0">
              <Image
                src={servicesPageImg1}
                alt="Website UI/UX service preview"
                loading="eager"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Mobile Apps + Web Dev */}
          <div className="flex flex-col gap-6 lg:flex-1">
            {/* Mobile Apps */}
            <div className={darkCard}>
              <div className="flex items-start justify-between">
                <div className={`${iconBox} bg-primary/20 text-primary`}>
                  <Smartphone size={18} strokeWidth={1.5} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/30 group-hover:text-primary transition-colors duration-200"
                />
              </div>
              <div>
                <h3 className="font-syne font-bold text-2xl text-white mb-2">
                  User Interface Design
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Pixel-perfect, intuitive native interfaces.
                </p>
              </div>
            </div>

            {/* Web Dev */}
            <div className="bg-primary p-8 flex flex-col items-center justify-center text-center gap-4 min-h-44">
              <Globe size={32} className="text-white/80" strokeWidth={1.5} />
              <div>
                <h3 className="font-syne font-bold text-2xl text-white mb-1">
                  Web Dev
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Scalable modern full-stack systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Custom Software */}
          <div className={`${lightCard} flex-1`}>
            <div
              className="absolute bottom-4 right-6 text-gray-200 pointer-events-none"
              aria-hidden="true"
            >
              <Code2 size={120} strokeWidth={0.5} />
            </div>
            <div
              className={`${iconBox} border border-gray-200 bg-white text-foreground z-10`}
            >
              <Code2 size={18} strokeWidth={1.5} />
            </div>
            <div className="z-10">
              <h3 className="font-syne font-bold text-2xl text-foreground mb-2">
                Custom Software
              </h3>
              <p className="text-sm text-medium-gray leading-relaxed max-w-xs">
                Complex logic mapped to elegant engineering architecture.
              </p>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className={`${darkCard} flex-1`}>
            <div className="flex items-start justify-between">
              <Megaphone
                size={24}
                className="text-white/60"
                strokeWidth={1.5}
              />
              {/* <Link
                href="#"
                className={`${iconBox} bg-white text-foreground hover:bg-primary hover:text-white transition-colors duration-200`}
                aria-label="View Digital Marketing service"
              >
                <ArrowRight size={16} />
              </Link> */}
            </div>
            <div>
              <h3 className="font-syne font-bold text-2xl text-white mb-2">
                Digital Marketing
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Data-driven strategies designed to scale revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EverythingNeedToKnow;
