"use client";

import { useState } from "react";
import s from "./page.module.css";
import { supabasePublic } from "../lib/supabase/public";

const INTERESTS = [
  "General Question",
  "Private In-Home Training",
  "Studio Class Trial",
  "Corporate Wellness Proposal",
  "Retreat Information",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.target);
    const { error } = await supabasePublic.from("contact_submissions").insert({
      name: formData.get("name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    });

    if (error) {
      setStatus("idle");
      setErrorMsg("Something went wrong — please try again.");
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={s.card}>
        <h2>Message sent.</h2>
        <p className={s.successNote}>
          Thanks for reaching out &mdash; we&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className={s.card} onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <div className={s.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>
      <div className={s.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className={s.field}>
        <label htmlFor="interest">What are you interested in?</label>
        <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
          {INTERESTS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className={s.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className={s.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {errorMsg && <p className={s.successNote}>{errorMsg}</p>}
    </form>
  );
}
