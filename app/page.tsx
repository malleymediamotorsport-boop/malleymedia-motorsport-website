import Image from "next/image";
import Link from "next/link";
import { focusAreas, portfolioItems, profilePoints, socialLinks, stats } from "./data";
import { CTA } from "./ui/CTA";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b hairline">
        <Image src="/images/motorsport-hero.png" alt="Motorsport paddock and race circuit at dusk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,9,0.94)_0%,rgba(5,6,9,0.72)_42%,rgba(5,6,9,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050609] to-transparent" />
        <div className="section-shell relative flex min-h-[calc(100vh-80px)] items-center py-16">
          <div className="max-w-4xl">
            <Image src="/images/malleymedia-logo-square.png" alt="MalleyMedia Motorsport logo" width={150} height={150} className="mb-8 h-28 w-28 border border-white/15 object-cover sm:h-36 sm:w-36" />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">Independent Motorsport Creator</p>
            <h1 className="mt-6 text-balance text-4xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              MalleyMedia Motorsport
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200">
              Covering Formula 1, IndyCar and junior categories through motorsport storytelling, highlights and short-form content.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/portfolio" className="bg-red-500 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-400">
                See Portfolio
              </Link>
              <Link href="/contact" className="border border-white/25 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline py-8">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border border-white/12 bg-white/[0.03] p-5">
              <p className="text-3xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="accent-rule pt-8">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Creator Profile</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">A clear home for motorsport media work.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              MalleyMedia Motorsport is built around Formula 1, IndyCar, and junior category coverage, with clean presentation and a professional record of work for future media accreditation applications.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolioItems.map((item) => (
              <article key={item.title} className="media-card p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item.category}</p>
                <h3 className="mt-4 text-xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden border border-white/12">
            <Image src="/images/trackside-media-tall-guy.png" alt="Trackside motorsport media photographer covering race action" fill className="object-cover object-[28%_center] md:object-center" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">What I Create</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">Trackside content with a clear, honest voice.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profilePoints.map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/12 bg-black/20 p-3">
                  <span className="h-2.5 w-2.5 shrink-0 bg-cyan-300" />
                  <span className="text-sm font-semibold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Find MalleyMedia</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="border border-red-300/50 bg-red-500/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-500">
                {item.label}
              </Link>
            ))}
            {focusAreas.map((area) => (
              <span key={area} className="border border-white/14 bg-white/[0.04] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-zinc-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
