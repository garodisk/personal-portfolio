import Image from "next/image";
import { Globe2, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/data/profile";
import { Section } from "./Section";

export function Personal() {
  return (
    <Section
      id="personal"
      eyebrow="Beyond Work"
      title={personal.title}
      description={personal.description}
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="premium-border rounded-lg bg-white/90 p-6 shadow-sm">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-teal/10 text-teal">
            <Globe2 aria-hidden="true" size={22} />
          </div>
          <h3 className="text-xl font-semibold text-ink">Global perspective, builder mindset.</h3>
          <p className="mt-3 text-sm leading-6 text-graphite">
            I bring the same curiosity to people, places, and ideas that I bring to AI systems.
          </p>
          <div className="mt-6 grid gap-3">
            {personal.highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-center gap-3 rounded-md border border-line bg-mist px-3 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-cobalt">
                  {index < 2 ? <MapPin aria-hidden="true" size={16} /> : <Sparkles aria-hidden="true" size={16} />}
                </span>
                <span className="text-sm font-semibold text-slate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {personal.images.map((image, index) => (
            <figure
              key={image.src}
              className={`premium-border group overflow-hidden rounded-lg bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-premium ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
              <figcaption className="px-2 py-3 text-sm font-semibold text-slate">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

