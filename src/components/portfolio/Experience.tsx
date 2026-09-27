import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ExperienceCard({ index }: { index: number }) {
  const job = experiences[index];
  const [open, setOpen] = useState(index === 0);

  return (
    <article className="surface-panel p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">{job.company}</h3>
          <p className="mt-1 text-sm text-foreground/80">{job.role}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-mono text-xs tracking-wider text-muted-foreground">{job.period}</p>
          <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.context}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
      >
        {open ? "Hide details" : "View responsibilities"}
        <ChevronDown
          className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open ? (
        <ul className="mt-5 space-y-3 border-t border-border pt-5">
          {job.responsibilities.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:top-2.5 before:left-0 before:size-1 before:rounded-full before:bg-border-strong"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-2">
        {job.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wide text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Experience"
          description="Enterprise engineering roles across financial services, healthcare technology and global consulting."
        />

        <ol className="mt-12 space-y-6 border-l border-border pl-6 sm:pl-10">
          {experiences.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 80} className="relative">
              <span
                aria-hidden
                className="absolute top-8 -left-[1.9rem] size-2 rounded-full bg-foreground sm:-left-[2.9rem]"
              />
              <ExperienceCard index={i} />
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 grid gap-4 sm:grid-cols-3">
          {[...experiences]
            .slice()
            .reverse()
            .map((job) => (
              <div key={job.company} className="rounded-lg border border-border px-5 py-4">
                <p className="font-mono text-xs tracking-wider text-muted-foreground">
                  {job.range}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{job.company}</p>
              </div>
            ))}
        </Reveal>
      </div>
    </section>
  );
}
