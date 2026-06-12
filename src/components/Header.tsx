import { Download } from "lucide-react";
import { navItems, profile } from "@/data/profile";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          Saket Garodia
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-graphite transition hover:text-ink focus:outline-none focus:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-cobalt transition-all group-hover:w-full group-focus:w-full" aria-hidden="true" />
            </a>
          ))}
        </div>
        <ButtonLink href={profile.resume} icon={<Download aria-hidden="true" size={16} />}>
          Resume
        </ButtonLink>
      </nav>
    </header>
  );
}
