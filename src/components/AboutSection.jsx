import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

function AboutSection() {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];
  const tools = ["VS Code", "Git", "GitHub", "Tailwind CSS", "Figma"];
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative"
    >
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="p-4 sm:p-6 md:p-8 hover:-translate-y-1 transition-all duration-300">
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              I'm a software engineer with a passion for building exceptional
              user experiences. I'm currently a student at the Bulacan State
              University where I'm pursuing a degree in Computer Science.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm",
                        "transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]",
                        "hover:scale-105 active:scale-95"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tools.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm",
                        "transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]",
                        "hover:scale-105 active:scale-95"
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                Education
              </h3>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground">
                <div className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                    Bachelor of Science in Mathematics major in Computer Science
                  </h4>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Institution:
                      </span>
                      <span>Bulacan State University</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Duration:
                      </span>
                      <span>2021 - Present</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">Status:</span>
                      <span>Currently Enrolled</span>
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                    Information Technology (2yr)
                  </h4>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Institution:
                      </span>
                      <span>Golden Minds Colleges</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Duration:
                      </span>
                      <span>2012 - 2014</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">Status:</span>
                      <span>Graduated</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                Certifications
              </h3>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground">
                <div className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                    The Complete JavaScript Course 2025: From Zero to Expert!
                  </h4>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued by:
                      </span>
                      <span>Udemy</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued on:
                      </span>
                      <span>2025</span>
                    </p>
                    <a
                      href="https://www.udemy.com/certificate/UC-13534d3f-5e58-4f19-a2cf-162244a4baff/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-2 sm:mt-3 text-sm sm:text-base"
                    >
                      View Certificate
                      <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                    The Complete 2024 Web Development Bootcamp
                  </h4>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued by:
                      </span>
                      <span>Udemy</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued on:
                      </span>
                      <span>2024</span>
                    </p>
                    <a
                      href="https://www.udemy.com/certificate/UC-804fa986-a0f9-4961-b699-6e38aa3c0031/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-2 sm:mt-3 text-sm sm:text-base"
                    >
                      View Certificate
                      <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                    Learn Javascript
                  </h4>
                  <div className="space-y-2">
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued by:
                      </span>
                      <span>Scrimba</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-primary font-medium">
                        Issued on:
                      </span>
                      <span>2024</span>
                    </p>
                    <a
                      href="https://scrimba.com/certificate-cert2uNjfKA1xmopccsKKjzxF9UyXoouMBmxusr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-2 sm:mt-3 text-sm sm:text-base"
                    >
                      View Certificate
                      <ExternalLink className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default AboutSection;
