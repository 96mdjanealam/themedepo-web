import { ctoImg } from "@/constants/images";
import { ArrowRight, CalendarDays, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BookUs = () => (
  <section className="sm:py-20 lg:py-32 bg-background">
    <div className="container mx-auto">
      <div className="relative overflow-hidden bg-[#111111] flex flex-col lg:flex-row items-center justify-between gap-10 p-10 lg:p-16">
        {/* Right-side orange radial glow */}
        <div
          className="absolute right-0 inset-y-0 w-1/2 bg-linear-to-l from-primary/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Left — content */}
        <div className="relative z-10 flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 border border-white/20 bg-white/5 mb-8">
            <span className="w-2 h-2 shrink-0 bg-primary" aria-hidden="true" />
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/70">
              Free Consultation
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-syne font-bold text-4xl sm:text-5xl leading-tight mb-6">
            <span className="text-white block">Let&apos;s build something</span>
            <span className="text-primary block">extraordinary.</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-light-gray leading-relaxed mb-10 max-w-sm">
            Book a 30-minute free consultation and let&apos;s discuss how we can
            help you scale and improve your digital presence to get better
            conversions.
          </p>

          {/* CTA */}
          <Link
            href="/contact-us"
            // target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            <Headset size={14}/>
            Contact Us Now
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right — CTO image card */}
        <div className="relative z-10 shrink-0 w-full lg:w-160">
          <div className="relative overflow-hidden">
            <Image
              src={ctoImg}
              alt="Tahmid Rahman Chowdhury — CTO at ThemeDepo"
              width={420}
              height={300}
              className="object-cover object-top w-full"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            {/* Name overlay at bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 to-transparent">
              <p className="font-syne font-bold md:text-xl text-white">
                Tahmid Rahman Chowdhury
              </p>
              <p className="text-xs mt-1 tracking-widest uppercase">
                <span className="text-primary font-semibold">CTO</span>
                <span className="text-white/50 mx-2">•</span>
                <span className="text-white/50 font-bold">ThemeDepo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookUs;
