import { c as createAstro, a as createComponent, d as renderTemplate, f as renderSlot, e as renderComponent, r as renderHead, u as unescapeHTML, g as renderScript, b as addAttribute } from './astro/server_DMm3Hxu5.mjs';
import 'piccolore';
/* empty css                          */
import { $ as $$Footer } from './CookieBanner_-MUnfjGM.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://keeppdf.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { lang, dict } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const cleanPath = currentPath.replace(new RegExp(`^/${lang}`), "") || "";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "KeepPDF",
      "image": "https://keeppdf.com/og-image.png",
      "description": dict.hero.description,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KeepPDF",
      "url": "https://keeppdf.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://keeppdf.com/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];
  const title = Astro2.props.title || dict.metadata.title;
  const description = Astro2.props.description || dict.metadata.description;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="keywords" content="PDF, merge, split, compress, convert, tools, online, free"><meta name="author" content="KeepPDF Team"><link rel="icon" href="/brand-logo.svg"><link rel="apple-touch-icon" href="/brand-logo.svg"><link rel="canonical"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="tr"', '><link rel="alternate" hreflang="sq"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="KeepPDF"><meta property="og:locale"', '><meta property="og:type" content="website"><meta property="og:image" content="https://keeppdf.com/og-image.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="https://keeppdf.com/og-image.png"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-VY5X32BG7G"><\/script>', '<!-- JSON-LD --><script type="application/ld+json">', "<\/script>", '</head> <body class="antialiased min-h-screen flex flex-col font-sans text-slate-900 bg-white"> ', ' <main class="flex-grow pt-20"> ', " </main> ", " ", " </body></html>"])), addAttribute(lang, "lang"), title, addAttribute(description, "content"), addAttribute(`https://keeppdf.com${currentPath}`, "href"), addAttribute(`https://keeppdf.com/en${cleanPath}`, "href"), addAttribute(`https://keeppdf.com/tr${cleanPath}`, "href"), addAttribute(`https://keeppdf.com/sq${cleanPath}`, "href"), addAttribute(`https://keeppdf.com/en${cleanPath}`, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://keeppdf.com/${lang}${cleanPath}`, "content"), addAttribute(lang === "tr" ? "tr_TR" : lang === "sq" ? "sq_AL" : "en_US", "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderScript($$result, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify(jsonLd)), renderHead(), renderSlot($$result, $$slots["navbar"]), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang, "dict": dict }), renderSlot($$result, $$slots["cookie-banner"]));
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
