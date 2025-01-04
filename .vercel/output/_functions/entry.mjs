import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DAEs9ZBx.mjs';
import { manifest } from './manifest_DBmCbLk8.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/events.astro.mjs');
const _page3 = () => import('./pages/insights.astro.mjs');
const _page4 = () => import('./pages/people.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/events.astro", _page2],
    ["src/pages/insights.astro", _page3],
    ["src/pages/people.astro", _page4],
    ["src/pages/[...slug].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f2463f09-6643-4f37-b6f4-bc1c095e65a6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
