import { Github, Linkedin, PenLine } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";

const icons: Record<string, typeof Github> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Medium: PenLine,
};

export function Footer() {
  const active = socials.filter((s) => s.url);

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-display text-base font-semibold text-foreground">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {profile.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {active.length > 0 ? (
          <ul className="flex gap-3">
            {active.map((social) => {
              const Icon = icons[social.label] ?? PenLine;
              return (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="font-mono text-xs tracking-wider text-muted-foreground">
            LinkedIn • GitHub • Medium — links coming soon
          </p>
        )}

        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
