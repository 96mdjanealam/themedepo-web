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
}

export interface MobileNavItemProps {
  item: NavItem;
  onNavigate: () => void;
}

// Themes types ================================================================

export type themeFilterKey = "all" | "corporate" | "ecommerce" | "technology";

export interface Theme {
  id: number;
  name: string;
  category: string;
  filter: themeFilterKey;
  price: string;
  image: StaticImageData;
  badge?: "FEATURED" | "TRENDING";
  href: string;
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