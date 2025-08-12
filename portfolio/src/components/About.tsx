import { SITE } from "@/config/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title={SITE.about.headline}>
      <p className="text-foreground/85 text-base sm:text-lg leading-relaxed max-w-prose">
        {SITE.about.body}
      </p>
    </Section>
  );
}