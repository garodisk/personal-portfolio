import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section-anchor mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-graphite sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

