import Link from "next/link";
import type { Project } from "@/config/site";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="group rounded-xl border border-foreground/10 p-4 sm:p-5 bg-background/60 hover:bg-background/80 transition-colors">
      <div className="aspect-[16/9] w-full rounded-lg bg-foreground/5 mb-4 overflow-hidden">
        {project.image ? (
          // Placeholder for image asset. You can swap with next/image when you have real images.
          <div className="w-full h-full flex items-center justify-center text-sm text-foreground/60">
            {project.title}
          </div>
        ) : null}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1 text-sm text-foreground/80">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs rounded-full border border-foreground/15 px-2 py-0.5 text-foreground/70">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3 text-sm">
        {project.link && (
          <Link href={project.link} target="_blank" className="underline-offset-4 hover:underline">
            Live
          </Link>
        )}
        {project.github && (
          <Link href={project.github} target="_blank" className="underline-offset-4 hover:underline">
            Code
          </Link>
        )}
      </div>
    </div>
  );
}