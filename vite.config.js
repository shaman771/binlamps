import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.MODE === 'production' ? '/binlamps/' : '/',
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
