import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    base: '/fadgram-ui-docs/', // Match your GitHub repo name
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer
            ],
        },
    },
});