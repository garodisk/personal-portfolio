import { ArrowUpRight, Github } from "lucide-react";
import { openSource } from "@/data/profile";
import { Section } from "./Section";

export function OpenSource() {
  return (
    <Section
      id="open-source"
      eyebrow="GitHub / Open Source"
      title="A builder footprint across AI tools, RAG products, and research agents."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {openSource.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="premium-border group rounded-lg bg-ink p-6 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium"
          >
            <div className="mb-5 flex items-center justify-between">
              <Github aria-hidden="true" size={22} className="text-teal" />
              <ArrowUpRight aria-hidden="true" size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/62">{item.label}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.value}</h3>
            <p className="mt-4 text-sm leading-6 text-white/74">{item.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}

