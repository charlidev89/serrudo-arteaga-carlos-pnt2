import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: false, // Desactiva soporte para TypeScript
      },
    }),
  ],
});