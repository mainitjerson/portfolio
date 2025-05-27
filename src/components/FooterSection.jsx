import { ArrowUp } from "lucide-react";

function FooterSection() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jerson Mainit. All rights reserved.
      </p>
    </footer>
  );
}

export default FooterSection;
