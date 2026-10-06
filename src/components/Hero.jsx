import { identity, links } from '../data/site.js'

const LOG = [
  { prompt: '~/cedi', cmd: 'whoami', out: 'cs student · univ. of ghana · level 100' },
  { prompt: '~/cedi', cmd: 'ls building/', out: 'blockout  balancio  bambi  locallens  atlas' },
  { prompt: '~/cedi', cmd: 'git status', out: 'shipping experiments. breaking things. fixing them.' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow-dot" aria-hidden="true" />
            Ghana • Computer Science • Builder
          </p>

          <h1 className="hero-title" data-reveal style={{ '--delay': '60ms' }}>
            I build things while figuring out <span className="hero-accent">what&rsquo;s possible.</span>
          </h1>

          <p className="hero-lede" data-reveal style={{ '--delay': '140ms' }}>
            I&rsquo;m {identity.name}, a Computer Science student at the University of Ghana building
            websites, software, games and experiments with modern development tools.
          </p>

          <div className="hero-actions" data-reveal style={{ '--delay': '220ms' }}>
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#about">
              About Me
            </a>
            <a
              className="hero-inline-link"
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hero-now" data-reveal style={{ '--delay': '300ms' }}>
            <span className="pulse" aria-hidden="true" />
            Currently: refining <strong>BLOCKOUT</strong> gameplay
          </p>
        </div>

        <div className="hero-visual" data-reveal style={{ '--delay': '180ms' }} aria-hidden="true">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="terminal-title">cedi — bash</span>
            </div>
            <div className="terminal-body">
              {LOG.map((line) => (
                <p key={line.cmd} className="terminal-line">
                  <span className="t-prompt">{line.prompt}</span>
                  <span className="t-cmd">{line.cmd}</span>
                  <span className="t-out">{line.out}</span>
                </p>
              ))}
              <p className="terminal-line">
                <span className="t-prompt">~/cedi</span>
                <span className="t-caret" />
              </p>
            </div>
          </div>
          <div className="hero-chips">
            <span>Web</span>
            <span>Games</span>
            <span>AI-assisted</span>
            <span>Experiments</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero-marquee" data-reveal>
          <span>Build</span>
          <span className="sep" aria-hidden="true">
            /
          </span>
          <span>Break</span>
          <span className="sep" aria-hidden="true">
            /
          </span>
          <span>Fix</span>
          <span className="sep" aria-hidden="true">
            /
          </span>
          <span>Repeat</span>
        </div>
      </div>
    </section>
  )
}
