import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "MVIA — Homepage Concepts (Internal)",
  description: "Pitch-stage homepage concepts. Not the live site.",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.kicker}>MVIA &middot; Homepage Concepts</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)" }}>Choose a homepage direction</h1>
          <p>
            Three fully-built homepage concepts, same content, same requested black &amp;
            gold palette on two of them, one alternate in deep green and ivory. Open each
            one, click around &mdash; including the botanicals shop and the booking
            widget &mdash; then let us know which direction to build the rest of the site on.
          </p>
        </div>
      </header>

      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={`${styles.swatch} ${styles.swatchNoir}`}>
              <div className={styles.dots}>
                <span style={{ background: "#0E0D0B" }} />
                <span style={{ background: "#C9A356" }} />
                <span style={{ background: "#F3ECDD" }} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.badge}>Client&apos;s Pick</span>
              <h2 style={{ fontFamily: "var(--font-fraunces)" }}>Noir &amp; Gold</h2>
              <div className={styles.tagline}>Ritual</div>
              <p>
                Deep near-black with warm gold accents, editorial serif headlines, and a
                hairline-spine layout. Bold, premium, dramatic &mdash; built to the brand
                palette you asked for.
              </p>
              <Link href="/templates/noir-gold" className={styles.viewBtn}>
                View Homepage
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.swatch} ${styles.swatchSoft}`}>
              <div className={styles.dots}>
                <span style={{ background: "#121110" }} />
                <span style={{ background: "#C9A356" }} />
                <span style={{ background: "#F3ECDD" }} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.badge}>Client&apos;s Pick</span>
              <h2 style={{ fontFamily: "var(--font-fraunces)" }}>Gold Editorial</h2>
              <div className={styles.tagline}>Black &amp; Gold &middot; Cards</div>
              <p>
                The same black + gold palette as Noir &amp; Gold, but laid out with rounded
                card panels, a tile-grid hero, and a friendlier sans-serif voice &mdash; a
                more modern, boutique-studio take on the same colors.
              </p>
              <Link href="/templates/soft-clay" className={styles.viewBtn}>
                View Homepage
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.swatch} ${styles.swatchGrounded}`}>
              <div className={styles.dots}>
                <span style={{ background: "#0F2820" }} />
                <span style={{ background: "#B96F4A" }} />
                <span style={{ background: "#F5F0E6" }} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <span className={`${styles.badge} ${styles.badgeAlt}`}>Alternate</span>
              <h2 style={{ fontFamily: "var(--font-fraunces)" }}>Grounded</h2>
              <div className={styles.tagline}>Deep Green &amp; Ivory</div>
              <p>
                Something different to show alongside the requested palette: deep forest
                green with ivory used sparingly, warmed up with clay accents. Calm,
                natural, still premium.
              </p>
              <Link href="/templates/grounded" className={styles.viewBtn}>
                View Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        Concept demo for THE MVIA INC &middot; Prepared for internal review before build-out
      </footer>
    </main>
  );
}
