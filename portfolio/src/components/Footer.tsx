import { SITE } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8">
      <div className="container mx-auto max-w-5xl px-4 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {year} {SITE.name}. All rights reserved.
        </div>
        <div className="flex gap-4">
          {SITE.social.github && (
            <a href={SITE.social.github} target="_blank" className="hover:text-foreground">GitHub</a>
          )}
          {SITE.social.linkedin && (
            <a href={SITE.social.linkedin} target="_blank" className="hover:text-foreground">LinkedIn</a>
          )}
          {SITE.social.website && (
            <a href={SITE.social.website} target="_blank" className="hover:text-foreground">Website</a>
          )}
        </div>
      </div>
    </footer>
  );
}