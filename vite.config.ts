import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true, // Usa o esbuild minifier por padrão (mais rápido)
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        },
        assetFileNames: 'static/[hash][extname]', // Renomeia assets com hash
        chunkFileNames: 'static/[hash].js',       // Renomeia chunks com hash
        entryFileNames: 'static/[hash].js'        // Renomeia entry points com hash
      }
    }
  }
});
