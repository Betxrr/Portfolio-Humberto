// betxrr/portfolio-humberto/Portfolio-Humberto-f3da8cd617029d83a7a4d58120a3fa3127ecc393/Front-end/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Humberto/', // <-- Adicione esta linha
})