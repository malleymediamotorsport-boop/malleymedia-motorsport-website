export default function VideosPage() {
  const videos = [
    {
      src: "/videos/schumacher-great-britain-1998.mp4",
      label: "Schumacher Great Britain 1998",
      title: "Schumacher — Great Britain 1998"
    },
    {
      src: "/videos/belgium-2000.mp4",
      label: "Belgium 2000",
      title: "Belgium 2000"
    },
    {
      src: "/videos/brazil-2008.mp4",
      label: "Brazil 2008",
      title: "Brazil 2008"
    },
    {
      src: "/videos/great-britain-2021.mp4",
      label: "Great Britain 2021",
      title: "Great Britain 2021"
    },
    {
      src: "/videos/mark-webber-crash-valencia-2010.mp4",
      label: "Mark Webber crash — Valencia 2010",
      title: "Mark Webber Crash — Valencia 2010"
    },
    {
      src: "/videos/jerez-1997.mp4",
      label: "Jerez 1997",
      title: "Jerez 1997"
    },
    {
      src: "/videos/canada-2019.mp4",
      label: "Canada 2019",
      title: "Canada 2019"
    },
    {
      src: "/videos/schumacher-monaco-2006.mp4",
      label: "Schumacher Monaco 2006",
      title: "Schumacher — Monaco 2006"
    },
    {
      src: "/videos/indy-500-2002.mp4",
      label: "Indy 500 2002",
      title: "Indy 500 — 2002"
    },
    {
      src: "/videos/raikkonen.mp4",
      label: "Kimi Raikkonen",
      title: "Kimi Räikkönen"
    }
  ];

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
            {videos.map((video) => (
              <article key={video.src} className="media-card mx-auto w-full max-w-[380px] overflow-hidden">
                <video
                  className="aspect-[9/16] w-full bg-black object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.label}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <div className="p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">Short</p>
                  <h2 className="mt-2 text-lg font-black uppercase text-white">{video.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
