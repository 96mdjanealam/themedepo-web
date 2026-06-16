import { NavItem } from "./types";

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