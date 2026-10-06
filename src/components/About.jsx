import { education, identity } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-index">01</span>
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-main" data-reveal>
            <p className="about-lead">
              I&rsquo;m a first-year Computer Science student at the University of Ghana who spends a
              lot of time turning ideas into working software.
            </p>
            <p>
              Most of what I know came from building things I actually wanted to use: a football
              game that plays in the browser, a budgeting tool shaped around student life in Ghana, a
              discovery app that filters by what you can afford. I read enough documentation to get
              moving, then I start writing code and figure out the rest.
            </p>
            <p>
              Right now I&rsquo;m exploring web development, game development and AI-assisted
              development &mdash; mostly by shipping small, real things and paying attention to what
              breaks. I&rsquo;m early in this, and I&rsquo;m fine saying that. The point is that
              I&rsquo;m not only watching tutorials.
            </p>
          </div>

          <aside className="about-side" data-reveal style={{ '--delay': '80ms' }}>
            <div className="edu-card">
              <span className="edu-label">Education</span>
              <h3>{education.institution}</h3>
              <p className="edu-degree">{education.degree}</p>
              <p className="edu-level">{education.level}</p>
              <p className="edu-focus">{education.focus}</p>
            </div>

            <dl className="quick-facts">
              <div>
                <dt>Based in</dt>
                <dd>{identity.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Web · Games · AI-assisted dev</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Learn by shipping</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
