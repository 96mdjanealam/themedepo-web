import { servicesPageImg1 } from "@/constants/images";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CodeXml, 
  Globe, 
  Megaphone, 
  Monitor, 
  Smartphone 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EverythingNeedToKnow = () => {
  return (
    <section className="bg-background px-4 py-20 lg:py-32">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <header className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-syne text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Everything you need to <span className="text-primary">scale</span>.
          </h2>
          <p className="text-medium-gray mt-4 max-w-2xl leading-relaxed">
            We provide end-to-end digital services, from pixel-perfect UI design to scalable
            enterprise architecture.
          </p>
        </header>

        {/* Master Asymmetric Grid Frame: Refactored to Grid-cols-12 for proper alignment */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* ========================================================================= */}
          {/* ROW 1: LEFT SIDE - FLAGSHIP WEBSITE UI/UX CARD (Spans 7 Columns)          */}
          {/* ========================================================================= */}
          <div className="group relative flex flex-col justify-between overflow-hidden border border-gray-200 bg-[#f9f9fb] p-8 sm:flex-row sm:p-12 lg:col-span-7 lg:min-h-[30rem]">
            {/* Content Container */}
            <div className="flex flex-col justify-between z-10 sm:w-1/2">
              {/* Top Structural Icon Frame */}
              <div className="bg-background flex h-12 w-12 items-center justify-center border border-gray-200 text-foreground shadow-xs">
                <Monitor size={20} strokeWidth={1.5} />
              </div>
              
              {/* Typography Details */}
              <div className="mt-16 sm:mt-0">
                <div className="mb-4 inline-flex items-center gap-1.5 border border-gray-300 bg-background px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-medium-gray">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  Service Highlight
                </div>
                <h3 className="font-syne text-foreground text-3xl font-bold leading-tight">
                  Website UI/UX
                </h3>
                <p className="text-medium-gray mt-3 text-sm leading-relaxed">
                  We craft highly converting, visually stunning digital experiences combining spatial aesthetics with performance.
                </p>
              </div>
            </div>

            {/* Absolute Placed Floating Monitor Preview */}
            <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-102 sm:absolute sm:right-0 sm:h-[90%] sm:w-[45%]">
              <Image
                src={servicesPageImg1}
                alt="Website design template preview inside monitor"
                fill
                sizes="(max-width: 640px) 100vw, 35vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ROW 1: RIGHT SIDE - NESTED BLOCK TRACKS (Spans 5 Columns)                 */}
          {/* ========================================================================= */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            
            {/* Top Right: Mobile Apps Card (Dark Theme Context) */}
            <Link 
              href="/services/mobile-apps"
              className="group relative flex min-h-[14.5rem] flex-col justify-between border border-dark-gray bg-[#0d0d11] p-8 transition-colors duration-300 hover:bg-[#121217]"
            >
              {/* Header Interface */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-dark-gray bg-[#16161c] text-primary shadow-[0_0_15px_rgba(232,80,2,0.15)]">
                  <Smartphone size={20} strokeWidth={1.5} />
                </div>
                <ArrowUpRight size={18} className="text-medium-gray transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              {/* Body */}
              <div>
                <h3 className="font-syne text-white text-xl font-semibold">
                  Mobile Apps
                </h3>
                <p className="text-light-gray mt-2 text-sm leading-relaxed max-w-sm">
                  Pixel-perfect, intuitive native interfaces for iOS and Android ecosystems.
                </p>
              </div>
            </Link>

            {/* Bottom Right: Web Dev Card (Brand Highlight Theme Context) */}
            <div className="flex min-h-[14.5rem] flex-col items-center justify-center bg-primary p-8 text-center text-white transition-all duration-300 hover:brightness-105">
              <div className="mb-4 text-white/80">
                <Globe size={32} strokeWidth={1.25} />
              </div>
              <h3 className="font-syne text-xl font-bold tracking-wide">
                Web Dev
              </h3>
              <p className="text-white/80 mt-1 text-sm max-w-xs">
                Scalable modern full-stack systems.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ROW 2: LEFT SIDE - CUSTOM SOFTWARE CARD (Spans 6 Columns)                 */}
          {/* ========================================================================= */}
          <div className="group flex min-h-[15rem] flex-col justify-between border border-gray-200 bg-[#f4f4f6] p-8 transition-colors duration-300 hover:bg-primary/5 lg:col-span-6">
            <div className="bg-background flex h-10 w-10 items-center justify-center border border-gray-200 text-medium-gray shadow-xs">
              <CodeXml size={16} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-syne text-foreground text-xl font-bold">
                Custom Software
              </h3>
              <p className="text-medium-gray mt-2 text-sm leading-relaxed max-w-md">
                Complex logic mapped to elegant engineering architecture.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ROW 2: RIGHT SIDE - DIGITAL MARKETING ACTION BAR CARD (Spans 6 Columns)    */}
          {/* ========================================================================= */}
          <Link
            href="/services/marketing"
            className="group flex min-h-[15rem] items-end justify-between border border-dark-gray bg-foreground p-8 text-white transition-colors duration-300 lg:col-span-6"
          >
            {/* Left Content Column */}
            <div className="flex h-full flex-col justify-between">
              <div className="text-primary/90 mt-2">
                <Megaphone size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-syne text-xl font-medium tracking-wide">
                  Digital Marketing
                </h3>
                <p className="text-light-gray mt-2 text-sm leading-relaxed">
                  Data-driven strategies designed to scale revenue.
                </p>
              </div>
            </div>

            {/* Right Side Sharp Interactive Action Trigger */}
            <div className="bg-background text-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default EverythingNeedToKnow;