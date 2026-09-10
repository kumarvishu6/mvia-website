import { Suspense } from "react";
import s from "./page.module.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CheckoutClient from "./CheckoutClient";

export const metadata = {
  title: "Checkout — MVIA",
  description: "Complete your MVIA Botanicals order.",
};

export default function CheckoutPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>Checkout</div>
          <h1>Almost there.</h1>

          <div className={s.steps}>
            <div className={`${s.step} ${s.stepDone}`}>
              <span className={s.stepDot}>✓</span>
              <span>Cart</span>
            </div>
            <span className={s.stepLine} />
            <div className={`${s.step} ${s.stepActive}`}>
              <span className={s.stepDot}>2</span>
              <span>Details</span>
            </div>
            <span className={s.stepLine} />
            <div className={s.step}>
              <span className={s.stepDot}>3</span>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </div>

      <section className={s.section}>
        <div className={s.wrap}>
          <Suspense fallback={<div className={s.skeleton}>Loading checkout…</div>}>
            <CheckoutClient />
          </Suspense>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
