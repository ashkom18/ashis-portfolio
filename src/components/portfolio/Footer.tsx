import { navLinks, profile, socials } from "@/data/portfolio";

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
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {active.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.url}
                </a>
              </li>
            ))}
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
