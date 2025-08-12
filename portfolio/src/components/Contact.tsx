import { SITE } from "@/config/site";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" title="Get in touch" subtitle="I’m open to freelance work and interesting collaborations.">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-foreground/85">Want to build something together? Reach out and I’ll get back to you.</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {SITE.social.email && (
              <a href={`mailto:${SITE.social.email}`} className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 font-medium hover:opacity-90">
                Email me
              </a>
            )}
            {SITE.social.linkedin && (
              <a href={SITE.social.linkedin} target="_blank" className="underline-offset-4 hover:underline">LinkedIn</a>
            )}
            {SITE.social.github && (
              <a href={SITE.social.github} target="_blank" className="underline-offset-4 hover:underline">GitHub</a>
            )}
          </div>
        </div>
        <form className="grid gap-3 content-start" action={`mailto:${SITE.social.email}`} method="post">
          <input name="subject" placeholder="Subject" className="w-full rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:ring-2 ring-foreground/20" />
          <textarea name="body" placeholder="Message" rows={5} className="w-full rounded-md border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:ring-2 ring-foreground/20" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">
            Send
          </button>
        </form>
      </div>
    </Section>
  );
}