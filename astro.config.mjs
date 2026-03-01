import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://keeppdf.com',
    integrations: [
        react(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en',
                    tr: 'tr',
                    sq: 'sq',
                },
            },
        })
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr', 'sq'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
