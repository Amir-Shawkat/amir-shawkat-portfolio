import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "CineHub - Movie search platform",
    description:
      "A movie search platform that allows users to discover and explore movies, finding trending movielists, and detailed information about their favorite films.",
    image: "/projects/cinehub-movie-app.png",
    tags: ["React", "Typescript", "AppWrite", "Tailwind CSS"],
    link: "https://asr-cine-hub-2.vercel.app/",
    github: "https://github.com/Amir-Shawkat/CineHub.git",
  },
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
  //   image: "/projects/project2.png",
  //   tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "Weather Application",
    description:
      "An intelligent weather application with real-time data, forecasts, and location-based services.",
    image: "/projects/weather-application.png",
    tags: ["React", "JavaScript", "FastAPI"],
    link: "https://weather-application-ten-omega.vercel.app/",
    github: "https://github.com/Amir-Shawkat/weather-application.git",
  },
  {
    title: "Memory Card Game",
    description:
      "A fun and challenging memory card matching game built with React and Tailwind CSS.",
    image: "/projects/memory-card-game.png",
    tags: ["React.js", "Tailwind CSS", "LocalStorage", "JavaScript"],
    link: "https://asrmemory-card-game.vercel.app/",
    github: "https://github.com/Amir-Shawkat/memory-card-game.git",
  },
  {
    title: "ToDo List Application",
    description:
      "A simple and efficient todo list application built with ReactJS.",
    image: "/projects/todo-list.png",
    tags: ["React.js", "LocalStorage", "JavaScript"],
    link: "https://asr-todo-list.vercel.app/",
    github: "https://github.com/Amir-Shawkat/My-ToDo-List.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
