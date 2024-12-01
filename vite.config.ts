import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': resolve('./src/app'),
      '@pages': resolve('./src/pages'),
      '@widgets': resolve('./src/widgets'),
      '@features': resolve('./src/features'),
      '@entities': resolve('./src/entities'),
      '@shared': resolve('./src/shared'),
    },
  },
});
