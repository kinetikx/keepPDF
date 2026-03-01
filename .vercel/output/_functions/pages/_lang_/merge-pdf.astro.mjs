import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { M as MergeInterface } from '../../chunks/MergeInterface_C7SU_v_a.mjs';
import { H as HowToSection, U as UseCaseSection } from '../../chunks/UseCaseSection_B3koId8q.mjs';
export { renderers } from '../../renderers.mjs';

function MergeClient({ dict }) {
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-4", children: dict?.metadata?.merge?.h1 || dict?.tools?.merge?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-lg max-w-2xl mx-auto", children: dict?.tools?.merge?.description })
    ] }),
    /* @__PURE__ */ jsx(MergeInterface, { dict })
  ] }) });
}

const $$Astro = createAstro("https://keeppdf.com");
function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
const $$MergePdf = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MergePdf;
  const { lang } = Astro2.params;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.merge.title, "description": dict.metadata.merge.description }, { "cookie-banner": ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "MergeClient", MergeClient, { "client:load": true, "dict": dict, "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/MergeClient", "client:component-export": "default" })} ${renderComponent($$result2, "HowToSection", HowToSection, { "client:visible": true, "slug": "merge-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/HowToSection", "client:component-export": "default" })} ${renderComponent($$result2, "UseCaseSection", UseCaseSection, { "client:visible": true, "slug": "merge-pdf", "lang": lang, "client:component-hydration": "visible", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/tools/UseCaseSection", "client:component-export": "default" })}  `, "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/merge-pdf.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/merge-pdf.astro";
const $$url = "/[lang]/merge-pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MergePdf,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
