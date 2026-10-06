// ---------------------------------------------------------------------------
// SITE DATA
// Edit your details in one place. Anything marked TODO is a placeholder.
// ---------------------------------------------------------------------------

export const identity = {
  name: 'Cedi',
  // No surname was provided, so none is invented. Add one here if you want it
  // shown in the footer / metadata.
  fullName: 'Cedi', // TODO: e.g. 'Cedi Mensah' if you'd like a surname shown
  location: 'Ghana',
  role: 'Computer Science student & developer',
  tagline: 'I learn by building — and I build a lot.',
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const links = {
  // Derived from the confirmed BLOCKOUT repository URL.
  github: 'https://github.com/Cediborn',
  // TODO: add your email here to enable the email button, e.g. 'cedi@example.com'
  email: '',
}

export const education = {
  institution: 'University of Ghana',
  degree: 'BSc Computer Science',
  level: 'Level 100',
  focus:
    'Computer Science fundamentals, programming, mathematics, statistics and software development.',
}

export const skills = [
  {
    title: 'Development',
    items: ['HTML', 'CSS', 'JavaScript', 'C++', 'Git', 'GitHub'],
  },
  {
    title: 'Web',
    items: [
      'Responsive design',
      'Progressive Web Apps',
      'Browser-based applications',
      'UI development',
    ],
  },
  {
    title: 'Exploring',
    items: [
      'AI-assisted development',
      'Game development',
      '3D web experiences',
      'Interactive systems',
    ],
  },
]

export const learning = [
  'Computer Science fundamentals',
  'Algorithms & problem solving',
  'Web development',
  'Game development',
  'Software engineering',
  'AI-assisted development',
]

export const philosophy = [
  {
    title: 'Build',
    body: 'Ideas only become useful when they turn into working software. So I finish things.',
  },
  {
    title: 'Experiment',
    body: 'Not everything needs to become a startup. Some projects exist purely to answer a question.',
  },
  {
    title: 'Improve',
    body: 'Build, test, break, fix, repeat. Every project is a little less broken than the last one.',
  },
]
