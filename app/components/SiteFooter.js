import Link from "next/link";
import s from "./site.module.css";

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.footGrid}>
          <div>
            <div className={s.footLogo}>
              MVIA<span>.</span>
            </div>
            <p style={{ maxWidth: 280 }}>
              An integrated wellness company &mdash; yoga, strength training, breathwork,
              and meditation, delivered in the studio, at home, at work, and on retreat.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/products">Shop Botanicals</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/services#wellness">Wellness &amp; Training</Link>
            <Link href="/services#corporate">Corporate Wellness</Link>
            <Link href="/services#retreats">Retreats</Link>
            <Link href="/services#botanicals">Botanicals</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/contact">Book a Consultation</Link>
            <Link href="/policies">Policies</Link>
          </div>
        </div>
        <div className={s.footBottom}>
          <span>&copy; {new Date().getFullYear()} THE MVIA INC. All rights reserved.</span>
          <Link href="/policies">Privacy &middot; Terms &middot; Shipping &amp; Returns</Link>
        </div>
      </div>
    </footer>
  );
}
