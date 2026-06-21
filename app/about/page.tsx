import { CTA } from "../ui/CTA";
import { PageHero } from "../ui/PageHero";

const values = [
  "Independent creator-led coverage with a focus on motorsport photography, video, and social storytelling.",
  "Professional behaviour around circuits, paddocks, media areas, and event staff.",
  "Respect for event rules, image rights, credits, and the expectations of media accreditation.",
  "A clean public profile that helps media officers understand the work quickly."
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="An independent creator covering motorsport with care."
        text="MalleyMedia Motorsport is a personal media project covering Formula 1, IndyCar, and junior categories through storytelling, highlights, and short-form content."
      />
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="accent-rule pt-8">
            <h2 className="text-4xl font-black uppercase text-white">Simple, serious, and built around the racing.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              This site gives MalleyMedia Motorsport a clear professional base: who I am, what I make, where to find the work, and why the project is suitable for future media accreditation review.
            </p>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <div key={value} className="media-card p-6">
                <p className="text-base leading-7 text-zinc-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          {["Photography", "Video", "Social"].map((item) => (
            <div key={item} className="border border-white/12 p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Motorsport content made for a public audience, with a modern presentation suitable for event and media-team review.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
