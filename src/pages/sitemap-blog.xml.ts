import type { APIRoute } from 'astro';

export const prerender = false;

const SITE = 'https://keep-pdf.online';

export const GET: APIRoute = async () => {
    // Fetch all published posts from Supabase via REST API
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://dywxmadfvkeunyvqxvbm.supabase.co';
    const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_snxiWLd5tm5yJ4TOZwEppQ_90Aow-tY';

    let posts: Array<{ lang: string; slug: string; updated_at: string; created_at: string }> = [];

    try {
        const res = await fetch(
            `${supabaseUrl}/rest/v1/blog_posts?is_published=eq.true&select=lang,slug,updated_at,created_at&order=created_at.desc`,
            {
                headers: {
                    apikey: supabaseKey,
                    Authorization: `Bearer ${supabaseKey}`,
                },
            }
        );
        if (res.ok) {
            posts = await res.json();
        }
    } catch (e) {
        console.error('Sitemap blog fetch error:', e);
    }

    const urls = posts
        .map((post) => {
            const lastmod = (post.updated_at || post.created_at || '').split('T')[0];
            return `
  <url>
    <loc>${SITE}/${post.lang}/blog/${post.slug}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        })
        .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
};
