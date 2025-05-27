import { ExternalLink, Github, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
const projects = [
  {
    id: 1,
    title: "usePopcorn",
    description: "React Udemy project using the Movie Database API",
    image: "/projects/usePopcorn.PNG",
    tags: ["React", "JavaScript", "API"],
    demoUrl: "https://mmoview.netlify.app/",
    githubUrl: "https://github.com/mainitjerson/usePopcorn",
  },
  {
    id: 2,
    title: "Trave List",
    description: "React Udemy project that focus on useState",
    image: "/projects/travellist.PNG",
    tags: ["React", "JavaScript"],
    demoUrl: "https://travellist-packing.netlify.app/",
    githubUrl: "https://github.com/mainitjerson/travel-packing-list",
  },
  {
    id: 3,
    title: "Forkify",
    description: "A Udemy project built entirely with vanilla JavaScript",
    image: "/projects/forkify.PNG",
    tags: ["JavaScript", "API", "SASS"],
    demoUrl: "https://forkify-jerson.netlify.app/",
    githubUrl: "https://github.com/mainitjerson/forkify",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl mb:text-4xl font-bold text-center mb-4">
            Featured <span className="text-primary">Project</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                project={project}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, key) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs border font-medium bg-primary/20 rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-all duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/mainitjerson"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
            >
              Check my GitHub
              <ArrowRight />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default ProjectsSection;
