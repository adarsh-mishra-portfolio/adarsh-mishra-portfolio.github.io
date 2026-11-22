import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const getBasePath = (): string => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }
  if (process.env.GITHUB_ACTIONS === 'true') {
    return '/adarsh-mishra-portfolio/'
  }
  return process.env.NODE_ENV === 'production' ? '/adarsh-mishra-portfolio/' : '/'
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
  },
})
