import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "secondary", icon, external }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={clsx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-2",
        variant === "primary" && "bg-ink text-white shadow-premium hover:-translate-y-0.5 hover:bg-slate",
        variant === "secondary" && "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-md",
        variant === "ghost" && "text-ink hover:bg-white/70"
      )}
    >
      {icon}
      {children}
      {variant === "primary" ? <ArrowRight aria-hidden="true" size={16} /> : null}
    </a>
  );
}

