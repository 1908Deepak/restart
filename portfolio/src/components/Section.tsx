import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, className, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className ?? ""}`}>
      <div className="container mx-auto max-w-5xl px-4">
        {title ? (
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle ? (
              <p className="text-muted-foreground mt-2 text-base sm:text-lg">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}