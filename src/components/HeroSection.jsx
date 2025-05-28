import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Jerson
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Mainit
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 px-4 sm:px-0">
            I'm a computer science student specializing in web development, with
            a focus on crafting engaging and functional applications.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              View My Work
            </a>
            <a
              href="/MainitJersonD_CV.pdf"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
