import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works under a GitHub Pages project path
// (jcuadradoh2.github.io/portfolio/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
