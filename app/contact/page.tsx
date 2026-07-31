import { contactEmail, socialLinks } from "../data";
import { PageHero } from "../ui/PageHero";
import { ContactForm } from "./ContactForm";

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
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">{item.label}</p>
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
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
