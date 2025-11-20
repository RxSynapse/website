import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import createSitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    createSitemap({
      hostname: 'https://rxsynapse.com',
      dynamicRoutes: ['/', '/flow', '/communication'],
    })
  ],
  cacheDir: '.vite',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
})
