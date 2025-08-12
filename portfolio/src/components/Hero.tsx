import Link from "next/link";
import { SITE } from "@/config/site";
import { Section } from "./Section";

export function Hero() {
  const h = SITE.hero;
  return (
    <Section id="home" className="pt-10 sm:pt-16" >
      <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm text-foreground/70">{h.greeting}</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
            {h.name}
            <span className="block text-foreground/70 font-medium text-xl sm:text-2xl mt-2">{h.role}</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-prose">{h.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={h.ctaPrimary.href}
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              {h.ctaPrimary.label}
            </Link>
            <Link
              href={h.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            >
              {h.ctaSecondary.label}
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-foreground/70">
            {SITE.social.github && (
              <a href={SITE.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            )}
            {SITE.social.linkedin && (
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            )}
            {SITE.social.twitter && (
              <a href={SITE.social.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">Twitter</a>
            )}
            {SITE.social.email && (
              <a href={`mailto:${SITE.social.email}`} className="hover:text-foreground">Email</a>
            )}
          </div>
        </div>
        <div className="rounded-xl border border-foreground/10 bg-foreground/5 aspect-video md:aspect-square" />
      </div>
    </Section>
  );
}