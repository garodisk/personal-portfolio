import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/profile";
import { Badge } from "./Badge";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Real AI systems: agents, RAG, full-stack LLM apps, model compression, and alignment."
      description="Recruiter-facing proof that the work goes beyond notebooks: shipped apps, open-source tools, cloud deployments, model compression, and applied LLM workflows."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="premium-border group relative flex h-full flex-col overflow-hidden rounded-lg bg-white/92 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-premium"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cobalt via-teal to-amber opacity-80" aria-hidden="true" />
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cobalt/8 blur-3xl transition group-hover:bg-teal/12" aria-hidden="true" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-teal">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-white shadow-sm transition group-hover:bg-cobalt">
                {index < 3 ? <Sparkles aria-hidden="true" size={18} /> : <ArrowUpRight aria-hidden="true" size={18} />}
              </div>
            </div>
            <div className="relative mt-5 rounded-lg border border-line bg-mist/70 p-4">
              <p className="text-xs font-semibold uppercase text-graphite">Impact</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-ink">{project.impact}</p>
            </div>
            <div className="relative mt-5 grid gap-4 text-sm leading-6 text-graphite">
              <p><span className="font-semibold text-slate">Problem:</span> {project.problem}</p>
              <p><span className="font-semibold text-slate">Solution:</span> {project.solution}</p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            <div className="relative mt-6 flex flex-wrap gap-3">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-cobalt transition hover:border-cobalt/35 hover:bg-cobalt hover:text-white"
                  >
                    {link.label}
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                ))
              ) : (
                <span className="inline-flex min-h-10 items-center rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-graphite">
                  Case study available on request
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
