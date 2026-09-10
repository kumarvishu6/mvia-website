import Link from "next/link";
import s from "./page.module.css";
import Reveal from "../components/Reveal";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Services — MVIA",
  description: "Studio classes, private training, corporate wellness, retreats, and botanicals.",
};

export default function ServicesPage() {
  return (
    <main className={s.page}>
      <SiteHeader />

      <div className={s.pageHeader}>
        <div className={s.wrap}>
          <div className={s.eyebrow} style={{ justifyContent: "center", display: "flex" }}>
            Services
          </div>
          <h1>One method, delivered four ways.</h1>
          <p>
            Everything MVIA offers draws from the same practice &mdash; yoga, strength,
            breathwork, and meditation &mdash; delivered wherever it fits your life.
          </p>
        </div>
      </div>

      <section className={s.serviceSection} id="wellness">
        <Reveal className={s.wrap}>
          <div className={s.serviceGrid}>
            <div className={s.serviceMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/services/wellness.svg" alt="Studio and private in-home training" />
            </div>
            <div>
              <div className={s.eyebrow}>MVIA Wellness</div>
              <h2>Studio classes &amp; private in-home training.</h2>
              <p className={s.lead}>
                Join a weekly studio class, or bring the practice home with individualized
                private coaching built entirely around your space and schedule.
              </p>
              <ul className={s.offerList}>
                <li>Yoga &mdash; mobility, balance, and body awareness</li>
                <li>Strength Training &mdash; free weights and kettlebells, coached properly</li>
                <li>Breathwork &mdash; guided practices for focus and calm</li>
                <li>Meditation &mdash; stillness and recovery</li>
                <li>Integrated Mind&ndash;Body Training &mdash; all four, in one session</li>
                <li>Premium private coaching &mdash; discreet, in-home sessions on your schedule</li>
              </ul>
              <Link href="/contact" className={s.btnPrimary}>
                Book a Consultation
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.serviceSection} id="corporate">
        <Reveal className={s.wrap}>
          <div className={`${s.serviceGrid} ${s.reverse}`}>
            <div className={s.serviceMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/services/corporate.svg" alt="Corporate wellness programs" />
            </div>
            <div>
              <div className={s.eyebrow}>MVIA at Work</div>
              <h2>Practical tools for demanding workdays.</h2>
              <p className={s.lead}>
                On-site and virtual programs that give teams real stress-management skills
                &mdash; not slogans.
              </p>
              <ul className={s.offerList}>
                <li>Guided workplace breathwork &amp; desk mobility</li>
                <li>Chair yoga and short meditation sessions</li>
                <li>Stress-management workshops</li>
                <li>Four- and eight-week employee wellness series</li>
                <li>Executive private sessions</li>
                <li>On-site and virtual delivery</li>
              </ul>
              <Link href="/contact" className={s.btnPrimary}>
                Request a Proposal
              </Link>
              <p className={s.disclaimer}>
                MVIA corporate programs are wellness education and skills development, not
                medical or mental-health treatment.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.serviceSection} id="retreats">
        <Reveal className={s.wrap}>
          <div className={s.serviceGrid}>
            <div className={s.serviceMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/services/retreats.svg" alt="MVIA retreats" />
            </div>
            <div>
              <div className={s.eyebrow}>MVIA Retreats</div>
              <h2>Restorative travel, built around the full method.</h2>
              <p className={s.lead}>
                Multi-day immersions that bring movement, strength, breath, and stillness
                into one restorative setting.
              </p>
              <ul className={s.offerList}>
                <li>Small group sizes, led by MVIA instructors</li>
                <li>Daily yoga, movement, and breathwork sessions</li>
                <li>Accommodation, meals, and activities included</li>
                <li>Locations and dates announced seasonally</li>
              </ul>
              <Link href="/contact" className={s.btnPrimary}>
                Ask About Upcoming Retreats
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.serviceSection} id="botanicals">
        <Reveal className={s.wrap}>
          <div className={`${s.serviceGrid} ${s.reverse}`}>
            <div className={s.serviceMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/services/botanicals.svg" alt="MVIA botanicals" />
            </div>
            <div>
              <div className={s.eyebrow}>MVIA Botanicals</div>
              <h2>Herbal wellness, sourced and tested.</h2>
              <p className={s.lead}>
                Traditional Indian botanicals &mdash; capsules, teas, powders, and oils
                &mdash; formulated and tested to a standard modern wellness routines can
                trust.
              </p>
              <Link href="/products" className={s.btnPrimary}>
                Shop Botanicals
              </Link>
              <p className={s.disclaimer}>
                These statements have not been evaluated by the FDA. Our products are not
                intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
