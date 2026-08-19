import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { label: t('nav.about'),      href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'),   href: '#projects' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'zhTW' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="navbar-inner">
        <a href="#about" className="navbar-logo" aria-label="Lucy Hsieh — back to top">
          Lucy Hsieh
          <span className="navbar-dot" aria-hidden="true" />
        </a>

        <nav id="main-nav" className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="mailto:njdhsieh@gmail.com" className="navbar-cta" onClick={() => setMenuOpen(false)} aria-label="Contact Lucy via email">
            {t('nav.contact')}
          </a>
          <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
            {i18n.language === 'en' ? '中文' : 'EN'}
          </button>
        </nav>

        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
