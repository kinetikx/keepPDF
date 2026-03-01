import { c as createAstro, a as createComponent, d as renderTemplate, f as renderSlot, e as renderComponent, r as renderHead, u as unescapeHTML, g as renderScript, b as addAttribute, m as maybeRenderHead } from '../../../chunks/astro/server_DMm3Hxu5.mjs';
import 'piccolore';
/* empty css                                        */
import { $ as $$Footer, l as locales, N as Navbar, C as CookieBanner, g as getDictionary } from '../../../chunks/CookieBanner_-MUnfjGM.mjs';
import { r as renderEntry, g as getCollection } from '../../../chunks/_astro_content_CnPX-Au0.mjs';
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://keeppdf.com");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { lang, dict, post, translations } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.data.title,
    "description": post.data.description,
    "datePublished": post.data.date.toISOString(),
    "author": {
      "@type": "Person",
      "name": post.data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "KeepPDF",
      "logo": {
        "@type": "ImageObject",
        "url": "https://keeppdf.com/brand-logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://keeppdf.com${currentPath}`
    }
  };
  if (post.data.image) {
    articleJsonLd.image = `https://keeppdf.com${post.data.image}`;
  }
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><link rel="icon" href="/brand-logo.svg"><link rel="canonical"', "><!-- hreflang for translations -->", '<link rel="alternate"', "", '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="KeepPDF"><meta property="og:locale"', '><meta property="og:type" content="article">', '<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', ">", '<!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-VY5X32BG7G"><\/script>', '<!-- JSON-LD --><script type="application/ld+json">', "<\/script>", '</head> <body class="antialiased min-h-screen flex flex-col font-sans text-slate-900 bg-white"> ', ' <main class="flex-grow pt-20"> ', " </main> ", " ", " </body></html>"])), addAttribute(lang, "lang"), post.data.title, addAttribute(post.data.description, "content"), addAttribute(post.data.tags?.join(", "), "content"), addAttribute(post.data.author, "content"), addAttribute(`https://keeppdf.com${currentPath}`, "href"), translations && translations.map((t) => renderTemplate`<link rel="alternate"${addAttribute(t.lang, "hreflang")}${addAttribute(`https://keeppdf.com/${t.lang}/blog/${t.slug}`, "href")}>`), addAttribute(lang, "hreflang"), addAttribute(`https://keeppdf.com${currentPath}`, "href"), addAttribute(post.data.title, "content"), addAttribute(post.data.description, "content"), addAttribute(`https://keeppdf.com${currentPath}`, "content"), addAttribute(lang === "tr" ? "tr_TR" : "en_US", "content"), post.data.image && renderTemplate`<meta property="og:image"${addAttribute(`https://keeppdf.com${post.data.image}`, "content")}>`, addAttribute(post.data.title, "content"), addAttribute(post.data.description, "content"), post.data.image && renderTemplate`<meta name="twitter:image"${addAttribute(`https://keeppdf.com${post.data.image}`, "content")}>`, renderScript($$result, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/layouts/BlogPostLayout.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify(articleJsonLd)), renderHead(), renderSlot($$result, $$slots["navbar"]), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "lang": lang, "dict": dict }), renderSlot($$result, $$slots["cookie-banner"]));
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/layouts/BlogPostLayout.astro", void 0);

