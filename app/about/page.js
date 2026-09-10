import Link from "next/link";
import s from "./page.module.css";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "About — MVIA",
  description: "Why MVIA was created, and the philosophy behind the practice.",
};

const VALUES = [
  {
    n: "I",
    title: "Effective first",
    body: "Every program is designed to work — calming as a result, not instead of results.",
  },
  {
    n: "II",
    title: "Rooted, not costumed",
    body: "We draw on real Indian wellness traditions with respect, not surface-level symbols or stereotypes.",
  },
  {
    n: "III",
    title: "Honest, tested products",
    body: "Our botanicals are sourced and tested to a standard modern routines can trust.",
  },
];

export default function AboutPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      {/* ---------- Hero ---------- */}
      <header className={s.hero}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>About MVIA</div>
          <h1>
            A complete practice
            <br />
            for <em className={s.accent}>modern life</em>.
          </h1>
        </div>
      </header>

      {/* ---------- Story ---------- */}
      <section className={s.section}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.storyGrid}>
            <div className={s.storyMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/services/wellness.svg" alt="A seated meditation practice" />
              <div className={s.mediaBadge}>
                <strong>20+</strong>
                <span>Years combined experience</span>
              </div>
            </div>

            <div className={s.storyText}>
              <div className={s.eyebrow}>Our Story</div>
              <h2>Ancient practices, built for practical, modern life.</h2>
              <p>
                MVIA was founded on a simple observation: most people are offered strength
                training, or yoga, or stress management &mdash; rarely all four, and rarely
                as one connected practice. We built MVIA around the idea that moving well,
                building real strength, breathing with intention, and sitting in stillness
                all support each other.
              </p>
              <p>
                The practice draws directly from Indian wellness traditions &mdash; yoga,
                breathwork, and herbal botanicals &mdash; combined with a straightforward,
                modern American approach to strength coaching. The result is a method that
                respects where it comes from while being genuinely useful for a demanding,
                everyday life.
              </p>
              <div className={s.credsRow}>
                <span>Certified Instructors</span>
                <span>CPR / AED Certified</span>
                <span>Fully Insured</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Pull quote ---------- */}
      <section className={s.quoteSection}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <figure className={s.quote}>
            <span className={s.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              We don&apos;t teach four separate things. We teach one practice &mdash; and it
              happens to have four parts.
            </blockquote>
            <figcaption>The MVIA Method</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ---------- Values ---------- */}
      <section className={`${s.section} ${s.sectionAlt}`}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow}>What We Stand For</div>
            <h2>Our values</h2>
          </div>
          <div className={s.valuesGrid}>
            {VALUES.map((v) => (
              <div className={s.valueCard} key={v.n}>
                <span className={s.valueNum}>{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className={s.ctaSection}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.ctaInner}>
            <div className={s.eyebrow}>Let&apos;s Begin</div>
            <h2>Start with a conversation.</h2>
            <p>
              A short consultation is the quickest way to find out which part of the practice
              belongs in your week first.
            </p>
            <Link href="/contact" className={s.btnPrimary}>
              Book a Complimentary Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
