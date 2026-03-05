import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/
Disallow: /_astro/
Disallow: /*.json$

# Sitemap
Sitemap: ${new URL('sitemap-index.xml', 'https://keep-pdf.online').href}
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
