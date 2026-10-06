import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects.js'
import ProjectVisual from './ProjectVisual.jsx'

const statusTone = {
  Live: 'live',
  Building: 'building',
  Prototype: 'prototype',
  Experiment: 'experiment',
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-index">02</span>
          <h2>Projects</h2>
          <p className="section-note">
            Things I&rsquo;ve actually built and can point you at. Not a wishlist.
          </p>
        </div>

        <div className="filter-bar" role="group" aria-label="Filter projects" data-reveal>
          {categories.map((c) => {
            const count =
              c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length
            const isActive = filter === c.id
            return (
              <button
                key={c.id}
                type="button"
                className={`filter-btn${isActive ? ' is-active' : ''}`}
                aria-pressed={isActive}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
                <span className="filter-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="project-grid">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className={`project-card${p.featured ? ' project-card--featured' : ''}`}
              data-reveal
              style={{ '--delay': `${Math.min(i, 4) * 60}ms` }}
            >
              <div className="project-media">
                <ProjectVisual visual={p.visual} />
                <span className={`status status-${statusTone[p.status] ?? 'experiment'}`}>
                  <span className="status-dot" aria-hidden="true" />
                  {p.status}
                </span>
              </div>

              <div className="project-body">
                <div className="project-title-row">
                  <h3>{p.name}</h3>
                  <span className="project-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="project-summary">{p.summary}</p>

                <ul className="tag-list">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {p.liveUrl ? (
                    <a
                      className="btn btn-primary btn-sm"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="btn btn-sm btn-disabled" title="Not public yet">
                      In progress
                    </span>
                  )}
                  {p.githubUrl && (
                    <a
                      className="btn btn-ghost btn-sm"
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && <p className="empty-note">Nothing in this category yet.</p>}
      </div>
    </section>
  )
}
