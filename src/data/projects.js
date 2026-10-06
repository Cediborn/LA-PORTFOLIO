// ---------------------------------------------------------------------------
// PROJECT DATA
// Everything about the projects shown on the site lives here.
// To add a project: copy a block, fill it in, pick a `visual` key.
// To remove a link you don't have (e.g. no GitHub repo yet): set it to null —
// the button is hidden automatically.
// ---------------------------------------------------------------------------

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'game', label: 'Games' },
  { id: 'web', label: 'Web' },
  { id: 'experiment', label: 'Experiments' },
]

export const projects = [
  {
    id: 'blockout',
    name: 'BLOCKOUT',
    // status: one of 'Live' | 'Building' | 'Prototype' | 'Experiment'
    status: 'Live',
    category: 'game',
    summary:
      'A browser-based street football game built around fast matches, urban environments, AI-controlled players and mobile-friendly controls. I build the gameplay systems, environments, UI, animations and audio myself while experimenting with lightweight web tech.',
    tags: ['Browser game', 'Gameplay systems', 'Mobile controls'],
    liveUrl: 'https://blockout-mauve.vercel.app',
    githubUrl: 'https://github.com/Cediborn/BLOCKOUT',
    visual: 'pitch',
    featured: true,
  },
  {
    id: 'balancio',
    name: 'Balancio',
    status: 'Live',
    category: 'web',
    summary:
      'A budgeting concept aimed at Ghanaian students and young adults, built on the idea that a budget should fit a student\u2019s life instead of the other way round. A practical prototype for organising money without juggling spreadsheets.',
    tags: ['Personal finance', 'Student budgeting', 'Ghana-focused'],
    liveUrl: 'https://balancio-eta.vercel.app',
    githubUrl: null,
    visual: 'ledger',
  },
  {
    id: 'bambi',
    name: 'Bambi',
    status: 'Live',
    category: 'web',
    summary:
      'A teen growth and personal-development app with a companion feel. I\u2019m exploring how a product can feel supportive rather than clinical, with characters like Sora, Koda and Ziggy carrying the experience.',
    tags: ['Personal growth', 'Interactive experience', 'Characters'],
    liveUrl: 'https://freebuff-two.vercel.app',
    githubUrl: null,
    visual: 'growth',
  },
  {
    id: 'locallens',
    name: 'LocalLens',
    status: 'Live',
    category: 'web',
    summary:
      'A local discovery interface built around practical criteria — how far away a place is, what it costs and how it\u2019s rated. Less of a list of places, more of an answer to \u201cwhat actually fits right now?\u201d.',
    tags: ['Discovery tool', 'Practical criteria', 'Interface design'],
    liveUrl: 'https://locallens-tan.vercel.app',
    githubUrl: null,
    visual: 'radius',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    status: 'Experiment',
    category: 'experiment',
    summary:
      'A lightweight static progressive web app experiment. No backend, no heavy framework, no external AI — just vanilla JavaScript and a PWA approach, to see how far a simple static architecture can be pushed.',
    tags: ['PWA', 'Vanilla JavaScript', 'No backend'],
    liveUrl: 'https://oc-atlas-mauve.vercel.app',
    githubUrl: null,
    visual: 'grid',
  },
  {
    id: 'the-council',
    name: 'The Council',
    status: 'Experiment',
    category: 'experiment',
    summary:
      'A concept for AI decision support that hands you several perspectives instead of one agreeable answer. Still in progress — the interesting part is designing an interface for thinking, not just chatting.',
    tags: ['AI interaction', 'Decision support', 'Concept'],
    liveUrl: null,
    githubUrl: null,
    visual: 'council',
  },
]
