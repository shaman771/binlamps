import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/

// debug env var reference on build stage
console.dir(process);
console.log(process.NODE_ENV);

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
