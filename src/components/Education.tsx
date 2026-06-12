import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title="Computer science, analytics, business, and modern AI foundations."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          {education.map((item) => (
            <article key={item.school} className="premium-border rounded-lg bg-white/88 p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal">
                  <GraduationCap aria-hidden="true" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{item.credential}</h3>
                  <p className="mt-1 text-sm font-medium text-slate">{item.school}</p>
                  <p className="mt-1 text-sm text-graphite">{item.details}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{item.period}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="premium-border rounded-lg bg-white/88 p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber/10 text-amber">
              <Award aria-hidden="true" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-ink">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((certification) => (
              <li key={certification} className="flex gap-3 text-sm leading-6 text-graphite">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
                <span>{certification}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

