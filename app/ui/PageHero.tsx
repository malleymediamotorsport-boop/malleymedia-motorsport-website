type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b hairline py-20 sm:py-24">
      <div className="track-grid absolute inset-0 opacity-45" />
      <div className="section-shell relative">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{text}</p>
      </div>
    </section>
  );
}
