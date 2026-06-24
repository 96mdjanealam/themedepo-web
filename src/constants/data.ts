import {
  Code2,
  Gauge,
  Globe,
  HeartHandshake,
  LayoutTemplate,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
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
    price: "$16",
    image: theme_1,
    bannerImg: themeBnrs.arclightBnr,
    badge: "FEATURED",
    rating: 5.0,
    href: "/themes/arclight",
    purchaseLink:
      "https://themeforest.net/item/arclight-architecture-interior-design-figma-template/61508053",
    previewLink:
      "",
    overview:
      "ARCLIGHT is a modern, elegant, and professionally crafted Figma template designed for interior design studios, architecture firms, construction companies, and creative agencies. Whether you are building a website for an architecture firm, interior design studio, or creative professional, ARCLIGHT delivers a contemporary, minimal, and visually engaging experience.",
    techStack: ["Figma"],
    keyFeatures: [
      {
        title: "Modern UI",
        desc: "A sleek and minimal design crafted specifically for architecture, interior design, and creative portfolio websites.",
        Icon: Palette,
      },
      {
        title: "Responsive Layouts",
        desc: "Dedicated desktop and mobile layouts ensure a seamless browsing experience across all devices.",
        Icon: Smartphone,
      },
      {
        title: "Reusable Components",
        desc: "Well-structured layers and design elements that make editing, customization, and maintenance effortless.",
        Icon: Code2,
      },
      {
        title: "Portfolio Focused",
        desc: "A visual-first approach that highlights projects with elegant layouts and impactful presentation.",
        Icon: Search,
      },
      {
        title: "Scalable Structure",
        desc: "Flexible architecture designed to accommodate expanding portfolios and growing project collections.",
        Icon: Zap,
      },
    ],
  },
  {
    id: 2,
    name: "Arclight HTML",
    category: "Architecture",
    filter: "corporate",
    price: "$17",
    image: theme_1,
    bannerImg: themeBnrs.arclightHtmlBnr,
    rating: 5.0,
    href: "/themes/arclightHtml",
    purchaseLink:
      "https://themeforest.net/item/arclight-architecture-interior-design-html-template/62461839",
    previewLink: "https://arclight-preview.themedepo.com",
    overview:
      "Arclight – Modern Architecture Design HTML Template is a sleek, contemporary, and professionally designed template created for architecture firms, interior design studios, construction companies, and creative professionals who want a strong and elegant online presence.",
    techStack: [
      "HTML",
      "CSS3",
      "JavaScript (ES6)",
      "Anime.js",
      "Lucide Icons",
      "Google Fonts",
    ],
    keyFeatures: [
      {
        title: "Crossbrowser compatibility",
        desc: "Arclight is fully compatible with all major browsers, including IE9+, Chrome, Firefox, and Safari, ensuring a smooth and consistent experience for all users.",
        Icon: Gauge,
      },
      {
        title: "Touch Friendly",
        desc: "Smooth and effortless browsing on touch-enabled devices for a better user experience.",
        Icon: ShieldCheck,
      },
      {
        title: "Lifetime Updates and User Support",
        desc: "Each purchase of the template includes lifetime access to all future updates at no additional cost. You will also receive six months of user support, with the option to extend the support period if needed.",
        Icon: Globe,
      },
      {
        title: "Mobile First",
        desc: "Designed for the mobile shopper — fast load times, thumb-friendly navigation, and optimized checkout.",
        Icon: Smartphone,
      },
      {
        title: "Anime.js Animation",
        desc: "Anime.js is a high-performance JavaScript animation library widely used for creating smooth and dynamic animations across modern web applications.",
        Icon: HeartHandshake,
      },
    ],
  },
  {
    id: 3,
    name: "Solarsux",
    category: "Technology",
    filter: "technology",
    price: "$16",
    image: theme_3,
    bannerImg: themeBnrs.solarsuxBnr,
    badge: "TRENDING",
    rating: 5.0,
    href: "/themes/solarsux",
    purchaseLink:
      "https://themeforest.net/item/solarsux-solar-energy-company-figma-template/62617018",
    previewLink:
      "",
    overview:
      "SOLARSUX is a modern, clean, and professionally crafted Figma template designed for solar energy companies, renewable energy businesses, green technology startups, and eco-friendly service providers.",
    techStack: ["Figma"],
    keyFeatures: [
      {
        title: "Energy UI",
        desc: "Clean, modern interface tailored for solar and energy businesses.",
        Icon: LayoutTemplate,
      },
      {
        title: "Quote & Contact",
        desc: "Dedicated sections for inquiries, quotes, and communication.",
        Icon: Zap,
      },
      {
        title: "Blog Pages",
        desc: "Present articles, news, and insights in a readable format.",
        Icon: Search,
      },
      {
        title: "Professional Layout",
        desc: "Structured pages designed for clarity and easy navigation.",
        Icon: Code2,
      },
      {
        title: "Easy Customization",
        desc: "Flexible design system built for scalability and branding.",
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
    rating: 5.0,
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
    rating: 5.0,
    totalSales: "850+",
    image: popularTheme_1,
    href: "/themes/solarsux",
  },
];
