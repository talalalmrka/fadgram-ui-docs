import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import path from 'path'

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
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                install: path.resolve(__dirname, 'install.html'),
                typography: path.resolve(__dirname, 'typography.html'),
                button: path.resolve(__dirname, 'button.html'),
                dropdown: path.resolve(__dirname, 'dropdown.html'),
                form: path.resolve(__dirname, 'form.html'),
                card: path.resolve(__dirname, 'card.html'),
                icon: path.resolve(__dirname, 'icon.html'),
                navbar: path.resolve(__dirname, 'navbar.html'),
                badge: path.resolve(__dirname, 'badge.html'),
                progress: path.resolve(__dirname, 'progress.html'),
                drawer: path.resolve(__dirname, 'drawer.html'),
                alert: path.resolve(__dirname, 'alert.html'),
                table: path.resolve(__dirname, 'table.html'),
            },
        },
    },
});