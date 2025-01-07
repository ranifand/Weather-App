import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,  // Ensures Vite only uses this port
    host: '0.0.0.0',  // Exposes the server to the network
  }
})
