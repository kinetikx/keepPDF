import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
    site: 'https://keep-pdf.com',
    output: 'server',
    adapter: vercel(),
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
            customPages: [
                "https://keep-pdf.com/en",
                "https://keep-pdf.com/tr",
                "https://keep-pdf.com/sq",
                "https://keep-pdf.com/en/merge-pdf", "https://keep-pdf.com/tr/merge-pdf", "https://keep-pdf.com/sq/merge-pdf",
                "https://keep-pdf.com/en/split", "https://keep-pdf.com/tr/split", "https://keep-pdf.com/sq/split",
                "https://keep-pdf.com/en/compress", "https://keep-pdf.com/tr/compress", "https://keep-pdf.com/sq/compress",
                "https://keep-pdf.com/en/organize", "https://keep-pdf.com/tr/organize", "https://keep-pdf.com/sq/organize",
                "https://keep-pdf.com/en/image-to-pdf", "https://keep-pdf.com/tr/image-to-pdf", "https://keep-pdf.com/sq/image-to-pdf",
                "https://keep-pdf.com/en/pdf-to-word", "https://keep-pdf.com/tr/pdf-to-word", "https://keep-pdf.com/sq/pdf-to-word",
                "https://keep-pdf.com/en/word-to-pdf", "https://keep-pdf.com/tr/word-to-pdf", "https://keep-pdf.com/sq/word-to-pdf",
                "https://keep-pdf.com/en/pdf-to-image", "https://keep-pdf.com/tr/pdf-to-image", "https://keep-pdf.com/sq/pdf-to-image",
                "https://keep-pdf.com/en/edit-pdf", "https://keep-pdf.com/tr/edit-pdf", "https://keep-pdf.com/sq/edit-pdf",
                "https://keep-pdf.com/en/sign-pdf", "https://keep-pdf.com/tr/sign-pdf", "https://keep-pdf.com/sq/sign-pdf",
                "https://keep-pdf.com/en/pdf-to-excel", "https://keep-pdf.com/tr/pdf-to-excel", "https://keep-pdf.com/sq/pdf-to-excel",
                "https://keep-pdf.com/en/pdf-to-txt", "https://keep-pdf.com/tr/pdf-to-txt", "https://keep-pdf.com/sq/pdf-to-txt",
                "https://keep-pdf.com/en/ocr-pdf", "https://keep-pdf.com/tr/ocr-pdf", "https://keep-pdf.com/sq/ocr-pdf",
                "https://keep-pdf.com/en/blog", "https://keep-pdf.com/tr/blog", "https://keep-pdf.com/sq/blog"
            ]
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
