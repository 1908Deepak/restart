import { SITE } from "@/config/site";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = SITE.projects;
  return (
    <Section id="projects" title="Projects" subtitle="Selected work I've built and shipped.">
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.title} />
        ))}
      </div>
    </Section>
  );
}