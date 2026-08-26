import Link from "next/link";
import s from "./styles.module.css";
import Reveal from "../../components/Reveal";
import Header from "./Header";
import FeaturedProducts from "./FeaturedProducts";
import BookingWidget from "./BookingWidget";

export const metadata = {
  title: "MVIA — Noir & Gold Concept",
};

const STATS = [
  { value: "4", label: "Practices, One Method" },
  { value: "Studio + In-Home", label: "Private & Group Sessions" },
  { value: "Corporate", label: "Workplace Wellness Programs" },
  { value: "Retreats", label: "Immersive, Restorative Travel" },
];

export default function NoirGold() {
  return (
    <main className={s.page}>
      <Header />

      <section className={s.hero}>
        <div className={s.heroRingBig}></div>
        <div className={s.heroRingSmall}></div>
        <div className={`${s.wrap} ${s.heroInner}`}>
          <div className={s.eyebrow}>Studio &middot; Home &middot; Workplace &middot; Retreat</div>
          <h1>
            Strength for your body.
            <br />
            Space for your <em>mind</em>.
          </h1>
          <p>
            MVIA brings yoga, traditional strength training, breathwork, and meditation
            together into one deliberate practice &mdash; for people who train hard and
            still need to exhale.
          </p>
          <div className={s.ctaRow}>
            <a href="#programs" className={s.btnPrimary}>
              Explore Programs
            </a>
            <a href="#contact" className={s.btnGhost}>
              Book a Consultation
            </a>
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
            <div className={s.eyebrow}>Our Method</div>
            <h2>One practice, four disciplines.</h2>
            <p>
              Every MVIA program draws from the same sequence &mdash; move to prepare the
              body, strengthen to build capacity, breathe to steady the nervous system,
              restore to integrate it all.
            </p>
          </div>
          <div className={s.methodList}>
            <div className={s.methodItem}>
              <div className={s.methodNum}>01 &mdash; Move</div>
              <h3>Move</h3>
              <p>Yoga-based mobility and body awareness that prepares you for real strength work.</p>
            </div>
            <div className={s.methodItem}>
              <div className={s.methodNum}>02 &mdash; Strengthen</div>
              <h3>Strengthen</h3>
              <p>Free weights and kettlebells, coached with old-school discipline and real progression.</p>
            </div>
            <div className={s.methodItem}>
              <div className={s.methodNum}>03 &mdash; Breathe</div>
              <h3>Breathe</h3>
              <p>Guided breathwork that sharpens focus under load and calms it after.</p>
            </div>
            <div className={s.methodItem}>
              <div className={s.methodNum}>04 &mdash; Restore</div>
              <h3>Restore</h3>
              <p>Meditation and recovery practices that make the other three sustainable.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${s.section} ${s.sectionAlt}`} id="programs">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow}>What We Offer</div>
            <h2>Delivered wherever your work happens.</h2>
          </div>
          <div className={s.programsGrid}>
            <div className={s.programCard}>
              <span className={s.tag}>Studio</span>
              <h3>Studio Programs</h3>
              <p>Yoga, strength, breathwork, and meditation classes on a running weekly schedule.</p>
              <a href="#contact" className={s.link}>
                View schedule &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <span className={s.tag}>Private</span>
              <h3>In-Home Training</h3>
              <p>Discreet, individualized coaching built entirely around your space and your schedule.</p>
              <a href="#contact" className={s.link}>
                Enquire &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <span className={s.tag}>Corporate</span>
              <h3>Corporate Wellness</h3>
              <p>On-site and virtual programs that give demanding teams real tools for stress, not slogans.</p>
              <a href="#contact" className={s.link}>
                Request a proposal &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <span className={s.tag}>Retreat</span>
              <h3>Retreats</h3>
              <p>Multi-day immersions combining the full method in a single restorative setting.</p>
              <a href="#contact" className={s.link}>
                See upcoming dates &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <span className={s.tag}>Botanicals</span>
              <h3>Herbal Wellness</h3>
              <p>Sourced and tested botanical products that support the practice beyond the mat.</p>
              <Link href="/templates/noir-gold/products" className={s.link}>
                Shop botanicals &rarr;
              </Link>
            </div>
            <div className={s.programCard}>
              <span className={s.tag}>Assessment</span>
              <h3>Start Here</h3>
              <p>Not sure which program fits? A short consultation tells you exactly where to begin.</p>
              <a href="#contact" className={s.link}>
                Book a consultation &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.section} id="botanicals">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <FeaturedProducts />
        </Reveal>
      </section>

      <section className={s.aboutSection} id="about">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.aboutGrid}>
            <div className={s.aboutPortrait}>
              <div className={s.aboutGlow}></div>
              <svg
                className={s.aboutFigure}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="50" cy="17" r="8" fill="var(--gold)" fillOpacity="0.14" stroke="var(--gold)" strokeWidth="1.3" />
                <path
                  d="M50 27
                     C62 27 69 36 69 47
                     C69 53 65 56 59 53
                     C71 60 79 70 79 83
                     L21 83
                     C21 70 29 60 41 53
                     C35 56 31 53 31 47
                     C31 36 38 27 50 27 Z"
                  fill="var(--gold)"
                  fillOpacity="0.1"
                  stroke="var(--gold)"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className={s.eyebrow}>Led By</div>
              <h2>A practice built on two decades of doing this properly.</h2>
              <p>
                MVIA is led directly by its founder, whose approach blends classical
                strength coaching with a lifelong grounding in yoga and breath-based
                practice. Every program is designed to be effective first &mdash; and
                calming as a result, not instead.
              </p>
              <div className={s.aboutCreds}>
                <span>Certified Instructor</span>
                <span>20&#43; Years Experience</span>
                <span>CPR / AED</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.finalCta} id="contact">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={`${s.eyebrow} ${s.eyebrowCenter}`}>Let&apos;s Begin</div>
          <h2>
            Not sure where to start?
            <br />
            Let&apos;s build your path together.
          </h2>
          <BookingWidget />
        </Reveal>
      </section>

      <footer className={s.footer}>
        <div className={s.wrap}>
          <div className={s.footGrid}>
            <div>
              <div className={s.logo} style={{ marginBottom: 16 }}>
                MVIA<span>.</span>
              </div>
              <p style={{ maxWidth: 280 }}>
                A complete wellness practice &mdash; yoga, strength, breathwork, and
                meditation, delivered in the studio, at home, at work, and on retreat.
              </p>
            </div>
            <div>
              <h4>Programs</h4>
              <a href="#programs">Studio Programs</a>
              <a href="#programs">In-Home Training</a>
              <a href="#programs">Corporate Wellness</a>
              <a href="#programs">Retreats</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Book a Consultation</a>
            </div>
          </div>
          <div className={s.footBottom}>
            <span>&copy; 2026 THE MVIA INC. All rights reserved.</span>
            <span>Concept demo &mdash; Noir &amp; Gold</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
