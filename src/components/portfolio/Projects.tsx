import { ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Work"
          title="Selected Projects"
          description="A closer look at systems I've designed and built."
        />

        {projects.length === 0 ? (
          <Reveal className="mt-12">
            <div className="surface-panel flex flex-col items-start gap-4 p-10 sm:p-14">
              <p className="section-label">Coming soon</p>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Project write-ups are on the way.
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                I'm preparing detailed breakdowns of the systems I've built — the problem, the
                architecture, the trade-offs and the outcome. In the meantime, my professional
                experience covers the same ground in depth.
              </p>
              <a
                href="#contact"
                className="mt-2 inline-flex items-center rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Ask me about my work
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={(i % 3) * 70}>
                <article className="surface-panel flex h-full flex-col overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    {project.problem ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="text-foreground/80">Problem: </span>
                        {project.problem}
                      </p>
                    ) : null}
                    {project.features.length > 0 ? (
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {project.features.map((f) => (
                          <li key={f} className="pl-4 before:mr-2 before:content-['—']">
                            {f}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3 pt-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <Github className="size-4" /> GitHub
                        </a>
                      ) : null}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="size-4" /> Live Demo
                        </a>
                      ) : null}
                      {project.caseStudyUrl ? (
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <FileText className="size-4" /> Case Study
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
