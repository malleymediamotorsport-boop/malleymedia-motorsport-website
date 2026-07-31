import Image from "next/image";
import Link from "next/link";
import { contactEmail, navItems, socialLinks } from "../data";

export function Footer() {
  return (
    <footer className="border-t hairline bg-black/30">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/malleymedia-logo-square.png"
              alt="MalleyMedia Motorsport logo"
              width={48}
              height={48}
              className="h-12 w-12 border border-white/15 object-cover"
            />
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-500">MalleyMedia Motorsport</p>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            Formula 1, IndyCar and junior series coverage.
          </p>
          <a className="mt-4 inline-flex text-sm font-semibold text-red-200 transition hover:text-white" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">Pages</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-zinc-400 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">Social</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="border border-white/12 px-2.5 py-1 text-xs text-zinc-400 transition hover:border-red-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t hairline py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 MalleyMedia Motorsport. All rights reserved.</p>
          <p>Formula 1, IndyCar and junior series coverage.</p>
        </div>
      </div>
    </footer>
  );
}
