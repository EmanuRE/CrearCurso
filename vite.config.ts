import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se configura el vite.config.ts con la API a donde voy a apuntar
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://test-deploy-12.onrender.com',// Direccion de la API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Se almacena como api/
      }
    }
  }
})
