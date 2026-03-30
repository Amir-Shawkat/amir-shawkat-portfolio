import { ProjectCard } from "../components/ProjectCard";
import { projectsList } from "../constants";
import { Footer } from "../layout/Footer";

export const AllProjects = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-secondary-foreground text-3xl font-medium tracking-wider uppercase animate-fade-in md:text-6xl mb-6">Archive</h1>
            <p className="text-muted-foreground max-w-2xl">
              A complete list of projects I've worked on, ranging from full-scale production apps to experimental side projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Here we map the full projects array */}
            {projectsList.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};