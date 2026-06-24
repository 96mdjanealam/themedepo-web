import { Code2, Gauge, Globe, HeartHandshake, LayoutTemplate, Palette, Search, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { themeFilterKey, NavItem, Theme, IPopularTheme } from "./types";
import {
  theme_1,
  theme_2,
  theme_3,
  popularTheme_1,
  popularTheme_2,
  popularTheme_3,
} from "@/constants/images";
import { themeBnrs } from "@/constants/images";

// Navbar =============================================================
export const NAV_ITEMS: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "THEMES",
    href: "/themes",
  },
  // {
  //   label: "PRODUCTS",
  //   children: [
  //     { label: "Solar Panels", href: "/products/solar-panels" },
  //     { label: "Inverters", href: "/products/inverters" },
  //     { label: "Batteries", href: "/products/batteries" },
  //     { label: "Accessories", href: "/products/accessories" },
  //   ],
  // },
  {
    label: "PAGES",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Team", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "SUPPORT",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Documentation", href: "/docs" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
];

// Themes ==========================================================
export const themeFilters: { label: string; key: themeFilterKey }[] = [
  { label: "All", key: "all" },
  { label: "Corporate", key: "corporate" },
  { label: "Ecommerce", key: "ecommerce" },
  { label: "Technology", key: "technology" },
];

export const THEMES: Theme[] = [
  {
    id: 1,
    name: "Arclight",
    category: "Architecture",
    filter: "corporate",
    price: "$850",
    image: theme_1,
    bannerImg: themeBnrs.arclightBnr, // replace with actual banner image when available
    badge: "FEATURED",
    href: "/themes/arclight",
    purchaseLink: "https://themeforest.net/arclight",
    previewLink: "https://arclight.themedepo.com",
    overview:
      "Arclight is a premium architecture and interior design theme built for studios and agencies who demand pixel-perfect presentation. Clean grids, cinematic imagery support, and performance-first engineering make it the go-to choice for design professionals looking to impress clients from the first scroll.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    keyFeatures: [
      {
        title: "Pixel-Perfect Design",
        desc: "Every layout detail is crafted to match modern architecture studio aesthetics with precise spacing and typography.",
        Icon: Palette,
      },
      {
        title: "Lightning Fast",
        desc: "Optimized for Core Web Vitals with lazy loading, image optimization, and minimal JavaScript overhead.",
        Icon: Zap,
      },
      {
        title: "Fully Responsive",
        desc: "Flawless rendering across all screen sizes — from large desktop monitors to mobile devices.",
        Icon: Smartphone,
      },
      {
        title: "SEO Ready",
        desc: "Built with semantic HTML and structured data to help your site rank higher on search engines.",
        Icon: Search,
      },
      {
        title: "Clean Codebase",
        desc: "Strictly typed TypeScript with modular component architecture making customization straightforward.",
        Icon: Code2,
      },
    ],
  },
  {
    id: 2,
    name: "Arclight HTML",
    category: "Architecture",
    filter: "corporate",
    price: "$1,200",
    image: theme_1,
    bannerImg: themeBnrs.arclightHtmlBnr,
    href: "/themes/arclightHtml",
    purchaseLink: "https://themeforest.net/fresment",
    previewLink: "https://fresment.themedepo.com",
    overview:
      "Fresment is a high-conversion ecommerce theme designed for modern online stores. With a focus on product discovery, seamless cart experience, and trust-building elements, Fresment helps you turn visitors into buyers. Built for speed and scalability, it handles everything from small boutiques to large product catalogs.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL"],
    keyFeatures: [
      {
        title: "Conversion Optimized",
        desc: "Strategically designed product pages, CTAs, and checkout flow to maximize your store's conversion rate.",
        Icon: Gauge,
      },
      {
        title: "Secure Payments",
        desc: "Built-in support for Stripe and Paddle with industry-standard encryption and PCI compliance.",
        Icon: ShieldCheck,
      },
      {
        title: "Global Ready",
        desc: "Multi-currency and multi-language support to help you sell to customers worldwide.",
        Icon: Globe,
      },
      {
        title: "Mobile First",
        desc: "Designed for the mobile shopper — fast load times, thumb-friendly navigation, and optimized checkout.",
        Icon: Smartphone,
      },
      {
        title: "Dedicated Support",
        desc: "6 months of premium support and lifetime updates included with every purchase.",
        Icon: HeartHandshake,
      },
    ],
  },
  {
    id: 3,
    name: "Solarsux",
    category: "Technology",
    filter: "technology",
    price: "$2,400",
    image: theme_3,
    bannerImg: themeBnrs.solarsuxBnr,
    badge: "TRENDING",
    href: "/themes/solarsux",
    purchaseLink: "https://themeforest.net/solarsux",
    previewLink: "https://solarsux.themedepo.com",
    overview:
      "Solarsux is a bold, modern SaaS and technology theme built for startups and product companies ready to scale. From animated hero sections to feature-rich pricing tables, every component is engineered to communicate value, build trust, and drive sign-ups. A complete solution for your next big launch.",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    keyFeatures: [
      {
        title: "SaaS Optimized Layout",
        desc: "Purpose-built sections for features, pricing, testimonials, and onboarding — everything a SaaS product page needs.",
        Icon: LayoutTemplate,
      },
      {
        title: "Performance First",
        desc: "100/100 Lighthouse score out of the box with server-side rendering and edge-optimized delivery.",
        Icon: Zap,
      },
      {
        title: "SEO & Meta Ready",
        desc: "Dynamic meta tags, Open Graph support, and structured data for maximum discoverability.",
        Icon: Search,
      },
      {
        title: "TypeScript Strict",
        desc: "Fully typed codebase with zero any types — maintainable, scalable, and developer-friendly.",
        Icon: Code2,
      },
      {
        title: "Responsive by Default",
        desc: "Every section adapts beautifully across devices with a mobile-first design approach.",
        Icon: Smartphone,
      },
    ],
  },
];

export const popularThemes: IPopularTheme[] = [
  {
    id: 1,
    name: "Arclight",
    category: "Architecture",
    rating: 4.9,
    totalSales: "1,200+",
    image: popularTheme_2,
    href: "/themes/arclight",
  },
  {
    id: 2,
    name: "Telenira",
    category: "Online Telemedicine",
    rating: 5.0,
    totalSales: "2,400+",
    image: popularTheme_3,
    href: "/themes/telenira",
  },
  {
    id: 3,
    name: "Solarsux",
    category: "Solar Energy",
    rating: 4.8,
    totalSales: "850+",
    image: popularTheme_1,
    href: "/themes/solarsux",
  },
];
