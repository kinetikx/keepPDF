import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C_Rd2Jo5.mjs';
import { manifest } from './manifest_DfuWuved.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/_lang_/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/_lang_/blog.astro.mjs');
const _page5 = () => import('./pages/_lang_/compress.astro.mjs');
const _page6 = () => import('./pages/_lang_/edit-pdf.astro.mjs');
const _page7 = () => import('./pages/_lang_/image-to-pdf.astro.mjs');
const _page8 = () => import('./pages/_lang_/merge-pdf.astro.mjs');
const _page9 = () => import('./pages/_lang_/ocr-pdf.astro.mjs');
const _page10 = () => import('./pages/_lang_/organize.astro.mjs');
const _page11 = () => import('./pages/_lang_/pdf-to-excel.astro.mjs');
const _page12 = () => import('./pages/_lang_/pdf-to-image.astro.mjs');
const _page13 = () => import('./pages/_lang_/pdf-to-txt.astro.mjs');
const _page14 = () => import('./pages/_lang_/pdf-to-word.astro.mjs');
const _page15 = () => import('./pages/_lang_/sign-pdf.astro.mjs');
const _page16 = () => import('./pages/_lang_/split.astro.mjs');
const _page17 = () => import('./pages/_lang_/word-to-pdf.astro.mjs');
const _page18 = () => import('./pages/_lang_.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin.astro", _page2],
    ["src/pages/[lang]/blog/[slug].astro", _page3],
    ["src/pages/[lang]/blog/index.astro", _page4],
    ["src/pages/[lang]/compress.astro", _page5],
    ["src/pages/[lang]/edit-pdf.astro", _page6],
    ["src/pages/[lang]/image-to-pdf.astro", _page7],
    ["src/pages/[lang]/merge-pdf.astro", _page8],
    ["src/pages/[lang]/ocr-pdf.astro", _page9],
    ["src/pages/[lang]/organize.astro", _page10],
    ["src/pages/[lang]/pdf-to-excel.astro", _page11],
    ["src/pages/[lang]/pdf-to-image.astro", _page12],
    ["src/pages/[lang]/pdf-to-txt.astro", _page13],
    ["src/pages/[lang]/pdf-to-word.astro", _page14],
    ["src/pages/[lang]/sign-pdf.astro", _page15],
    ["src/pages/[lang]/split.astro", _page16],
    ["src/pages/[lang]/word-to-pdf.astro", _page17],
    ["src/pages/[lang]/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4c707fa1-2383-445e-a477-e294967a934f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
