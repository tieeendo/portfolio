import Link from 'next/link'

interface NavbarProps {
  variant?: 'home' | 'case-study'
  backHref?: string
}

export default function Navbar({ variant = 'home', backHref = '/#work' }: NavbarProps) {
  return (
    <nav className={variant === 'case-study' ? 'nav-wide' : ''}>
      <Link href="/" className="nav-logo"><span>TD</span></Link>
      {variant === 'home' ? (
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      ) : (
        <Link href={backHref} className="nav-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to portfolio
        </Link>
      )}
    </nav>
  )
}
