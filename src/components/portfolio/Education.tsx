import { Download, GraduationCap } from "lucide-react";
import { education, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="Education" title="Education" />

        <Reveal className="mt-10">
          <article className="surface-panel flex flex-wrap items-start gap-5 p-7 sm:p-8">
            <span className="rounded-lg border border-border p-3">
              <GraduationCap className="size-5 text-foreground" aria-hidden />
            </span>
            <div className="min-w-[14rem] flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-foreground/80">{education.university}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
            </div>
            <p className="font-mono text-xs tracking-wider text-muted-foreground">
              Graduating {education.graduation}
            </p>
          </article>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div className="surface-panel flex flex-wrap items-center justify-between gap-6 p-8 sm:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Want to know more about my experience?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                View my resume for a deeper look at my technical experience, projects and
                professional background.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
