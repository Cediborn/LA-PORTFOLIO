import { useEffect, useRef, useState } from 'react'
import { nav } from '../data/site.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      // Highlight the section currently occupying the top of the viewport.
      let current = nav[0].id
      for (const { id } of nav) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    // The desktop nav takes over above 860px — don't leave the page scroll-locked
    // if the viewport grows while the mobile menu is open.
    const onResize = () => {
      if (window.innerWidth >= 860) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={close} aria-label="Cedi — back to top">
          <span className="brand-mark" aria-hidden="true" />
          CEDI
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : ''}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn-ghost header-cta"
          href="https://github.com/Cediborn"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`nav-mobile${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.id} style={{ '--i': i }}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className={active === item.id ? 'is-active' : ''}
                >
                  <span className="nav-mobile-index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary nav-mobile-github"
            href="https://github.com/Cediborn"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
