import { ArrowUpRight, BookOpenText, PenLine } from "lucide-react";
import { profile, writing } from "@/data/profile";
import { Section } from "./Section";

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Technical writing that reinforces depth across ML fundamentals and modern AI."
      description="A focused selection of Medium articles that show how I explain AI/ML systems, deployment patterns, recommender systems, NLP, and deep learning clearly."
    >
      <div className="mb-6 flex flex-col gap-4 rounded-lg border border-line bg-ink p-5 text-white shadow-premium sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-teal">Medium</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/78">
            These articles show how I explain AI/ML concepts clearly: from transformers and APIs to deployment, recommender systems, Spark, NLP, and deep learning.
          </p>
        </div>
        <a
          href={profile.links.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mist"
        >
          View all writing on Medium
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {writing.map((item, index) => (
          <article
            key={item.title}
            className={`premium-border group rounded-lg bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-premium ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cobalt/10 text-cobalt transition group-hover:bg-cobalt group-hover:text-white">
                {index === 0 ? <BookOpenText aria-hidden="true" size={18} /> : <PenLine aria-hidden="true" size={18} />}
              </div>
              <p className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase text-graphite">{item.type}</p>
            </div>
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-graphite">{item.description}</p>

            {"parts" in item && item.parts ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.parts.map((part) => (
                  <span key={part} className="rounded-md border border-line bg-white px-2.5 py-1 text-xs font-semibold text-slate">
                    {part}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-mist px-2.5 py-1 text-xs font-medium text-slate">
                  {tag}
                </span>
              ))}
            </div>

            <a href={item.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition hover:text-ink">
              Read on Medium
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
