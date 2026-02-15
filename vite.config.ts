import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Sangat penting untuk GitHub Pages agar file CSS/JS ditemukan
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});