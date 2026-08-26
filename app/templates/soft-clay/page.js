import Link from "next/link";
import s from "./styles.module.css";
import Reveal from "../../components/Reveal";
import YogaMark from "../../components/YogaMark";
import BookingWidget from "./BookingWidget";

export const metadata = {
  title: "MVIA — Gold Editorial Concept",
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

export default function SoftClay() {
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
        <div className={s.heroYoga}>
          <YogaMark color="var(--gold)" />
        </div>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <span className={s.pill}>Studio &middot; Home &middot; Workplace &middot; Retreat</span>
            <h1>Strength for your body. Space for your mind.</h1>
            <p>
              MVIA blends yoga, strength training, breathwork, and meditation into one
              approachable practice &mdash; wherever you happen to need it.
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
          <div className={s.heroPanel}>
            <div className={`${s.tile} ${s.tileA}`}>
              <div className={s.k}>4-Part Method</div>
              <div className={s.l}>Move, Strengthen, Breathe, Restore</div>
            </div>
            <div className={`${s.tile} ${s.tileB}`}>
              <div className={s.k}>In-Home</div>
              <div className={s.l}>Private training</div>
            </div>
            <div className={`${s.tile} ${s.tileC}`}>
              <div className={s.k}>Corporate</div>
              <div className={s.l}>Team wellness</div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} id="method">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <span className={`${s.pill} ${s.pillSage}`}>Our Method</span>
            <h2>A simple rhythm behind every program.</h2>
            <p>Whichever program you choose, it draws from the same four-part practice.</p>
          </div>
          <div className={s.methodRow}>
            <div className={s.methodChip}>
              <div className={s.ic}>M</div>
              <h3>Move</h3>
              <p>Yoga-based mobility and body awareness.</p>
            </div>
            <div className={s.methodChip}>
              <div className={s.ic}>S</div>
              <h3>Strengthen</h3>
              <p>Free weights and kettlebells, coached properly.</p>
            </div>
            <div className={s.methodChip}>
              <div className={s.ic}>B</div>
              <h3>Breathe</h3>
              <p>Guided breathwork for focus and calm.</p>
            </div>
            <div className={s.methodChip}>
              <div className={s.ic}>R</div>
              <h3>Restore</h3>
              <p>Meditation and recovery that make it stick.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={`${s.section} ${s.sectionAlt}`} id="programs">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <span className={s.pill}>What We Offer</span>
            <h2>Pick the format that fits your week.</h2>
          </div>
          <div className={s.programsGrid}>
            <div className={s.programCard}>
              <h3>Studio Programs</h3>
              <p>Weekly yoga, strength, breathwork, and meditation classes.</p>
              <span className={s.link}>View schedule &rarr;</span>
            </div>
            <div className={s.programCard}>
              <h3>Private Training</h3>
              <p>Individualized in-home sessions built around your schedule.</p>
              <span className={s.link}>Enquire &rarr;</span>
            </div>
            <div className={s.programCard}>
              <h3>Corporate Wellness</h3>
              <p>On-site and virtual programs with real stress-management tools.</p>
              <span className={s.link}>Request a proposal &rarr;</span>
            </div>
            <div className={s.programCard}>
              <h3>Retreats</h3>
              <p>Multi-day immersions combining the full method in one place.</p>
              <span className={s.link}>See dates &rarr;</span>
            </div>
            <div className={s.programCard}>
              <h3>Botanicals</h3>
              <p>Herbal wellness products, sourced and tested.</p>
              <Link href="/templates/soft-clay/products" className={s.link}>
                Shop botanicals &rarr;
              </Link>
            </div>
            <div className={s.programCard}>
              <h3>Not Sure Yet?</h3>
              <p>A short consultation tells you exactly where to begin.</p>
              <span className={s.link}>Book a consultation &rarr;</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.section} id="botanicals">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.sectionHead}>
            <span className={s.pill}>Featured Botanicals</span>
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
                  <Link href="/templates/soft-clay/products" className={s.link}>
                    Shop &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={s.featuredMore}>
            <Link href="/templates/soft-clay/products" className={s.btnGhost}>
              View Full Catalog
            </Link>
          </div>
        </Reveal>
      </section>

      <section className={s.aboutSection} id="about">
        <Reveal className={`${s.wrap} ${s.reveal}`}>
          <div className={s.aboutGrid}>
            <div className={s.aboutAvatar}>CF</div>
            <div>
              <span className={`${s.pill} ${s.pillSage}`}>Led By</span>
              <h2>Two decades of doing this properly.</h2>
              <p>
                MVIA is led directly by its founder, combining classical strength coaching
                with a lifelong grounding in yoga and breath-based practice &mdash;
                effective first, calming as a result.
              </p>
              <div className={s.aboutCreds}>
                <span className={s.pill}>Certified Instructor</span>
                <span className={`${s.pill} ${s.pillSage}`}>20&#43; Years Experience</span>
                <span className={s.pill}>CPR / AED</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={s.finalCta} id="contact">
        <Reveal className={s.wrap}>
          <div className={s.finalCtaPanel}>
            <span className={`${s.pill} ${s.pillSage}`}>Let&apos;s Begin</span>
            <h2>Not sure where to start? Let&apos;s build your path together.</h2>
            <BookingWidget />
          </div>
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
            <span>Concept demo &mdash; Gold Editorial</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
