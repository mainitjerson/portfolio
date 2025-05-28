import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground ">
      {/* Theme */}
      {/* Background */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Section */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
      {/* Footer Section */}
    </div>
  );
}

export default Home;
