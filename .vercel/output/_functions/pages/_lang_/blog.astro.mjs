import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_vUtwWiA7.mjs';
import { g as getDictionary, l as locales, N as Navbar, C as CookieBanner } from '../../chunks/CookieBanner_-MUnfjGM.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CnPX-Au0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://keeppdf.com");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  return locales.map((lang) => ({
    params: { lang },
    props: {
      posts: allPosts.filter((post) => post.id.startsWith(`${lang}/`)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const { posts } = Astro2.props;
  const dict = getDictionary(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang, "dict": dict, "title": dict.metadata.blog.title, "description": dict.metadata.blog.description }, { "cookie-banner": async ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative py-16 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden"> <div class="absolute inset-0 pointer-events-none overflow-hidden"> <div class="absolute -top-40 -right-40 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div> </div> <div class="container-custom text-center relative z-10"> <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"> ${dict.metadata.blog.h1} </h1> <p class="text-lg text-slate-500 max-w-2xl mx-auto"> ${dict.blog.description} </p> </div> </section>  <section class="py-16 bg-white"> <div class="container-custom max-w-5xl mx-auto"> ${posts.length === 0 ? renderTemplate`<div class="text-center py-20"> <div class="text-6xl mb-4">📝</div> <p class="text-slate-500 text-lg">${dict.blog.noPosts}</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const slug = post.id.replace(`${lang}/`, "");
    const readingTime = Math.ceil((typeof post.body === "string" ? post.body : "").split(/\s+/).length / 200);
    return renderTemplate`<a${addAttribute(`/${lang}/blog/${slug}`, "href")} class="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"> ${post.data.image ? renderTemplate`<div class="aspect-video bg-gradient-to-br from-indigo-100 to-indigo-50 overflow-hidden"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.style.display='none'"> </div>` : renderTemplate`<div class="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center"> <svg class="w-16 h-16 text-indigo-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"> <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path> </svg> </div>`} <div class="p-6 flex flex-col flex-grow"> <div class="flex items-center gap-3 mb-3"> <span class="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider"> ${dict.blog.categories?.[post.data.category] || post.data.category} </span> <span class="text-xs text-slate-400"> ${readingTime} ${dict.blog.minRead} </span> </div> <h2 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2"> ${post.data.title} </h2> <p class="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-grow"> ${post.data.description} </p> <div class="flex items-center justify-between"> <span class="text-xs text-slate-400"> ${post.data.date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", { year: "numeric", month: "long", day: "numeric" })} </span> <span class="text-sm font-medium text-brand-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"> ${dict.blog.readMore} <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </span> </div> </div> </a>`;
  })} </div>`} </div> </section>  `, "navbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
