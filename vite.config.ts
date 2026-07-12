import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base must match your GitHub repo name for project pages
// (https://<username>.github.io/<repo-name>/). Change "portfolio-v5" below
// if you rename the repo, or set it to "/" for a user/org page (a repo
// literally named <username>.github.io) or a custom domain.
export default defineConfig({
  base: '/portfolio-v5/',
  plugins: [react(), tailwindcss()],
})
