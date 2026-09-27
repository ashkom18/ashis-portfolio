import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/ashish-portrait.png.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.28_0.01_260)_0%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="section-label">Full Stack Java Developer</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance text-foreground sm:text-5xl lg:text-6xl">
              {profile.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.heroSummary}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View My Experience
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Let's Connect
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-10 font-mono text-xs tracking-wider text-muted-foreground">
              {profile.heroStack.join("  •  ")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center">
          <div className="relative size-60 sm:size-72 lg:size-80">
            <div
              aria-hidden
              className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-border-strong"
            />
            <div className="absolute inset-3 overflow-hidden rounded-full border border-border bg-[var(--gradient-surface)] shadow-[var(--shadow-elegant)]">
              <img
                src={portrait.url}
                alt="Ashish Kommanaveni"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
