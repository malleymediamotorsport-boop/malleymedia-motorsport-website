export default function VideosPage() {
  return (
    <main className="min-h-[60vh]">
      <section className="border-b hairline py-20 sm:py-28">
        <div className="section-shell accent-rule pt-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-500">MalleyMedia Motorsport</p>
          <h1 className="mt-4 text-5xl font-black uppercase text-white sm:text-7xl">Videos</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell">
          <article className="media-card overflow-hidden">
            <video
              className="aspect-video w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              aria-label="Schumacher Great Britain 1998"
            >
              <source src="/videos/schumacher-great-britain-1998.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">Archive</p>
              <h2 className="mt-3 text-2xl font-black uppercase text-white">Schumacher — Great Britain 1998</h2>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
