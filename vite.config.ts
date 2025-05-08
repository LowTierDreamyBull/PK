import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.tsx',  // اطمینان حاصل کنید که مسیر صحیح است
    },
  },
});
