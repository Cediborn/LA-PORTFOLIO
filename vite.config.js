import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple, dependency-light setup. No extra plugins needed for a static portfolio.
export default defineConfig({
  plugins: [react()],
  // Relative base so the same build works on a domain root and on a
  // sub-path (GitHub Pages serves this at /LA-PORTFOLIO/). In-page links
  // are hash anchors, so nothing here depends on an absolute path.
  base: './',
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
})
