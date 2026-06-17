import { themeFilterKey, NavItem, Theme, IPopularTheme } from "./types";
import {
  theme_1,
  theme_2,
  theme_3,
  popularTheme_1,
  popularTheme_2,
  popularTheme_3,
} from "@/constants/images";

// Navbar =============================================================
export const NAV_ITEMS: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "PRODUCTS",
    children: [
      { label: "Solar Panels", href: "/products/solar-panels" },
      { label: "Inverters", href: "/products/inverters" },
      { label: "Batteries", href: "/products/batteries" },
      { label: "Accessories", href: "/products/accessories" },
    ],
  },
  {
    label: "PAGES",
    children: [
      { label: "About Us", href: "/about" },
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
    badge: "FEATURED",
    href: "/themes/arclight",
  },
  {
    id: 2,
    name: "Fresment",
    category: "Ecommerce Store",
    filter: "ecommerce",
    price: "$1,200",
    image: theme_2,
    href: "/themes/fresment",
  },
  {
    id: 3,
    name: "Solarsux",
    category: "Technology",
    filter: "technology",
    price: "$2,400",
    image: theme_3,
    badge: "TRENDING",
    href: "/themes/solarsux",
  },
];

export const popularThemes: IPopularTheme[] = [
  {
    id: 1,
    name: "Solarsux",
    category: "Solar Energy",
    rating: 4.8,
    totalSales: "850+",
    image: popularTheme_1,
    href: "/themes/solarsux",
  },
  {
    id: 2,
    name: "Arclight",
    category: "Architecture",
    rating: 4.9,
    totalSales: "1,200+",
    image: popularTheme_2,
    href: "/themes/arclight",
  },
  {
    id: 3,
    name: "Telenira",
    category: "Online Telemedicine",
    rating: 5.0,
    totalSales: "2,400+",
    image: popularTheme_3,
    href: "/themes/telenira",
  },
];
