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
            <a key={item.href} href={item.href} className="text-sm font-medium text-graphite transition hover:text-ink">
              {item.label}
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

