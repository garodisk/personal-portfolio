import Image from "next/image";
import { Github, Linkedin, Mail, PenLine, Download, FolderKanban } from "lucide-react";
import { profile } from "@/data/profile";
import { Badge } from "./Badge";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="technical-grid absolute inset-x-0 top-0 h-80 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {profile.roleFit.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal">{profile.location}</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-slate sm:text-2xl">{profile.headline}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-graphite sm:text-lg">{profile.pitch}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resume} variant="primary" icon={<Download aria-hidden="true" size={16} />}>
              Download Resume
            </ButtonLink>
            <ButtonLink href="#projects" icon={<FolderKanban aria-hidden="true" size={16} />}>
              Projects
            </ButtonLink>
            <ButtonLink href={profile.links.github} external icon={<Github aria-hidden="true" size={16} />}>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin} external icon={<Linkedin aria-hidden="true" size={16} />}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.links.medium} external icon={<PenLine aria-hidden="true" size={16} />}>
              Medium
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} icon={<Mail aria-hidden="true" size={16} />}>
              Contact
            </ButtonLink>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="premium-border rounded-lg bg-white/78 p-4 shadow-sm">
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-graphite">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="premium-border relative overflow-hidden rounded-lg bg-white p-3 shadow-premium">
            <Image
              src={profile.image}
              alt="Professional headshot of Saket Garodia"
              width={800}
              height={800}
              priority
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/60 bg-white/88 p-4 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold text-ink">Production AI builder</p>
              <p className="mt-1 text-sm leading-6 text-graphite">
                GenAI agents, RAG systems, optimization engines, and monitored ML deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

