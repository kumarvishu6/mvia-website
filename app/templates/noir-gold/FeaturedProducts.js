"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./styles.module.css";

const PRODUCTS = [
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Root Capsules",
    price: 28,
    tag: "Best Seller",
    rating: 5,
    initials: "AR",
    description:
      "Adaptogenic support for stress and steady energy, sourced and lab-tested for potency. Our most reordered formula.",
    big: true,
  },
  {
    id: "tulsi-tea",
    name: "Tulsi (Holy Basil) Tea",
    price: 18,
    tag: null,
    rating: 4,
    initials: "TB",
    description: "A calming daily ritual tea for everyday stress and focus.",
  },
  {
    id: "brahmi-drops",
    name: "Brahmi Focus Drops",
    price: 32,
    tag: "New",
    rating: 5,
    initials: "BF",
    description: "A focus-support tincture for study, training, or deep work.",
  },
  {
    id: "triphala-powder",
    name: "Triphala Digestive Powder",
    price: 22,
    tag: null,
    rating: 4,
    initials: "TR",
    description: "A classical three-fruit blend for gentle daily digestion.",
  },
];

function Stars({ count }) {
  return (
    <span className={s.stars} aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

export default function FeaturedProducts() {
  const [addedIds, setAddedIds] = useState({});
  const [cartCount, setCartCount] = useState(0);

  function addToCart(id) {
    setCartCount((n) => n + 1);
    setAddedIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [id]: false }));
    }, 1200);
  }

  return (
    <>
      <div className={s.featuredHead}>
        <div className={s.sectionHead} style={{ marginBottom: 0 }}>
          <div className={s.eyebrow}>Featured Botanicals</div>
          <h2>Herbal wellness, sourced and tested.</h2>
          <p>
            A small selection from the full catalog &mdash; traditional Indian botanicals,
            formulated and tested to a standard modern wellness routines can trust.
          </p>
        </div>
        <Link href="/templates/noir-gold/products" className={s.cartPillLink}>
          Cart ({cartCount})
        </Link>
      </div>

      <div className={s.featuredGrid}>
        {PRODUCTS.map((product) => (
          <div
            className={`${s.featuredCard} ${product.big ? s.featuredCardBig : ""}`}
            key={product.id}
          >
            {product.tag && <span className={s.ribbon}>{product.tag}</span>}
            <div className={s.featuredThumb}>
              <div className={s.grainLayer}></div>
              <span>{product.initials}</span>
            </div>
            <div className={s.featuredBody}>
              <Stars count={product.rating} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className={s.featuredFooter}>
                <span className={s.price}>${product.price}</span>
                <div className={s.featuredActions}>
                  <button
                    type="button"
                    className={`${s.addBtn} ${addedIds[product.id] ? s.addBtnAdded : ""}`}
                    onClick={() => addToCart(product.id)}
                  >
                    {addedIds[product.id] ? "Added" : "Add to Cart"}
                  </button>
                  <Link href="/templates/noir-gold/products" className={s.link}>
                    Shop &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={s.featuredMore}>
        <Link href="/templates/noir-gold/products" className={s.btnGhost}>
          View Full Catalog
        </Link>
      </div>
    </>
  );
}
