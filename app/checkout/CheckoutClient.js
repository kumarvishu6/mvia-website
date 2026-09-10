"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import s from "./page.module.css";
import { useCart } from "../lib/CartContext";
import { lookupDiscount, calculateTotals, formatPrice } from "../lib/pricing";

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
  "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
  "VA", "WA", "WV", "WI", "WY", "DC",
];

export default function CheckoutClient() {
  const { items, subtotal, hydrated } = useCart();
  const searchParams = useSearchParams();
  const discount = lookupDiscount(searchParams.get("code"));
  const totals = calculateTotals(subtotal, discount);

  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Stripe Checkout gets wired in here once the client's API keys arrive:
    // POST the cart + discount to /api/checkout, then redirect to the session URL.
    setTimeout(() => setSubmitting(false), 900);
  }

  if (!hydrated) {
    return <div className={s.skeleton}>Loading checkout…</div>;
  }

  if (items.length === 0) {
    return (
      <div className={s.empty}>
        <h2>Nothing to check out</h2>
        <p>Your cart is empty.</p>
        <Link href="/products" className={s.btnPrimary}>
          Shop Botanicals
        </Link>
      </div>
    );
  }

  return (
    <form className={s.layout} onSubmit={handleSubmit}>
      <div>
        <div className={s.card}>
          <h2>Contact</h2>
          <div className={s.field}>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className={s.field}>
            <label htmlFor="phone">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" />
          </div>
        </div>

        <div className={s.card}>
          <h2>Shipping address</h2>
          <div className={s.fieldRow}>
            <div className={s.field}>
              <label htmlFor="firstName">First name</label>
              <input id="firstName" name="firstName" type="text" required />
            </div>
            <div className={s.field}>
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" name="lastName" type="text" required />
            </div>
          </div>
          <div className={s.field}>
            <label htmlFor="address1">Address</label>
            <input id="address1" name="address1" type="text" required placeholder="Street address" />
          </div>
          <div className={s.field}>
            <label htmlFor="address2">Apartment, suite, etc. (optional)</label>
            <input id="address2" name="address2" type="text" />
          </div>
          <div className={s.fieldRow}>
            <div className={s.field}>
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>
            <div className={s.fieldRow} style={{ gap: 12 }}>
              <div className={s.field}>
                <label htmlFor="state">State</label>
                <select id="state" name="state" required defaultValue="">
                  <option value="" disabled>
                    —
                  </option>
                  {US_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
              <div className={s.field}>
                <label htmlFor="zip">ZIP</label>
                <input id="zip" name="zip" type="text" required inputMode="numeric" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className={s.summary}>
        <h2>Order Summary</h2>

        <div className={s.miniItems}>
          {items.map((item) => (
            <div className={s.miniItem} key={item.id}>
              <div className={s.miniThumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.name} />
                <span className={s.qtyBadge}>{item.quantity}</span>
              </div>
              <div className={s.miniName}>{item.name}</div>
              <div className={s.miniPrice}>{formatPrice(item.price * item.quantity)}</div>
            </div>
          ))}
        </div>

        <div className={s.summaryRow}>
          <span>Subtotal</span>
          <strong>{formatPrice(totals.subtotal)}</strong>
        </div>

        {discount && (
          <div className={`${s.summaryRow} ${s.discountRow}`}>
            <span>{discount.code} — {discount.label}</span>
            <strong>−{formatPrice(totals.discountAmount)}</strong>
          </div>
        )}

        <div className={s.summaryRow}>
          <span>Shipping</span>
          <strong>{totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}</strong>
        </div>

        <div className={s.summaryRow}>
          <span>Estimated tax</span>
          <strong>{formatPrice(totals.tax)}</strong>
        </div>

        <div className={s.totalRow}>
          <span>Total</span>
          <span className={s.amount}>{formatPrice(totals.total)}</span>
        </div>

        <button type="submit" className={s.payBtn} disabled={submitting}>
          {submitting ? "Connecting…" : "Continue to Payment"}
        </button>

        <p className={s.pendingNote}>
          <strong>Demo mode.</strong> Card payment is handled by Stripe on the next step — it activates
          as soon as the Stripe account is connected. No charge is made right now.
        </p>

        <Link href="/cart" className={s.backLink}>
          Back to cart
        </Link>

        <div className={s.trustRow}>
          <span>Secure checkout</span>
          <span>·</span>
          <span>30-day returns</span>
        </div>
      </aside>
    </form>
  );
}
