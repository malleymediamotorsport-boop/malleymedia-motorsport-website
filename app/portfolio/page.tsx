import Image from "next/image";
import { portfolioItems } from "../data";
import { CTA } from "../ui/CTA";
import { PageHero } from "../ui/PageHero";

const deliverables = ["Instagram posts", "YouTube videos", "Photo stories", "Event notes", "Short edits", "Race recaps"];

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="A focused portfolio for motorsport content."
        text="Examples of the formats MalleyMedia Motorsport is built around: images, video, event notes, social-first stories, and a clear public record of creator work."
      />
      <section className="py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.title} className="media-card p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">{item.category}</p>
              <h2 className="mt-4 text-2xl font-black uppercase text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden border border-white/12">
            <Image src="/images/trackside-media-tall-guy.png" alt="Motorsport media photographer at a race circuit" fill className="object-cover object-[28%_center] md:object-center" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Formats</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">Built for modern motorsport audiences.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <span key={item} className="border border-white/12 bg-black/25 px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
