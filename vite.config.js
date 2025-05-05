import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  server: {
    allowedHosts: ['https://9e4f-2401-4900-3681-e800-f8de-22c8-1652-5886.ngrok-free.app'],
  },
});
