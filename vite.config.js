import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Используем плагин react-swc
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/Vars.scss";` // Глобальный импорт переменных SCSS
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Абсолютный путь для импорта
    }
  }
});
