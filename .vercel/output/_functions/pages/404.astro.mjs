import { c as createAstro, a as createComponent, b as addAttribute, r as renderHead, d as renderTemplate } from '../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://keeppdf.com");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const acceptLanguage = Astro2.request.headers.get("accept-language") || "";
  const supportedLocales = ["en", "tr", "sq"];
  function getPreferredLocale(header) {
    const languages = header.split(",").map((lang2) => {
      const [code, quality] = lang2.trim().split(";q=");
      return { code: code.split("-")[0].toLowerCase(), quality: quality ? parseFloat(quality) : 1 };
    }).sort((a, b) => b.quality - a.quality);
    for (const lang2 of languages) {
      if (supportedLocales.includes(lang2.code)) {
        return lang2.code;
      }
    }
    return "en";
  }
  const lang = getPreferredLocale(acceptLanguage);
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth" data-astro-cid-zetdm5md> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Page Not Found | KeepPDF</title><link rel="icon" type="image/png" href="/icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <div class="icon-wrapper" data-astro-cid-zetdm5md> <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" data-astro-cid-zetdm5md></path> <path d="M14 2v4a2 2 0 0 0 2 2h4" data-astro-cid-zetdm5md></path> <path d="m9.5 12.5 5 5" data-astro-cid-zetdm5md></path> <path d="m14.5 12.5-5 5" data-astro-cid-zetdm5md></path> </svg> </div> <div class="code" data-astro-cid-zetdm5md>404</div> <h1 data-astro-cid-zetdm5md>${lang === "tr" ? "Sayfa Bulunamad\u0131" : lang === "sq" ? "Faqja nuk u gjet" : "Page Not Found"}</h1> <p data-astro-cid-zetdm5md>${lang === "tr" ? "Arad\u0131\u011F\u0131n\u0131z sayfa mevcut de\u011Fil veya ta\u015F\u0131nm\u0131\u015F. Sizi PDF ara\xE7lar\u0131m\u0131za geri g\xF6t\xFCrelim." : lang === "sq" ? "Faqja q\xEB po k\xEBrkoni nuk ekziston ose \xEBsht\xEB zhvendosur. Le t'ju kthejm\xEB te mjetet PDF." : "The page you're looking for doesn't exist or has been moved. Let's get you back to the PDF tools."}</p> <a${addAttribute(`/${lang}`, "href")} class="btn" data-astro-cid-zetdm5md> <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path d="m12 19-7-7 7-7" data-astro-cid-zetdm5md></path><path d="M19 12H5" data-astro-cid-zetdm5md></path> </svg> ${lang === "tr" ? "Ana Sayfaya D\xF6n" : lang === "sq" ? "Kthehu te faqja kryesore" : "Back to Home"} </a> </div> </body></html>`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
