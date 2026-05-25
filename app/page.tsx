import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tien Do — UX Research Portfolio',
}

export default function Home() {
  return (
    <>
      <Navbar variant="home" />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-text">
          <h1 className="hero-name">Hi, my name is Tien.</h1>
          <div className="hero-bio">
            <p>I&apos;m a UX researcher with 7+ years of experience turning ambiguous problems into clear, actionable insights. From founding researcher at a healthcare startup to leading infotainment research at a major automotive tech company.</p>
            <p>M.S. in Human-Centered Design &amp; Engineering from the University of Washington. I believe good research starts with curiosity about people, not just their behavior.</p>
          </div>
          <div className="hero-cta">
            <a href="#work" className="btn-primary">View case studies</a>
            <a href="/Tien-Do-Resume-2026.pdf" download className="btn-outline">Download resume</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-inner">
            <div className="avatar-placeholder">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <clipPath id="blob" clipPathUnits="objectBoundingBox">
                    <path d="M0.18 0 L0.82 0 C0.92 0 1 0.08 1 0.18 L1 0.82 C1 0.92 0.92 1 0.82 1 L0.18 1 C0.08 1 0 0.92 0 0.82 L0 0.18 C0 0.08 0.08 0 0.18 0Z"/>
                  </clipPath>
                </defs>
              </svg>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photo.jpg" alt="Tien Do" style={{ width: '460px', height: '546px', objectFit: 'cover', objectPosition: 'center', clipPath: 'url(#blob)', display: 'block' }} />
            </div>

            {/* Floating pills — bottom cluster */}
            <div style={{ position: 'absolute', bottom: '16%', left: '-8%', animation: 'float1 3.5s ease-in-out infinite' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid rgba(168,84,112,0.2)', borderRadius: '100px', padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: '#6B4F5A', fontWeight: 400, whiteSpace: 'nowrap', boxShadow: '0 2px 12px rgba(168,84,112,0.08)' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#366B58', flexShrink: 0 }}></span>Mixed-methods researcher
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '6%', left: '50%', transform: 'translateX(-50%)', animation: 'float2 4.2s ease-in-out infinite' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid rgba(168,84,112,0.2)', borderRadius: '100px', padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: '#6B4F5A', fontWeight: 400, whiteSpace: 'nowrap', boxShadow: '0 2px 12px rgba(168,84,112,0.08)' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#366B58', flexShrink: 0 }}></span>Cat mom 🐱
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '16%', right: '-8%', animation: 'float3 3s ease-in-out infinite', animationDelay: '0.8s' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid rgba(168,84,112,0.2)', borderRadius: '100px', padding: '0.35rem 0.85rem', fontSize: '0.78rem', color: '#6B4F5A', fontWeight: 400, whiteSpace: 'nowrap', boxShadow: '0 2px 12px rgba(168,84,112,0.08)' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#366B58', flexShrink: 0 }}></span>Seattle-based
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Research that moved the needle</h2>
        <p className="section-subtitle">A selection of studies spanning enterprise SaaS and consumer products, each grounded in real user needs and tied to business outcomes.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginTop: '1rem' }}>

          {/* Lifecycle card */}
          <a href="/nimblerx-lifecycle-case-study" style={{ background: '#FFFFFF', border: '0.5px solid rgba(168,84,112,0.15)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s' }}>
            <div style={{ height: '180px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nimblerx-lifecycle-preview.png" alt="NimbleRx Pharmacy Lifecycle" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)' }}>NimbleRx · 2025</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Service design</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Understanding where pharmacies fall off: before, during, and after launch</h3>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>48h</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>bug resolution</div></div>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+20</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>NPS points</div></div>
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
                <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)' }}>NimbleRx · 2023</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Mixed methods</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Why pharmacies weren&apos;t using checkout, and what it was costing us</h3>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+30%</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>feature usage</div></div>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+3k</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>fills per week</div></div>
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
                <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)' }}>Telenav · 2020</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#366B58', background: '#EBF3EF', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>Evaluative</span>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3, margin: 0 }}>Building a voice ordering experience safe to use while driving</h3>
              <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(168,84,112,0.12)', marginTop: 'auto' }}>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>6</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>usability sessions</div></div>
                <div><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>✓</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>protocol approved</div></div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* RESUME */}
      <section id="resume">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">7+ years of UX research across consumer mobile, pharmacy tech, and automotive. From founding researcher to senior IC.</p>

        <div className="resume-layout">
          <div className="resume-main">
            <div className="resume-section">
              <div className="resume-section-title">Work experience</div>

              <div className="exp-item">
                <div className="exp-role" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.1rem' }}>NimbleRx</div>
                <div className="exp-company" style={{ fontStyle: 'italic', marginBottom: '0.75rem' }}>A technology company that enables pharmacies across the country to streamline their interactions with patients.</div>

                <div className="exp-header">
                  <div className="exp-role">Senior UX Researcher</div>
                  <div className="exp-date">December 2022 – Present</div>
                </div>
                <ul className="exp-bullets">
                  <li>Increased patient app adoption by 5% through user discovery, usability assessment, and A/B testing on a direct-to-consumer mobile product.</li>
                  <li>Increased fill volume by 30% and onboarded 20+ new pharmacies by identifying pain points through qualitative research including interviews, contextual inquiry, and concept testing.</li>
                  <li>Led workshops with cross-functional leadership to map service design for new pharmacy verticals, directly influencing product strategy and roadmap.</li>
                </ul>

                <div className="exp-header" style={{ marginTop: '0.75rem' }}>
                  <div className="exp-role">UX Researcher</div>
                  <div className="exp-date">February 2021 – December 2022</div>
                </div>
                <ul className="exp-bullets">
                  <li>Founding researcher across all product verticals, establishing research practice, processes, and tooling from scratch in an early-stage environment.</li>
                  <li>Improved NPS by 15+ points through improved data collection, tracking, and analysis sharing with leadership.</li>
                  <li>Built a research repository to improve visibility and drive research adoption across the organization.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-role" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.1rem' }}>Telenav</div>
                <div className="exp-company" style={{ fontStyle: 'italic', marginBottom: '0.75rem' }}>An AI-powered navigation, infotainment, and in-car commerce solutions provider for automotive OEMs.</div>

                <div className="exp-header">
                  <div className="exp-role">UX Researcher</div>
                  <div className="exp-date">July 2019 – September 2020</div>
                </div>
                <ul className="exp-bullets">
                  <li>Led generative and evaluative research for in-car commerce and infotainment products across mobile, voice, and Human-Machine Interface (HMI) platforms.</li>
                  <li>Improved usability and NPS through iterative testing for OEM infotainment, achieving System Usability Scale (SUS) above 80 and NPS above 30.</li>
                </ul>

                <div className="exp-header" style={{ marginTop: '0.75rem' }}>
                  <div className="exp-role">UX Researcher Intern</div>
                  <div className="exp-date">June 2018 – September 2018</div>
                </div>
                <ul className="exp-bullets">
                  <li>Conducted drive-along usability tests for mobile navigation to improve onboarding and first-user experience for a major OEM client.</li>
                  <li>Launched a beta program to gather continuous user feedback for bug tracking and product improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-sidebar">
            <div className="resume-section">
              <div className="resume-section-title">Education</div>
              <div className="edu-item">
                <div className="edu-degree">M.S. Human-Centered Design &amp; Engineering</div>
                <div className="edu-school">University of Washington, 2019</div>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Research skills</div>
              <div className="skill-chips">
                <span className="skill-chip sage">User interviews</span>
                <span className="skill-chip sage">Usability testing</span>
                <span className="skill-chip">Diary studies</span>
                <span className="skill-chip">Contextual inquiry</span>
                <span className="skill-chip">Ethnographic studies</span>
                <span className="skill-chip">Survey design</span>
                <span className="skill-chip">Concept testing</span>
                <span className="skill-chip">Focus groups</span>
                <span className="skill-chip">Prototyping</span>
                <span className="skill-chip sage">Design thinking workshops</span>
                <span className="skill-chip">UX copywriting</span>
                <span className="skill-chip">Written communication</span>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Contact</div>
              <div className="edu-item">
                <div className="edu-degree">tieeen.do@gmail.com</div>
                <div className="edu-school">Seattle, WA</div>
              </div>
            </div>

            <a href="#" className="download-resume">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download full resume
            </a>
          </div>
        </div>
      </section>

<Footer />
    </>
  )
}
