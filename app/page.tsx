import Image from "next/image";
import Link from "next/link";
import { contactEmail, featuredStories, focusAreas, latestNews, profilePoints, socialLinks, stats } from "./data";
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
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">Independent Motorsport Media</p>
            <h1 className="mt-6 text-balance text-4xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              MalleyMedia Motorsport
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200">
              Formula 1, IndyCar and Junior Formulae Coverage
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              News, highlights and media content following the pathway from junior single seaters to the highest levels of motorsport.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/news" className="bg-red-500 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-400">
                Read News
              </Link>
              <Link href="/media-credentials" className="border border-white/25 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black">
                Media Credentials
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Featured Stories</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">Professional coverage across the racing ladder.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              MalleyMedia Motorsport keeps the site focused on the racing: clear headlines, sharp summaries and space for future articles without unnecessary complexity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredStories.map((item) => (
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Coverage Focus</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">From junior categories to the front of world motorsport.</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profilePoints.map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/12 bg-black/20 p-3">
                  <span className="h-2.5 w-2.5 shrink-0 bg-red-400" />
                  <span className="text-sm font-semibold text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Latest News</p>
            <h2 className="mt-4 text-3xl font-black uppercase text-white">A simple structure for future articles.</h2>
          </div>
          <div className="grid gap-4">
            {latestNews.map((item) => (
              <article key={item.title} className="border-b border-white/12 pb-5">
                <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.16em] text-red-300">
                  <span>{item.category}</span>
                  <span className="text-zinc-500">{item.date}</span>
                </div>
                <h3 className="mt-3 text-xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Find MalleyMedia</p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            Follow race-weekend content on Instagram and YouTube, or contact the outlet directly at{" "}
            <a className="font-semibold text-white transition hover:text-red-200" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
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
