import Link from "next/link";
import s from "./styles.module.css";
import Reveal from "../../components/Reveal";
import YogaMark from "../../components/YogaMark";
import BookingWidget from "./BookingWidget";

export const metadata = {
  title: "MVIA — Grounded Concept",
};

const FEATURED_PRODUCTS = [
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Root Capsules",
    price: 28,
    initials: "AR",
    description: "Adaptogenic support for stress and steady energy, sourced and lab-tested for potency.",
  },
  {
    id: "tulsi-tea",
    name: "Tulsi (Holy Basil) Tea",
    price: 18,
    initials: "TB",
    description: "A calming daily ritual tea, traditionally used to ease everyday stress and support focus.",
  },
  {
    id: "brahmi-drops",
    name: "Brahmi Focus Drops",
    price: 32,
    initials: "BF",
    description: "A traditional focus-support tincture, taken before study, training, or deep work blocks.",
  },
];

export default function Grounded() {
  return (
    <main className={s.page}>
      <header className={s.header}>
        <nav className={`${s.wrap} ${s.nav}`}>
          <div className={s.logo}>
            MVIA<span>.</span>
          </div>
          <div className={s.navlinks}>
            <a href="#method">Method</a>
            <a href="#programs">Programs</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className={s.navCta}>
            Book a Consultation
          </a>
          <div className={s.burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <div className={s.eyebrow}>Studio &middot; Home &middot; Workplace &middot; Retreat</div>
            <h1>Strength for your body. Space for your mind.</h1>
            <p>
              Yoga, traditional strength training, breathwork, and meditation, woven into
              one method &mdash; built for people who want to feel strong and steady, not
              just busy.
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
          <div className={s.heroArt}>
            <div className={s.blob}></div>
            <div className={s.heroYoga}>
              <YogaMark color="rgba(245, 240, 230, 0.7)" />
            </div>
            <div className={s.blobLabel}>
              <div className="big">MVIA</div>
              <div className="small">Mind &middot; Body &middot; Spirit</div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} id="method">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow}>Our Method</div>
            <h2>Move. Strengthen. Breathe. Restore.</h2>
            <p>A continuous practice, not four separate classes &mdash; each part supports the next.</p>
          </div>
          <div className={s.methodWrap}>
            <svg className={s.curveLine} viewBox="0 0 1000 20" preserveAspectRatio="none">
              <path
                d="M60,10 Q 250,-15 440,10 T 940,10"
                fill="none"
                stroke="#B96F4A"
                strokeWidth="2"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
            </svg>
            <div className={s.methodRow}>
              <div className={s.methodItem}>
                <div className={s.methodCircle}>Move</div>
                <h3>Move</h3>
                <p>Yoga-based mobility, balance, and body awareness.</p>
              </div>
              <div className={s.methodItem}>
                <div className={s.methodCircle}>Str.</div>
                <h3>Strengthen</h3>
                <p>Free weights and kettlebells with practical, lasting form.</p>
              </div>
              <div className={s.methodItem}>
                <div className={s.methodCircle}>Br.</div>
                <h3>Breathe</h3>
                <p>Guided breathwork for focus and everyday calm.</p>
              </div>
              <div className={s.methodItem}>
                <div className={s.methodCircle}>Res.</div>
                <h3>Restore</h3>
                <p>Meditation and recovery, so the practice sticks.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${s.section} ${s.sectionAlt}`} id="programs">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow}>What We Offer</div>
            <h2>A program for every part of your week.</h2>
          </div>
          <div className={s.programsWrap}>
            <div className={s.programCard}>
              <div className={s.dot}>S</div>
              <h3>Studio Programs</h3>
              <p>Weekly yoga, strength, breathwork, and meditation classes.</p>
              <a href="#contact" className={s.link}>
                View schedule &rarr;
              </a>
            </div>
            <div className={`${s.programCard} ${s.programCardOffset}`}>
              <div className={s.dot}>P</div>
              <h3>Private Training</h3>
              <p>Individualized in-home sessions, built around your space and time.</p>
              <a href="#contact" className={s.link}>
                Enquire &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <div className={s.dot}>C</div>
              <h3>Corporate Wellness</h3>
              <p>On-site and virtual programs that give teams real stress-management tools.</p>
              <a href="#contact" className={s.link}>
                Request a proposal &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <div className={s.dot}>R</div>
              <h3>Retreats</h3>
              <p>Multi-day immersions that bring the full method into one restorative setting.</p>
              <a href="#contact" className={s.link}>
                See dates &rarr;
              </a>
            </div>
            <div className={s.programCard}>
              <div className={s.dot}>B</div>
              <h3>Botanicals</h3>
              <p>Herbal wellness products, sourced and tested to support the practice.</p>
              <Link href="/templates/grounded/products" className={s.link}>
                Shop botanicals &rarr;
              </Link>
            </div>
            <div className={s.programCard}>
              <div className={s.dot}>?</div>
              <h3>Not Sure Yet?</h3>
              <p>A short consultation tells you exactly where to begin.</p>
              <a href="#contact" className={s.link}>
                Book a consultation &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.section} id="botanicals">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <div className={s.eyebrow}>Featured Botanicals</div>
            <h2>Herbal wellness, sourced and tested.</h2>
            <p>
              A small selection from the full catalog &mdash; traditional Indian botanicals,
              formulated and tested to a standard modern wellness routines can trust.
            </p>
          </div>
          <div className={s.featuredGrid}>
            {FEATURED_PRODUCTS.map((product) => (
              <div className={s.featuredCard} key={product.id}>
                <div className={s.featuredThumb}>{product.initials}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className={s.featuredFooter}>
                  <span className={s.price}>${product.price}</span>
                  <Link href="/templates/grounded/products" className={s.link}>
                    Shop &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={s.featuredMore}>
            <Link href="/templates/grounded/products" className={s.btnGhost}>
              View Full Catalog
            </Link>
          </div>
        </Reveal>
      </section>

      <section className={s.aboutSection} id="about">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.aboutGrid}>
            <div className={s.aboutCircle}>
              <span>CF</span>
            </div>
            <div>
              <div className={s.eyebrow}>Led By</div>
              <h2>Two decades of doing this properly.</h2>
              <p>
                MVIA is led directly by its founder, combining classical strength coaching
                with a lifelong grounding in yoga and breath-based practice &mdash; built to
                be effective first, calming as a result.
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
          <div className={s.eyebrow} style={{ justifyContent: "center" }}>
            Let&apos;s Begin
          </div>
          <h2>
            Not sure where to begin?
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
              <div className={s.logo} style={{ color: "var(--ivory)", marginBottom: 16 }}>
                MVIA<span style={{ color: "var(--gold)" }}>.</span>
              </div>
              <p style={{ maxWidth: 280 }}>
                A complete wellness practice &mdash; yoga, strength, breathwork, and
                meditation, in the studio, at home, at work, and on retreat.
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
            <span>Concept demo &mdash; Grounded</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
