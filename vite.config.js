import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// Read and parse pages.json
const pages = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'src/pages.json'), 'utf-8'));

// Generate input object dynamically
const input = {
  main: path.resolve(__dirname, 'index.html'),
  ...Object.fromEntries(
    pages.map(page => [page.id, path.resolve(__dirname, `pages/${page.url}`)])
  ),
};

export default defineConfig({
  base: '/fadgram-ui-docs/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input, // Use the dynamically generated input object
    },
  },
});