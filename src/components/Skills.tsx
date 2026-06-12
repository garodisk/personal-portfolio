import { skillGroups } from "@/data/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Stack coverage from modeling and LLMs to deployment, data pipelines, cloud, and product surfaces."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <section key={group.title} className="premium-border rounded-lg bg-white/88 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-mist px-2.5 py-1.5 text-xs font-medium text-slate">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  );
}

