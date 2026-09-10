import Link from "next/link";
import s from "./page.module.css";
import Reveal from "./components/Reveal";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { getAllProducts } from "./lib/products";

export const revalidate = 300;

const STATS = [
  { value: "4", label: "Practices, One Method" },
  { value: "Studio + In-Home", label: "Private & Group Sessions" },
  { value: "Corporate", label: "Workplace Wellness Programs" },
  { value: "Retreats", label: "Immersive, Restorative Travel" },
];

const SUB_BRANDS = [
  {
    id: "wellness",
    tag: "MVIA Wellness",
    title: "Studio classes & private training",
    description:
      "Yoga, strength training, breathwork, and meditation — as weekly studio classes or private in-home sessions built around your schedule.",
  },
  {
    id: "corporate",
    tag: "MVIA at Work",
    title: "Corporate wellness programs",
    description:
      "On-site and virtual stress-management sessions, guided breathwork, and mobility workshops for demanding workplaces.",
  },
  {
    id: "retreats",
    tag: "MVIA Retreats",
    title: "Restorative travel",
    description:
      "Multi-day immersions that bring the full method — movement, strength, breath, and stillness — into one setting.",
  },
  {
    id: "botanicals",
    tag: "MVIA Botanicals",
    title: "Herbal wellness products",
    description:
      "Traditional Indian botanicals, sourced and tested to a standard modern wellness routines can trust.",
  },
];

export default async function Home() {
  const featuredProducts = (await getAllProducts()).slice(0, 3);

  return (
    <main className={s.page}>
      <SiteHeader />

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroInner}`}>
          <div className={`${s.eyebrow} ${s.eyebrowCenter}`} style={{ display: "flex" }}>
            Studio &middot; Home &middot; Workplace &middot; Retreat
          </div>
          <h1>
            Strength for your body.
            <br />
            Space for your <em className={s.heroAccent}>mind</em>.
          </h1>
          <p>
            MVIA is an integrated wellness company combining yoga, traditional strength
            training, breathwork, and meditation &mdash; helping you move better, build
            lasting strength, manage everyday stress, and live with greater balance.
          </p>
          <div className={s.ctaRow}>
            <Link href="/services" className={s.btnPrimary}>
              Explore Services
            </Link>
            <Link href="/contact" className={s.btnGhost}>
              Book a Consultation
            </Link>
          </div>
          <div className={s.scrollCue}>
            <span>Scroll</span>
            <span className={s.scrollCueLine} />
          </div>
        </div>
      </section>

      <Reveal className={`${s.statsStrip} ${s.reveal}`}>
        <div className={s.wrap}>
          {STATS.map((stat) => (
            <div className={s.statItem} key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </div>
          ))}
        </div>
      </Reveal>

      <section className={s.section} id="method">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
              Our Method
            </div>
            <h2>Move. Strengthen. Breathe. Restore.</h2>
            <p>A continuous practice, not four separate classes &mdash; each part supports the next.</p>
          </div>
          <div className={s.methodRow}>
            {[
              { n: "01", title: "Move", body: "Yoga-based mobility, balance, and body awareness." },
              { n: "02", title: "Strengthen", body: "Free weights and kettlebells with practical, lasting form." },
              { n: "03", title: "Breathe", body: "Guided breathing practices that support focus and calm." },
              { n: "04", title: "Restore", body: "Meditation and recovery, so the practice sticks." },
            ].map((step) => (
              <div className={s.methodItem} key={step.n}>
                <div className={s.methodCircle}>
                  <span>{step.n}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${s.section} ${s.sectionAlt}`}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
              What We Offer
            </div>
            <h2>One method, delivered four ways.</h2>
          </div>
          <div className={s.brandGrid}>
            {SUB_BRANDS.map((brand) => (
              <div className={s.brandCard} key={brand.id}>
                <span className={s.brandTag}>{brand.tag}</span>
                <h3>{brand.title}</h3>
                <p>{brand.description}</p>
                <Link href={`/services#${brand.id}`}>Learn more &rarr;</Link>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={s.section}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
              Featured Botanicals
            </div>
            <h2>Herbal wellness, sourced and tested.</h2>
            <p>A small selection from the full catalog.</p>
          </div>
          <div className={s.featuredGrid}>
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.id}`} className={s.featuredCard} key={product.id}>
                <div className={s.featuredThumb}>
                  {product.tag && <span className={s.featuredTag}>{product.tag}</span>}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className={s.featuredBody}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className={s.featuredFooter}>
                    <span className={s.price}>${product.price.toFixed(2)}</span>
                    <span className={s.link}>View &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className={s.featuredMore}>
            <Link href="/products" className={s.btnGhost}>
              Shop All Botanicals
            </Link>
          </div>
        </Reveal>
      </section>

      <section className={`${s.finalCta} ${s.sectionAlt}`}>
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
            Let&apos;s Begin
          </div>
          <h2>Not sure where to start? Let&apos;s build your path together.</h2>
          <Link href="/contact" className={s.btnPrimary}>
            Book a Complimentary Consultation
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
