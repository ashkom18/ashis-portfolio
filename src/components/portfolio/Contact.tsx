import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const fieldClass =
  "w-full rounded-md border border-input bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const next: Errors = {};
    if (values.name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (values.subject.length < 3) next.subject = "Please add a subject.";
    if (values.message.length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setReady(false);
      return;
    }

    setReady(true);
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Meaningful"
          description="I'm open to opportunities where I can contribute to backend engineering, full-stack development, distributed systems and enterprise application development."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="surface-panel flex items-center gap-4 p-5"
            >
              <Mail className="size-5 text-foreground" aria-hidden />
              <span>
                <span className="section-label block">Email</span>
                <span className="mt-1 block text-sm text-foreground">{profile.email}</span>
              </span>
            </a>
            <a href={`tel:${profile.phone}`} className="surface-panel flex items-center gap-4 p-5">
              <Phone className="size-5 text-foreground" aria-hidden />
              <span>
                <span className="section-label block">Phone</span>
                <span className="mt-1 block text-sm text-foreground">{profile.phone}</span>
              </span>
            </a>
            <div className="surface-panel flex items-center gap-4 p-5">
              <MapPin className="size-5 text-foreground" aria-hidden />
              <span>
                <span className="section-label block">Location</span>
                <span className="mt-1 block text-sm text-foreground">{profile.location}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="surface-panel p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="section-label">
                    Name
                  </label>
                  <input id="name" name="name" className={`mt-2 ${fieldClass}`} />
                  {errors.name ? (
                    <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="section-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`mt-2 ${fieldClass}`}
                  />
                  {errors.email ? (
                    <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="section-label">
                  Subject
                </label>
                <input id="subject" name="subject" className={`mt-2 ${fieldClass}`} />
                {errors.subject ? (
                  <p className="mt-2 text-xs text-destructive">{errors.subject}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="section-label">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className={`mt-2 ${fieldClass}`} />
                {errors.message ? (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {ready
                  ? "Opening your email app with the message ready to send."
                  : "This form opens your email app with the message prefilled — no messages are stored on this site."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
