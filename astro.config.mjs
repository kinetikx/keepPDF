import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// All supported locales — keep in sync with src/i18n/dictionary.js languageRegistry
const allLocales = ['en', 'tr', 'sq', 'et', 'lv'];
const site = 'https://keep-pdf.online';

// We no longer need customPages since Astro automatically detects all static routes in src/pages.

export default defineConfig({
    site,
    trailingSlash: 'never',
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

                // Exclude root URL redirect since prefixDefaultLocale is true.
                // Google Bot throws a "Redirect error" if a redirect is in the sitemap.
                if (item.url === site + '/') {
                    return undefined;
                }

                return item;
            }
        })
    ],
    vite: {
        plugins: [tailwindcss()],
        build: {
            chunkSizeWarningLimit: 1200,
            modulePreload: {
                resolveDependencies(url, deps) {
                    return deps.filter(dep => !dep.includes('pdf-lib') && !dep.includes('docx') && !dep.includes('mammoth') && !dep.includes('pdfjs-dist') && !dep.includes('html2pdf'));
                }
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules/pdf-lib')) {
                            return 'pdf-lib';
                        }
                        if (id.includes('node_modules/docx')) {
                            return 'docx';
                        }
                        if (id.includes('node_modules/mammoth')) {
                            return 'mammoth';
                        }
                        if (id.includes('node_modules/html2pdf.js')) {
                            return 'html2pdf';
                        }
                        if (id.includes('node_modules/pdfjs-dist')) {
                            return 'pdfjs-dist';
                        }
                    },
                },
            },
        },
    },
    i18n: {
        defaultLocale: 'en',
        locales: allLocales,
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
