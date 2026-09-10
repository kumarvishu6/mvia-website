"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import s from "./page.module.css";
import { CATEGORIES } from "../lib/products";
import { useCart } from "../lib/CartContext";
import { formatPrice } from "../lib/pricing";

export default function ProductsClient({ products }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [justAdded, setJustAdded] = useState(null);
  const { addItem, count } = useCart();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [products, activeCategory]
  );

  function handleAdd(product) {
    addItem(product);
    setJustAdded(product.id);
    setTimeout(() => setJustAdded((current) => (current === product.id ? null : current)), 1400);
  }

  return (
    <>
      <div className={s.wrap}>
        <div className={s.filterRow}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`${s.filterChip} ${activeCategory === cat ? s.filterChipActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={s.grid} key={activeCategory}>
          {filtered.map((product, i) => (
            <div className={s.card} key={product.id} style={{ animationDelay: `${i * 60}ms` }}>
              <Link href={`/products/${product.id}`} className={s.thumb}>
                {product.tag && <span className={s.tag}>{product.tag}</span>}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.imageUrl} alt={product.name} />
              </Link>
              <div className={s.cardBody}>
                <div className={s.category}>{product.category}</div>
                <h3>
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p>{product.description}</p>
                <div className={s.cardFooter}>
                  <span className={s.price}>{formatPrice(product.price)}</span>
                  <button
                    type="button"
                    className={`${s.addBtn} ${justAdded === product.id ? s.addBtnAdded : ""}`}
                    onClick={() => handleAdd(product)}
                  >
                    {justAdded === product.id ? "Added ✓" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {count > 0 && (
        <div className={s.cartBar}>
          <div className={`${s.wrap} ${s.cartBarInner}`}>
            <span>
              <strong>{count}</strong> item{count > 1 ? "s" : ""} in your cart
            </span>
            <Link href="/cart" className={s.checkoutBtn}>
              View Cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
