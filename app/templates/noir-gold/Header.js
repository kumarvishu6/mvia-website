"use client";

import { useEffect, useState } from "react";
import s from "./styles.module.css";

const LINKS = [
  { href: "#method", label: "Method" },
  { href: "#programs", label: "Programs" },
  { href: "#botanicals", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.headerScrolled : ""}`}>
      <nav className={`${s.wrap} ${s.nav}`}>
        <div className={s.logo}>
          MVIA<span>.</span>
        </div>
        <div className={s.navlinks}>
          {LINKS.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className={s.navCta}>
          Book a Consultation
        </a>
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
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
