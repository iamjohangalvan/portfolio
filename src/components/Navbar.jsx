import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skils", href: "#skils" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "bg-transparent"
      )}
    >
    <div className="container mx-auto px-4 flex items-center justify-between">
  {/* Logo */}
  <a className="text-lg font-bold">
    Johan Galvan Portfolio
  </a>

  {/* Right side */}
  <div className="flex items-center gap-6">
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <a key={item.name} href={item.href}>
          {item.name}
        </a>
      ))}
    </div>

    <ThemeToggle />

    <button
      className="md:hidden p-2"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      {isMenuOpen ? <X /> : <Menu />}
    </button>
</div>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 font-bold hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
