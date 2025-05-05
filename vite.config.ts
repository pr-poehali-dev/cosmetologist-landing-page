import { defineConfig } from 'vite'; import react from '@vitejs/plugin-react'; import { fileURLToPath } from 'url'; import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      clientPort: 443, // используем HTTPS порт для WebSocket
      host: 'preview--cosmetologist-landing-page.poehali.dev', // используем домен превью вместо localhost
      protocol: 'wss', // используем защищенный WebSocket протокол
      overlay: false // Disables the error overlay if you only want console errors
    }
  },
});