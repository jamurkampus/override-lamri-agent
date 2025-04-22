import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// FINAL OVERRIDE FIX: path relatif agar SPA route tampil di Vercel
export default defineConfig({
  plugins: [react()],
  base: './', // INI PENTING agar semua path tidak error 404
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
})
