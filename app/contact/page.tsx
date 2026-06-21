import { socialLinks } from "../data";
import { PageHero } from "../ui/PageHero";

const contacts = [
  { label: "Email", value: "contact@malleymediamotorsport.com" },
  { label: "Instagram", value: "Latest photo updates and race-weekend posts" },
  { label: "YouTube", value: "Video edits, recaps, and creator-led coverage" }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact MalleyMedia Motorsport."
        text="A simple contact point for media officers, event teams, creators, and motorsport people reviewing the work or getting in touch."
      />
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="accent-rule pt-8">
            <h2 className="text-4xl font-black uppercase text-white">For media and event enquiries.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Use this page to share contact details, social profiles, and a short note about the work. The layout is suitable for future accreditation applications without making the project look larger than it is.
            </p>
            <div className="mt-8 grid gap-3">
              {contacts.map((item) => (
                <div key={item.label} className="border border-white/12 bg-white/[0.03] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="border border-red-300/50 bg-red-500/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-red-500">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <form className="media-card grid gap-4 p-6 sm:p-8">
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Name</span>
              <input className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Email</span>
              <input className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300" placeholder="you@example.com" type="email" />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Enquiry type</span>
              <select className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300" defaultValue="general">
                <option value="general">General message</option>
                <option value="media">Media accreditation</option>
                <option value="event">Event enquiry</option>
                <option value="collab">Creator collaboration</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Message</span>
              <textarea className="min-h-36 resize-y border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300" placeholder="Share a short message, event details, or accreditation context." />
            </label>
            <button className="bg-red-500 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-400" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
