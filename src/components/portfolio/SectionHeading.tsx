import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      {label ? <p className="section-label mb-4">{label}</p> : null}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
