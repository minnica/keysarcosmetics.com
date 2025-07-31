import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'node_modules/@web-components-features/feature-sales-management-crud/'),
    },
  },
  server: {
    fs: {
      allow: ['.', '..'],
    },
  },
});
