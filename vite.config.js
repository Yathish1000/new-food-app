// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // or react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [vue()], // or [react()]
  server: {
    port: 3000, // custom dev server port
    open: true, // auto-open in browser
  },
  build: {
    outDir: 'dist', // output folder
    sourcemap: true, // generate source maps
  },
  resolve: {
    alias: {
      '@': '/src', // for easier imports
    },
  },
});
