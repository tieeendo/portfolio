import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function NimbleRxLifecycleCaseStudy() {
  return (
    <>
      <Navbar variant="case-study" backHref="/#work" />

      <div className="cs-hero">
        <div className="cs-hero-content">
          <p className="cs-eyebrow">NimbleRx · Lead UX Researcher · Q4 2025</p>
          <h1 className="cs-title">Understanding where pharmacies fall off: before, during, and after launch</h1>
          <p className="cs-subtitle">A service design study mapping the full pharmacy lifecycle with Nimble, from first sales contact to churn, to uncover where friction was costing us partners.</p>
        </div>
        <div style={{padding: '1.25rem 0', display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '2px solid var(--text-primary)', flexWrap: 'nowrap'}}>
          <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
            <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Role</span>
            <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Lead UX Researcher</span>
          </div>
          <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
          <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
            <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Methods</span>
            <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Interviews · Service blueprinting · Journey mapping</span>
          </div>
          <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
          <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
            <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Timeline</span>
            <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Q4 2025</span>
          </div>
          <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
          <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
            <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Platform</span>
            <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Cross-functional</span>
          </div>
        </div>
      </div>

      <div style={{border: '1px solid rgba(168,84,112,0.2)', borderLeft: 'none', borderRight: 'none'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '100%'}}>
          <div style={{padding: '2rem 5rem', borderRight: '1px solid rgba(168,84,112,0.15)'}}>
            <div style={{fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem'}}>The problem</div>
            <div style={{fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300}}>25% of pharmacies launched in a quarter were churning. The reasons weren&apos;t visible in product data alone.</div>
          </div>
          <div style={{padding: '2rem 5rem'}}>
            <div style={{fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem'}}>The outcome</div>
            <div style={{fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300, marginBottom: '0.75rem'}}>Cross-functional problems surfaced and aligned with leadership, driving measurable improvements across communications, integrations, and patient adoption.</div>
            <div style={{display: 'flex', gap: '2rem', marginTop: '0.5rem', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>48h</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>bug resolution + SLAs</span>
              </div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>+20</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>NPS points</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A85470" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.05-1.05a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>Reduce patient inbounds</span>
              </div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>↓</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>Less integration churns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-body">

        {/* BACKGROUND */}
        <div className="cs-section">
          <p className="cs-section-label">Background</p>
          <h2 className="cs-section-title">Pharmacy churn was a symptom. We needed to find the cause.</h2>
          <p>NimbleRx grows when pharmacies stay active on the platform and process volume through it. But pharmacies were leaving. Some after a brief unhealthy period on the platform, others before they even launched. The pattern showed up in the data, but the data couldn&apos;t explain it.</p>
          <p>Of the pharmacies launched in any given quarter, <strong>25% were churning</strong>. Churn wasn&apos;t just happening at one point. The data showed the pattern but couldn&apos;t tell us why it was happening at each stage.</p>

          <div style={{background: '#F9F0F2', borderLeft: '4px solid var(--accent)', borderRadius: '0 4px 4px 0', padding: '2rem 2.5rem', margin: '2rem 0'}}>
            <p style={{fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.75rem'}}>Research question</p>
            <p style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2, margin: 0}}>Where in the pharmacy lifecycle, from sales to post-launch, are the friction points that lead to low health scores and churn?</p>
          </div>
        </div>

{/* CUSTOMER JOURNEY */}
        <div className="cs-section">
          <p className="cs-section-label">Customer journey</p>
          <h2 className="cs-section-title">How pharmacies are meant to launch with Nimble</h2>
          <p>Understanding the intended lifecycle is key context for where the research uncovered friction.</p>

          <div style={{marginTop: '1.75rem', overflowX: 'auto'}}>
            <div className="cj">
              <div className="cj-intro">The ideal pharmacy journey, from first contact to active partner on the platform.</div>
              <div className="cj-stages">
                <div className="cj-stage">
                  <div className="cj-dot">
                    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div className="cj-name">Sales</div>
                  <div className="cj-sub">Qualification &amp; contract</div>
                </div>
                <div className="cj-stage">
                  <div className="cj-dot">
                    <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                  </div>
                  <div className="cj-name">Onboarding</div>
                  <div className="cj-sub">Setup &amp; training</div>
                </div>
                <div className="cj-stage">
                  <div className="cj-dot">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="cj-name">Phase 1</div>
                  <div className="cj-sub">Getting comfortable</div>
                </div>
                <div className="cj-stage">
                  <div className="cj-dot">
                    <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
                  </div>
                  <div className="cj-name">Phase 2</div>
                  <div className="cj-sub">Core product</div>
                </div>
                <div className="cj-stage">
                  <div className="cj-dot">
                    <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </div>
                  <div className="cj-name">Ramp success</div>
                  <div className="cj-sub">Growth &amp; retention</div>
                </div>
              </div>
              <div className="cj-cards">
                <div className="cj-card">
                  <div className="cj-item">PMS compatibility confirmed</div>
                  <div className="cj-item">Clear expectations set</div>
                </div>
                <div className="cj-card">
                  <div className="cj-item">Integration runs smoothly</div>
                  <div className="cj-item">Staff feel confident and ready</div>
                </div>
                <div className="cj-card">
                  <div className="cj-item">Launches on a simpler product</div>
                  <div className="cj-item">Staff and patients adjust</div>
                  <div className="cj-note">A lighter entry point before the full product.</div>
                </div>
                <div className="cj-card">
                  <div className="cj-item">Moves to the core checkout product</div>
                  <div className="cj-item">Patients guided through change</div>
                  <div className="cj-note">Phase 2 is the full Checkout product, where real volume and revenue growth begins.</div>
                </div>
                <div className="cj-card">
                  <div className="cj-item">Fill volume grows steadily</div>
                  <div className="cj-item">Turns on features like refills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/* RESEARCH APPROACH */}
        <div className="cs-section">
          <p className="cs-section-label">Research approach</p>
          <h2 className="cs-section-title">Following the pharmacy from first contact to outcome</h2>
          <p>We recruited 12 pharmacies across four segments. Distribution was uneven by design. Reaching pharmacies that churned pre-launch was significantly harder, as they had already disengaged from Nimble entirely.</p>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1.5rem'}}>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>01</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Segment-based recruitment</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>12 pharmacies across 3 churn segments, recruited with CS team support. Uneven distribution due to difficulty reaching pre-launch churns.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>02</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>60-min in-depth interviews</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Traced each pharmacy&apos;s full journey from sales outreach to their current outcome. Some sessions conducted on-site to observe the pharmacy environment and setup firsthand.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>03</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Journey mapping &amp; blueprinting</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Overlaid segment journeys to identify shared pain points and internal process gaps.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', borderBottom: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>04</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Cross-functional readout</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Presented to Sales, Onboarding, Product, and CS to align on shared accountability.</div>
            </div>

          </div>

          <p style={{marginTop: '2rem'}}>We recruited across four distinct groups, including healthy pharmacies as a positive benchmark. Together they let us trace the full arc of the pharmacy experience and pinpoint where it diverged.</p>

          <div className="segment-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '1rem'}}>
            <div className="segment-card sage-top">
              <div className="segment-label">Segment 01</div>
              <div className="segment-title">Launched, healthy</div>
              <div className="segment-desc">Pharmacies actively using the platform with a strong health score. Included as a positive benchmark to understand what good looks like.</div>
            </div>
            <div className="segment-card sage-top">
              <div className="segment-label">Segment 02</div>
              <div className="segment-title">Launched, unhealthy</div>
              <div className="segment-desc">Pharmacies that went live within the last 3 months but have a low health score. Still active, but struggling to gain traction.</div>
            </div>
            <div className="segment-card sage-top">
              <div className="segment-label">Segment 03</div>
              <div className="segment-title">Launched, then churned</div>
              <div className="segment-desc">Pharmacies that went live, used the platform for a period, and then disengaged or left entirely.</div>
            </div>
            <div className="segment-card sage-top">
              <div className="segment-label">Segment 04</div>
              <div className="segment-title">Churned pre-launch</div>
              <div className="segment-desc">Pharmacies that signed on with Nimble but never went live. The hardest segment to reach and the most upstream failure point.</div>
            </div>
          </div>
        </div>

{/* INSIGHTS */}
        <div className="cs-section">
          <p className="cs-section-label">Key insights</p>
          <h2 className="cs-section-title">Many issues surfaced, but they clustered into three categories</h2>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0'}}>

            {/* Insight 01 — full width */}
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.75rem 2rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 01</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.35}}>Seamless integration is overpromised pre-onboarding, setting pharmacies up with expectations the product can&apos;t meet</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Payment reconciliation required running two systems simultaneously, creating double-payment risks and manual correction workflows.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Workarounds pharmacies adopted to keep Nimble running ultimately negated the efficiency gains the platform was meant to deliver.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Sales had overpromised on integration quality. Pharmacies arrived with expectations the current infrastructure couldn&apos;t meet.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>We were selling to pharmacy systems we knew had poor integration compatibility, setting up failures before onboarding even began.
                </div>
              </div>
              <div style={{background: '#F9F0F2', borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1, whiteSpace: 'nowrap'}}>191 hrs</span>
                <span style={{fontSize: '0.82rem', color: '#6B4F5A', fontWeight: 300, lineHeight: 1.5}}>spent on integration-related inbounds in the last 90 days, the #1 CP inbound topic at 13% of all contacts</span>
              </div>
              <div style={{position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0'}}>
                <div style={{fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none'}}>&ldquo;</div>
                <p style={{fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative'}}>We could make Nimble work. But we then had to run it still through Pioneer. <span style={{background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500}}>Seconds matter. We&apos;re that busy.</span> It was too burdensome for our staff to make it worth it.</p>
                <span style={{fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative'}}>Ryan</span>
              </div>
            </div>

            {/* Insight 02 — full width */}
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.75rem 2rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 02</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35}}>Ongoing communication gaps across the lifecycle leave pharmacies feeling unsupported, eroding trust over time</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300, marginBottom: '0.75rem'}}>When pharmacies can&apos;t see what&apos;s being done about their issues, and when their wins go unacknowledged, trust in the partnership erodes over time.</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>We&apos;re cautious about raising potential issues around integration quality or patient adoption. While that makes for an effective sale, it irks pharmacies further when things go wrong.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>We don&apos;t follow up enough on issues raised: bugs, enhancement requests, or roadmap transparency. Pharmacies raised concerns and heard nothing back.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>When issues go unacknowledged, pharmacies feel like they&apos;re submitting feedback into a black hole, leaving them feeling unheard and eroding confidence in the partnership.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>There&apos;s an opportunity to highlight and amplify moments of success in the pharmacy journey. Wins are going unnoticed.
                </div>
              </div>
              <div style={{position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0'}}>
                <div style={{fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none'}}>&ldquo;</div>
                <p style={{fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative'}}>I had to keep calling and keep calling and be like <span style={{background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500}}>&lsquo;what&apos;s the update on the issue&rsquo;</span>, he said let me follow up. Everything was let me follow up, let me follow up.</p>
                <span style={{fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative'}}>Mark</span>
              </div>
            </div>

            {/* Insight 03 — full width */}
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.75rem 2rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 03</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.35}}>At the phase transition, poor patient onboarding drives more calls than before, undermining pharmacy confidence in Nimble</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Great service is the number one goal of independent pharmacies. Negative feedback from patients, even a miniscule percentage, has a heavy emotional impact on pharmacy staff.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Lack of adoption hurts pharmacies&apos; bottom line (already under pressure) and works against realizing their revenue goals with Nimble.
                </div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300, paddingLeft: '1rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>·</span>Bag stuffers are seen as mildly helpful but often arrive too late, are too generic, or there isn&apos;t enough time from closed-win to go-live to get them in patients&apos; hands.
                </div>
              </div>
              <div style={{background: '#F9F0F2', borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1, whiteSpace: 'nowrap'}}>8–9%</span>
                <span style={{fontSize: '0.82rem', color: '#6B4F5A', fontWeight: 300, lineHeight: 1.5}}>typical patient adoption rate in retail pharmacies, a low baseline that integration friction and poor messaging pushes even lower</span>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem'}}>
                <div style={{position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0'}}>
                  <div style={{fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none'}}>&ldquo;</div>
                  <p style={{fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative'}}>If we have these flyers the first month that we launched, it would have been very helpful. <span style={{background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500}}>We were told it was going to be a smooth transition and it was not.</span></p>
                  <span style={{fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative'}}>Craig</span>
                </div>
                <div style={{position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0'}}>
                  <div style={{fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none'}}>&ldquo;</div>
                  <p style={{fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative'}}>This is becoming <span style={{background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500}}>more of a problem than it&apos;s helping.</span> Customers are getting frustrated. They got a text saying stuff&apos;s ready, but not everything is ready.</p>
                  <span style={{fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative'}}>Ryan</span>
                </div>
              </div>
            </div>

          </div>

          {/* Before journey map */}
          <div style={{marginTop: '2rem', overflowX: 'auto'}}>
            <div style={{fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem'}}>Pharmacy lifecycle: before</div>
            <div className="bpb">
              <div className="g7">
                <div className="sl e"></div>
                <div className="sl">Sales</div>
                <div className="sl g">Onboarding ★</div>
                <div className="sl">Phase 1</div>
                <div className="sl p">⚡ Phase 2</div>
                <div className="sl">Settles down</div>
                <div className="sl d">Churn risk</div>
              </div>
              <div className="g7">
                <div className="al">Journey</div>
                <div style={{gridColumn: 'span 6', background: '#FAF6F8'}}>
                  <svg width="100%" viewBox="0 -20 600 130" preserveAspectRatio="none" style={{display: 'block', height: '130px'}}>
                    <rect x="300" y="-20" width="100" height="130" fill="rgba(168,84,112,0.07)"/>
                    <line x1="300" y1="-20" x2="300" y2="110" stroke="#A85470" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <line x1="400" y1="-20" x2="400" y2="110" stroke="#A85470" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <rect x="500" y="-20" width="100" height="130" fill="rgba(45,26,34,0.05)"/>
                    <line x1="500" y1="-20" x2="500" y2="110" stroke="rgba(45,26,34,0.2)" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <line x1="100" y1="-20" x2="100" y2="110" stroke="rgba(168,84,112,0.1)" strokeWidth="0.5"/>
                    <line x1="200" y1="-20" x2="200" y2="110" stroke="rgba(168,84,112,0.1)" strokeWidth="0.5"/>
                    <path d="M50,30 C90,22 130,14 150,12 C170,10 210,16 250,26 C270,32 290,50 350,74 C375,82 400,68 450,60 C475,54 510,60 550,68 L550,90 L50,90 Z" fill="rgba(168,84,112,0.06)"/>
                    <path d="M50,30 C90,22 130,14 150,12 C170,10 210,16 250,26 C270,32 290,50 350,74 C375,82 400,68 450,60 C475,54 510,60 550,68" fill="none" stroke="#A85470" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="50" cy="30" r="3" fill="#A85470"/>
                    <circle cx="150" cy="12" r="4" fill="#366B58"/>
                    <circle cx="250" cy="26" r="3" fill="#A85470"/>
                    <circle cx="350" cy="74" r="4.5" fill="#E24B4A"/>
                    <circle cx="450" cy="60" r="3" fill="#A85470"/>
                    <circle cx="550" cy="68" r="3" fill="#2D1A22"/>
                    <text x="50" y="22" textAnchor="middle" fontSize="13">🙂</text>
                    <text x="150" y="4" textAnchor="middle" fontSize="15">😄</text>
                    <text x="250" y="18" textAnchor="middle" fontSize="13">😊</text>
                    <text x="350" y="60" textAnchor="middle" fontSize="17">😤</text>
                    <text x="450" y="48" textAnchor="middle" fontSize="13">😟</text>
                    <text x="550" y="56" textAnchor="middle" fontSize="13">😔</text>
                    <text x="50" y="88" textAnchor="middle" fontSize="8" fill="#A8899A">Hopeful</text>
                    <text x="150" y="88" textAnchor="middle" fontSize="8" fill="#366B58" fontWeight="500">Delighted</text>
                    <text x="250" y="88" textAnchor="middle" fontSize="8" fill="#A8899A">Confident</text>
                    <text x="350" y="88" textAnchor="middle" fontSize="8" fill="#A85470" fontWeight="500">Overwhelmed</text>
                    <text x="450" y="88" textAnchor="middle" fontSize="8" fill="#A8899A">Frustrated</text>
                    <text x="550" y="88" textAnchor="middle" fontSize="8" fill="#2D1A22" fontWeight="500">At risk</text>
                  </svg>
                </div>
              </div>
              <div className="g7">
                <div className="ll">Pharmacy</div>
                <div className="cc"><div className="tg td">Signs agreement</div></div>
                <div className="cc go"><div className="tg tg2">Smooth setup</div><div className="tg tg2">Great CS support</div></div>
                <div className="cc"><div className="tg td">Building volume</div><div className="tg tf">Staff training gaps</div></div>
                <div className="cc hot"><div className="tg tf">Phase 2 data exchange breaks down</div><div className="tg tf">Patients confused</div><div className="tg tf">Phone calls flood in</div></div>
                <div className="cc"><div className="tg td">Calls die down</div><div className="tg td">Volume recovers slowly</div></div>
                <div className="cc ch"><div className="tg tf">Bugs go unanswered</div><div className="tg tf">Revenue model unclear</div><div className="tg tw">Churns</div></div>
              </div>
              <div className="g7">
                <div className="ll">Nimble CS</div>
                <div className="cc"><div className="tg td">Account handoff</div></div>
                <div className="cc go"><div className="tg tg2">Proactive onboarding</div><div className="tg tg2">Training &amp; setup</div></div>
                <div className="cc"><div className="tg td">Monitors health score</div></div>
                <div className="cc hot"><div className="tg tf">High inbound calls</div><div className="tg tf">No PMS visibility</div></div>
                <div className="cc"><div className="tg td">Volume normalises</div></div>
                <div className="cc ch"><div className="tg tf">Can&apos;t triage bugs vs gaps</div><div className="tg tf">No triage visibility</div></div>
              </div>
              <div className="g7">
                <div className="ll">Product</div>
                <div className="cc"><div className="tg tf">No PMS restrictions</div></div>
                <div className="cc go"><div className="tg td">Basic integration setup</div></div>
                <div className="cc"><div className="tg td">Tracks Phase 1 metrics</div></div>
                <div className="cc hot"><div className="tg tf">Integration failures</div><div className="tg tf">No transition comms</div></div>
                <div className="cc"><div className="tg td">Monitors Phase 2</div></div>
                <div className="cc ch"><div className="tg tf">No triage cadence</div><div className="tg tf">Bugs unresolved</div></div>
              </div>
              <div className="leg">
                <div className="li"><div className="ld" style={{background: '#366B58'}}></div> Positive moment</div>
                <div className="li"><div className="ld" style={{background: '#E24B4A'}}></div> Friction point</div>
                <div className="li"><div className="ld" style={{background: '#BA7517'}}></div> Churn risk</div>
                <div className="li"><div className="ld" style={{background: '#F5F5F3', border: '1px solid #ddd'}}></div> Standard action</div>
                <div className="li"><span style={{color: '#A85470', fontSize: '11px'}}>⚡</span> High friction zone</div>
              </div>
            </div>
          </div>
        </div>

{/* RECOMMENDATIONS */}
        <div className="cs-section">
          <p className="cs-section-label">What we changed</p>
          <h2 className="cs-section-title">Each insight mapped to a cross-functional decision</h2>
          <p>Findings were presented to leaders across Sales, Product, Onboarding, and Customer Success. All four changes were actioned from the research.</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.25rem', marginTop: '1.5rem'}}>

            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(54,107,88,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <div>
                <div style={{fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem'}}>Sales · Integration</div>
                <div style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem'}}>Restrict sales to compatible pharmacy systems</div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>Identified which pharmacy systems consistently produced poor integrations and built that into the sales qualification process, preventing a known source of early churn before it started.</div>
              </div>
            </div>

            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(54,107,88,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.4 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              </div>
              <div>
                <div style={{fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem'}}>Patient · Adoption</div>
                <div style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem'}}>Deploy a patient education phase via text messaging</div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>Introduced a dedicated patient education period triggered at the transitional phase where most confusion occurred. We used Nimble&apos;s existing text messaging infrastructure to guide patients through the change before they encountered friction.</div>
              </div>
            </div>

            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(54,107,88,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <div>
                <div style={{fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem'}}>Engineering · Integration</div>
                <div style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem'}}>Invest in smoother integration infrastructure</div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>Secured investment to build out more robust integrations for the pharmacy systems we do support, reducing the disruption that was undermining early adoption and eroding pharmacy confidence in the platform.</div>
              </div>
            </div>

            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(54,107,88,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <div>
                <div style={{fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem'}}>Product · CS · Communications</div>
                <div style={{fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem'}}>Establish SLAs for bugs and enhancement requests</div>
                <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>Built out clear service level agreements. Product committed to reviewing and triaging all incoming requests on a defined timeline, and CS developed criteria to distinguish bugs from knowledge gaps, reducing unnecessary escalations and giving pharmacies visible acknowledgment that their feedback was being acted on.</div>
              </div>
            </div>

          </div>
        </div>

{/* SERVICE BLUEPRINT */}
        <div className="cs-section">
          <p className="cs-section-label">Service blueprint</p>
          <h2 className="cs-section-title">The pharmacy lifecycle after changes</h2>
          <p>How the full pharmacy experience looks with all four research-driven changes applied, from sales qualification through to a retained, active pharmacy.</p>

          <div style={{marginTop: '2rem', overflowX: 'auto'}}>
            <div className="bp-s">

              <div className="g7">
                <div className="sl e"></div>
                <div className="sl g">Sales ✓</div>
                <div className="sl">Onboarding</div>
                <div className="sl">Phase 1</div>
                <div className="sl" style={{background: 'rgba(186,117,23,0.2)'}}>⚡ Phase 2</div>
                <div className="sl g">Settles down</div>
                <div className="sl" style={{background: '#EBF3EF', border: '1px dashed #366B58', color: '#366B58'}}>Adoption grows ↑ (projected)</div>
              </div>

              <div className="g7">
                <div className="al">Journey</div>
                <div style={{gridColumn: 'span 6', background: '#F4FAF7'}}>
                  <svg width="100%" viewBox="0 -20 600 130" preserveAspectRatio="none" style={{display: 'block', height: '130px'}}>
                    <line x1="100" y1="-20" x2="100" y2="110" stroke="rgba(54,107,88,0.15)" strokeWidth="0.5"/>
                    <line x1="200" y1="-20" x2="200" y2="110" stroke="rgba(54,107,88,0.15)" strokeWidth="0.5"/>
                    <line x1="300" y1="-20" x2="300" y2="110" stroke="rgba(54,107,88,0.15)" strokeWidth="0.5"/>
                    <line x1="400" y1="-20" x2="400" y2="110" stroke="rgba(54,107,88,0.15)" strokeWidth="0.5"/>
                    <line x1="500" y1="-20" x2="500" y2="110" stroke="rgba(54,107,88,0.15)" strokeWidth="0.5"/>
                    <path d="M50,30 C90,22 130,14 150,12 C170,10 210,22 250,40 C270,46 290,54 350,64 C375,62 400,50 450,36 C475,28 510,20 550,14 L550,90 L50,90 Z" fill="rgba(54,107,88,0.07)"/>
                    <path d="M50,30 C90,22 130,14 150,12 C170,10 210,22 250,40 C270,46 290,54 350,64 C375,62 400,50 450,36 C475,28 510,20 550,14" fill="none" stroke="#366B58" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="50" cy="30" r="3" fill="#366B58"/>
                    <circle cx="150" cy="12" r="4" fill="#366B58"/>
                    <circle cx="250" cy="40" r="3" fill="#366B58"/>
                    <circle cx="350" cy="64" r="3.5" fill="#BA7517"/>
                    <circle cx="450" cy="36" r="3" fill="#366B58"/>
                    <circle cx="550" cy="14" r="3" fill="#366B58"/>
                    <text x="50" y="22" textAnchor="middle" fontSize="13">🙂</text>
                    <text x="150" y="4" textAnchor="middle" fontSize="15">😄</text>
                    <text x="250" y="32" textAnchor="middle" fontSize="13">😊</text>
                    <text x="350" y="56" textAnchor="middle" fontSize="14">😬</text>
                    <text x="450" y="28" textAnchor="middle" fontSize="13">😊</text>
                    <text x="550" y="6" textAnchor="middle" fontSize="13">😄</text>
                    <text x="50" y="88" textAnchor="middle" fontSize="8" fill="#A8899A">Hopeful</text>
                    <text x="150" y="88" textAnchor="middle" fontSize="8" fill="#366B58" fontWeight="500">Delighted</text>
                    <text x="250" y="88" textAnchor="middle" fontSize="8" fill="#366B58" fontWeight="500">Confident</text>
                    <text x="350" y="88" textAnchor="middle" fontSize="8" fill="#BA7517" fontWeight="500">Less friction</text>
                    <text x="450" y="88" textAnchor="middle" fontSize="8" fill="#366B58" fontWeight="500">Recovering</text>
                    <text x="550" y="88" textAnchor="middle" fontSize="8" fill="#366B58" fontWeight="500">Adoption grows</text>
                  </svg>
                </div>
              </div>

              <div className="g7">
                <div className="ll">Pharmacy</div>
                <div className="cc im"><div className="tg td">Signs agreement</div></div>
                <div className="cc go"><div className="tg tg2">Smooth setup</div><div className="tg tg2">Great CS support</div></div>
                <div className="cc im"><div className="tg td">Building volume</div><div className="tg tc">Improved staff training</div></div>
                <div className="cc im"><div className="tg tc">Compatible PMS only</div><div className="tg tc">Patient SMS education</div><div className="tg tc">Fewer integration issues</div></div>
                <div className="cc go"><div className="tg tg2">Calls die down faster</div><div className="tg tg2">Volume recovers strongly</div></div>
                <div className="cc go"><div className="tg tc">SLAs for bugs in place</div><div className="tg tc">Revenue model explained</div><div className="tg tg2">Features turn on</div><div className="tg tg2">Adoption increases</div></div>
              </div>

              <div className="g7">
                <div className="ll">Nimble CS</div>
                <div className="cc"><div className="tg td">Account handoff</div></div>
                <div className="cc go"><div className="tg tg2">Proactive onboarding</div><div className="tg tg2">Training &amp; setup</div></div>
                <div className="cc"><div className="tg td">Monitors health score</div></div>
                <div className="cc im"><div className="tg tc">SMS education deployed</div><div className="tg tg2">Reduced inbound volume</div></div>
                <div className="cc"></div>
                <div className="cc go"><div className="tg tc">Bug vs gap criteria clear</div><div className="tg tc">Visibility into product queue</div></div>
              </div>

              <div className="g7">
                <div className="ll">Product</div>
                <div className="cc im"><div className="tg tc">Restricts bad PMS sales</div></div>
                <div className="cc go"><div className="tg tc">Integration infra investment</div></div>
                <div className="cc"><div className="tg td">Tracks Phase 1 metrics</div></div>
                <div className="cc im"><div className="tg tc">Clearer transition comms</div><div className="tg tg2">Fewer integration failures</div></div>
                <div className="cc"><div className="tg td">Monitors Phase 2</div></div>
                <div className="cc go"><div className="tg tc">SLA triage cadence live</div><div className="tg tg2">Bugs actioned on schedule</div></div>
              </div>

              <div className="leg">
                <div className="li"><div className="ld" style={{background: '#366B58'}}></div> Positive / improved</div>
                <div className="li"><div className="ld" style={{background: '#EBF3EF', border: '1px solid #366B58'}}></div> Change implemented</div>
                <div className="li"><div className="ld" style={{background: '#E24B4A'}}></div> Friction point</div>
                <div className="li"><div className="ld" style={{background: '#BA7517'}}></div> Churn risk</div>
                <div className="li"><div className="ld" style={{background: '#F5F5F3', border: '1px solid #ddd'}}></div> Unchanged</div>
                <div className="li"><span style={{color: '#A85470', fontSize: '11px'}}>⚡</span> High friction zone</div>
              </div>

            </div>
          </div>
        </div>

{/* IMPACT */}
        <div className="cs-section">
          <p className="cs-section-label">Impact</p>
          <h2 className="cs-section-title">Cross-functional problems surfaced, aligned, and acted on</h2>
          <p>The research didn&apos;t just identify friction. It created a shared language for problems that had been siloed across teams. Getting leadership aligned on the same picture was the first and most important outcome.</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin: '1.5rem 0'}}>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem'}}>48h</div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>Bug resolution + SLAs</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>Down from weeks. The product team resolved 200+ cases and maintained a fast resolution pace, directly reducing the black hole experience that had left pharmacies feeling ignored.</div>
            </div>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem'}}>+20</div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>NPS improvement</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>Pharmacy NPS improved by 20+ points following changes to communications and bug resolution.</div>
            </div>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A85470" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l1.05-1.05a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              </div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>Patient confusion inbounds</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>A dedicated education period reduced patient confusion calls during phase transition. Engagement and adoption also went up, with relative engagement reaching 70%+.</div>
            </div>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem'}}>↓</div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>Integration-related churn</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>Restricting sales to compatible pharmacy systems reduced churn from poor integrations.</div>
            </div>
          </div>

          <div style={{background: '#EBF3EF', borderRadius: '4px', padding: '1.25rem 1.5rem'}}>
            <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.5rem'}}>A note on process</div>
            <div style={{fontSize: '0.97rem', color: '#1E3D2F', fontWeight: 300, lineHeight: 1.7}}>These improvements are meaningful, but they are the beginning of a longer journey. Fixing deep integration infrastructure takes time and continued investment. What this research enabled was prioritizing the actions with the most immediate customer impact first: clearer communication, faster bug resolution, and better patient onboarding.</div>
          </div>
        </div>

      </div>

      <div className="cs-footer">
        <span className="cs-footer-text">Tien Do · UX Research Portfolio</span>
        <Link href="/#work">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to all case studies
        </Link>
      </div>
    </>
  )
}
