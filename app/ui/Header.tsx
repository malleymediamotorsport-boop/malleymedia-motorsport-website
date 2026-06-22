"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-[#050609]/88 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="MalleyMedia Motorsport home">
          <Image
            src="/images/malleymedia-logo-square.png"
            alt="MalleyMedia Motorsport logo"
            width={56}
            height={56}
            priority
            className="h-12 w-12 border border-white/15 object-cover"
          />
          <span className="leading-none">
            <span className="block text-base font-black uppercase tracking-[0.16em] text-white">MalleyMedia</span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.32em] text-red-300">Motorsport</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-white text-black" : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/contact"
          className="hidden border border-red-400/60 bg-red-500 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_24px_rgba(242,58,58,0.24)] transition hover:bg-red-400 sm:inline-flex"
        >
          Contact
        </Link>
      </nav>
      <div className="section-shell flex gap-2 overflow-x-auto pb-3 xl:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 border px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] ${
              pathname === item.href ? "border-white bg-white text-black" : "border-white/12 text-zinc-300"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
