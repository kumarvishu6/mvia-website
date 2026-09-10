"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./page.module.css";
import { useCart } from "../../lib/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className={s.addWrap}>
      <div className={s.addRow}>
        <div className={s.stepper}>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">
            +
          </button>
        </div>

        <button type="button" className={`${s.addBtn} ${added ? s.addBtnAdded : ""}`} onClick={handleAdd}>
          {added ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>

      {added && (
        <Link href="/cart" className={s.viewCartLink}>
          View cart →
        </Link>
      )}
    </div>
  );
}
