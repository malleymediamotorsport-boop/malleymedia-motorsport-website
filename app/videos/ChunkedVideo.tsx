"use client";

import { useEffect, useState } from "react";

type ChunkedVideoProps = {
  chunks: string[];
  label: string;
};

export default function ChunkedVideo({ chunks, label }: ChunkedVideoProps) {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    let objectUrl: string | undefined;
    let cancelled = false;

    Promise.all(chunks.map((chunk) => fetch(chunk).then((response) => response.arrayBuffer())))
      .then((parts) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(new Blob(parts, { type: "video/mp4" }));
        setSrc(objectUrl);
      })
      .catch(() => setSrc(undefined));

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [chunks]);

  return (
    <video
      className="aspect-[9/16] w-full bg-black object-cover"
      controls
      playsInline
      preload="metadata"
      aria-label={label}
      src={src}
    >
      Your browser does not support video playback.
    </video>
  );
}
