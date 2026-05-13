import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function TelenavCaseStudy() {
  return (
    <>
      <Navbar variant="case-study" backHref="/#work" />

      <div className="cs-hero" style={{padding: '3.5rem 5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end'}}>
        <div className="cs-hero-content" style={{paddingBottom: '2.5rem'}}>
          <p className="cs-eyebrow">Telenav · Lead UX Researcher · 2020</p>
          <h1 className="cs-title">Building a voice-based ordering experience that&apos;s safe to use while driving</h1>
          <p className="cs-subtitle">A discovery and evaluative research project to define user requirements and test a new conversational UI for Telenav&apos;s In-Car Commerce OEM product.</p>
          <div style={{padding: '1.25rem 0', display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '2px solid var(--text-primary)', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
              <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Role</span>
              <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Lead UX Researcher</span>
            </div>
            <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
            <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
              <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Methods</span>
              <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>Interviews · Surveys · Wizard of Oz · Personas</span>
            </div>
            <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
            <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
              <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Timeline</span>
              <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>2020</span>
            </div>
            <div style={{width: '1px', height: '12px', background: 'var(--border-strong)', flexShrink: 0}}></div>
            <div style={{display: 'flex', gap: '0.4rem', alignItems: 'baseline', whiteSpace: 'nowrap'}}>
              <span style={{fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)'}}>Platform</span>
              <span style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500}}>In-car voice UI (OEM)</span>
            </div>
          </div>
        </div>
        <div style={{paddingBottom: '2.5rem'}}>
          <div style={{borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 24px rgba(168,84,112,0.08)'}}>
            <img src="/telenav-product.png" alt="Telenav In-Car Commerce interface" style={{width: '100%', display: 'block', maxHeight: '380px', objectFit: 'cover'}} />
          </div>
        </div>
      </div>

      <div style={{border: '1px solid rgba(168,84,112,0.2)', borderLeft: 'none', borderRight: 'none'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '100%'}}>
          <div style={{padding: '2rem 5rem', borderRight: '1px solid rgba(168,84,112,0.15)'}}>
            <div style={{fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem'}}>The problem</div>
            <div style={{fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300}}>How do you build a voice ordering system that&apos;s safe, intuitive, and usable while driving?</div>
          </div>
          <div style={{padding: '2rem 5rem'}}>
            <div style={{fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sage)', fontWeight: 500, marginBottom: '0.5rem'}}>The outcome</div>
            <div style={{fontSize: '0.88rem', color: '#1E1118', lineHeight: 1.7, fontWeight: 300, marginBottom: '0.75rem'}}>Insights informed design changes and established a new approved remote testing protocol for voice products at Telenav.</div>
            <div style={{display: 'flex', gap: '2rem', marginTop: '0.5rem'}}>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>6</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>usability sessions</span>
              </div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>3</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>key insights</span>
              </div>
              <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: '#A85470', lineHeight: 1}}>✓</span>
                <span style={{fontSize: '0.78rem', color: '#6B4F5A'}}>protocol approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs-body">

        {/* BACKGROUND */}
        <div className="cs-section">
          <p className="cs-section-label">Background</p>
          <h2 className="cs-section-title">Voice ordering in the car is a hard problem.</h2>
          <p>Telenav was building a voice-based ordering system for OEM clients — letting drivers order food, coffee, and parking without looking away from the road. The challenge was designing an experience that was safe and low cognitive load, while COVID made in-person testing impossible.</p>

          <div style={{background: '#F9F0F2', borderLeft: '4px solid var(--accent)', borderRadius: '0 4px 4px 0', padding: '2rem 2.5rem', margin: '2rem 0'}}>
            <p style={{fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.75rem'}}>Research question</p>
            <p style={{fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2, margin: 0}}>How can we build a voice-based ordering system that is safe and easy to use while driving?</p>
          </div>

        </div>

        <hr className="cs-divider" />

        {/* RESEARCH APPROACH */}
        <div className="cs-section">
          <p className="cs-section-label">Research approach</p>
          <h2 className="cs-section-title">Discovery first, then evaluation</h2>
          <p>Two phases: understand who the users are and what they need, then test early designs for safety and usability.</p>

          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1.5rem'}}>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>01</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>User interviews &amp; persona creation</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Interviewed OEM drivers who frequently order while driving. Synthesized findings into personas to guide design direction.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>02</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Literature review</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Reviewed research on voice testing, cognitive load, and conversational UI to build a heuristics framework for evaluation.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>03</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Survey (N=100)</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Captured voice assistant usage patterns and collected natural language phrase samples to train the voice engine on command variants.</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '3.5rem 1fr 2fr', gap: '1.25rem', padding: '1.25rem 0', borderTop: '1px solid rgba(168,84,112,0.15)', borderBottom: '1px solid rgba(168,84,112,0.15)', alignItems: 'center'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'}}>
                <span style={{fontFamily: "'Playfair Display', serif", fontSize: '0.72rem', color: 'var(--sage)', fontWeight: 500}}>04</span>
                <div style={{width: '36px', height: '36px', borderRadius: '50%', background: 'var(--sage-light)', border: '1px solid var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                </div>
              </div>
              <div style={{fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)'}}>Remote Wizard of Oz usability testing</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 300}}>Designed and ran a new remote WoZ protocol using Zoom and Adobe XD. 6 sessions with real users testing voice ordering tasks and conversation flows.</div>
            </div>

          </div>
        </div>

        <hr className="cs-divider" />

        {/* WOZ DIAGRAM */}
        <div className="cs-section">
          <p className="cs-section-label">Testing protocol</p>
          <h2 className="cs-section-title">A new way to test voice remotely</h2>
          <p>With in-person testing off the table, I designed a remote Wizard of Oz protocol that let us simulate a voice experience over Zoom. The researcher controls the prototype responses in real time while the participant speaks naturally, creating the illusion of a live voice system.</p>

          <div style={{marginTop: '1.75rem', overflowX: 'auto'}}>
            <div className="woz">
              <div className="woz-row">
                <div className="woz-node">
                  <div className="woz-circle" style={{background: '#F9F0F2', border: '1.5px solid #A85470'}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A85470" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div className="woz-label">Participant</div>
                  <div className="woz-sub">Speaks naturally via Zoom</div>
                </div>
                <div className="woz-arrow">
                  <svg viewBox="0 0 24 16" fill="none"><path d="M2 8h18M14 2l6 6-6 6" stroke="#A8899A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="woz-node">
                  <div className="woz-circle" style={{background: '#EBF3EF', border: '1.5px solid #366B58'}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#366B58" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  </div>
                  <div className="woz-label">Screen share</div>
                  <div className="woz-sub">Prototype visible to participant</div>
                </div>
                <div className="woz-arrow">
                  <svg viewBox="0 0 24 16" fill="none"><path d="M2 8h18M14 2l6 6-6 6" stroke="#A8899A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="woz-node">
                  <div className="woz-circle" style={{background: '#F9F0F2', border: '1.5px solid #A85470'}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#A85470" strokeWidth="1.8"><rect x="1" y="5" width="22" height="14" rx="2"/><polyline points="1 10 12 10 23 10"/></svg>
                  </div>
                  <div className="woz-label">Researcher keyboard</div>
                  <div className="woz-sub">Controls prototype responses in real time</div>
                </div>
                <div className="woz-arrow">
                  <svg viewBox="0 0 24 16" fill="none"><path d="M2 8h18M14 2l6 6-6 6" stroke="#A8899A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="woz-node">
                  <div className="woz-circle" style={{background: '#EBF3EF', border: '1.5px solid #366B58'}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#366B58" strokeWidth="1.8"><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                  </div>
                  <div className="woz-label">Adobe XD prototype</div>
                  <div className="woz-sub">Simulates live voice responses</div>
                </div>
              </div>

              <div className="woz-details">
                <div className="woz-card">
                  <div className="woz-card-label">Tool</div>
                  <div className="woz-card-text">Zoom for remote session, screen sharing, and recording</div>
                </div>
                <div className="woz-card">
                  <div className="woz-card-label">Prototype</div>
                  <div className="woz-card-text">Adobe XD conversational flow, keyboard-controlled by researcher</div>
                </div>
                <div className="woz-card">
                  <div className="woz-card-label">Sessions</div>
                  <div className="woz-card-text">6 remote sessions with real OEM users</div>
                </div>
                <div className="woz-card">
                  <div className="woz-card-label">Outcome</div>
                  <div className="woz-card-text">Protocol approved for future voice testing at Telenav</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* INSIGHTS */}
        <div className="cs-section">
          <p className="cs-section-label">Key insights</p>
          <h2 className="cs-section-title">Three usability problems emerged consistently</h2>
          <p style={{fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic'}}>Due to NDA restrictions, specifics are redacted. These are high-level findings.</p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1.5rem 0'}}>
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.5rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 01</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35}}>Users forget what they ordered</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>A voice-only order summary increases cognitive load. Users need a quick visual reference to recall items without being distracted from the road.</div>
            </div>
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.5rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 02</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35}}>Visual system status cues don&apos;t work while driving</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>Users can&apos;t look at the screen to know when the system is listening. Without clear audio cues, they talk over the system or miss their window to speak.</div>
            </div>
            <div style={{background: '#fff', border: '1px solid rgba(168,84,112,0.15)', borderTop: '3px solid var(--accent)', borderRadius: '4px', padding: '1.5rem'}}>
              <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.75rem'}}>Insight 03</div>
              <div style={{fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.35}}>Unfamiliar menus make voice ordering unusable</div>
              <div style={{fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300}}>A heavily voice-driven UI assumes users know the menu. For infrequent customers, not knowing item names makes the system impossible to use without visual support.</div>
            </div>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* IMPACT */}
        <div className="cs-section">
          <p className="cs-section-label">Impact</p>
          <h2 className="cs-section-title">Research informed design and unlocked a new testing approach</h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', margin: '1.5rem 0'}}>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem'}}>New protocol</div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>Remote Wizard of Oz testing approved</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>The remote testing protocol developed for this study was formally approved, enabling lean iterative voice testing for future conversational flow work.</div>
            </div>
            <div style={{background: '#F9F0F2', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem'}}>Design changes</div>
              <div style={{fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem'}}>Findings directly informed the next design sprint</div>
              <div style={{fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.6}}>Insights on cognitive load, audio cues, and menu familiarity shaped changes to the conversation flow and visual display strategy.</div>
            </div>
          </div>

          <div style={{background: '#EBF3EF', borderRadius: '4px', padding: '1.25rem 1.5rem', marginTop: '0.5rem'}}>
            <div style={{fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '0.5rem'}}>A note</div>
            <div style={{fontSize: '0.85rem', color: '#1E3D2F', fontWeight: 300, lineHeight: 1.7}}>I left Telenav before the product reached full build-out. The work captured here reflects the research phase and its direct outputs. Future planned work included driving usability testing and distraction and cognitive load assessment using NHTSA recommended methods.</div>
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
