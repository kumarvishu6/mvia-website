import s from "./page.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Policies — MVIA",
  description: "Privacy, terms, shipping, returns, and health disclaimers.",
};

export default function PoliciesPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>Policies</div>
          <h1>Policies &amp; disclaimers</h1>
        </div>
      </div>

      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.block}>
            <h2>Privacy Policy</h2>
            <p>
              We collect only the information needed to respond to inquiries, process
              orders, and improve our services &mdash; name, email, and order details. We
              do not sell personal information to third parties.
            </p>
          </div>
          <div className={s.block}>
            <h2>Terms &amp; Conditions</h2>
            <p>
              By using this site, you agree to use it for lawful purposes only. All
              content, branding, and product information belong to THE MVIA INC.
            </p>
          </div>
          <div className={s.block}>
            <h2>Shipping &amp; Returns</h2>
            <p>
              Orders ship within 3&ndash;5 business days. Unopened products may be returned
              within 30 days of delivery for a refund; opened products are not eligible for
              return.
            </p>
          </div>
          <div className={s.block}>
            <h2>Health &amp; Training Disclaimer</h2>
            <p>
              MVIA training, wellness, and corporate programs are not medical or
              mental-health treatment. Consult a physician before beginning any new
              exercise program, particularly if you are pregnant or have an existing
              health condition.
            </p>
          </div>
          <div className={s.block}>
            <h2>Herbal Product Disclaimer</h2>
            <p>
              These statements have not been evaluated by the FDA. Our products are not
              intended to diagnose, treat, cure, or prevent any disease. Consult a
              healthcare provider before use, especially if pregnant, nursing, or taking
              medication.
            </p>
          </div>
          <p style={{ color: "var(--ivory-dim)", fontSize: 13, marginTop: 30, opacity: 0.7 }}>
            Draft copy &mdash; to be reviewed by a qualified attorney before the site goes live.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
