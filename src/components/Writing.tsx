import { ArrowUpRight, PenLine } from "lucide-react";
import { writing } from "@/data/profile";
import { Section } from "./Section";

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Technical writing that reinforces depth across ML fundamentals and modern AI."
      description="Article titles come from the LinkedIn export and Medium profile; individual article URLs can be added in the content data file when you want deep links."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((item) => (
          <article key={item.title} className="premium-border rounded-lg bg-white/88 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-cobalt/10 text-cobalt">
              <PenLine aria-hidden="true" size={18} />
            </div>
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-graphite">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-ink">
              Read on Medium
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

