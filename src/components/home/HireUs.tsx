import { hire_us_bg } from "@/constants/images";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HireUs = () => (
  <section className="bg-background pb-10">
    <div className="container mx-auto shadow-xl shadow-foreground/25">
      <div className="relative overflow-hidden">
        {/* Background image */}
        <Image
          src={hire_us_bg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/70" /> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 p-10">
          {/* Left — icon + text */}
          <div className="flex items-start gap-6">
            {/* Icon box */}
            <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-white/20 bg-white/5 text-primary">
              <Sparkles size={20} strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-2">
                Looking to Hire Us?
              </h2>
              <p className="text-sm text-light-gray leading-relaxed max-w-sm">
                We build pixel-perfect, zero-latency WordPress themes and
                enterprise plugins tailored precisely to your requirements.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/hire-us"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-primary text-foreground hover:text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            Hire Us Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HireUs;
