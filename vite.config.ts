import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    server: {
        proxy:
            mode === 'development'
                ? {
                      '/api': {
                          target: 'http://localhost:3004',
                          changeOrigin: true,
                          rewrite: (path) => path.replace(/^\/api/, '/api'),
                      },
                  }
                : undefined,
    },
    build: {
        outDir: 'dist',
    },
}))
