import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { C as ComingSoon } from '../../chunks/ComingSoon_B4ohCCgc.mjs';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$SignPdf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignPdf;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.signPdf.title, "description": dict.metadata.signPdf.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ComingSoon", ComingSoon, { "client:load": true, "title": dict.tools.sign.title, "description": lang === "tr" ? "Elektronik imza \xF6zelli\u011Fi \xE7ok yak\u0131nda geliyor." : "Electronic signature feature coming very soon.", "lang": lang, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/ui/ComingSoon", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "sign-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "sign-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/sign-pdf.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/sign-pdf.astro";
const $$url = "/[lang]/sign-pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SignPdf,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
