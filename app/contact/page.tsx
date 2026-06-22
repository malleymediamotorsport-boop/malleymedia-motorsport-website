import { contactEmail, socialLinks } from "../data";
import { PageHero } from "../ui/PageHero";

const contacts = [
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
  { label: "Instagram", value: "Latest updates and race-weekend media", href: "https://www.instagram.com/" },
  { label: "YouTube", value: "Highlights, recaps and video coverage", href: "https://www.youtube.com/" }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact MalleyMedia Motorsport."
        text="A professional contact point for media officers, teams, circuits, championships and motorsport partners reviewing the outlet."
      />
      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="accent-rule pt-8">
            <h2 className="text-4xl font-black uppercase text-white">For media, accreditation and event enquiries.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Use email for media access, accreditation, event information and professional enquiries. Instagram and YouTube remain the main public channels for content updates.
            </p>
            <div className="mt-8 grid gap-3">
              {contacts.map((item) => (
                <a key={item.label} href={item.href} className="border border-white/12 bg-white/[0.03] p-4 transition hover:border-red-300/60 hover:bg-red-500/10">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </a>
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
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Enquiry Form</p>
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
