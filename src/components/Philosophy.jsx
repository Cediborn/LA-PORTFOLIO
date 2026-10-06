import { philosophy } from '../data/site.js'

export default function Philosophy() {
  return (
    <section className="section section-alt" aria-labelledby="philosophy-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-index">04</span>
          <h2 id="philosophy-heading">How I work</h2>
        </div>

        <div className="philosophy-grid">
          {philosophy.map((p, i) => (
            <article key={p.title} data-reveal style={{ '--delay': `${i * 70}ms` }}>
              <span className="phil-index" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
