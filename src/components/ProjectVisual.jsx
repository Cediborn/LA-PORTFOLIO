/**
 * Project-specific visual placeholders.
 * Each returns an inline SVG keyed off `project.visual` — no stock imagery,
 * no external requests. Add a new key and it shows up automatically.
 */
const visuals = {
  pitch: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Stylised street football pitch">
      <rect width="320" height="180" fill="#0E1410" />
      <g stroke="#1E3A28" strokeWidth="1.5" fill="none">
        <rect x="14" y="14" width="292" height="152" />
        <line x1="160" y1="14" x2="160" y2="166" />
        <circle cx="160" cy="90" r="34" />
        <rect x="14" y="52" width="42" height="76" />
        <rect x="264" y="52" width="42" height="76" />
      </g>
      <circle cx="160" cy="90" r="4" fill="#E7A63F" />
      <g fill="#E7A63F" opacity="0.9">
        <circle cx="106" cy="62" r="5" />
        <circle cx="122" cy="120" r="5" />
        <circle cx="212" cy="74" r="5" />
      </g>
      <g fill="#2F6B45" opacity="0.75">
        <circle cx="74" cy="98" r="5" />
        <circle cx="238" cy="126" r="5" />
        <circle cx="190" cy="40" r="5" />
      </g>
    </svg>
  ),
  ledger: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Abstract budget ledger">
      <rect width="320" height="180" fill="#12100C" />
      <g stroke="#3A3122" strokeWidth="1.5">
        <line x1="24" y1="46" x2="296" y2="46" />
        <line x1="24" y1="86" x2="296" y2="86" />
        <line x1="24" y1="126" x2="296" y2="126" />
      </g>
      <rect x="24" y="54" width="120" height="14" fill="#E7A63F" opacity="0.85" />
      <rect x="24" y="94" width="184" height="14" fill="#5A4A2C" />
      <rect x="24" y="134" width="76" height="14" fill="#5A4A2C" opacity="0.6" />
      <text x="240" y="66" fill="#E7A63F" fontFamily="monospace" fontSize="14">
        GH₵
      </text>
      <rect x="24" y="152" width="272" height="2" fill="#3A3122" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Three companion characters">
      <rect width="320" height="180" fill="#0F1014" />
      <g>
        <circle cx="86" cy="96" r="40" fill="#1A1D26" stroke="#2C3140" strokeWidth="1.5" />
        <circle cx="86" cy="86" r="5" fill="#E7A63F" />
        <path d="M72 106q14 12 28 0" stroke="#E7A63F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="176" cy="96" r="52" fill="#161A22" stroke="#2C3140" strokeWidth="1.5" />
        <circle cx="164" cy="86" r="5" fill="#E7A63F" />
        <circle cx="190" cy="86" r="5" fill="#E7A63F" />
        <path d="M162 110q14 10 28 0" stroke="#E7A63F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="264" cy="96" r="34" fill="#1A1D26" stroke="#2C3140" strokeWidth="1.5" />
        <circle cx="264" cy="88" r="4.5" fill="#E7A63F" />
        <path d="M252 106q12 10 24 0" stroke="#E7A63F" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <text x="24" y="164" fill="#5D6272" fontFamily="monospace" fontSize="12" letterSpacing="2">
        SORA · KODA · ZIGGY
      </text>
    </svg>
  ),
  radius: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Map radius search">
      <rect width="320" height="180" fill="#0C1114" />
      <g stroke="#1B2A31" strokeWidth="1">
        <path d="M0 45h320M0 90h320M0 135h320M80 0v180M160 0v180M240 0v180" />
      </g>
      <circle cx="160" cy="90" r="62" fill="#E7A63F" opacity="0.08" stroke="#E7A63F" strokeWidth="1.5" strokeDasharray="5 5" />
      <circle cx="160" cy="90" r="6" fill="#E7A63F" />
      <g fill="#7C8794">
        <circle cx="124" cy="66" r="4" />
        <circle cx="204" cy="72" r="4" />
        <circle cx="186" cy="128" r="4" />
        <circle cx="112" cy="118" r="4" />
      </g>
      <text x="24" y="164" fill="#5D6272" fontFamily="monospace" fontSize="12" letterSpacing="2">
        DISTANCE · BUDGET · RATING
      </text>
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Lightweight static app grid">
      <rect width="320" height="180" fill="#0E0E11" />
      <g stroke="#24242A" strokeWidth="1.5" fill="none">
        {Array.from({ length: 18 }, (_, i) => (
          <rect
            key={i}
            x={24 + (i % 6) * 46}
            y={30 + Math.floor(i / 6) * 44}
            width="34"
            height="34"
          />
        ))}
      </g>
      <rect x="116" y="74" width="34" height="34" fill="#E7A63F" opacity="0.9" />
      <rect x="208" y="118" width="34" height="34" fill="#E7A63F" opacity="0.35" />
      <text x="24" y="164" fill="#5D6272" fontFamily="monospace" fontSize="12" letterSpacing="2">
        VANILLA JS · PWA · 0 BACKEND
      </text>
    </svg>
  ),
  council: (
    <svg viewBox="0 0 320 180" role="img" aria-label="Multiple perspectives around one question">
      <rect width="320" height="180" fill="#101013" />
      <g stroke="#2E2E36" strokeWidth="1.5">
        <line x1="160" y1="90" x2="66" y2="46" />
        <line x1="160" y1="90" x2="254" y2="46" />
        <line x1="160" y1="90" x2="66" y2="140" />
        <line x1="160" y1="90" x2="254" y2="140" />
      </g>
      <circle cx="160" cy="90" r="26" fill="#17171C" stroke="#E7A63F" strokeWidth="2" />
      <circle cx="66" cy="46" r="14" fill="#1C1C22" stroke="#3A3A44" strokeWidth="1.5" />
      <circle cx="254" cy="46" r="14" fill="#1C1C22" stroke="#3A3A44" strokeWidth="1.5" />
      <circle cx="66" cy="140" r="14" fill="#1C1C22" stroke="#3A3A44" strokeWidth="1.5" />
      <circle cx="254" cy="140" r="14" fill="#1C1C22" stroke="#3A3A44" strokeWidth="1.5" />
      <text x="24" y="168" fill="#5D6272" fontFamily="monospace" fontSize="12" letterSpacing="2">
        ONE QUESTION · FOUR ANGLES
      </text>
    </svg>
  ),
}

export default function ProjectVisual({ visual }) {
  return <div className="project-visual">{visuals[visual] ?? visuals.grid}</div>
}
