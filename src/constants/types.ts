import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

// Navbar types ===============================================================

export interface SubMenuItem {
  label: string;
  href: string;
}
export interface NavLinkProps {
  item: NavItem;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: SubMenuItem[];
}

export interface DropdownMenuProps {
  items: SubMenuItem[];
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export interface MobileNavItemProps {
  item: NavItem;
  onNavigate: () => void;
}

// Themes types ================================================================

export type themeFilterKey = "all" | "corporate" | "ecommerce" | "technology";

interface themeKeyFeature {
  title: string;
  desc: string;
  Icon: LucideIcon;
}

export interface Theme {
  id: number;
  name: string;
  category: string;
  filter: themeFilterKey;
  price: string;
  image: StaticImageData;
  bannerImg: StaticImageData;
  badge?: "FEATURED" | "TRENDING";
  href: string;
  purchaseLink: string;
  previewLink: string;
  overview: string;
  techStack: string[];
  keyFeatures: themeKeyFeature[];
  rating?: number;
}

export interface IPopularTheme {
  id: number;
  name: string;
  category: string;
  rating: number;
  totalSales: string;
  image: StaticImageData;
  href: string;
}
