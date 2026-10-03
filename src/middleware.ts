import { defineMiddleware } from 'astro:middleware';

const supportedLocales = ['tr', 'sq', 'et', 'lv', 'id', 'pt', 'es', 'en'];

const countryToLocale: Record<string, string> = {
    'TR': 'tr',
    'AL': 'sq', 'XK': 'sq', 'MK': 'sq',
    'EE': 'et',
    'LV': 'lv',
    'ID': 'id',
    'BR': 'pt', 'PT': 'pt',
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es',
};

function parseAcceptLanguage(header: string | null): string | null {
    if (!header) return null;
    const langs = header.split(',').map(part => {
        const [lang] = part.trim().split(';');
        return lang.trim().toLowerCase().split('-')[0];
    });
    for (const lang of langs) {
        if (supportedLocales.includes(lang)) return lang;
    }
    return null;
}

export const onRequest = defineMiddleware(async (context, next) => {
    const { pathname } = context.url;

    // Only redirect the root path "/"
    if (pathname !== '/') {
        return next();
    }

    const request = context.request;

    // 1. Vercel Geo-IP (most reliable — runs at edge in production)
    const country = request.headers.get('x-vercel-ip-country');
    const geoLocale = country ? countryToLocale[country] : null;

    // 2. Browser Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    const browserLocale = parseAcceptLanguage(acceptLanguage);

    const locale = geoLocale || browserLocale || 'en';

    return Response.redirect(new URL(`/${locale}`, context.url), 302);
});
