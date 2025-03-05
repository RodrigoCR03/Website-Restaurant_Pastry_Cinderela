import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Minifica e ofusca o código
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true // Remove debuggers
      },
      mangle: true, // Ofusca nomes de variáveis
      format: {
        comments: false // Remove comentários
      }
    },
    // Divide o código em chunks menores
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Outros chunks conforme necessário
        }
      }
    },
    // Gera sourcemaps apenas para produção
    sourcemap: false
  }
});
