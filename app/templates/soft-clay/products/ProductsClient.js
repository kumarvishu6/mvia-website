"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import s from "./styles.module.css";

const CATEGORIES = ["All", "Capsules", "Teas", "Powders", "Oils"];

const PRODUCTS = [
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Root Capsules",
    category: "Capsules",
    price: 28,
    tag: "Best Seller",
    initials: "AR",
    description:
      "Adaptogenic support for stress and steady energy, sourced and lab-tested for potency.",
  },
  {
    id: "tulsi-tea",
    name: "Tulsi (Holy Basil) Tea",
    category: "Teas",
    price: 18,
    tag: null,
    initials: "TB",
    description:
      "A calming daily ritual tea, traditionally used to ease everyday stress and support focus.",
  },
  {
    id: "turmeric-ginger",
    name: "Turmeric & Ginger Blend",
    category: "Powders",
    price: 24,
    tag: null,
    initials: "TG",
    description:
      "An anti-inflammatory kitchen staple, stirred into warm water, smoothies, or meals.",
  },
  {
    id: "brahmi-drops",
    name: "Brahmi Focus Drops",
    category: "Oils",
    price: 32,
    tag: "New",
    initials: "BF",
    description:
      "A traditional focus-support tincture, taken before study, training, or deep work blocks.",
  },
  {
    id: "triphala-powder",
    name: "Triphala Digestive Powder",
    category: "Powders",
    price: 22,
    tag: null,
    initials: "TR",
    description:
      "A classical three-fruit blend traditionally used to support gentle, daily digestion.",
  },
  {
    id: "chamomile-lavender-oil",
    name: "Chamomile & Lavender Oil",
    category: "Oils",
    price: 26,
    tag: null,
    initials: "CL",
    description:
      "A gentle massage and diffuser oil blend for winding down before rest or meditation.",
  },
];

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState({});
  const [justAdded, setJustAdded] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const cartCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  function addToCart(id) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setJustAdded(id);
    setTimeout(() => setJustAdded((current) => (current === id ? null : current)), 1200);
  }

  return (
    <main className={s.page}>
      <header className={s.header}>
        <nav className={`${s.wrap} ${s.nav}`}>
          <Link href="/templates/soft-clay" className={s.logo}>
            MVIA<span>.</span>
          </Link>
          <div className={s.navlinks}>
            <Link href="/templates/soft-clay#method">Method</Link>
            <Link href="/templates/soft-clay#programs">Programs</Link>
            <Link href="/templates/soft-clay#about">About</Link>
            <Link href="/templates/soft-clay#contact">Contact</Link>
          </div>
          <button className={s.cartPill} type="button">
            Cart ({cartCount})
          </button>
        </nav>
      </header>

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow}>Botanicals</div>
          <h1>Herbal wellness, sourced and tested.</h1>
          <p>
            Traditional Indian botanicals, formulated and tested to a standard modern
            wellness routines can trust. This is a demo catalog &mdash; swap in real
            products, pricing, and testing details before launch.
          </p>
        </div>
      </div>

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

        {filtered.length === 0 ? (
          <div className={s.empty}>No products in this category yet.</div>
        ) : (
          <div className={s.grid} key={activeCategory}>
            {filtered.map((product, i) => (
              <div className={s.card} style={{ animationDelay: `${i * 0.05}s` }} key={product.id}>
                <div className={s.thumb}>
                  {product.tag && <span className={s.tag}>{product.tag}</span>}
                  {product.initials}
                </div>
                <div className={s.cardBody}>
                  <div className={s.category}>{product.category}</div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className={s.cardFooter}>
                    <span className={s.price}>${product.price}</span>
                    <button
                      type="button"
                      className={`${s.addBtn} ${justAdded === product.id ? s.addBtnAdded : ""}`}
                      onClick={() => addToCart(product.id)}
                    >
                      {justAdded === product.id ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className={s.footer}>
        &copy; 2026 THE MVIA INC. All rights reserved. &middot; Product demo &mdash; Gold Editorial
      </footer>
    </main>
  );
}
