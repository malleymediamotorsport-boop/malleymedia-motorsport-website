"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "../data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "The message could not be sent.");
      setStatus("error");
    }
  }

  return (
    <form className="media-card grid gap-4 p-6 sm:p-8" onSubmit={handleSubmit}>
      <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Enquiry Form</p>
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
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
      <button
        className="bg-red-500 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-400 disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      <p className="text-xs leading-5 text-zinc-400" aria-live="polite">
        {status === "sent" && <span className="font-semibold text-green-300">Message sent successfully. </span>}
        {status === "error" && <span className="font-semibold text-red-500">{errorMessage} </span>}
        Your message will be sent directly to MalleyMedia Motorsport. You can also email{" "}
        <a className="font-semibold text-red-200 hover:text-white" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        .
      </p>
    </form>
  );
}
