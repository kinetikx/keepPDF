import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// All supported locales — keep in sync with src/i18n/dictionary.js languageRegistry
const allLocales = ['en', 'tr', 'sq', 'et', 'lv'];
const site = 'https://keep-pdf.com';

// Tool slugs used in [lang]/[tool].astro pages
const toolSlugs = [
    'merge-pdf', 'split', 'compress', 'organize',
    'image-to-pdf', 'pdf-to-word', 'word-to-pdf', 'pdf-to-image',
    'edit-pdf', 'sign-pdf', 'pdf-to-excel', 'pdf-to-txt', 'ocr-pdf', 'blog'
];

// Build customPages dynamically for all locales + tools
const customPages = [
    ...allLocales.map(l => `${site}/${l}`),
    ...toolSlugs.flatMap(slug => allLocales.map(l => `${site}/${l}/${slug}`)),
    // Keyword landing pages
    `${site}/sq/bashko-pdf-falas`,
    `${site}/sq/pdf-bashko-online`,
    `${site}/sq/ndaj-pdf-falas-online`,
    `${site}/sq/kompriso-pdf-pa-regjistrim`,
    `${site}/sq/redakto-pdf-online-falas`,
    `${site}/et/uhenda-pdf-tasuta`,
    `${site}/et/tukkelda-pdf-tasuta`,
    `${site}/et/tihenda-pdf-tasuta`,
    `${site}/et/muuda-pdf-veebi-tasuta`,
    `${site}/lv/apvienot-pdf-bezmaksas`,
    `${site}/lv/sadalit-pdf-bezmaksas`,
    `${site}/lv/saspiest-pdf-bezmaksas`,
    `${site}/lv/rediget-pdf-tiesaiste`,
];

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
            customPages,
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
