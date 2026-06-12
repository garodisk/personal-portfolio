import { Github, Linkedin, Mail, Phone, PenLine, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Available for senior AI/ML, applied AI, GenAI, MLOps, and data science roles."
      description="Best fit: teams building production AI products, high-impact ML systems, RAG/agentic workflows, optimization engines, or data science platforms with real users."
    >
      <div className="premium-border rounded-lg bg-white/88 p-6 shadow-premium sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-ink">Let us talk about production AI systems.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-graphite">
              I am open to AI/ML Engineer, Applied AI Engineer, Senior Data Scientist, GenAI Engineer, and MLOps roles across SF Bay Area, Seattle, NYC, and remote teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${profile.email}`} variant="primary" icon={<Mail aria-hidden="true" size={16} />}>
                Email Me
              </ButtonLink>
              <ButtonLink href={profile.resume} icon={<Download aria-hidden="true" size={16} />}>
                Resume
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 font-medium text-slate transition hover:bg-line/60">
              <Mail aria-hidden="true" size={17} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll("-", "")}`} className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 font-medium text-slate transition hover:bg-line/60">
              <Phone aria-hidden="true" size={17} />
              {profile.phone}
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 font-medium text-slate transition hover:bg-line/60">
              <Github aria-hidden="true" size={17} />
              github.com/garodisk
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 font-medium text-slate transition hover:bg-line/60">
              <Linkedin aria-hidden="true" size={17} />
              linkedin.com/in/saket-garodia
            </a>
            <a href={profile.links.medium} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 font-medium text-slate transition hover:bg-line/60">
              <PenLine aria-hidden="true" size={17} />
              medium.com/@saketgarodia
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

