import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Tien Do — UX Research Portfolio',
}

export default function Home() {
  return (
    <>
      <Navbar variant="home" />

      <div className="letter-page">

        {/* ── LETTER INTRO ── */}
        <section className="letter-intro">
          <div className="letter-intro-text">
            <h1 className="letter-name">Hi, my name is Tien.</h1>
            <div className="letter-bio">
              <p>UX researcher with 7+ years on B2B and B2C products, from automotive to healthcare. Right now I run research in the pharmacy space and lead project teams through execution — untangling hard problems so the work lands for both users and the business.</p>
              <p>I&apos;m based in Seattle and yes, I do enjoy the rain. In my free time I catch up on reading and crochet cat beanies. I have two cats who are sassy, naughty, and completely run the household: a tuxedo 🐈‍⬛ and an orange menace 🐈.</p>
              <p><strong>Contact me</strong><br /><a href="mailto:tieeen.do@gmail.com">tieeen.do@gmail.com</a> · <a href="https://www.linkedin.com/in/tien-do/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
            <div className="letter-cta">
              <a href="/Tien-Do-Resume-2026.pdf" download className="btn-outline">Download resume</a>
            </div>
          </div>
          <div className="letter-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/photo.jpg" alt="Tien Do" />
          </div>
        </section>

        {/* ── SELECTED WORK ── */}
        <div id="work" className="scroll-anchor" aria-hidden="true" />
        <section className="letter-section-outer">
          <div className="letter-section-head">
            <h2 className="letter-section-title">Selected work</h2>
            <p className="letter-section-sub">A selection of studies spanning enterprise SaaS and consumer products, each started with a real user problem and ended with a measurable change.</p>
          </div>

          <div className="work-grid">

            {/* Lifecycle card */}
            <a href="/nimblerx-lifecycle-case-study" style={{ background: '#FFFFFF', border: '0.5px solid rgba(168,84,112,0.15)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/nimblerx-lifecycle-preview.png" alt="NimbleRx Pharmacy Lifecycle" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>NimbleRx · 2025</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Service design</span>
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Understanding where pharmacies fall off: before, during, and after launch</h3>
                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>48h</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>bug resolution</div></div>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>+20</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>NPS points</div></div>
                </div>
              </div>
            </a>

            {/* Checkout card */}
            <a href="/nimblerx-case-study" style={{ background: '#FFFFFF', border: '0.5px solid rgba(168,84,112,0.15)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/nimblerx-checkout-preview.jpeg" alt="NimbleRx Pharmacy Checkout" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>NimbleRx · 2023</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Mixed methods</span>
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Why pharmacies weren&apos;t using checkout, and what it was costing us</h3>
                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>+30%</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>feature usage</div></div>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>+3k</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>fills per week</div></div>
                </div>
              </div>
            </a>

            {/* Telenav card */}
            <a href="/telenav-case-study" style={{ background: '#FFFFFF', border: '0.5px solid rgba(168,84,112,0.15)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
              <div style={{ height: '180px', overflow: 'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/telenav-product.png" alt="Telenav In-Car Commerce" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Telenav · 2020</span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Evaluative</span>
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Building a voice ordering experience safe to use while driving</h3>
                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>6</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>usability sessions</div></div>
                  <div><div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 700, color: '#A85470', lineHeight: 1 }}>✓</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>protocol approved</div></div>
                </div>
              </div>
            </a>

          </div>
        </section>


        {/* ── FOOTER ── */}
        <footer className="letter-footer">
          <span>© 2026 Tien Do</span>
          <div className="letter-footer-links">
            <a href="mailto:tieeen.do@gmail.com">tieeen.do@gmail.com</a>
            <a href="https://www.linkedin.com/in/tien-do/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Tien-Do-Resume-2026.pdf" download>Resume ↓</a>
          </div>
        </footer>

      </div>
    </>
  )
}
