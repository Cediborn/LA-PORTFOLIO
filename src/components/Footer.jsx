import { identity, links } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">CEDI</span>
          <p>Computer Science student &amp; developer from Ghana.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href={links.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} {identity.name}. Built by hand — no template.
        </small>
      </div>
    </footer>
  )
}
