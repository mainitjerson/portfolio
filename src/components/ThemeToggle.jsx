import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false; // Default to false or handle server-side rendering appropriately
  });

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === "undefined") {
      return;
    }
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full", // REMOVED: "fixed max-sm:hidden top-3 right-3 z-50"
        // Consider if active:bg-transparent is desired if the button isn't on a transparent bg itself
        "active:bg-transparent dark:active:bg-transparent",
        "transition-colors duration-300",
        // Improved focus styling for accessibility:
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      )}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
}

export default ThemeToggle;
