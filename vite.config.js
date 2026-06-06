import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
  },
  optimizeDeps: {
    exclude: ['assets/js/script.js'],
  },
  plugins: [
    {
      name: 'legacy-script-bypass',
      enforce: 'pre',
      async load(id) {
        if (id.includes('assets/js/script.js')) {
          // Completely take over loading of this classic script file.
          // Return the raw source so Vite never runs import-analysis on it.
          const { readFile } = await import('node:fs/promises')
          const code = await readFile(id, 'utf-8')
          return code
        }
      },
    },
  ],
})
