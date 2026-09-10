"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import s from "./site.module.css";
import { useCart } from "../lib/CartContext";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={s.cartIcon}>
      <path
        d="M6 8h12l-1 11.5a1.5 1.5 0 0 1-1.5 1.4h-9A1.5 1.5 0 0 1 5 19.5L4 8h2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 10V6.5a3 3 0 1 1 6 0V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bump, setBump] = useState(false);
  const { count, hydrated } = useCart();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Little pulse whenever the item count changes.
  useEffect(() => {
    if (!hydrated || count === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [count, hydrated]);

  return (
    <header className={`${s.header} ${scrolled ? s.headerScrolled : ""}`}>
      <nav className={`${s.wrap} ${s.nav}`}>
        <Link href="/" className={s.logo}>
          MVIA<span>.</span>
        </Link>
        <div className={s.navlinks}>
          {LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={s.navActions}>
          <Link href="/cart" className={s.cartLink} aria-label="View cart">
            <CartIcon />
            {hydrated && count > 0 && (
              <span className={`${s.cartBadge} ${bump ? s.cartBadgeBump : ""}`}>{count}</span>
            )}
          </Link>
          <Link href="/contact" className={s.navCta}>
            Book a Consultation
          </Link>
        </div>
        <button
          type="button"
          className={`${s.burger} ${menuOpen ? s.burgerOpen : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {menuOpen && (
        <div className={s.mobileMenu}>
          {LINKS.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setMenuOpen(false)}>
            Cart{hydrated && count > 0 ? ` (${count})` : ""}
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
