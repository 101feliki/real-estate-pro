import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    
    // CRITICAL: Prevent Vite from including ANY default assets
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          // Prevent vite.svg from being included at all
          if (assetInfo.name === 'vite.svg') {
            // Return a dummy path that won't be used
            return 'assets/ignore-this.svg'
          }
          // Keep your favicon as-is without hashing
          if (assetInfo.name === 'bluevision-circle.ico') {
            return 'bluevision-circle.ico'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  
  server: {
    port: 3000,
  },
  
  preview: {
    port: 3000,
  },
  
  // Force clean builds
  optimizeDeps: {
    force: true
  }
})
