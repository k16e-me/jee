import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from './astro/server_qoIXZOaG.mjs';
import 'kleur/colors';
import { _ as _getPageData, g as getSettings, $ as $$Base, a as $$StoryblokComponent } from './api_C9fJMcEi.mjs';

const $$Astro = createAstro("https://jee-v2.k16e.co");
const $$SSRPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SSRPage;
  const slug = Astro2.url.pathname;
  const [{ page, content, seo }, settings] = await Promise.all([
    _getPageData(slug),
    getSettings()
  ]);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "settings": settings, "pageTitle": seo.title, "pageDescription": seo.description, "pageThumbnail": seo.thumbnail.filename }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StoryblokComponent", $$StoryblokComponent, { "blok": content })} ` })}`;
}, "/Users/kb/Documents/jee/src/layouts/SSRPage.astro", void 0);

export { $$SSRPage as $ };
