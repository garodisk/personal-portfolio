import { Award, GraduationCap } from "lucide-react";
import { certificationNote, certifications, education, learningFocus } from "@/data/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Certifications"
      title="Computer Science, Artificial Intelligence, Machine Learning, Deep Learning, and MLOps foundations."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <div className="premium-border rounded-lg bg-ink p-5 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase text-teal">Learning focus</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learningFocus.map((item) => (
                <span key={item} className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/86">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-white/76">{certificationNote}</p>
          </div>
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
          <ul className="space-y-4">
            {certifications.map((certification) => (
              <li key={certification.name} className="rounded-lg border border-line bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold leading-6 text-ink">{certification.name}</p>
                  <p className="text-xs font-semibold uppercase text-teal">{certification.provider}</p>
                  <p className="text-xs text-graphite">{certification.issued}</p>
                  {"credentialId" in certification && certification.credentialId ? (
                    <p className="text-xs text-graphite">Credential ID {certification.credentialId}</p>
                  ) : null}
                  {"description" in certification && certification.description ? (
                    <p className="mt-2 text-sm leading-6 text-graphite">{certification.description}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
