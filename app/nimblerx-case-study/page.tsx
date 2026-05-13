import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'NimbleRx Pharmacy Checkout · Tien Do',
}

export default function NimbleRxCaseStudy() {
  return (
    <>
      <Navbar variant="case-study" backHref="/#work" />

      {/* HERO + META */}
      <div className="cs-hero" style={{ padding: '3.5rem 5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
        <div className="cs-hero-content" style={{ paddingBottom: '2.5rem' }}>
          <p className="cs-eyebrow">NimbleRx · Lead UX Researcher · 2023</p>
          <h1 className="cs-title">Why pharmacies weren&apos;t using checkout, and what it was costing us</h1>
          <p className="cs-subtitle">A mixed-methods study to uncover why a revenue-critical feature had low adoption, and what it would take to turn that around.</p>
          <div style={{ padding: '1.25rem 0', display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '2px solid var(--text-primary)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)' }}>Role</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Lead UX Researcher</span>
            </div>
            <div style={{ width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0 }}></div>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)' }}>Methods</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Funnel analysis · Interviews · Concept testing</span>
            </div>
            <div style={{ width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0 }}></div>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)' }}>Timeline</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Q4 2023 · Q1 2024</span>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: '2.5rem' }}>
          <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(168,84,112,0.08)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/nimblerx-checkout-preview.jpeg" alt="NimbleRx Pharmacy Checkout interface" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div style={{ border: '1px solid rgba(168,84,112,0.2)', borderLeft: 'none', borderRight: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '100%' }}>
          <div style={{ padding: '2rem 5rem', borderRight: '1px solid rgba(168,84,112,0.15)' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem' }}>The problem</div>
            <div style={{ fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300 }}>Only 10 in 100 eligible prescription fills used Pharmacy Checkout, quietly leaking prescription volume and GMV outside the platform.</div>
          </div>
          <div style={{ padding: '2rem 5rem' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem' }}>The outcome</div>
            <div style={{ fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300, marginBottom: '0.75rem' }}>Research drove a redesign that directly moved key metrics across feature adoption, prescription volume, and pharmacy growth.</div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+30%</span>
                <span style={{ fontSize: '0.78rem', color: '#6B4F5A' }}>feature usage</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+3k</span>
                <span style={{ fontSize: '0.78rem', color: '#6B4F5A' }}>fills per week</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1 }}>+20</span>
                <span style={{ fontSize: '0.78rem', color: '#6B4F5A' }}>pharmacies onboarded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="cs-body">

        {/* BACKGROUND */}
        <div className="cs-section">
          <p className="cs-section-label">Background</p>
          <h2 className="cs-section-title">NimbleRx makes money when transactions flow through the platform</h2>
          <p>NimbleRx generates revenue when prescriptions are processed through its platform. Pharmacy Checkout is a point-of-sale tool built into Nimble that lets pharmacy staff process orders on behalf of patients. When it doesn&apos;t get used, prescriptions get sold outside Nimble entirely — lost volume, lost GMV, and a missed opportunity.</p>
          <p>Analytics showed only 10 in every 100 eligible fills were completed via Pharmacy Checkout. The data showed us the gap. It couldn&apos;t tell us why.</p>
        </div>

        {/* FUNNEL SVG */}
        <div style={{ margin: '2rem 0' }}>
          <svg width="100%" viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <rect x="70" y="100" width="18" height="180" rx="3" fill="#C4849A" />
            <text x="94" y="155" textAnchor="start" fontSize="13" fontWeight="500" fill="#1E1118">100</text>
            <text x="94" y="170" textAnchor="start" fontSize="11" fill="#6B4F5A">Prescription</text>
            <text x="94" y="184" textAnchor="start" fontSize="11" fill="#6B4F5A">fills</text>
            <path d="M88 110 C170 110 170 105 248 105 L248 185 C170 185 170 190 88 190 Z" fill="#C4849A" opacity="0.25" />
            <path d="M88 220 C170 220 170 240 248 250 L248 280 C170 270 170 250 88 240 Z" fill="#D4C8A0" opacity="0.35" />
            <rect x="248" y="95" width="16" height="145" rx="3" fill="#9B8AA8" />
            <text x="270" y="108" fontSize="13" fontWeight="500" fill="#1E1118">80</text>
            <text x="270" y="123" fontSize="11" fill="#6B4F5A">Nimble texts sent</text>
            <rect x="248" y="248" width="16" height="36" rx="3" fill="#C8C2A0" />
            <text x="270" y="261" fontSize="13" fontWeight="500" fill="#1E1118">20</text>
            <text x="270" y="276" fontSize="11" fill="#6B4F5A">Not eligible</text>
            <path d="M264 95 C358 95 358 88 446 88 L446 178 C358 178 358 185 264 185 Z" fill="#9B8AA8" opacity="0.22" />
            <path d="M264 195 C358 195 358 215 446 228 L446 268 C358 255 358 235 264 240 Z" fill="#A8C4C0" opacity="0.35" />
            <rect x="446" y="78" width="16" height="110" rx="3" fill="#9B8AA8" />
            <text x="468" y="92" fontSize="13" fontWeight="500" fill="#1E1118">50</text>
            <text x="468" y="107" fontSize="11" fill="#6B4F5A">Nimble Sold</text>
            <rect x="446" y="218" width="16" height="60" rx="3" fill="#A8C4C0" />
            <text x="468" y="234" fontSize="13" fontWeight="500" fill="#1E1118">30</text>
            <text x="468" y="249" fontSize="11" fill="#6B4F5A">Pharmacy Sold</text>
            <path d="M462 78 C556 78 556 72 644 72 L644 160 C556 160 556 166 462 166 Z" fill="#7A90A8" opacity="0.28" />
            <path d="M462 176 C556 176 556 188 644 192 L644 212 C556 208 556 196 462 188 Z" fill="#A85470" opacity="0.28" />
            <rect x="644" y="62" width="16" height="108" rx="3" fill="#7A90A8" />
            <text x="666" y="76" fontSize="13" fontWeight="500" fill="#1E1118">40</text>
            <text x="666" y="91" fontSize="11" fill="#6B4F5A">Patients checkout</text>
            <rect x="644" y="182" width="16" height="40" rx="3" fill="#A85470" />
            <text x="666" y="196" fontSize="13" fontWeight="500" fill="#1E1118">10</text>
            <text x="666" y="211" fontSize="11" fill="#6B4F5A">Pharmacy checkout</text>
            <line x1="454" y1="270" x2="486" y2="318" stroke="#A8899A" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx="454" cy="270" r="3" fill="#A8899A" />
            <text x="490" y="315" fontSize="11" fontWeight="500" fill="#A85470">Loss opportunity</text>
            <text x="490" y="330" fontSize="10" fill="#6B4F5A">Eligible prescriptions processed</text>
            <text x="490" y="343" fontSize="10" fill="#6B4F5A">outside Nimble = missed GMV</text>
            <line x1="652" y1="202" x2="720" y2="290" stroke="#A8899A" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx="652" cy="202" r="3" fill="#A85470" />
            <text x="724" y="287" fontSize="11" fontWeight="500" fill="#A85470">Low feature usage</text>
            <text x="724" y="302" fontSize="10" fill="#6B4F5A">Pharmacy checkout allows</text>
            <text x="724" y="315" fontSize="10" fill="#6B4F5A">point-of-sale processing.</text>
            <text x="724" y="328" fontSize="10" fill="#6B4F5A">so why aren&apos;t they using it?</text>
          </svg>
        </div>
        <p className="cs-screenshot-caption" style={{ marginTop: 0 }}>Of every 100 prescription fills, only 10 were processed via Pharmacy Checkout. That gap is what this research set out to close.</p>

        <div style={{ background: '#F9F0F2', borderLeft: '4px solid #A85470', borderRadius: '0 4px 4px 0', padding: '2rem 2.5rem', margin: '2rem 0' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#A85470', margin: '0 0 0.75rem' }}>Research question</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2, margin: 0 }}>How can we increase pharmacy usage of Pharmacy Checkout to capture missed revenue and leverage it as a primary point-of-sale?</p>
        </div>

        <hr className="cs-divider" />

        {/* RESEARCH APPROACH */}
        <div className="cs-section">
          <p className="cs-section-label">Research approach</p>
          <h2 className="cs-section-title">Starting with the data, then going to the source</h2>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1.5rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500 }}>01</span>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dark)" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.35rem' }}>Scoping</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3 }}>Funnel data analysis</div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Analyzed checkout funnel data to identify <strong>where and who was dropping off</strong>, narrowing focus to <strong>high-volume specialty pharmacies</strong> and <strong>four pharmacy chains</strong> representing 50+ locations. The data told us exactly who to talk to.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500 }}>02</span>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dark)" strokeWidth="1.8"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.35rem' }}>Discovery</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3 }}>Pharmacy interviews</div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Interviewed staff at the <strong>highest drop-off pharmacies</strong> to understand where checkout was breaking down in their workflow.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500 }}>03</span>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dark)" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.35rem' }}>Observation</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3 }}>Contextual inquiry</div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Watched pharmacy techs use the feature live. Observation surfaced <strong>navigation complexities</strong> and <strong>missing input feedback</strong> that staff had normalized and stopped mentioning in interviews.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', borderBottom: '1px solid rgba(168,84,112,0.15)', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500 }}>04</span>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage-dark)" strokeWidth="1.8"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.35rem' }}>Validation</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3 }}>Concept testing</div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Tested proposed solutions with the same pharmacy staff to confirm <strong>what would actually reduce friction</strong> before anything was built.</div>
            </div>

          </div>
        </div>

        <hr className="cs-divider" />

        {/* INSIGHTS */}
        <div className="cs-section">
          <p className="cs-section-label">Key insights</p>
          <h2 className="cs-section-title">Three barriers were driving pharmacies off the platform</h2>
          <p>Adoption wasn&apos;t low because pharmacies didn&apos;t want to use the feature. It was low because the feature made their job harder.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid #A85470', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Insight 01</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.6rem', lineHeight: 1.35 }}>Usability friction at every step</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Poor navigation, required input fields with no fallback, and minimal feedback left staff confused and added unnecessary steps to an already busy workflow.</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid #A85470', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Insight 02</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.6rem', lineHeight: 1.35 }}>The email requirement was a dealbreaker</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Many patients lacked a valid email on file. Rather than troubleshoot it mid-transaction, staff abandoned checkout entirely and processed the order outside Nimble.</div>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid #A85470', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Insight 03</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.6rem', lineHeight: 1.35 }}>No way to collect digital signatures</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Pharmacies needed signatures for compliance and audits. Without that capability in Nimble, the platform couldn&apos;t fully replace their existing point-of-sale process.</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none' }}>&ldquo;</div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative' }}>Even if it&apos;s a few more seconds and a few more clicks, when you have <span style={{ background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500 }}>30–50 patients per day</span>, it can easily become a <span style={{ background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500 }}>time sink</span>.</p>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative' }}>Pharmacist</span>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', padding: '0.5rem 0 0' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '10rem', color: 'rgba(168,84,112,0.07)', lineHeight: 1, position: 'absolute', top: '-1.5rem', left: '-0.5rem', pointerEvents: 'none', userSelect: 'none' }}>&ldquo;</div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 300, fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.85, margin: '0.5rem 0 0.85rem', position: 'relative' }}>Not everyone has emails and your system <span style={{ background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500 }}>requires it</span> and it becomes a <span style={{ background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500 }}>bottleneck</span> when our techs have to keep asking patients. We want the signatures but not if it&apos;s going to put <span style={{ background: '#FAEDF1', color: '#A85470', padding: '1px 5px', borderRadius: '3px', fontWeight: 500 }}>more strain on our staff</span>.</p>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', position: 'relative' }}>Pharmacy Manager</span>
            </div>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* RECOMMENDATIONS */}
        <div className="cs-section">
          <p className="cs-section-label">What we changed</p>
          <h2 className="cs-section-title">Each insight mapped to a specific product change</h2>
          <p>All three recommendations shipped in the same Q1 release.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>

            <div style={{ background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem' }}>UX simplification</div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem' }}>Simplify the checkout flow</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Fewer clicks, success and error feedback, and inputs surfaced directly instead of nested.</div>
              </div>
            </div>

            <div style={{ background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem' }}>Remove friction</div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem' }}>Make email optional</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Removed the email requirement so checkout could always be completed regardless of patient data.</div>
              </div>
            </div>

            <div style={{ background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.4rem' }}>New capability</div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: '0.6rem' }}>Build digital signature support</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>Specialty pharmacies needed signatures for post-COVID compliance audits. Without it, Nimble couldn&apos;t replace their existing POS workflow.</div>
              </div>
            </div>

          </div>
        </div>

        <hr className="cs-divider" />

        {/* IMPACT */}
        <div className="cs-section">
          <p className="cs-section-label">Impact</p>
          <h2 className="cs-section-title">Research directly shaped product changes that moved the business</h2>
          <p>All three changes shipped in Q1. Results were measurable within the quarter.</p>

          <div style={{ background: '#F9F0F2', borderRadius: '6px', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 0, marginTop: '1.5rem' }}>
            <div style={{ paddingRight: '2rem', borderRight: '1px solid rgba(168,84,112,0.15)' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Adoption</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 500, color: '#A85470', lineHeight: 0.9, marginBottom: '0.75rem' }}>+30<span style={{ fontSize: '2rem' }}>%</span></div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, borderTop: '1px solid rgba(168,84,112,0.12)', paddingTop: '0.75rem' }}>Easier navigation and optional input fields reduced friction across 20+ partner pharmacies.</div>
            </div>
            <div style={{ padding: '0 2rem', borderRight: '1px solid rgba(168,84,112,0.15)' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Volume</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 500, color: '#A85470', lineHeight: 0.9, marginBottom: '0.75rem' }}>+3k<span style={{ fontSize: '1.5rem', color: '#C4849A' }}>/wk</span></div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, borderTop: '1px solid rgba(168,84,112,0.12)', paddingTop: '0.75rem' }}>More prescriptions processed on Nimble each week, directly boosting GMV across the network.</div>
            </div>
            <div style={{ paddingLeft: '2rem' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem' }}>Acquisition</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 500, color: '#A85470', lineHeight: 0.9, marginBottom: '0.75rem' }}>+20</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, borderTop: '1px solid rgba(168,84,112,0.12)', paddingTop: '0.75rem' }}>Pharmacies onboarded after digital signature support removed a key compliance blocker.</div>
            </div>
          </div>

          <div style={{ background: '#EBF3EF', borderRadius: '4px', padding: '1.25rem 1.5rem', marginTop: '1rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.4rem' }}>Longer-term impact</div>
            <div style={{ fontSize: '0.88rem', color: '#1E3D2F', fontWeight: 300, lineHeight: 1.7 }}>The pharmacies onboarded through this research turned out to be a top chain. Over the following years, they became responsible for roughly <strong style={{ color: '#1E3D2F', fontWeight: 500 }}>50% of Nimble&apos;s revenue</strong> — making this one of the highest-impact research outcomes in the company&apos;s history.</div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="cs-footer">
        <span className="cs-footer-text">Tien Do · UX Research Portfolio</span>
        <a href="/#work">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to all case studies
        </a>
      </div>
    </>
  )
}
