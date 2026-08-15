import ChunkedVideo from "./ChunkedVideo";

export default function VideosPage() {
  const videos = [
    {
      src: "/videos/schumacher-great-britain-1998.mp4",
      label: "Schumacher Great Britain 1998",
      title: "Schumacher — Great Britain 1998"
    },
    {
      src: "/videos/schumacher-monaco-2006.mp4",
      chunks: [
        "/videos/schumacher-monaco-2006.part-aa",
        "/videos/schumacher-monaco-2006.part-ab",
        "/videos/schumacher-monaco-2006.part-ac",
        "/videos/schumacher-monaco-2006.part-ad",
        "/videos/schumacher-monaco-2006.part-ae"
      ],
      label: "Schumacher Monaco 2006",
      title: "Schumacher — Monaco 2006"
    },
    {
      src: "/videos/indy-500-2002.mp4",
      chunks: [
        "/videos/indy-500-2002.part-aa",
        "/videos/indy-500-2002.part-ab",
        "/videos/indy-500-2002.part-ac",
        "/videos/indy-500-2002.part-ad",
        "/videos/indy-500-2002.part-ae",
        "/videos/indy-500-2002.part-af",
        "/videos/indy-500-2002.part-ag",
        "/videos/indy-500-2002.part-ah"
      ],
      label: "Indy 500 2002",
      title: "Indy 500 — 2002"
    },
    {
      src: "/videos/raikkonen.mp4",
      chunks: [
        "/videos/raikkonen.part-aa",
        "/videos/raikkonen.part-ab",
        "/videos/raikkonen.part-ac",
        "/videos/raikkonen.part-ad",
        "/videos/raikkonen.part-ae",
        "/videos/raikkonen.part-af",
        "/videos/raikkonen.part-ag",
        "/videos/raikkonen.part-ah",
        "/videos/raikkonen.part-ai"
      ],
      label: "Kimi Räikkönen",
      title: "Kimi Räikkönen"
    },
    {
      src: "/videos/leclerc-new.mp4",
      chunks: [
        "/videos/leclerc-new.part-aa",
        "/videos/leclerc-new.part-ab",
        "/videos/leclerc-new.part-ac",
        "/videos/leclerc-new.part-ad",
        "/videos/leclerc-new.part-ae",
        "/videos/leclerc-new.part-af"
      ],
      label: "Charles Leclerc",
      title: "Charles Leclerc"
    },
    {
      src: "/videos/multi-21.mp4",
      chunks: [
        "/videos/multi-21.part-aa",
        "/videos/multi-21.part-ab",
        "/videos/multi-21.part-ac",
        "/videos/multi-21.part-ad",
        "/videos/multi-21.part-ae",
        "/videos/multi-21.part-af",
        "/videos/multi-21.part-ag",
        "/videos/multi-21.part-ah",
        "/videos/multi-21.part-ai",
        "/videos/multi-21.part-aj",
        "/videos/multi-21.part-ak",
        "/videos/multi-21.part-al",
        "/videos/multi-21.part-am"
      ],
      label: "Multi 21",
      title: "Multi 21"
    },
    // Hamilton's 2007 China Grand Prix retirement.
    {
      src: "/videos/hamilton-china-2007.mp4",
      chunks: [
        "/videos/hamilton-china-2007.part-00",
        "/videos/hamilton-china-2007.part-01",
        "/videos/hamilton-china-2007.part-02",
        "/videos/hamilton-china-2007.part-03",
        "/videos/hamilton-china-2007.part-04",
        "/videos/hamilton-china-2007.part-05",
        "/videos/hamilton-china-2007.part-06",
        "/videos/hamilton-china-2007.part-07",
        "/videos/hamilton-china-2007.part-08",
        "/videos/hamilton-china-2007.part-09",
        "/videos/hamilton-china-2007.part-10",
        "/videos/hamilton-china-2007.part-11",
        "/videos/hamilton-china-2007.part-12",
        "/videos/hamilton-china-2007.part-13",
        "/videos/hamilton-china-2007.part-14",
        "/videos/hamilton-china-2007.part-15"
      ],
      label: "Hamilton China 2007",
      title: "Hamilton — China 2007"
    },
    {
      src: "/videos/indy-500-2024.mp4",
      chunks: [
        "/videos/indy-500-2024.part-00",
        "/videos/indy-500-2024.part-01",
        "/videos/indy-500-2024.part-02",
        "/videos/indy-500-2024.part-03",
        "/videos/indy-500-2024.part-04",
        "/videos/indy-500-2024.part-05",
        "/videos/indy-500-2024.part-06",
        "/videos/indy-500-2024.part-07",
        "/videos/indy-500-2024.part-08",
        "/videos/indy-500-2024.part-09",
        "/videos/indy-500-2024.part-10",
        "/videos/indy-500-2024.part-11",
        "/videos/indy-500-2024.part-12",
        "/videos/indy-500-2024.part-13",
        "/videos/indy-500-2024.part-14",
        "/videos/indy-500-2024.part-15",
        "/videos/indy-500-2024.part-16",
        "/videos/indy-500-2024.part-17",
        "/videos/indy-500-2024.part-18",
        "/videos/indy-500-2024.part-19",
        "/videos/indy-500-2024.part-20"
      ],
      label: "Indy 500 2024",
      title: "Indy 500 — 2024"
    },
    {
      src: "/videos/indianapolis-2004.mp4",
      chunks: [
        "/videos/indianapolis-2004.part-00",
        "/videos/indianapolis-2004.part-01",
        "/videos/indianapolis-2004.part-02",
        "/videos/indianapolis-2004.part-03",
        "/videos/indianapolis-2004.part-04",
        "/videos/indianapolis-2004.part-05",
        "/videos/indianapolis-2004.part-06",
        "/videos/indianapolis-2004.part-07"
      ],
      label: "Indianapolis 2004",
      title: "Indianapolis — 2004"
    },
    {
      src: "/videos/mick-schumacher-debut.mp4",
      chunks: [
        "/videos/mick-schumacher-debut.part-00",
        "/videos/mick-schumacher-debut.part-01",
        "/videos/mick-schumacher-debut.part-02",
        "/videos/mick-schumacher-debut.part-03",
        "/videos/mick-schumacher-debut.part-04",
        "/videos/mick-schumacher-debut.part-05",
        "/videos/mick-schumacher-debut.part-06",
        "/videos/mick-schumacher-debut.part-07",
        "/videos/mick-schumacher-debut.part-08",
        "/videos/mick-schumacher-debut.part-09",
        "/videos/mick-schumacher-debut.part-10",
        "/videos/mick-schumacher-debut.part-11",
        "/videos/mick-schumacher-debut.part-12",
        "/videos/mick-schumacher-debut.part-13",
        "/videos/mick-schumacher-debut.part-14",
        "/videos/mick-schumacher-debut.part-15",
        "/videos/mick-schumacher-debut.part-16"
      ],
      label: "Mick Schumacher debut",
      title: "Mick Schumacher — Debut"
    },
    {
      src: "/videos/japan-1989.mp4",
      chunks: [
        "/videos/japan-1989.part-00",
        "/videos/japan-1989.part-01",
        "/videos/japan-1989.part-02",
        "/videos/japan-1989.part-03",
        "/videos/japan-1989.part-04",
        "/videos/japan-1989.part-05",
        "/videos/japan-1989.part-06",
        "/videos/japan-1989.part-07",
        "/videos/japan-1989.part-08",
        "/videos/japan-1989.part-09",
        "/videos/japan-1989.part-10"
      ],
      label: "Japan 1989",
      title: "Japan — 1989"
    },
    {
      src: "/videos/alonso-schumacher-130r.mp4",
      chunks: [
        "/videos/alonso-schumacher-130r.part-00",
        "/videos/alonso-schumacher-130r.part-01",
        "/videos/alonso-schumacher-130r.part-02",
        "/videos/alonso-schumacher-130r.part-03",
        "/videos/alonso-schumacher-130r.part-04",
        "/videos/alonso-schumacher-130r.part-05"
      ],
      label: "Alonso and Schumacher at 130R",
      title: "Alonso vs Schumacher — 130R"
    },
    {
      src: "/videos/button-canada-2011.mp4",
      chunks: [
        "/videos/button-canada-2011.part-00",
        "/videos/button-canada-2011.part-01",
        "/videos/button-canada-2011.part-02",
        "/videos/button-canada-2011.part-03",
        "/videos/button-canada-2011.part-04",
        "/videos/button-canada-2011.part-05",
        "/videos/button-canada-2011.part-06",
        "/videos/button-canada-2011.part-07",
        "/videos/button-canada-2011.part-08",
        "/videos/button-canada-2011.part-09",
        "/videos/button-canada-2011.part-10",
        "/videos/button-canada-2011.part-11",
        "/videos/button-canada-2011.part-12",
        "/videos/button-canada-2011.part-13",
        "/videos/button-canada-2011.part-14",
        "/videos/button-canada-2011.part-15",
        "/videos/button-canada-2011.part-16"
      ],
      label: "Button Canada 2011",
      title: "Button — Canada 2011"
    },
    {
      src: "/videos/vettel-hamilton-baku-2017.mp4",
      chunks: [
        "/videos/vettel-hamilton-baku-2017.part-00",
        "/videos/vettel-hamilton-baku-2017.part-01",
        "/videos/vettel-hamilton-baku-2017.part-02",
        "/videos/vettel-hamilton-baku-2017.part-03",
        "/videos/vettel-hamilton-baku-2017.part-04",
        "/videos/vettel-hamilton-baku-2017.part-05",
        "/videos/vettel-hamilton-baku-2017.part-06",
        "/videos/vettel-hamilton-baku-2017.part-07",
        "/videos/vettel-hamilton-baku-2017.part-08",
        "/videos/vettel-hamilton-baku-2017.part-09",
        "/videos/vettel-hamilton-baku-2017.part-10",
        "/videos/vettel-hamilton-baku-2017.part-11",
        "/videos/vettel-hamilton-baku-2017.part-12",
        "/videos/vettel-hamilton-baku-2017.part-13",
        "/videos/vettel-hamilton-baku-2017.part-14",
        "/videos/vettel-hamilton-baku-2017.part-15"
      ],
      label: "Vettel and Hamilton — Baku 2017",
      title: "Vettel vs Hamilton — Baku 2017"
    },
    {
      src: "/videos/webber-alonso-belgium-2011.mp4",
      chunks: [
        "/videos/webber-alonso-belgium-2011.part-00",
        "/videos/webber-alonso-belgium-2011.part-01",
        "/videos/webber-alonso-belgium-2011.part-02",
        "/videos/webber-alonso-belgium-2011.part-03",
        "/videos/webber-alonso-belgium-2011.part-04",
        "/videos/webber-alonso-belgium-2011.part-05",
        "/videos/webber-alonso-belgium-2011.part-06",
        "/videos/webber-alonso-belgium-2011.part-07",
        "/videos/webber-alonso-belgium-2011.part-08",
        "/videos/webber-alonso-belgium-2011.part-09",
        "/videos/webber-alonso-belgium-2011.part-10",
        "/videos/webber-alonso-belgium-2011.part-11",
        "/videos/webber-alonso-belgium-2011.part-12",
        "/videos/webber-alonso-belgium-2011.part-13",
        "/videos/webber-alonso-belgium-2011.part-14",
        "/videos/webber-alonso-belgium-2011.part-15",
        "/videos/webber-alonso-belgium-2011.part-16",
        "/videos/webber-alonso-belgium-2011.part-17",
        "/videos/webber-alonso-belgium-2011.part-18",
        "/videos/webber-alonso-belgium-2011.part-19",
        "/videos/webber-alonso-belgium-2011.part-20",
        "/videos/webber-alonso-belgium-2011.part-21",
        "/videos/webber-alonso-belgium-2011.part-22",
        "/videos/webber-alonso-belgium-2011.part-23",
        "/videos/webber-alonso-belgium-2011.part-24",
        "/videos/webber-alonso-belgium-2011.part-25",
        "/videos/webber-alonso-belgium-2011.part-26",
        "/videos/webber-alonso-belgium-2011.part-27",
        "/videos/webber-alonso-belgium-2011.part-28"
      ],
      label: "Webber and Alonso — Belgium 2011",
      title: "Webber vs Alonso — Belgium 2011"
    },
    {
      src: "/videos/verstappen-hamilton-baku-2021.mp4",
      chunks: [
        "/videos/verstappen-hamilton-baku-2021.part-00",
        "/videos/verstappen-hamilton-baku-2021.part-01",
        "/videos/verstappen-hamilton-baku-2021.part-02",
        "/videos/verstappen-hamilton-baku-2021.part-03",
        "/videos/verstappen-hamilton-baku-2021.part-04",
        "/videos/verstappen-hamilton-baku-2021.part-05",
        "/videos/verstappen-hamilton-baku-2021.part-06",
        "/videos/verstappen-hamilton-baku-2021.part-07",
        "/videos/verstappen-hamilton-baku-2021.part-08",
        "/videos/verstappen-hamilton-baku-2021.part-09",
        "/videos/verstappen-hamilton-baku-2021.part-10",
        "/videos/verstappen-hamilton-baku-2021.part-11",
        "/videos/verstappen-hamilton-baku-2021.part-12",
        "/videos/verstappen-hamilton-baku-2021.part-13",
        "/videos/verstappen-hamilton-baku-2021.part-14",
        "/videos/verstappen-hamilton-baku-2021.part-15",
        "/videos/verstappen-hamilton-baku-2021.part-16",
        "/videos/verstappen-hamilton-baku-2021.part-17",
        "/videos/verstappen-hamilton-baku-2021.part-18",
        "/videos/verstappen-hamilton-baku-2021.part-19",
        "/videos/verstappen-hamilton-baku-2021.part-20",
        "/videos/verstappen-hamilton-baku-2021.part-21",
        "/videos/verstappen-hamilton-baku-2021.part-22",
        "/videos/verstappen-hamilton-baku-2021.part-23",
        "/videos/verstappen-hamilton-baku-2021.part-24",
        "/videos/verstappen-hamilton-baku-2021.part-25",
        "/videos/verstappen-hamilton-baku-2021.part-26",
        "/videos/verstappen-hamilton-baku-2021.part-27"
      ],
      label: "Verstappen and Hamilton — Baku 2021",
      title: "Verstappen vs Hamilton — Baku 2021"
    },
    {
      src: "/videos/singapore-2008.mp4",
      chunks: [
        "/videos/singapore-2008.part-00",
        "/videos/singapore-2008.part-01",
        "/videos/singapore-2008.part-02",
        "/videos/singapore-2008.part-03",
        "/videos/singapore-2008.part-04",
        "/videos/singapore-2008.part-05",
        "/videos/singapore-2008.part-06",
        "/videos/singapore-2008.part-07",
        "/videos/singapore-2008.part-08"
      ],
      label: "Singapore 2008",
      title: "Singapore 2008"
    },
    {
      src: "/videos/hamilton-malaysia-2016.mp4",
      chunks: [
        "/videos/hamilton-malaysia-2016.part-00",
        "/videos/hamilton-malaysia-2016.part-01",
        "/videos/hamilton-malaysia-2016.part-02",
        "/videos/hamilton-malaysia-2016.part-03",
        "/videos/hamilton-malaysia-2016.part-04",
        "/videos/hamilton-malaysia-2016.part-05",
        "/videos/hamilton-malaysia-2016.part-06",
        "/videos/hamilton-malaysia-2016.part-07",
        "/videos/hamilton-malaysia-2016.part-08",
        "/videos/hamilton-malaysia-2016.part-09",
        "/videos/hamilton-malaysia-2016.part-10",
        "/videos/hamilton-malaysia-2016.part-11",
        "/videos/hamilton-malaysia-2016.part-12",
        "/videos/hamilton-malaysia-2016.part-13",
        "/videos/hamilton-malaysia-2016.part-14",
        "/videos/hamilton-malaysia-2016.part-15",
        "/videos/hamilton-malaysia-2016.part-16",
        "/videos/hamilton-malaysia-2016.part-17",
        "/videos/hamilton-malaysia-2016.part-18",
        "/videos/hamilton-malaysia-2016.part-19"
      ],
      label: "Hamilton Malaysia 2016",
      title: "Hamilton — Malaysia 2016"
    },
    {
      src: "/videos/hamilton-wrong-pit-malaysia-2013.mp4",
      chunks: [
        "/videos/hamilton-wrong-pit-malaysia-2013.part-00",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-01",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-02",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-03",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-04",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-05",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-06",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-07",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-08",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-09",
        "/videos/hamilton-wrong-pit-malaysia-2013.part-10"
      ],
      label: "Hamilton wrong pit Malaysia 2013",
      title: "Hamilton Wrong Pit — Malaysia 2013"
    },
    {
      src: "/videos/verstappen-nurburgring-gt3.mp4",
      chunks: [
        "/videos/verstappen-nurburgring-gt3.part-00",
        "/videos/verstappen-nurburgring-gt3.part-01",
        "/videos/verstappen-nurburgring-gt3.part-02",
        "/videos/verstappen-nurburgring-gt3.part-03",
        "/videos/verstappen-nurburgring-gt3.part-04",
        "/videos/verstappen-nurburgring-gt3.part-05",
        "/videos/verstappen-nurburgring-gt3.part-06",
        "/videos/verstappen-nurburgring-gt3.part-07",
        "/videos/verstappen-nurburgring-gt3.part-08",
        "/videos/verstappen-nurburgring-gt3.part-09",
        "/videos/verstappen-nurburgring-gt3.part-10",
        "/videos/verstappen-nurburgring-gt3.part-11"
      ],
      label: "Verstappen Nürburgring GT3",
      title: "Verstappen — Nürburgring GT3"
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
                {video.chunks ? (
                  <ChunkedVideo chunks={video.chunks} label={video.label} />
                ) : (
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
                )}
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

// Indy 500 2024 deployment trigger.
