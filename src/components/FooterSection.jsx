import { ArrowUp } from "lucide-react";

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Jerson Mainit. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to top"
        >
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

export default FooterSection;
