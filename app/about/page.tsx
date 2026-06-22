import { CTA } from "../ui/CTA";
import { PageHero } from "../ui/PageHero";

const values = [
  "Independent motorsport media coverage across Formula 1, IndyCar and junior single seater racing.",
  "Pathway coverage that connects British F4, GB4, GB3, Formula 3 and Formula 2 with the top levels of the sport.",
  "Professional behaviour around circuits, paddocks, media areas, teams and event staff.",
  "A clean public profile that helps championships and media officers understand the outlet quickly."
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="An independent motorsport media outlet."
        text="MalleyMedia Motorsport covers Formula 1, IndyCar and junior single seater racing through news, highlights and media content."
      />
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="accent-rule pt-8">
            <h2 className="text-4xl font-black uppercase text-white">Covering the pathway from junior categories to the top level.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The outlet follows the racing ladder from British F4, GB4 and GB3 through Formula 3 and Formula 2, while also covering Formula 1 and IndyCar. The aim is to make the wider single seater pathway easy to follow for fans, teams and championships.
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
          {["Formula 1", "IndyCar", "Junior Formulae"].map((item) => (
            <div key={item} className="border border-white/12 p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Clear coverage for a public audience, presented in a way that remains credible for teams, championships and media managers.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
