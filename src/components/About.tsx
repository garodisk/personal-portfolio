import { CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="AI systems that connect model quality to product and business outcomes."
      description="The portfolio narrative is intentionally recruiter-friendly: production ML depth, hands-on GenAI building, and measurable business impact in one place."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="premium-border rounded-lg bg-white/84 p-6 shadow-sm sm:p-8">
          <div className="space-y-5 text-base leading-7 text-graphite">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="premium-border rounded-lg bg-ink p-6 text-white shadow-premium sm:p-8">
          <h3 className="text-lg font-semibold">How I work</h3>
          <ul className="mt-6 space-y-4">
            {profile.operatingPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-white/82">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-teal" size={18} />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

