"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import s from "./page.module.css";
import { useCart } from "../lib/CartContext";
import { lookupDiscount, calculateTotals, formatPrice, FREE_SHIPPING_THRESHOLD } from "../lib/pricing";

function EmptyCartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 8h12l-1 11.5a1.5 1.5 0 0 1-1.5 1.4h-9A1.5 1.5 0 0 1 5 19.5L4 8h2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 10V6.5a3 3 0 1 1 6 0V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function CartClient() {
  const router = useRouter();
  const { items, subtotal, hydrated, updateQuantity, removeItem } = useCart();

  const [codeInput, setCodeInput] = useState("");
  const [discount, setDiscount] = useState(null);
  const [promoError, setPromoError] = useState("");

  const totals = calculateTotals(subtotal, discount);

  function applyCode(e) {
    e.preventDefault();
    const found = lookupDiscount(codeInput);
    if (!found) {
      setPromoError("That code isn't valid.");
      setDiscount(null);
      return;
    }
    setDiscount(found);
    setPromoError("");
    setCodeInput("");
  }

  function goToCheckout() {
    const params = discount ? `?code=${encodeURIComponent(discount.code)}` : "";
    router.push(`/checkout${params}`);
  }

  // Cart lives in localStorage, so render nothing definitive until it's read.
  if (!hydrated) {
    return <div className={s.skeleton}>Loading your cart…</div>;
  }

  if (items.length === 0) {
    return (
      <div className={s.empty}>
        <div className={s.emptyArt}>
          <EmptyCartIcon />
        </div>
        <h2>Your cart is empty</h2>
        <p>Browse the botanicals collection and add something that supports your practice.</p>
        <Link href="/products" className={s.btnPrimary}>
          Shop Botanicals
        </Link>
      </div>
    );
  }

  return (
    <div className={s.layout}>
      <div className={s.items}>
        {items.map((item, i) => (
          <div className={s.item} key={item.id} style={{ animationDelay: `${i * 55}ms` }}>
            <Link href={`/products/${item.id}`} className={s.thumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} alt={item.name} />
            </Link>

            <div className={s.itemInfo}>
              <div className={s.category}>{item.category}</div>
              <h3>
                <Link href={`/products/${item.id}`}>{item.name}</Link>
              </h3>
              <div className={s.unitPrice}>{formatPrice(item.price)} each</div>
            </div>

            <div className={s.itemActions}>
              <div className={s.lineTotal}>{formatPrice(item.price * item.quantity)}</div>
              <div className={s.stepper}>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <button type="button" className={s.removeBtn} onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className={s.summary}>
        <h2>Order Summary</h2>

        <div className={s.summaryRow}>
          <span>Subtotal</span>
          <strong>{formatPrice(totals.subtotal)}</strong>
        </div>

        {discount && (
          <div className={`${s.summaryRow} ${s.discountRow}`}>
            <span>{discount.label}</span>
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

        {discount ? (
          <div className={s.appliedCode}>
            {discount.code}
            <button type="button" onClick={() => setDiscount(null)} aria-label="Remove discount code">
              ×
            </button>
          </div>
        ) : (
          <>
            <form className={s.promoForm} onSubmit={applyCode}>
              <input
                type="text"
                placeholder="Discount code"
                value={codeInput}
                onChange={(e) => {
                  setCodeInput(e.target.value);
                  setPromoError("");
                }}
                aria-label="Discount code"
              />
              <button type="submit">Apply</button>
            </form>
            {promoError && <p className={`${s.promoMsg} ${s.promoErr}`}>{promoError}</p>}
          </>
        )}

        {!totals.qualifiesFreeShipping && totals.amountToFreeShipping > 0 && (
          <div className={s.shipHint}>
            Add {formatPrice(totals.amountToFreeShipping)} more to qualify for free shipping on orders
            over {formatPrice(FREE_SHIPPING_THRESHOLD)}.
          </div>
        )}

        <button type="button" className={s.checkoutBtn} onClick={goToCheckout}>
          Proceed to Checkout
        </button>

        <Link href="/products" className={s.continueLink}>
          Continue shopping
        </Link>

        <p className={s.secureNote}>
          Taxes and shipping are estimates and are confirmed at checkout.
        </p>
      </aside>
    </div>
  );
}
