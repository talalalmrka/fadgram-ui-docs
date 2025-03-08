import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/fadgram-ui-docs/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
        input: {
            main: path.resolve(__dirname, 'index.html'),
            alerts: path.resolve(__dirname, 'pages/alerts.html'),
            background: path.resolve(__dirname, 'pages/background.html'),
            badges: path.resolve(__dirname, 'pages/badges.html'),
            buttons: path.resolve(__dirname, 'pages/buttons.html'),
            cards: path.resolve(__dirname, 'pages/cards.html'),
            classes: path.resolve(__dirname, 'pages/classes.html'),
            colors: path.resolve(__dirname, 'pages/colors.html'),
            dropdowns: path.resolve(__dirname, 'pages/dropdowns.html'),
            forms: path.resolve(__dirname, 'pages/forms.html'),
            icons: path.resolve(__dirname, 'pages/icons.html'),
            install: path.resolve(__dirname, 'pages/install.html'),
            listgroup: path.resolve(__dirname, 'pages/listgroup.html'),
            modals: path.resolve(__dirname, 'pages/modals.html'),
            navbars: path.resolve(__dirname, 'pages/navbars.html'),
            offcanvas: path.resolve(__dirname, 'pages/offcanvas.html'),
            progressbars: path.resolve(__dirname, 'pages/progressbars.html'),
            ratingbars: path.resolve(__dirname, 'pages/ratingbars.html'),
            shadows: path.resolve(__dirname, 'pages/shadows.html'),
            tables: path.resolve(__dirname, 'pages/tables.html'),
            tabs: path.resolve(__dirname, 'pages/tabs.html'),
            toasts: path.resolve(__dirname, 'pages/toasts.html'),
            tooltips: path.resolve(__dirname, 'pages/tooltips.html'),
            typography: path.resolve(__dirname, 'pages/typography.html'),
            
        },
    },
},
})