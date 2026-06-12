import { ExternalLink } from "lucide-react";
import { projects } from "@/data/profile";
import { Badge } from "./Badge";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Real AI systems: agents, RAG, full-stack LLM apps, model compression, and alignment."
      description="Each project is framed around problem, solution, stack, and factual impact pulled from the resume, LinkedIn export, GitHub, Medium, and PyPI sources."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="premium-border flex h-full flex-col rounded-lg bg-white/88 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
              </div>
            </div>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-graphite">
              <p><span className="font-semibold text-slate">Problem:</span> {project.problem}</p>
              <p><span className="font-semibold text-slate">Solution:</span> {project.solution}</p>
              <p><span className="font-semibold text-slate">Impact:</span> {project.impact}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition hover:text-ink"
                >
                  {link.label}
                  <ExternalLink aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

