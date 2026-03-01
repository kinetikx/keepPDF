import { a as createComponent, r as renderHead, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-2zp6q64z> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin - Translation Manager | KeepPDF</title><meta name="robots" content="noindex, nofollow"><link rel="icon" type="image/png" href="/icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-2zp6q64z> ${renderComponent($$result, "TranslationManager", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-2zp6q64z": true, "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/admin/TranslationManager", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/admin.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
