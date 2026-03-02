import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// All supported locales — keep in sync with src/i18n/dictionary.js languageRegistry
const allLocales = ['en', 'tr', 'sq', 'et', 'lv'];
const site = 'https://keep-pdf.vercel.app';

// We no longer need customPages since Astro automatically detects all static routes in src/pages.

export default defineConfig({
    site,
    output: 'server',
    adapter: vercel(),
    integrations: [
        react(),
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: Object.fromEntries(allLocales.map(l => [l, l])),
            },
            filter: (page) => !page.includes('/admin'),
            serialize(item) {
                // Ensure sitemap URLs exactly match our canonical URLs (no trailing slash)
                if (item.url !== site + '/' && item.url.endsWith('/')) {
                    item.url = item.url.slice(0, -1);
                }
                return item;
            }
        })
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        defaultLocale: 'en',
        locales: allLocales,
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
