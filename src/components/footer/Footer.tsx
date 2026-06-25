"use client";

import {
  footerBg,
  logoWhite,
  person1,
  person2,
  person3,
  facebook,
  linkedin,
  twitter,
  xLogo,
} from "@/constants/images";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Types & data
// ---------------------------------------------------------------------------

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Pages",
    links: [
      { label: "Premium Themes", href: "/themes", badge: "NEW" },
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/our-services" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "Marketplace", href: "https://themeforest.net/user/themedepo1/portfolio" },
      { label: "Storement", href: "https://storement.com" },
      { label: "EleganceIT", href: "https://eleganceit.co" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Hire Us", href: "/hire-us", badge: "AVAILABLE" },
      { label: "Contact Support", href: "/contact-us" },
      // { label: "Partners Program", href: "/partners" },
    ],
  },
];

const SOCIALS = [
  {
    label: "X",
    href: "https://x.com/eleganceIT009",
    Icon: xLogo,
    alt: "X",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/eleganceitsolution",
    Icon: facebook,
    alt: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/eleganceitsolution",
    Icon: linkedin,
    alt: "linkedin",
  },
];

const AVATARS = [person1, person2, person3];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // hook up to API later
    console.log("Subscribe:", email);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0e0e0e] pt-20">
      {/* Background image */}
      <Image
        src={footerBg}
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-top"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Top — CTA + waitlist */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pb-16">
          {/* Left — heading + social proof */}
          <div>
            <h2 className="font-syne font-semibold text-4xl sm:text-5xl leading-tight mb-8">
              <span className="text-white block">Ready to scale?</span>
              <span className="text-primary block">Start Building.</span>
            </h2>

            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {AVATARS.map((avatar, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0e0e0e]"
                  >
                    <Image
                      src={avatar}
                      alt="Customer avatar"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="text-primary fill-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">
                    4.9/5 Rating
                  </span>
                </div>

                <p className=" text-sm text-white/50 leading-5.5">
                  26k+ Happy Customers
                  <br />
                  Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right — waitlist card */}
          <div className="w-full lg:w-105 shrink-0 bg-linear-to-br from-primary/30 via-[#1a1a1a] to-[#1a1a1a] border border-white/10 p-7">
            <h3 className="font-syne font-semibold text-xl text-white mb-2">
              Join the waitlist
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Get early access to premium updates and our upcoming headless
              templates before anyone else.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/15 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20" />

        {/* Middle — link columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <Image
                src={logoWhite}
                alt="ThemeDepo logo"
                width={180}
                height={28}
                className="w-45 h-7 object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-55">
              Crafting premium theme experiences and scalable templates for
              modern brands worldwide.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon, alt }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/60 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Image
                    src={Icon}
                    width={20}
                    height={20}
                    alt={alt}
                    className="w-5 h-5 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/40 mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[0.55rem] font-bold tracking-wide bg-white/10 text-white/70 rounded-sm">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 select-none pointer-events-none overflow-hidden w-full">
        <p className="font-syne opacity-60 font-bold leading-none whitespace-nowrap text-center bg-linear-to-b from-white/30 to-white/0 bg-clip-text text-transparent text-[14vw] sm:text-[16vw] lg:text-[14vw] xl:text-[13vw]">
          THEMEDEPO
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.65rem] tracking-widest uppercase text-white/40">
            © 2026 THEMEDEPO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.65rem] tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <span className="inline-flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-white/40">
              System Status
              <span
                className="w-1.5 h-1.5 rounded-full bg-green-500"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
