import '../chunks/store_C6kEHeSE.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_qoIXZOaG.mjs';
import 'kleur/colors';
import { $ as $$SSRPage } from '../chunks/SSRPage_CAbvBKWX.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const pagefind = false;
const $$Insights = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SSRPage", $$SSRPage, {})}`;
}, "/Users/kb/Documents/jee/src/pages/insights.astro", void 0);

const $$file = "/Users/kb/Documents/jee/src/pages/insights.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Insights,
	file: $$file,
	pagefind,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
