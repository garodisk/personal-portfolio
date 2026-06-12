import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/profile";
import { Badge } from "./Badge";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Production ML, optimization, NLP, and full-stack engineering across enterprise environments."
    >
      <div className="relative space-y-6">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-line md:block" aria-hidden="true" />
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="relative grid gap-4 md:grid-cols-[2.5rem_1fr]">
            <div className="hidden md:block">
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white shadow-sm">
                <BriefcaseBusiness aria-hidden="true" size={16} />
              </div>
            </div>
            <div className="premium-border rounded-lg bg-white/86 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.role}</h3>
                  <p className="mt-1 font-medium text-slate">{item.company}</p>
                  <p className="mt-1 text-sm text-graphite">{item.location}</p>
                </div>
                <p className="text-sm font-semibold text-teal">{item.period}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

