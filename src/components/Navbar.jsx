import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.screenY > 0); // Corrected: should be window.scrollY
      setIsScrolled(window.scrollY > 0);
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
        isScrolled ? "py-3 bg-background shadow-xs" : "py-5",
        "md:bg-background bg-background" // Ensures background is applied on mobile too
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Jerson</span>Portfolio
          </span>
        </a>
        {/* desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile toggle button */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* ThemeToggle can also be placed here if you want it always visible on mobile nav bar */}
          {/* e.g., <ThemeToggle /> */}
          <button
            className="p-2 text-foreground z-50" // z-50 to be above the nav's z-40 if nav has solid bg
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* mobile menu (overlay) */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center", // z-40 here means the menu button (z-50) will be on top
            "transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {" "}
            {/* Added text-center for better alignment of links */}
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-2xl text-foreground/80 hover:text-primary transition-colors duration-300" // Increased text size for mobile menu
                onClick={() => setIsOpen(false)} // Close menu on item click
              >
                {item.name}
              </a>
            ))}
            {/* ThemeToggle is placed here, inside the opened mobile menu options */}
            <div className="mt-4">
              {" "}
              {/* Optional: Add some margin for visual separation */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
