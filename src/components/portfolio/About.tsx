import { Cloud, Layout, Network, Server } from "lucide-react";
import { focusAreas } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = { server: Server, network: Network, layout: Layout, cloud: Cloud };

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label="About" title="About Me" />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I build enterprise software that has to hold up in production. Over the past seven
              years I've worked across banking, healthcare, financial services and digital
              platforms, where correctness, auditability and uptime matter more than novelty.
            </p>
            <p>
              My core work is backend engineering: Java and Spring Boot services, REST APIs,
              microservice boundaries, relational and distributed data stores, event-driven
              messaging and application security. Alongside that I build the interfaces that
              expose those systems, using React, Angular and modern JavaScript.
            </p>
            <p>
              Day to day that has meant account workflows, approval and review processes, system
              integrations, near-real-time processing and distributed services. What I enjoy most
              is the full arc — taking a business problem apart, turning it into technical
              components, shipping it, and then troubleshooting it in the real world.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = icons[area.icon];
              return (
                <Reveal key={area.title} delay={i * 70}>
                  <article className="surface-panel h-full p-6">
                    <Icon className="size-5 text-foreground" aria-hidden />
                    <h3 className="mt-4 text-base font-semibold text-foreground">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
