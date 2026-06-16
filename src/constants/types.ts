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