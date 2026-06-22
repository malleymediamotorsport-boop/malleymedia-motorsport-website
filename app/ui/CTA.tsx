import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16">
      <div className="section-shell media-card grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-red-300">Media Enquiries</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white">Coverage, highlights and motorsport media content.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
            A clear contact route for teams, circuits, championships and media managers reviewing MalleyMedia Motorsport.
          </p>
        </div>
        <Link href="/contact" className="bg-white px-5 py-3 text-center text-sm font-black uppercase tracking-[0.14em] !text-black transition hover:bg-red-200">
          Contact
        </Link>
      </div>
    </section>
  );
}
