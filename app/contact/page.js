import s from "./page.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — MVIA",
  description: "Book a consultation or send us a message.",
};

export default function ContactPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
            Let&apos;s Begin
          </div>
          <h1>Not sure where to start? Let&apos;s build your path together.</h1>
          <p>Book a complimentary consultation, or send us a message below.</p>
        </div>
      </div>

      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.grid}>
            <div>
              <div className={s.calendlyPanel}>
                <h2 style={{ fontSize: 20 }}>Book a Consultation</h2>
                <p>
                  Pick a day and time that works for you &mdash; the scheduler opens in a
                  new tab.
                </p>
                {/* TODO: replace with the real Calendly (or similar) scheduling link once provided. */}
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.calendlyBtn}
                >
                  Open Scheduler
                </a>
              </div>
              <div className={s.contactInfo}>
                <div>hello@themvia.com</div>
                <div>Mon&ndash;Fri, 9am&ndash;6pm</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
