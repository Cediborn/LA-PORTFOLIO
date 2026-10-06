import { learning, skills } from '../data/site.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-index">03</span>
          <h2>Skills &amp; Learning</h2>
          <p className="section-note">
            Only what I actually use in projects. No 50-item technology wall.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              key={group.title}
              className="skill-group"
              data-reveal
              style={{ '--delay': `${i * 70}ms` }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="learning-block" data-reveal>
          <div className="learning-label">
            <span className="pulse" aria-hidden="true" />
            Currently learning
          </div>
          <ul className="learning-list">
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="learning-note">
            Early in the journey, but actively building the whole way through.
          </p>
        </div>
      </div>
    </section>
  )
}
