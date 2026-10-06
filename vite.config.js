import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simple, dependency-light setup. No extra plugins needed for a static portfolio.
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
  },
})
