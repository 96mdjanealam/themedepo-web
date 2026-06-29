import {
  Briefcase,
  Building2,
  Component,
  FileText,
  Images,
  Newspaper,
  Palette,
  Settings,
  Smartphone,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";
import { themeFilterKey, NavItem, Theme, IPopularTheme } from "./types";
import {
  theme_1,
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
      { label: "Portfolio", href: "/portfolio" },
      { label: "Our Services", href: "/our-services" },
      { label: "About Us", href: "/about-us" },
      // { label: "Our Team", href: "/team" },
      { label: "Hire Us", href: "/hire-us" },
      // { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact-us",
  },
  // {
  //   label: "SUPPORT",
  //   children: [
  //     { label: "Contact", href: "/contact" },
  //     { label: "Documentation", href: "/docs" },
  //     { label: "Warranty", href: "/warranty" },
  //   ],
  // },
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
    href: "/themes/1",
    purchaseLink:
      "https://themeforest.net/item/arclight-architecture-interior-design-figma-template/61508053",
    previewLink: "",
    overview:
      "ARCLIGHT is a modern and sophisticated Figma template created for architecture firms, interior design studios, construction companies, and creative professionals. Combining clean aesthetics with thoughtful layouts, it provides everything needed to present projects, services, and brand identity in a compelling way. Designed with usability and visual impact in mind, ARCLIGHT offers a polished foundation for creating professional architecture and interior design websites while remaining easy to customize and adapt to different business needs.",
    techStack: ["Figma"],
    keyFeatures: [
      {
        title: "Modern Design System",
        desc: "Elegant and professionally crafted interfaces tailored for architecture and interior design brands.",
        Icon: Palette,
      },
      {
        title: "Responsive Layouts",
        desc: "Designed with desktop and mobile experiences in mind to ensure consistency across screen sizes.",
        Icon: Smartphone,
      },
      {
        title: "Reusable Components",
        desc: "Organized components and design elements make customization faster and more efficient.",
        Icon: Component,
      },
      {
        title: "Portfolio Showcase",
        desc: "Dedicated project and gallery sections help present architectural work in a visually engaging manner.",
        Icon: Images,
      },
      {
        title: "Prototype Ready",
        desc: "Structured for interactive prototyping, allowing smooth presentation and user-flow demonstrations.",
        Icon: Workflow,
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
    href: "/themes/2",
    purchaseLink:
      "https://themeforest.net/item/arclight-architecture-interior-design-html-template/62461839",
    previewLink: "https://arclight-preview.themedepo.com",
    overview:
      "Arclight is a modern and visually striking HTML template crafted for architecture firms, interior design studios, construction companies, and creative agencies. Featuring elegant layouts, smooth interactions, and a refined design aesthetic, it helps businesses showcase their projects, services, and expertise with confidence. Built with clean code and responsive design principles, Arclight delivers a seamless experience across all devices while maintaining the professional look expected from premium architecture and design brands.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Anime.js",
      "Lucide Icons",
      "Google Fonts",
    ],
    keyFeatures: [
      {
        title: "Modern Architecture Design",
        desc: "Professionally crafted layouts tailored for architecture, interior design, and construction businesses.",
        Icon: Building2,
      },
      {
        title: "Fully Responsive",
        desc: "Optimized for desktops, tablets, and mobile devices to provide a seamless viewing experience.",
        Icon: Smartphone,
      },
      {
        title: "Smooth Animations",
        desc: "Powered by Anime.js to create engaging transitions and interactive visual experiences.",
        Icon: Sparkles,
      },
      {
        title: "Project Showcase",
        desc: "Beautiful portfolio and gallery sections designed to highlight projects and case studies effectively.",
        Icon: Images,
      },
      {
        title: "Easy Customization",
        desc: "Well-structured code and reusable components make editing, branding, and maintenance simple.",
        Icon: Settings,
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
    href: "/themes/3",
    purchaseLink:
      "https://themeforest.net/item/solarsux-solar-energy-company-figma-template/62617018",
    previewLink: "",
    overview:
      "SOLARSUX is a modern and professionally designed Figma template created specifically for solar energy companies, renewable energy providers, and eco-friendly technology businesses. The template combines clean aesthetics with a well-structured layout to help organizations showcase their services, projects, and sustainability initiatives effectively. With thoughtfully designed pages and reusable components, SOLARSUX provides a solid foundation for building a trustworthy and engaging online presence.",

    techStack: ["Figma"],

    keyFeatures: [
      {
        title: "Modern Energy Design",
        desc: "Clean and visually appealing layouts crafted for solar, renewable energy, and sustainability-focused businesses.",
        Icon: Sun,
      },
      {
        title: "Quote Request System",
        desc: "Dedicated sections for service inquiries, quote requests, and customer communication to boost lead generation.",
        Icon: FileText,
      },
      {
        title: "Project Showcase",
        desc: "Highlight completed installations, success stories, and case studies with organized project presentation layouts.",
        Icon: Briefcase,
      },
      {
        title: "Blog & Insights",
        desc: "Share industry news, educational content, and company updates through professionally designed blog pages.",
        Icon: Newspaper,
      },
      {
        title: "Fully Customizable",
        desc: "Built with reusable components and organized design systems for easy branding and future scalability.",
        Icon: Settings,
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
    totalSales: "100+",
    image: popularTheme_2,
    href: "/themes/1",
  },
  {
    id: 2,
    name: "Arclight HTML",
    category: "Architecture",
    rating: 5.0,
    totalSales: "100+",
    image: popularTheme_2,
    href: "/themes/2",
  },
  {
    id: 3,
    name: "Solarsux",
    category: "Solar Energy",
    rating: 5.0,
    totalSales: "850+",
    image: popularTheme_1,
    href: "/themes/3",
  },
];
