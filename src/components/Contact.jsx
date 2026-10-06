import { identity, links } from '../data/site.js'

const hasEmail = typeof links.email === 'string' && links.email.trim().length > 0

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-index">05</span>
          <h2>Let&rsquo;s build something.</h2>
        </div>

        <div className="contact-inner" data-reveal>
          <p className="contact-lede">
            Working on something, need a hand with a small build, or just want to compare notes on
            web and game development? I read everything that comes through.
          </p>

          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            {hasEmail ? (
              <a className="btn btn-ghost" href={`mailto:${links.email}`}>
                Email me
              </a>
            ) : (
              /* TODO: add your address to `links.email` in src/data/site.js
                 and this placeholder swaps itself for a real mailto link. */
              <span className="btn btn-ghost btn-disabled" title="Add your email in src/data/site.js">
                Email — add in site.js
              </span>
            )}
          </div>

          <p className="contact-meta">
            {identity.name} · {identity.location} · open to internships, collaborations and
            side projects.
          </p>
        </div>
      </div>
    </section>
  )
}
