import { contactEmail, portfolioItems } from "../data";
import { CTA } from "../ui/CTA";
import { PageHero } from "../ui/PageHero";

const credentialPoints = [
  "Motorsport news, highlights and media content for public-facing channels.",
  "Coverage across Formula 1, IndyCar and junior single seater championships.",
  "A professional contact route for accreditation, event access and media enquiries.",
  "A portfolio area prepared for future examples, links and published coverage."
];

export default function MediaCredentialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Media Credentials"
        title="Information for teams, circuits and championships."
        text="MalleyMedia Motorsport produces motorsport news, highlights and media content with a clean professional presence for accreditation and event media review."
      />

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="accent-rule pt-8">
            <h2 className="text-4xl font-black uppercase text-white">A serious media outlet with a simple, direct brief.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              The outlet is built to cover racing clearly and responsibly, with content suitable for fans while remaining easy for media managers to review. Coverage includes written updates, highlights, photography-led posts and social media output.
            </p>
            <a
              className="mt-8 inline-flex bg-red-500 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-red-400"
              href={`mailto:${contactEmail}`}
            >
              Accreditation Enquiry
            </a>
          </div>
          <div className="grid gap-4">
            {credentialPoints.map((point) => (
              <div key={point} className="media-card p-6">
                <p className="text-base leading-7 text-zinc-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025] py-16">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Portfolio</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase text-white">Future content examples and published work.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-400">
            This section is prepared for future race-weekend coverage, published articles, video links and social examples as MalleyMedia Motorsport develops its event portfolio.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <article key={item.title} className="media-card p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item.category}</p>
                <h3 className="mt-4 text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell media-card p-6 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Contact Details</p>
          <h2 className="mt-4 text-3xl font-black uppercase text-white">Media and accreditation enquiries</h2>
          <p className="mt-4 text-base leading-7 text-zinc-300">
            Email{" "}
            <a className="font-semibold text-white transition hover:text-red-200" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>{" "}
            for media access, accreditation, event information or portfolio review.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
