import { latestNews } from "../data";
import { CTA } from "../ui/CTA";
import { PageHero } from "../ui/PageHero";

const featuredArticle = latestNews[0];

export default function NewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="News"
        title="Motorsport news with a clear editorial focus."
        text="A professional news layout for Formula 1, IndyCar and junior single seater coverage, designed so new articles can be added cleanly over time."
      />

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="media-card p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Featured Article</p>
            <h2 className="mt-5 text-3xl font-black uppercase text-white sm:text-5xl">{featuredArticle.title}</h2>
            <p className="mt-5 text-base leading-7 text-zinc-300">{featuredArticle.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-400">
              <span className="border border-red-300/40 bg-red-500/10 px-3 py-2 text-red-200">{featuredArticle.category}</span>
              <span className="border border-white/12 px-3 py-2">{featuredArticle.date}</span>
            </div>
          </article>

          <div className="accent-rule pt-8">
            <h2 className="text-3xl font-black uppercase text-white">Built for future coverage.</h2>
            <p className="mt-5 text-sm leading-6 text-zinc-400">
              Articles are stored as simple data entries for now, keeping the site fast and maintainable while leaving a clear path for future posts, links and media embeds.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Article Grid</p>
              <h2 className="mt-3 text-3xl font-black uppercase text-white">Latest from MalleyMedia Motorsport</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestNews.map((article) => (
              <article key={article.title} className="media-card p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">{article.category}</p>
                <h3 className="mt-4 text-xl font-black uppercase text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{article.summary}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{article.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
