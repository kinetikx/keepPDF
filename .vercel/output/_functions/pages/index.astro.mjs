import { c as createAstro, a as createComponent } from '../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://keeppdf.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguage = Astro2.request.headers.get("accept-language") || "";
  const supportedLocales = ["en", "tr", "sq"];
  function getPreferredLocale(header) {
    const languages = header.split(",").map((lang) => {
      const [code, quality] = lang.trim().split(";q=");
      return { code: code.split("-")[0].toLowerCase(), quality: quality ? parseFloat(quality) : 1 };
    }).sort((a, b) => b.quality - a.quality);
    for (const lang of languages) {
      if (supportedLocales.includes(lang.code)) {
        return lang.code;
      }
    }
    return "en";
  }
  const locale = getPreferredLocale(acceptLanguage);
  return Astro2.redirect(`/${locale}`);
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
