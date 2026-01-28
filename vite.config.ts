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
    
    // CRITICAL: Add this to prevent Vite from including default favicon
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        // Don't hash the favicon file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'bluevision-circle.ico') {
            return 'bluevision-circle.ico'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  
  // Prevent Vite from serving default favicon
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
