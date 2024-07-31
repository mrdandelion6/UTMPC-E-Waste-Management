import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/UTMPC-E-Waste-Management/",
  plugins: [react()],
})
