"use client";

import { NAV_ITEMS } from "@/constants/data";
import { logo } from "@/constants/images";
import {
  DropdownMenuProps,
  MobileNavItemProps,
  NavLinkProps,
} from "@/constants/types";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DropdownMenu = ({ items, isOpen }: DropdownMenuProps) => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48
      bg-white border border-gray-100 shadow-lg
      transition-all duration-200 origin-top z-50
      ${isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}
    `}
  >
    <ul className="py-1">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block px-4 py-2.5 tracking-widest hover:text-primary hover:bg-gray-50 transition-colors duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NavLink = ({ item }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasChildren = Boolean(item.children?.length);
  const baseClass =
    "flex items-center gap-1 cursor-pointer text-sm tracking-[0.2rem] font-bold transition-colors duration-200 hover:text-primary";

  if (!hasChildren) {
    return (
      <li>
        <Link href={item.href ?? "/"} className={baseClass}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        className={`${baseClass} bg-transparent border-none`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <DropdownMenu items={item.children!} isOpen={isOpen} />
    </li>
  );
};

// ---------------------------------------------------------------------------
// Mobile accordion item
// ---------------------------------------------------------------------------

const MobileNavItem = ({ item, onNavigate }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href ?? "/"}
          onClick={onNavigate}
          className="block py-3 text-sm tracking-[0.2rem] font-bold border-b border-gray-100 hover:text-primary transition-colors duration-150"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-3 text-sm tracking-[0.2rem] font-bold hover:text-primary transition-colors duration-150 bg-transparent border-none"
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-64" : "max-h-0"}`}
      >
        <ul className="pb-2 pl-4">
          {item.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block py-2 text-xs tracking-widest text-medium-gray hover:text-primary transition-colors duration-150"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 shadow-md bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Company logo"
            width={202}
            height={31}
            className="w-50.5 h-7.75 object-contain"
            loading="eager"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/hire-us"
          className="hidden lg:inline-flex items-center px-8 py-3 bg-foreground hover:bg-primary text-white text-sm tracking-[0.2rem] font-bold transition-colors duration-200"
        >
          HIRE US
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors duration-150"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden fixed inset-0 top-18.25 bg-white z-30
          transition-all duration-300 overflow-y-auto
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="container mx-auto px-4 py-4"
          aria-label="Mobile navigation"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onNavigate={closeMobile}
              />
            ))}
          </ul>
          <Link
            href="/hire-us"
            onClick={closeMobile}
            className="mt-6 flex items-center justify-center px-8 py-3 bg-foreground hover:bg-primary text-white text-sm tracking-[0.2rem] font-bold transition-colors duration-200"
          >
            HIRE US
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
