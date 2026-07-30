"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "../data";

const enquiryLabels: Record<string, string> = {
  general: "General message",
  media: "Media accreditation",
  event: "Event enquiry",
  collab: "Creator collaboration"
};

export function ContactForm() {
  const [emailOpened, setEmailOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const enquiryType = String(formData.get("enquiryType") ?? "general");
    const message = String(formData.get("message") ?? "");
    const enquiryLabel = enquiryLabels[enquiryType] ?? "General message";

    const subject = `Website enquiry: ${enquiryLabel}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Enquiry type: ${enquiryLabel}`, "", message].join("\n");

    setEmailOpened(true);
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="media-card grid gap-4 p-6 sm:p-8" onSubmit={handleSubmit}>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Enquiry Form</p>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Name</span>
        <input
          className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Email</span>
        <input
          className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300"
          name="email"
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Enquiry type</span>
        <select
          className="border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300"
          name="enquiryType"
          defaultValue="general"
        >
          <option value="general">General message</option>
          <option value="media">Media accreditation</option>
          <option value="event">Event enquiry</option>
          <option value="collab">Creator collaboration</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-zinc-300">Message</span>
        <textarea
          className="min-h-36 resize-y border border-white/12 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-red-300"
          name="message"
          placeholder="Share a short message, event details, or accreditation context."
          required
        />
      </label>
      <button className="bg-red-500 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-400" type="submit">
        Send Message
      </button>
      <p className="text-xs leading-5 text-zinc-400" aria-live="polite">
        {emailOpened ? "Your email app should open with the message prepared. " : "This opens your email app with the message prepared. "}
        If it does not open, email{" "}
        <a className="font-semibold text-red-200 hover:text-white" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  );
}