const $$Astro = createAstro("https://keeppdf.com");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const paths = [];
  for (const lang of locales) {
    const langPosts = allPosts.filter((post) => post.id.startsWith(`${lang}/`));
    for (const post of langPosts) {
      const slug = post.id.replace(`${lang}/`, "");
      let translations = [];
      if (post.data.translationKey) {
        const translatedPosts = allPosts.filter(
          (p) => p.data.translationKey === post.data.translationKey && p.id !== post.id
        );
        translations = translatedPosts.map((p) => {
          const tLang = p.id.split("/")[0];
          const tSlug = p.id.replace(`${tLang}/`, "");
          return { lang: tLang, slug: tSlug };
        });
      }
      paths.push({
        params: { lang, slug },
        props: { post, translations, allPosts: langPosts }
      });
    }
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { lang } = Astro2.params;
  const { post, translations, allPosts } = Astro2.props;
  const dict = getDictionary(lang);
  const { Content } = await renderEntry(post);
  const bodyText = typeof post.body === "string" ? post.body : "";
  const readingTime = Math.ceil(bodyText.split(/\s+/).length / 200);
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).filter((p) => p.data.category === post.data.category || p.data.tags?.some((t) => post.data.tags?.includes(t))).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "lang": lang, "dict": dict, "post": post, "translations": translations }, { "cookie-banner": async ($$result2) => renderTemplate`${renderComponent($$result2, "CookieBanner", CookieBanner, { "client:load": true, "dict": dict, "slot": "cookie-banner", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/CookieBanner", "client:component-export": "default" })}`, "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="py-12"> <div class="container-custom max-w-3xl mx-auto"> <!-- Breadcrumb --> <nav class="mb-8 text-sm"> <ol class="flex items-center gap-2 text-slate-400"> <li><a${addAttribute(`/${lang}`, "href")} class="hover:text-brand-600 transition-colors">KeepPDF</a></li> <li>/</li> <li><a${addAttribute(`/${lang}/blog`, "href")} class="hover:text-brand-600 transition-colors">${dict.blog.title}</a></li> <li>/</li> <li class="text-slate-600 font-medium truncate max-w-[200px]">${post.data.title}</li> </ol> </nav> <!-- Header --> <header class="mb-10"> <div class="flex items-center gap-3 mb-4"> <span class="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider"> ${dict.blog.categories?.[post.data.category] || post.data.category} </span> <span class="text-sm text-slate-400"> ${readingTime} ${dict.blog.minRead} </span> </div> <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4"> ${post.data.title} </h1> <p class="text-lg text-slate-500 leading-relaxed mb-6"> ${post.data.description} </p> <div class="flex items-center gap-4 text-sm text-slate-400 pb-6 border-b border-slate-100"> <span>${dict.blog.publishedOn} ${post.data.date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</span> <span>•</span> <span>${dict.blog.by} ${post.data.author}</span> </div> </header> ${post.data.image && renderTemplate`<div class="mb-10 rounded-2xl overflow-hidden shadow-lg"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="w-full aspect-video object-cover" onerror="this.parentElement.style.display='none'"> </div>`} <!-- Blog Content --> <div class="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-800
                prose-li:text-slate-600
                prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-blockquote:border-l-brand-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50 prose-td:border prose-td:border-slate-200 prose-th:border prose-th:border-slate-200 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2
            "> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Tags --> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="mt-10 pt-6 border-t border-slate-100"> <span class="text-sm font-semibold text-slate-500 mr-2">${dict.blog.tags}:</span> <div class="inline-flex flex-wrap gap-2 mt-2"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
#${tag} </span>`)} </div> </div>`} <!-- Translation Links --> ${translations && translations.length > 0 && renderTemplate`<div class="mt-6 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100"> <span class="text-sm text-indigo-600 font-medium">
🌐 ${lang === "tr" ? "Bu yaz\u0131 ba\u015Fka dillerde de mevcut:" : "This post is also available in:"} </span> <div class="flex gap-3 mt-2"> ${translations.map((t) => renderTemplate`<a${addAttribute(`/${t.lang}/blog/${t.slug}`, "href")} class="text-sm font-semibold text-indigo-600 hover:text-indigo-800 bg-white px-3 py-1.5 rounded-lg border border-indigo-200 hover:border-indigo-300 transition-colors"> ${t.lang === "en" ? "\u{1F1EC}\u{1F1E7} English" : t.lang === "tr" ? "\u{1F1F9}\u{1F1F7} T\xFCrk\xE7e" : t.lang.toUpperCase()} </a>`)} </div> </div>`} <!-- Back to Blog --> <div class="mt-10"> <a${addAttribute(`/${lang}/blog`, "href")} class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"> ${dict.blog.backToBlog} </a> </div> </div> </article>  ${relatedPosts.length > 0 && renderTemplate`<section class="py-16 bg-slate-50"> <div class="container-custom max-w-5xl mx-auto"> <h2 class="text-2xl font-bold text-slate-900 mb-8">${dict.blog.relatedPosts}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${relatedPosts.map((rp) => {
    const rpSlug = rp.id.replace(`${lang}/`, "");
    const rpReadingTime = Math.ceil((typeof rp.body === "string" ? rp.body : "").split(/\s+/).length / 200);
    return renderTemplate`<a${addAttribute(`/${lang}/blog/${rpSlug}`, "href")} class="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"> <span class="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full"> ${dict.blog.categories?.[rp.data.category] || rp.data.category} </span> <h3 class="text-base font-bold text-slate-900 mt-3 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2"> ${rp.data.title} </h3> <p class="text-sm text-slate-500 line-clamp-2">${rp.data.description}</p> <div class="mt-3 text-xs text-slate-400"> ${rpReadingTime} ${dict.blog.minRead} </div> </a>`;
  })} </div> </div> </section>`} `, "navbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "lang": lang, "dict": dict, "slot": "navbar", "client:component-hydration": "load", "client:component-path": "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/components/landing/Navbar", "client:component-export": "default" })}` })}`;
}, "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/blog/[slug].astro", void 0);

const $$file = "C:/Users/gold/.gemini/antigravity/scratch/keeppdf-astro/src/pages/[lang]/blog/[slug].astro";
const $$url = "/[lang]/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
