import '../chunks/store_C6kEHeSE.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_qoIXZOaG.mjs';
import 'kleur/colors';
import { $ as $$SSRPage } from '../chunks/SSRPage_CUm778Hj.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const pagefind = false;
const $$Events = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SSRPage", $$SSRPage, {})}`;
}, "/Users/kb/Documents/jee/src/pages/events.astro", void 0);

const $$file = "/Users/kb/Documents/jee/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Events,
	file: $$file,
	pagefind,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
