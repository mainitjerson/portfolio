import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 0);
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
        "md:bg-transparent bg-background"
      )}
    >
      <div className="container flex item-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Jerson</span>Portfolio
          </span>
        </a>
        {/* deskop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* mobile */}
        <button
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
