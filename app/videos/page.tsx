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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="media-card mx-auto w-full max-w-[380px] overflow-hidden">
              <video
                className="aspect-[9/16] w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="Schumacher Great Britain 1998"
              >
                <source src="/videos/schumacher-great-britain-1998.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">Short</p>
                <h2 className="mt-2 text-lg font-black uppercase text-white">Schumacher — Great Britain 1998</h2>
              </div>
            </article>
            <article className="media-card mx-auto w-full max-w-[380px] overflow-hidden">
              <iframe
                className="aspect-[9/16] w-full bg-black"
                src="https://www.youtube.com/embed/w90t9twRca0"
                title="MalleyMedia Motorsport YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">YouTube Short</p>
                <h2 className="mt-2 text-lg font-black uppercase text-white">MalleyMedia Motorsport</h2>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
