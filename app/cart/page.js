import s from "./page.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CartClient from "./CartClient";

export const metadata = {
  title: "Your Cart — MVIA",
  description: "Review your MVIA Botanicals order.",
};

export default function CartPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>Botanicals</div>
          <h1>Your cart</h1>
        </div>
      </div>

      <section className={s.section}>
        <div className={s.wrap}>
          <CartClient />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
