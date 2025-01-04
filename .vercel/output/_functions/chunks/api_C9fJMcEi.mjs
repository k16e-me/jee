import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, e as renderSlot, ad as unescapeHTML, ag as renderScript, ae as Fragment } from './astro/server_qoIXZOaG.mjs';
import 'kleur/colors';
import { n as _fontSize, b as $$Icon, o as _slug, p as $$ButtonFab, q as $$Text, r as $$Section, c as $$Wrapper$1, s as $$Grid, t as $$Image, u as $$Breadcrumb, v as $$RichText, w as $$ButtonMore, x as _xPadding, y as _spaceY, z as _empty, A as _sectionPadding, B as _newsletter, C as _categories, e as $$ButtonLink, D as _gridGap, E as $$BrandCutFull, F as _blockGap, G as _odd, a as $$TitleHidden, H as _designations, I as _offices, J as _sectors, K as _practices, L as _africaExpertise, d as $$HeaderImageExpressive, _ as _settings, M as _unslash, $ as $$Head } from './store_C6kEHeSE.mjs';
import 'clsx';
import { atom } from 'nanostores';
/* empty css                          */
import { parseHTML } from 'linkedom/worker';
import { AtpAgent, RichText, AppBskyEmbedImages, AppBskyEmbedExternal, AppBskyEmbedVideo, AppBskyEmbedRecordWithMedia, AppBskyEmbedRecord, AppBskyFeedPost, AppBskyGraphStarterpack, AppBskyGraphDefs } from '@atproto/api';
import { match, P } from 'ts-pattern';

const $$Astro$2k = createAstro("https://jee-v2.k16e.co");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2k, $$props, $$slots);
  Astro2.self = $$Page;
  const { blok } = Astro2.props, { pathname } = Astro2.url; pathname.split("/");
  return renderTemplate`${blok.body.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })}`;
}, "/Users/kb/Documents/jee/src/types/Page.astro", void 0);

function _slugify(s) {
    return s
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/\/+/g, '-')
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/g, '')
        .replace(/^-+/g, '')
}

const $$Astro$2j = createAstro("https://jee-v2.k16e.co");
const $$SectionSpy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2j, $$props, $$slots);
  Astro2.self = $$SectionSpy;
  const { headings, breakAt = "xl", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    "flex items-center justify-between border-b border-[var(--color-border-muted)]",
    breakAt === "md" && "md:flex-col md:items-end md:border-b-0 md:border-r [&>*]:md:text-right",
    breakAt === "lg" && "lg:flex-col lg:items-end lg:border-b-0 lg:border-r [&>*]:lg:text-right",
    breakAt === "xl" && "xl:flex-col xl:items-end xl:border-b-0 xl:border-r [&>*]:xl:text-right",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${headings.map((h) => renderTemplate`<li${addAttribute([
    _fontSize("1hx"),
    "group whitespace-nowrap r-transition",
    breakAt === "md" && "md:translate-x-[0.1rem] md:whitespace-normal",
    breakAt === "lg" && "lg:translate-x-[0.1rem] lg:whitespace-normal",
    breakAt === "xl" && "xl:translate-x-[0.1rem] xl:whitespace-normal"
  ], "class:list")}> <a${addAttribute(`#${_slugify(h)}`, "href")}${addAttribute([
    "flex text-right font-semibold font-display p-4 xl:px-6 [&.is-in-view]:border-b-[3px] [&.is-in-view]:border-[var(--color-emphasis)] group-hover:text-[var(--color-emphasis)] [&.is-in-view]:text-[var(--color-emphasis)]",
    breakAt === "md" && "md:pl-0 md:!border-b-0 [&.is-in-view]:md:border-r-[3px]",
    breakAt === "lg" && "lg:pl-0 lg:!border-b-0 [&.is-in-view]:lg:border-r-[3px]",
    breakAt === "xl" && "xl:pl-0 xl:!border-b-0 [&.is-in-view]:xl:border-r-[3px]"
  ], "class:list")}>${h}</a> </li>`)} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/SectionSpy.astro", void 0);

const $$Astro$2i = createAstro("https://jee-v2.k16e.co");
const $$BrandCutDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2i, $$props, $$slots);
  Astro2.self = $$BrandCutDown;
  const { top, specialCase, flipped, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "absolute top-[15%] xs:top-[18%] sm:top-[13.5%] ml:top-[12%] lg:top-[13.5%] 2xl:top-[12%]",
    top && "-left-1 md:-left-[19.75rem] lg:-left-[22.5rem] xl:-left-[18.5rem] 2xl:-left-[15rem] top-[28%] xs:top-[30%] sm:top-[26.5%] md:top-[32%] lg:top-[20%]",
    specialCase && !flipped && "-left-1 ml:-left-[16rem] lg:-left-[14.25rem]",
    flipped && "ml:-right-[12rem] lg:-right-[14.25rem]",
    specialCase && "lg:top-[20%] 2xl:top-[14.5%] ",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Icon", $$Icon, { "name": "cutout-down", "class:list": [
    "w-[40rem] md:w-[45rem] lg:w-[56rem] scale-110 sm:scale-[1.4] h-auto text-[var(--color-main)]",
    top && "md:scale-100",
    specialCase && "sm:scale-x-[1.5] sm:scale-y-[1.045] lg:scale-100",
    flipped && "ml:![transform:rotateY(180deg)]"
  ] })} </div>`;
}, "/Users/kb/Documents/jee/src/atoms/BrandCutDown.astro", void 0);

const $$Astro$2h = createAstro("https://jee-v2.k16e.co");
const $$ListLinkFab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2h, $$props, $$slots);
  Astro2.self = $$ListLinkFab;
  const { link, slug, icon, label, tag = "span", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group/link truncate inline-flex items-center"> <a${addAttribute(link ? _slug(link.link) : slug, "href")} class="flex items-center gap-3 w-full"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "tag": tag, "icon": icon, "label": link ? link.label : label })} ${renderComponent($$result, "Text", $$Text, { "size": "emphasis", "text": link ? link.label : label, "color": "title", "weight": "medium", "class": "opacity-80 group-hover/link:opacity-100" })} </a> </li>`;
}, "/Users/kb/Documents/jee/src/blocks/ListLinkFab.astro", void 0);

const $$Astro$2g = createAstro("https://jee-v2.k16e.co");
const $$HeaderPerson = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2g, $$props, $$slots);
  Astro2.self = $$HeaderPerson;
  const { person, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": person.component, "header": true, "section": false, "class": "r-hide-overflow max-h-[80rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "gap-3 gap-y-8 sm:gap-y-12 md:gap-6 lg:gap-8 z-20" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full md:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/6]"> <div class="h-[30rem] xs:h-[34rem] sm:h-[36rem] lg:h-[37.5rem] overflow-clip bg-[var(--color-bg-default-elevated)] rounded-3xl"> ${renderComponent($$result4, "Image", $$Image, { "filename": person.headshot.filename, "alt": person.headshot.alt, "filter": true, "class:list": ["size-full object-cover object-top"] })} </div> </div> <div class="col-span-full md:[grid-area:1/5/2/9] lg:[grid-area:1/6/2/13]"> <div class="flex flex-col gap-2 sm:gap-3 lg:pl-4 xl:pl-6"> ${renderComponent($$result4, "Breadcrumb", $$Breadcrumb, { "page": person.name, "altLink": "/people", "labelText": "JEE People" })} <div class="flex flex-col gap-2 md:gap-3"> ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": person.name, "color": "title", "size": "3", "weight": "extra", "tighten": true })} ${renderComponent($$result4, "Text", $$Text, { "text": person.byline[0]?.content.title, "color": "caption", "size": "2hx", "weight": "medium" })} </div> <ul class="inline-flex flex-col py-4 sm:py-6 gap-3 w-max"> ${renderComponent($$result4, "ListLinkFab", $$ListLinkFab, { "slug": "/contact", "icon": "map-pin-area", "label": person.links[0].location.content.tag })} ${renderComponent($$result4, "ListLinkFab", $$ListLinkFab, { "slug": person.links[0].vcard.filename, "icon": "download", "label": "vCard" })} ${renderComponent($$result4, "ListLinkFab", $$ListLinkFab, { "link": person.links[0].email[0], "icon": "envelope" })} ${renderComponent($$result4, "ListLinkFab", $$ListLinkFab, { "link": person.links[0].phone[0], "icon": "phone" })} ${renderComponent($$result4, "ListLinkFab", $$ListLinkFab, { "link": person.links[0].linkedin[0], "icon": "linkedin" })} </ul> <div class="max-w-screen-sm"> ${renderComponent($$result4, "RichText", $$RichText, { "text": person.excerpt, "pType": "2hx" })} </div> </div> </div> ` })} ` })} ${renderComponent($$result2, "BrandCutDown", $$BrandCutDown, { "class": "z-[-1] xl:!-left-[16.5rem] 2xl:!-left-[12.5rem] 2xl:!top-[22%]", "top": true })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderPerson.astro", void 0);

const $$Astro$2f = createAstro("https://jee-v2.k16e.co");
const $$HeadingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2f, $$props, $$slots);
  Astro2.self = $$HeadingSection;
  const {
    text,
    level,
    underline = true,
    padding = "default",
    hasCarouselControls,
    isFromCollection,
    hasResetButton,
    link,
    label,
    size,
    class: classes,
    ...props
  } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex items-center justify-between",
    underline && "border-b border-[var(--color-border-accent)]",
    padding === "default" && "pb-2 md:pb-3",
    padding === "small" && "pb-[0.4125rem]",
    padding === "none" && "pb-0",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Text", $$Text, { "tag": level || "span", "text": text, "color": "title", "size": size, "family": "display", "weight": "bold", "tighten": true, "class": "" })} ${hasCarouselControls && renderTemplate`<div class="hidden lg:flex lg:items-center lg:gap-2"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "brand", "label": "Control Carousel", "icon": "caret-left", "class": "swiper-prev" })} ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "brand", "label": "Control Carousel", "icon": "caret-right", "class": "swiper-next" })} </div>`} ${isFromCollection && renderTemplate`${renderComponent($$result, "ButtonMore", $$ButtonMore, { "label": label, "link": link })}`} ${hasResetButton && renderTemplate`${renderComponent($$result, "Text", $$Text, { "tag": "a", "href": pathname, "text": "Reset", "color": "caption", "data-reset-form": true })}`} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/HeadingSection.astro", void 0);

const $$Astro$2e = createAstro("https://jee-v2.k16e.co");
const $$SectionStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2e, $$props, $$slots);
  Astro2.self = $$SectionStack;
  const { blok, overlap, showLess, xPadding = true, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap || overlap, "id": typeof blok.heading != "string" ? _slugify(blok.heading[0].heading) : _slugify(blok.heading), "class:list": [classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [xPadding && _xPadding("both-lg-down-l")] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": typeof blok.heading === "string" ? blok.heading : blok.heading[0].heading, "size": "4" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": Array.isArray(blok.body) ? blok.body[0].content : blok.body, "pType": "body", "class:list": [showLess && "is-more-less"] })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionStack.astro", void 0);

const $$Astro$2d = createAstro("https://jee-v2.k16e.co");
const $$CardCapsule = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2d, $$props, $$slots);
  Astro2.self = $$CardCapsule;
  const {
    link,
    entry,
    tag = "a",
    subtitle,
    subtitleColor = "caption",
    adjustWidth = true,
    bleed,
    fill = true,
    height = "default",
    top,
    contain,
    class: classes,
    ...props
  } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { ...link ? { href: `/${_slug(link)}` } : {}, "class:list": [
    "flex items-center w-full rounded-xl group r-hide-overflow overflow-y-clip",
    height === "default" && "h-[5.625rem]",
    height === "tall" && "h-24",
    adjustWidth ? "sm:w-[calc(50%-1rem)]" : "max-w-[23rem]",
    bleed && "max-w-none",
    fill && "bg-[var(--color-bg-default-elevated)] p-1",
    link && "hover:bg-[var(--color-bg-default-elevated)]",
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-[3rem] overflow-clip h-full shrink-0 bg-[var(--color-bg-default-elevated)]",
    height === "default" && "w-20",
    height === "tall" && "w-24"
  ], "class:list")}> ${renderComponent($$result2, "Image", $$Image, { "filename": entry.content?.image ? entry.content?.image.filename : entry.content.headshot.filename, "alt": entry.content?.image ? entry.content?.image.alt : entry.content.headshot.alt, "filter": true, "top": top, "contain": contain, "class:list": [
    "size-full",
    link && "group-hover:scale-105 transition-transform duration-200"
  ] })} </div> <div class="px-4 flex flex-col gap-2 h-full justify-around py-2"> ${renderComponent($$result2, "Text", $$Text, { "text": entry.content.title ? entry.content.title : entry.content.name ? entry.content.name : entry.name, "color": "title", "size": height === "tall" ? "1hx" : "blurb", "weight": "semi", "class": ["line-clamp-2"] })} ${link && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "text": subtitle, "color": subtitleColor, "size": "footnote", "weight": "medium" })}`} </div> ${link && renderTemplate`<div class="fixed bottom-0 right-0 translate-y-4 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "cutout-up", "class": "w-[10rem] text-[var(--color-emphasis)] absolute -right-[4.5rem] -bottom-[2.8rem]" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "size-5 text-white absolute right-3 bottom-2 z-10" })} </div>`}` })}`;
}, "/Users/kb/Documents/jee/src/blocks/CardCapsule.astro", void 0);

function _titlelize(s) {
    return s.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())
}

const $$Astro$2c = createAstro("https://jee-v2.k16e.co");
const $$SectionMinicards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2c, $$props, $$slots);
  Astro2.self = $$SectionMinicards;
  const {
    blok,
    overlap,
    list,
    xPadding = true,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap || overlap, "id": typeof blok.heading != "string" ? _slugify(blok.heading[0].heading) : _slugify(blok.heading), "class:list": [classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [xPadding && _xPadding("both-lg-down-l")] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": typeof blok.heading === "string" ? blok.heading : blok.heading[0].heading, "size": "4" })} <div class="flex flex-wrap gap-4"> ${list.map((i) => renderTemplate`${renderComponent($$result4, "CardCapsule", $$CardCapsule, { "entry": i, "link": i.full_slug, "subtitle": `JEE ${_titlelize(
    i.full_slug.split("/")[0].replace(/-+/g, " ")
  )}` })}`)} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionMinicards.astro", void 0);

const $$Astro$2b = createAstro("https://jee-v2.k16e.co");
const $$RegisterItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2b, $$props, $$slots);
  Astro2.self = $$RegisterItem;
  const { entry, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row gap-1 sm:gap-8 lg:gap-10"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": entry.item, "color": "title", "size": "body", "family": "display", "weight": "bold", "class": "min-w-[7rem] sm:max-w-[7rem] truncate" })} ${renderComponent($$result, "RichText", $$RichText, { "text": entry.details, "pType": "body", "weight": "medium" })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/RegisterItem.astro", void 0);

const $$Astro$2a = createAstro("https://jee-v2.k16e.co");
const $$Register = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2a, $$props, $$slots);
  Astro2.self = $$Register;
  const {
    entry,
    overlap,
    tag,
    xPadding = true,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": entry.component, "overlap": entry.overlap || overlap, "id": _slugify(entry.title), "class:list": [classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [xPadding && _xPadding("both-lg-down-l")] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": entry.title, "size": "4" })} <div class="flex flex-col gap-6 sm:gap-4"> ${entry.register.map((i) => renderTemplate`${renderComponent($$result4, "RegisterItem", $$RegisterItem, { "entry": i })}`)} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/Register.astro", void 0);

const $$Astro$29 = createAstro("https://jee-v2.k16e.co");
const $$Byline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$29, $$props, $$slots);
  Astro2.self = $$Byline;
  const {
    title,
    tag = "p",
    designation,
    size = "default",
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex flex-col",
    size === "mini" ? "gap-[0.04rem]" : "gap-[0.15rem]",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Text", $$Text, { "tag": tag, "text": title, "color": "white", "size": `${size === "mini" ? "body" : "6"}`, "weight": "semi" })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": designation, "color": "accent", "size": "blurb", "class": "line-clamp-1" })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Byline.astro", void 0);

const $$Astro$28 = createAstro("https://jee-v2.k16e.co");
const $$CardPerson = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$28, $$props, $$slots);
  Astro2.self = $$CardPerson;
  const { person, tag, size = "default", class: classes, ...props } = Astro2.props;
  let internal = false;
  person.content.link ? internal = false : internal = true;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(internal ? `/${person.full_slug}` : person.content.link.cached_url, "href")}${addAttribute([
    "grid grid-cols-1 items-end bg-[var(--color-bg-default-elevated)] group relative overflow-clip",
    size === "default" && "rounded-[1.25rem] md:rounded-t-[1.5rem] w-[18.5rem] h-[24.5rem]",
    size === "mini" && "rounded-2xl w-[14.5rem] h-[19.5rem]",
    size === "adaptive" && "w-[18.5rem] h-[24.5rem] md:w-[14.5rem] md:h-[19.5rem] rounded-t-[1.5rem] md:rounded-2xl",
    classes
  ], "class:list")}${spreadAttributes(props)}${addAttribute(!internal && "_blank", "target")}> <div class="[grid-area:1/1/2/2] z-0"> ${renderComponent($$result, "Image", $$Image, { "filename": person.content.headshot.filename, "alt": person.content.headshot.alt, "filter": true, "top": true, "class:list": [
    size === "default" && "h-[24rem]",
    size === "mini" && "h-[18rem]",
    size === "adaptive" && "h-[24rem] md:h-[18rem]",
    "transition-transform duration-200 group-hover:scale-105"
  ] })} </div> <div${addAttribute(["[grid-area:1/1/2/2] z-[1]"], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "cutout-down", "class:list": [
    "h-[18rem] transition-transform duration-200 scale-105 group-hover:scale-110 absolute top-[75%] inset-x-0 z-0",
    internal ? "text-[var(--color-backdrop)]" : "text-[var(--color-backdrop)]"
  ] })} <div${addAttribute([
    "relative z-[2]",
    size === "default" && "p-4",
    size === "mini" && "p-3",
    size === "adaptive" && "p-4 md:p-3"
  ], "class:list")}> ${renderComponent($$result, "Byline", $$Byline, { "title": person.name, "designation": internal ? person?.content?.byline[0]?.content?.title : person?.content?.byline[0]?.designation, "size": size })} </div> </div> </a>`;
}, "/Users/kb/Documents/jee/src/blocks/CardPerson.astro", void 0);

const $$Astro$27 = createAstro("https://jee-v2.k16e.co");
const $$CarouselPeople = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$27, $$props, $$slots);
  Astro2.self = $$CarouselPeople;
  const {
    blok,
    altComponent,
    altOverlap,
    altHeading,
    altLabel,
    altLink,
    altPeople,
    altCollection,
    class: classes,
    ...props
  } = Astro2.props, people = altPeople ? altPeople : blok.people, collection = altCollection ? altCollection : blok.collection[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": altComponent ? altComponent : blok.component, "overlap": altOverlap ? altOverlap : blok.overlap, "id": altHeading ? _slugify(altHeading) : _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> <div${addAttribute([
    altComponent ? [
      _xPadding("both-md-down-lg-r"),
      "lg:max-w-[48rem]"
    ] : _xPadding("both-lg-down-l")
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": altHeading ? altHeading : blok.heading, "size": "4", "isFromCollection": true, "label": altLabel ? altLabel : collection.label, "link": altLink ? altLink : collection.link })} </div> <div${addAttribute([
    altComponent ? _xPadding("left-md-down") : _xPadding("left-lg-down-l")
  ], "class:list")}> <ul class="flex gap-4 overflow-auto snap-x pr-4 no-scrollbar"> ${people.map((person, idx) => renderTemplate`<li class="shrink-0 !w-auto snap-start"> ${renderComponent($$result4, "CardPerson", $$CardPerson, { "person": person, "size": "default" })} </li>`)} </ul> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/CarouselPeople.astro", void 0);

const $$Astro$26 = createAstro("https://jee-v2.k16e.co");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$26, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { dateString, color = "caption", size = "6", family = "display", tighten = true, weight = "semi", class: classes, ...props } = Astro2.props, date = new Date(dateString), isoString = date.toISOString(), formattedDate = date.toLocaleDateString("en-EN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Text", $$Text, { "tag": "time", "datetime": isoString, "text": formattedDate, ...props, "color": color, "size": size, "family": family, "weight": weight, "tighten": tighten })}`;
}, "/Users/kb/Documents/jee/src/atoms/FormattedDate.astro", void 0);

const $$Astro$25 = createAstro("https://jee-v2.k16e.co");
const $$Meta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$25, $$props, $$slots);
  Astro2.self = $$Meta;
  const { info, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": info?.category?.content?.title, "color": "emphasis", "size": "blurb", "family": "display", "weight": "medium" })} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "dateString": info.published_date, "size": "blurb", "color": "caption", "weight": "medium", "class": "justify-self-end" })} </div>`;
}, "/Users/kb/Documents/jee/src/atoms/Meta.astro", void 0);

const $$Astro$24 = createAstro("https://jee-v2.k16e.co");
const $$Author = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$24, $$props, $$slots);
  Astro2.self = $$Author;
  const { source, size = "1hx", color = "title", weight = "semi", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-3"> ${renderComponent($$result, "Text", $$Text, { "text": source.content.author[0].name, "color": color, "size": size, "weight": weight, "tighten": true })} ${source.content.author.length > 1 && renderTemplate`${renderComponent($$result, "Text", $$Text, { "text": `+${source.content.author.length - 1}`, "color": "caption", "size": size, "weight": "medium" })}`} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Author.astro", void 0);

const $$Astro$23 = createAstro("https://jee-v2.k16e.co");
const $$CardInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$23, $$props, $$slots);
  Astro2.self = $$CardInsight;
  const {
    piece,
    profile = true,
    landscape,
    class: classes,
    ...props
  } = Astro2.props;
  const image = piece.featured_image ? piece.featured_image.filename : piece.content.image.filename;
  const altText = piece.featured_image ? piece.featured_image.alt : piece.content.image.alt;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${piece.full_slug}`, "href")}${addAttribute([
    "r-hide-overflow overflow-y-clip group",
    profile && "size-full",
    landscape && "w-full h-full md:h-[24rem] lg:md:h-[25rem] bg-[var(--color-bg-default-elevated)] rounded-3xl p-2 flex flex-col md:flex-row ",
    classes
  ], "class:list")}${spreadAttributes(props)}> <div${addAttribute([
    "relative overflow-clip flex",
    profile && "rounded-bl-[1.5rem] rounded-br-[8rem]",
    landscape && "w-full h-[30rem] md:h-full md:min-w-[26rem] md:max-w-[26rem] rounded-tl-[2rem] rounded-bl-[2rem] rounded-tr-[2rem] md:rounded-tr-[4rem] rounded-br-[10rem]"
  ], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "filename": image, "alt": altText, "filter": true, "class:list": [
    "transition-transform duration-200 group-hover:scale-110",
    profile && "h-[15.5rem]",
    landscape && ""
  ] })} </div> <div${addAttribute([
    "flex flex-col justify-between",
    profile && "pt-4 pr-4 h-[9rem]",
    landscape && "px-2 sm:px-4 py-5 sm:py-7 md:px-8 md:py-10 w-full min-h-[14rem] gap-y-4"
  ], "class:list")}> <div class="flex flex-col gap-1 md:gap-2"> ${profile && renderTemplate`${renderComponent($$result, "Meta", $$Meta, { "info": piece.content })}`} ${landscape && renderTemplate`${renderComponent($$result, "Text", $$Text, { "text": piece.content.category?.content?.title, "color": "caption", "size": "copy", "family": "display", "weight": "medium" })}`} ${renderComponent($$result, "Text", $$Text, { "tag": `${profile ? "h4" : "h3"}`, "text": piece.content.title, "color": "title", "size": `${profile ? "6" : "4"}`, "weight": `${profile ? "semi" : "extra"}`, "class": `${profile ? "line-clamp-3" : ""}` })} </div> <div${addAttribute([landscape && "flex flex-col gap-1.5"], "class:list")}> ${renderComponent($$result, "Author", $$Author, { "source": piece, "size": `${profile ? "body" : "6"}`, "weight": `${profile ? "semi" : "medium"}`, "color": "body", "class": "mt-auto" })} ${landscape && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "dateString": piece.content.published_date, "size": "emphasis", "color": "caption", "weight": "medium", "class": "justify-self-end" })}`} </div> </div> ${landscape && renderTemplate`<div class="hidden md:block fixed bottom-0 right-0 translate-y-8 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": "cutout-up", "class": "w-[25rem] text-[var(--color-emphasis)] absolute -right-[9rem] -bottom-[7rem]" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "size-10 text-white absolute right-6 bottom-6 z-10" })} </div>`} </a>`;
}, "/Users/kb/Documents/jee/src/blocks/CardInsight.astro", void 0);

const $$Astro$22 = createAstro("https://jee-v2.k16e.co");
const $$SectionLatest = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$22, $$props, $$slots);
  Astro2.self = $$SectionLatest;
  const {
    blok,
    altComponent,
    altOverlap,
    altHeading,
    altLabel,
    altLink,
    altInsights,
    altCollection,
    isCollection = true,
    controls,
    defaultCase = true,
    class: classes,
    ...props
  } = Astro2.props;
  const insights = altInsights ? altInsights : blok.insights;
  const collection = altCollection ? altCollection : blok.collection[0];
  const isAbout = Astro2.url.pathname === "/about" || Astro2.url.pathname === "/about/";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": altComponent ? altComponent : blok.component, "overlap": altOverlap ? altOverlap : blok.overlap, "id": altHeading ? _slugify(altHeading) : _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> <div${addAttribute([
    defaultCase && _xPadding("both"),
    (altComponent || blok?.altComponent) && _xPadding("both-md-down-lg-r"),
    altComponent && "lg:max-w-[48rem]",
    isAbout && _xPadding("both-lg-down-xl-r")
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h2", "text": altHeading ? altHeading : blok.heading, "size": "4", "isFromCollection": isCollection, "hasCarouselControls": controls, "label": altLabel ? altLabel : collection.label, "link": altLink ? altLink : collection.link })} </div> <div${addAttribute([
    defaultCase && !blok?.altComponent && _xPadding("left"),
    (altComponent || blok?.altComponent) && _xPadding("left-md-down"),
    isAbout && _xPadding("left-lg-down")
  ], "class:list")}> <ul${addAttribute([
    "flex gap-4 overflow-auto snap-x pr-4",
    "no-scrollbar"
  ], "class:list")}> ${insights.map((item, idx) => renderTemplate`<li class="shrink-0 !w-[20rem] !h-[24.5rem] group relative overflow-clip rounded-tl-[1.5rem] rounded-tr-[2rem] snap-start"> ${renderComponent($$result4, "CardInsight", $$CardInsight, { "piece": item })} </li>`)} </ul> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionLatest.astro", void 0);

const Or = /[\p{Lu}]/u, xr = /[\p{Ll}]/u, Me = /^[\p{Lu}](?![\p{Lu}])/gu, Je = /([\p{Alpha}\p{N}_]|$)/u, fe = /[_.\- ]+/, jr = new RegExp("^" + fe.source), Ne = new RegExp(fe.source + Je.source, "gu"), ze = new RegExp("\\d+" + Je.source, "gu"), Er = (o, t, r, s) => {
  let i = !1, l = !1, u = !1, f = !1;
  for (let g = 0; g < o.length; g++) {
    const y = o[g];
    f = g > 2 ? o[g - 3] === "-" : !0, i && Or.test(y) ? (o = o.slice(0, g) + "-" + o.slice(g), i = !1, u = l, l = !0, g++) : l && u && xr.test(y) && (!f || s) ? (o = o.slice(0, g - 1) + "-" + o.slice(g - 1), u = l, l = !1, i = !0) : (i = t(y) === y && r(y) !== y, u = l, l = r(y) === y && t(y) !== y);
  }
  return o;
}, Rr = (o, t) => (Me.lastIndex = 0, o.replaceAll(Me, (r) => t(r))), Lr = (o, t) => (Ne.lastIndex = 0, ze.lastIndex = 0, o.replaceAll(ze, (r, s, i) => ["_", "-"].includes(o.charAt(i + r.length)) ? r : t(r)).replaceAll(Ne, (r, s) => t(s)));
function Pr(o, t) {
  if (!(typeof o == "string" || Array.isArray(o)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (t = {
    pascalCase: !1,
    preserveConsecutiveUppercase: !1,
    ...t
  }, Array.isArray(o) ? o = o.map((l) => l.trim()).filter((l) => l.length).join("-") : o = o.trim(), o.length === 0)
    return "";
  const r = t.locale === !1 ? (l) => l.toLowerCase() : (l) => l.toLocaleLowerCase(t.locale), s = t.locale === !1 ? (l) => l.toUpperCase() : (l) => l.toLocaleUpperCase(t.locale);
  return o.length === 1 ? fe.test(o) ? "" : t.pascalCase ? s(o) : r(o) : (o !== r(o) && (o = Er(o, r, s, t.preserveConsecutiveUppercase)), o = o.replace(jr, ""), o = t.preserveConsecutiveUppercase ? Rr(o, r) : r(o), t.pascalCase && (o = s(o.charAt(0)) + o.slice(1)), Lr(o, s));
}
function Fe(o) {
  return Pr(o);
}
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var U = { exports: {} };
U.exports;
var He;
function Sn() {
  return He || (He = 1, function(o, t) {
    var r = 200, s = "__lodash_hash_undefined__", i = 800, l = 16, u = 9007199254740991, f = "[object Arguments]", g = "[object Array]", y = "[object AsyncFunction]", _ = "[object Boolean]", C = "[object Date]", T = "[object Error]", $ = "[object Function]", w = "[object GeneratorFunction]", x = "[object Map]", H = "[object Number]", We = "[object Null]", de = "[object Object]", Ke = "[object Proxy]", Ze = "[object RegExp]", Ve = "[object Set]", Xe = "[object String]", Ye = "[object Undefined]", Qe = "[object WeakMap]", et = "[object ArrayBuffer]", tt = "[object DataView]", rt = "[object Float32Array]", nt = "[object Float64Array]", ot = "[object Int8Array]", at = "[object Int16Array]", st = "[object Int32Array]", it = "[object Uint8Array]", lt = "[object Uint8ClampedArray]", ct = "[object Uint16Array]", ut = "[object Uint32Array]", ft = /[\\^$.*+?()[\]{}|]/g, dt = /^\[object .+?Constructor\]$/, pt = /^(?:0|[1-9]\d*)$/, b = {};
    b[rt] = b[nt] = b[ot] = b[at] = b[st] = b[it] = b[lt] = b[ct] = b[ut] = !0, b[f] = b[g] = b[et] = b[_] = b[tt] = b[C] = b[T] = b[$] = b[x] = b[H] = b[de] = b[Ze] = b[Ve] = b[Xe] = b[Qe] = !1;
    var pe = typeof Y == "object" && Y && Y.Object === Object && Y, gt = typeof self == "object" && self && self.Object === Object && self, M = pe || gt || Function("return this")(), ge = t && !t.nodeType && t, N = ge && !0 && o && !o.nodeType && o, he = N && N.exports === ge, Q = he && pe.process, be = function() {
      try {
        var e = N && N.require && N.require("util").types;
        return e || Q && Q.binding && Q.binding("util");
      } catch {
      }
    }(), ye = be && be.isTypedArray;
    function ht(e, n, a) {
      switch (a.length) {
        case 0:
          return e.call(n);
        case 1:
          return e.call(n, a[0]);
        case 2:
          return e.call(n, a[0], a[1]);
        case 3:
          return e.call(n, a[0], a[1], a[2]);
      }
      return e.apply(n, a);
    }
    function bt(e, n) {
      for (var a = -1, c = Array(e); ++a < e; )
        c[a] = n(a);
      return c;
    }
    function yt(e) {
      return function(n) {
        return e(n);
      };
    }
    function mt(e, n) {
      return e == null ? void 0 : e[n];
    }
    function vt(e, n) {
      return function(a) {
        return e(n(a));
      };
    }
    var _t = Array.prototype, wt = Function.prototype, q = Object.prototype, ee = M["__core-js_shared__"], G = wt.toString, O = q.hasOwnProperty, me = function() {
      var e = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
      return e ? "Symbol(src)_1." + e : "";
    }(), ve = q.toString, kt = G.call(Object), Tt = RegExp(
      "^" + G.call(O).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), J = he ? M.Buffer : void 0, _e = M.Symbol, we = M.Uint8Array;
    J && J.allocUnsafe;
    var ke = vt(Object.getPrototypeOf, Object), Te = Object.create, Ct = q.propertyIsEnumerable, At = _t.splice, j = _e ? _e.toStringTag : void 0, W = function() {
      try {
        var e = ne(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {
      }
    }(), St = J ? J.isBuffer : void 0, Ce = Math.max, It = Date.now, Ae = ne(M, "Map"), z = ne(Object, "create"), $t = /* @__PURE__ */ function() {
      function e() {
      }
      return function(n) {
        if (!R(n))
          return {};
        if (Te)
          return Te(n);
        e.prototype = n;
        var a = new e();
        return e.prototype = void 0, a;
      };
    }();
    function E(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Ot() {
      this.__data__ = z ? z(null) : {}, this.size = 0;
    }
    function xt(e) {
      var n = this.has(e) && delete this.__data__[e];
      return this.size -= n ? 1 : 0, n;
    }
    function jt(e) {
      var n = this.__data__;
      if (z) {
        var a = n[e];
        return a === s ? void 0 : a;
      }
      return O.call(n, e) ? n[e] : void 0;
    }
    function Et(e) {
      var n = this.__data__;
      return z ? n[e] !== void 0 : O.call(n, e);
    }
    function Rt(e, n) {
      var a = this.__data__;
      return this.size += this.has(e) ? 0 : 1, a[e] = z && n === void 0 ? s : n, this;
    }
    E.prototype.clear = Ot, E.prototype.delete = xt, E.prototype.get = jt, E.prototype.has = Et, E.prototype.set = Rt;
    function I(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Lt() {
      this.__data__ = [], this.size = 0;
    }
    function Pt(e) {
      var n = this.__data__, a = K(n, e);
      if (a < 0)
        return !1;
      var c = n.length - 1;
      return a == c ? n.pop() : At.call(n, a, 1), --this.size, !0;
    }
    function Mt(e) {
      var n = this.__data__, a = K(n, e);
      return a < 0 ? void 0 : n[a][1];
    }
    function Nt(e) {
      return K(this.__data__, e) > -1;
    }
    function zt(e, n) {
      var a = this.__data__, c = K(a, e);
      return c < 0 ? (++this.size, a.push([e, n])) : a[c][1] = n, this;
    }
    I.prototype.clear = Lt, I.prototype.delete = Pt, I.prototype.get = Mt, I.prototype.has = Nt, I.prototype.set = zt;
    function L(e) {
      var n = -1, a = e == null ? 0 : e.length;
      for (this.clear(); ++n < a; ) {
        var c = e[n];
        this.set(c[0], c[1]);
      }
    }
    function Ft() {
      this.size = 0, this.__data__ = {
        hash: new E(),
        map: new (Ae || I)(),
        string: new E()
      };
    }
    function Dt(e) {
      var n = V(this, e).delete(e);
      return this.size -= n ? 1 : 0, n;
    }
    function Bt(e) {
      return V(this, e).get(e);
    }
    function Ut(e) {
      return V(this, e).has(e);
    }
    function Ht(e, n) {
      var a = V(this, e), c = a.size;
      return a.set(e, n), this.size += a.size == c ? 0 : 1, this;
    }
    L.prototype.clear = Ft, L.prototype.delete = Dt, L.prototype.get = Bt, L.prototype.has = Ut, L.prototype.set = Ht;
    function P(e) {
      var n = this.__data__ = new I(e);
      this.size = n.size;
    }
    function qt() {
      this.__data__ = new I(), this.size = 0;
    }
    function Gt(e) {
      var n = this.__data__, a = n.delete(e);
      return this.size = n.size, a;
    }
    function Jt(e) {
      return this.__data__.get(e);
    }
    function Wt(e) {
      return this.__data__.has(e);
    }
    function Kt(e, n) {
      var a = this.__data__;
      if (a instanceof I) {
        var c = a.__data__;
        if (!Ae || c.length < r - 1)
          return c.push([e, n]), this.size = ++a.size, this;
        a = this.__data__ = new L(c);
      }
      return a.set(e, n), this.size = a.size, this;
    }
    P.prototype.clear = qt, P.prototype.delete = Gt, P.prototype.get = Jt, P.prototype.has = Wt, P.prototype.set = Kt;
    function Zt(e, n) {
      var a = se(e), c = !a && ae(e), d = !a && !c && xe(e), h = !a && !c && !d && Ee(e), m = a || c || d || h, p = m ? bt(e.length, String) : [], v = p.length;
      for (var A in e)
        m && // Safari 9 has enumerable `arguments.length` in strict mode.
        (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        d && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        h && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
        $e(A, v)) || p.push(A);
      return p;
    }
    function te(e, n, a) {
      (a !== void 0 && !X(e[n], a) || a === void 0 && !(n in e)) && re(e, n, a);
    }
    function Vt(e, n, a) {
      var c = e[n];
      (!(O.call(e, n) && X(c, a)) || a === void 0 && !(n in e)) && re(e, n, a);
    }
    function K(e, n) {
      for (var a = e.length; a--; )
        if (X(e[a][0], n))
          return a;
      return -1;
    }
    function re(e, n, a) {
      n == "__proto__" && W ? W(e, n, {
        configurable: !0,
        enumerable: !0,
        value: a,
        writable: !0
      }) : e[n] = a;
    }
    var Xt = ur();
    function Z(e) {
      return e == null ? e === void 0 ? Ye : We : j && j in Object(e) ? fr(e) : yr(e);
    }
    function Se(e) {
      return F(e) && Z(e) == f;
    }
    function Yt(e) {
      if (!R(e) || hr(e))
        return !1;
      var n = le(e) ? Tt : dt;
      return n.test(wr(e));
    }
    function Qt(e) {
      return F(e) && je(e.length) && !!b[Z(e)];
    }
    function er(e) {
      if (!R(e))
        return br(e);
      var n = Oe(e), a = [];
      for (var c in e)
        c == "constructor" && (n || !O.call(e, c)) || a.push(c);
      return a;
    }
    function Ie(e, n, a, c, d) {
      e !== n && Xt(n, function(h, m) {
        if (d || (d = new P()), R(h))
          tr(e, n, m, a, Ie, c, d);
        else {
          var p = c ? c(oe(e, m), h, m + "", e, n, d) : void 0;
          p === void 0 && (p = h), te(e, m, p);
        }
      }, Re);
    }
    function tr(e, n, a, c, d, h, m) {
      var p = oe(e, a), v = oe(n, a), A = m.get(v);
      if (A) {
        te(e, a, A);
        return;
      }
      var k = h ? h(p, v, a + "", e, n, m) : void 0, D = k === void 0;
      if (D) {
        var ce = se(v), ue = !ce && xe(v), Pe = !ce && !ue && Ee(v);
        k = v, ce || ue || Pe ? se(p) ? k = p : kr(p) ? k = ir(p) : ue ? (D = !1, k = or(v)) : Pe ? (D = !1, k = sr(v)) : k = [] : Tr(v) || ae(v) ? (k = p, ae(p) ? k = Cr(p) : (!R(p) || le(p)) && (k = dr(v))) : D = !1;
      }
      D && (m.set(v, k), d(k, v, c, h, m), m.delete(v)), te(e, a, k);
    }
    function rr(e, n) {
      return vr(mr(e, n, Le), e + "");
    }
    var nr = W ? function(e, n) {
      return W(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Sr(n),
        writable: !0
      });
    } : Le;
    function or(e, n) {
      return e.slice();
    }
    function ar(e) {
      var n = new e.constructor(e.byteLength);
      return new we(n).set(new we(e)), n;
    }
    function sr(e, n) {
      var a = ar(e.buffer);
      return new e.constructor(a, e.byteOffset, e.length);
    }
    function ir(e, n) {
      var a = -1, c = e.length;
      for (n || (n = Array(c)); ++a < c; )
        n[a] = e[a];
      return n;
    }
    function lr(e, n, a, c) {
      var d = !a;
      a || (a = {});
      for (var h = -1, m = n.length; ++h < m; ) {
        var p = n[h], v = void 0;
        v === void 0 && (v = e[p]), d ? re(a, p, v) : Vt(a, p, v);
      }
      return a;
    }
    function cr(e) {
      return rr(function(n, a) {
        var c = -1, d = a.length, h = d > 1 ? a[d - 1] : void 0, m = d > 2 ? a[2] : void 0;
        for (h = e.length > 3 && typeof h == "function" ? (d--, h) : void 0, m && pr(a[0], a[1], m) && (h = d < 3 ? void 0 : h, d = 1), n = Object(n); ++c < d; ) {
          var p = a[c];
          p && e(n, p, c, h);
        }
        return n;
      });
    }
    function ur(e) {
      return function(n, a, c) {
        for (var d = -1, h = Object(n), m = c(n), p = m.length; p--; ) {
          var v = m[++d];
          if (a(h[v], v, h) === !1)
            break;
        }
        return n;
      };
    }
    function V(e, n) {
      var a = e.__data__;
      return gr(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
    }
    function ne(e, n) {
      var a = mt(e, n);
      return Yt(a) ? a : void 0;
    }
    function fr(e) {
      var n = O.call(e, j), a = e[j];
      try {
        e[j] = void 0;
        var c = !0;
      } catch {
      }
      var d = ve.call(e);
      return c && (n ? e[j] = a : delete e[j]), d;
    }
    function dr(e) {
      return typeof e.constructor == "function" && !Oe(e) ? $t(ke(e)) : {};
    }
    function $e(e, n) {
      var a = typeof e;
      return n = n ?? u, !!n && (a == "number" || a != "symbol" && pt.test(e)) && e > -1 && e % 1 == 0 && e < n;
    }
    function pr(e, n, a) {
      if (!R(a))
        return !1;
      var c = typeof n;
      return (c == "number" ? ie(a) && $e(n, a.length) : c == "string" && n in a) ? X(a[n], e) : !1;
    }
    function gr(e) {
      var n = typeof e;
      return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
    }
    function hr(e) {
      return !!me && me in e;
    }
    function Oe(e) {
      var n = e && e.constructor, a = typeof n == "function" && n.prototype || q;
      return e === a;
    }
    function br(e) {
      var n = [];
      if (e != null)
        for (var a in Object(e))
          n.push(a);
      return n;
    }
    function yr(e) {
      return ve.call(e);
    }
    function mr(e, n, a) {
      return n = Ce(n === void 0 ? e.length - 1 : n, 0), function() {
        for (var c = arguments, d = -1, h = Ce(c.length - n, 0), m = Array(h); ++d < h; )
          m[d] = c[n + d];
        d = -1;
        for (var p = Array(n + 1); ++d < n; )
          p[d] = c[d];
        return p[n] = a(m), ht(e, this, p);
      };
    }
    function oe(e, n) {
      if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
        return e[n];
    }
    var vr = _r(nr);
    function _r(e) {
      var n = 0, a = 0;
      return function() {
        var c = It(), d = l - (c - a);
        if (a = c, d > 0) {
          if (++n >= i)
            return arguments[0];
        } else
          n = 0;
        return e.apply(void 0, arguments);
      };
    }
    function wr(e) {
      if (e != null) {
        try {
          return G.call(e);
        } catch {
        }
        try {
          return e + "";
        } catch {
        }
      }
      return "";
    }
    function X(e, n) {
      return e === n || e !== e && n !== n;
    }
    var ae = Se(/* @__PURE__ */ function() {
      return arguments;
    }()) ? Se : function(e) {
      return F(e) && O.call(e, "callee") && !Ct.call(e, "callee");
    }, se = Array.isArray;
    function ie(e) {
      return e != null && je(e.length) && !le(e);
    }
    function kr(e) {
      return F(e) && ie(e);
    }
    var xe = St || Ir;
    function le(e) {
      if (!R(e))
        return !1;
      var n = Z(e);
      return n == $ || n == w || n == y || n == Ke;
    }
    function je(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= u;
    }
    function R(e) {
      var n = typeof e;
      return e != null && (n == "object" || n == "function");
    }
    function F(e) {
      return e != null && typeof e == "object";
    }
    function Tr(e) {
      if (!F(e) || Z(e) != de)
        return !1;
      var n = ke(e);
      if (n === null)
        return !0;
      var a = O.call(n, "constructor") && n.constructor;
      return typeof a == "function" && a instanceof a && G.call(a) == kt;
    }
    var Ee = ye ? yt(ye) : Qt;
    function Cr(e) {
      return lr(e, Re(e));
    }
    function Re(e) {
      return ie(e) ? Zt(e) : er(e);
    }
    var Ar = cr(function(e, n, a, c) {
      Ie(e, n, a, c);
    });
    function Sr(e) {
      return function() {
        return e;
      };
    }
    function Le(e) {
      return e;
    }
    function Ir() {
      return !1;
    }
    o.exports = Ar;
  }(U, U.exports)), U.exports;
}
Sn();
function zn() {
  if (!(globalThis != null && globalThis.storyblokApiInstance))
    throw new Error("storyblokApiInstance has not been initialized correctly");
  return globalThis.storyblokApiInstance;
}

const api$5 = zn();

async function _getPeople() {
    return await api$5.getAll('cdn/stories', {
        starts_with: 'people/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.name:asc',
        resolve_relations: ['person.byline', 'person_links.location', 'collection.collection', 'person.sectors', 'person.practices'],
    })
}

const api$4 = zn();

async function _getInsights() {
    return await api$4.getAll('cdn/stories', {
        starts_with: 'insights/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.published_date:desc',
        resolve_links: 'url',
        resolve_relations: ['insight.category', 'insight.author', 'insight.expertise'],
    })
}

const $$Astro$21 = createAstro("https://jee-v2.k16e.co");
const $$Person = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$21, $$props, $$slots);
  Astro2.self = $$Person;
  const { blok } = Astro2.props;
  const { slug } = Astro2.params;
  const people = await _getPeople();
  const insights = await _getInsights();
  const personName = blok.name;
  const personSlug = slug.split("/")[1];
  const bylineRank = blok.byline[0].content.rank;
  const relatedPeople = people.filter((i) => i.content.byline[0].content.rank === bylineRank).filter((i) => i.name !== personName).slice(0, 7);
  const headings = [
    blok.bio?.[0]?.heading?.[0]?.heading,
    blok.sectors?.[0]?.heading?.[0]?.heading,
    blok.practices?.[0]?.heading?.[0]?.heading,
    ...blok.registers?.map((i) => i.title) || []
  ].filter(Boolean);
  const personInsights = insights.filter((i) => i.content.author.some((j) => j.slug === personSlug)).slice(0, 7);
  !_empty(relatedPeople) && headings.push("Related People");
  !_empty(personInsights) && headings.push("Insights");
  return renderTemplate`${renderComponent($$result, "HeaderPerson", $$HeaderPerson, { "person": blok })} ${renderComponent($$result, "Section", $$Section, { "tag": "div", "component": "person-details", "overlap": true, "spy": true, "class": "r-hide-overflow overflow-y-clip z-20 bg-[var(--color-bg-default)]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": ["overflow-x-clip"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full md:[grid-area:1/1/1/3] lg:[grid-area:1/1/1/4] self-start sticky bg-[var(--color-bg-default)] z-10 -top-px [&.is-pinned]:shadow md:!shadow-none overflow-auto",
    _xPadding("both-lg-down"),
    _sectionPadding("top-md-up")
  ], "class:list")} data-pin-top> ${renderComponent($$result4, "SectionSpy", $$SectionSpy, { "headings": headings, "breakAt": "md", "data-spy-sections": true })} </div> <div${addAttribute([
    "col-span-full md:[grid-area:1/3/2/9] lg:[grid-area:1/5/2/13]"
  ], "class:list")}> ${renderComponent($$result4, "SectionStack", $$SectionStack, { "blok": blok.bio[0], "showLess": true, "xPadding": false, "class:list": [
    _xPadding("both-md-down-lg-r"),
    "lg:max-w-[48rem]"
  ] })} ${blok.sectors && !_empty(blok.sectors) && renderTemplate`${renderComponent($$result4, "SectionMinicards", $$SectionMinicards, { "blok": blok.sectors[0], "list": blok.sectors[0].collection, "xPadding": false, "overlap": true, "class:list": [
    _xPadding("both-md-down-lg-r"),
    "lg:max-w-[48rem]"
  ] })}`} ${blok.practices && !_empty(blok.practices) && renderTemplate`${renderComponent($$result4, "SectionMinicards", $$SectionMinicards, { "blok": blok.practices[0], "list": blok.practices[0].collection, "xPadding": false, "overlap": true, "class:list": [
    _xPadding("both-md-down-lg-r"),
    "lg:max-w-[48rem]"
  ] })}`} ${blok.registers.map((i) => renderTemplate`${renderComponent($$result4, "Register", $$Register, { "entry": i, "overlap": true, "xPadding": false, "class:list": [
    _xPadding("both-md-down-lg-r"),
    "lg:max-w-[48rem]"
  ] })}`)} ${!_empty(relatedPeople) && renderTemplate`${renderComponent($$result4, "CarouselPeople", $$CarouselPeople, { "altHeading": "Related People", "altComponent": "related-people", "altOverlap": true, "altLabel": "All People", "altLink": "/people", "altPeople": relatedPeople, "isFromCollection": true, "altCollection": relatedPeople })}`} ${!_empty(personInsights) && renderTemplate`${renderComponent($$result4, "SectionLatest", $$SectionLatest, { "altComponent": "insights", "altHeading": "Insights", "altOverlap": true, "altLabel": "All Insights", "altLink": "/insights", "altInsights": personInsights, "isFromCollection": true, "altCollection": personInsights, "defaultCase": false })}`} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/types/Person.astro", void 0);

const $$Astro$20 = createAstro("https://jee-v2.k16e.co");
const $$HeadingStretch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$20, $$props, $$slots);
  Astro2.self = $$HeadingStretch;
  const {
    tag = "span",
    size = "1hx",
    text,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["border-l border-[var(--color-border-muted)]", classes], "class:list")}${spreadAttributes(props)}> <div class="h-[2.625rem] flex pl-4 border-l-[3px] border-[var(--color-emphasis)]"> ${renderComponent($$result, "Text", $$Text, { "tag": tag, "text": text, "color": "title", "size": size, "family": "display", "weight": "bold" })} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/HeadingStretch.astro", void 0);

const $$Astro$1$ = createAstro("https://jee-v2.k16e.co");
const $$BrandCutout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1$, $$props, $$slots);
  Astro2.self = $$BrandCutout;
  const { top, bottom = true, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "absolute -right-1 sm:-right-3 md:-right-8 lg:-right-18",
    bottom && "bottom-[-85%] md:bottom-[-140%] xl:bottom-[-130%]",
    top && "top-[95%] sm:top-[75%] md:top-[66%] lg:top-[46%] xl:top-[48%]",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Icon", $$Icon, { "name": "cutout-up", "class": "w-[40rem] md:w-[45rem] lg:w-[58rem] scale-105 h-auto text-[var(--color-main)]" })} </div>`;
}, "/Users/kb/Documents/jee/src/atoms/BrandCutout.astro", void 0);

const $$Astro$1_ = createAstro("https://jee-v2.k16e.co");
const $$HeaderInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1_, $$props, $$slots);
  Astro2.self = $$HeaderInsight;
  const {
    blok,
    breadcrumbLink,
    breadcrumbLabel,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "header": true, "section": false, "class": "r-hide-overflow min-h-[19.5rem] xs:min-h-[17rem] sm:min-h-[16rem] md:min-h-[19rem] lg:min-h-[20rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full md:col-span-6 lg:col-span-8 xl:col-span-9 xs:pr-4 lg:pr-26"> <div class="flex flex-col gap-2 sm:gap-3"> ${renderComponent($$result4, "Breadcrumb", $$Breadcrumb, { "page": blok.title, "altLink": breadcrumbLink, "labelText": breadcrumbLabel })} ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": blok.title, "color": "title", "size": "3", "family": "display", "weight": "extra", "tighten": true, "class": "mb-[0.375rem] line-clamp-4 lg:line-clamp-3" })} <div class="flex items-center mt-3 sm:mt-4 space-x-4"> ${renderComponent($$result4, "FormattedDate", $$FormattedDate, { "dateString": blok.published_date, "size": "copy", "weight": "medium", "color": "caption" })} ${blok.pdf && blok.pdf.filename && renderTemplate`<div class="px-4 border-l border-[var(--color-border-muted)]"> <a${addAttribute(blok.pdf.filename, "href")} download class="flex"> <span class="sr-only">${`Download PDF of ${blok.title}`}</span> ${renderComponent($$result4, "Icon", $$Icon, { "name": "pdf", "class": "size-8 text-[var(--color-text-emphasis)]" })} </a> </div>`} </div> </div> </div> ` })} ` })} ${renderComponent($$result2, "BrandCutout", $$BrandCutout, { "top": true })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderInsight.astro", void 0);

const $$Astro$1Z = createAstro("https://jee-v2.k16e.co");
const $$InputCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Z, $$props, $$slots);
  Astro2.self = $$InputCheck;
  const {
    label,
    id,
    name,
    checked,
    required,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(["flex items-center m-0 cursor-pointer w-full", classes], "class:list")}${spreadAttributes(props)}> <input type="checkbox"${addAttribute(id, "value")}${addAttribute(`${name}[]`, "name")}${addAttribute(id, "id")}${addAttribute([
    "h-4 w-4 border-[var(--color-border-subtle)] text-[var(--color-emphasis)] focus:ring-[var(--color-emphasis)]",
    _fontSize("blurb")
  ], "class:list")}${addAttribute(checked, "checked")}> <label${addAttribute(id, "for")}${addAttribute([
    "pl-3 block font-medium font-display text-[var(--color-text-body)] w-full",
    _fontSize("blurb")
  ], "class:list")}>${label}</label> </p>`;
}, "/Users/kb/Documents/jee/src/atoms/InputCheck.astro", void 0);

const $$Astro$1Y = createAstro("https://jee-v2.k16e.co");
const $$InputText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Y, $$props, $$slots);
  Astro2.self = $$InputText;
  const {
    label,
    icon,
    id,
    name,
    type = "text",
    value,
    required,
    style = "default",
    hideLabel = true,
    placeholder = "Find a JEE",
    isSearch,
    useShadow,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["relative", classes], "class:list")}${spreadAttributes(props)}> <label${addAttribute(id, "for")}${addAttribute([
    hideLabel ? "sr-only" : "font-medium mb-1 flex",
    _fontSize("blurb")
  ], "class:list")}> <span>${label}</span> ${required && renderTemplate`<span class="text-[var(--color-text-emphasis)]">*</span>`} </label> ${isSearch && renderTemplate`<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "text-[var(--color-text-muted)] size-5", "aria-hidden": "true" })} </div>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(id, "id")}${addAttribute([
    "flex items-center w-full h-[2.875rem] rounded-lg border-0 py-3 text-[var(--color-text-body)] placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-inset focus:ring-[var(--color-emphasis)]",
    isSearch ? "pl-10" : "px-4",
    useShadow ? "shadow focus:shadow-none" : "ring-1 ring-inset ring-[var(--color-border-subtle)]",
    _fontSize("blurb")
  ], "class:list")}${addAttribute(value, "value")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}> </div>`;
}, "/Users/kb/Documents/jee/src/atoms/InputText.astro", void 0);

const $$Astro$1X = createAstro("https://jee-v2.k16e.co");
const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1X, $$props, $$slots);
  Astro2.self = $$Newsletter;
  const {
    formId,
    formAction,
    modal,
    headingType = "stretch",
    class: classes,
    ...props
  } = Astro2.props, newsletter = _newsletter.value.global[0], title = newsletter.title, id = formId ?? newsletter.component, success = newsletter.success_message, error = newsletter.error_message, source = newsletter.message_source, topics = _categories.value;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["space-y-6", classes], "class:list")} data-newsletter${spreadAttributes(props)}> ${headingType === "stretch" ? renderTemplate`${renderComponent($$result, "HeadingStretch", $$HeadingStretch, { "tag": "h3", "text": title })}` : renderTemplate`${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": title, "level": "h2", "size": "5", "padding": "small" })}`} <div class="border-y-2 border-[var(--color-border-muted)] py-5 ml:py-6 hidden form-submitted"> <div class="space-y-4 on-success -translate-y-4 opacity-0"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": success, "size": "1hx", "family": "display", "weight": "semi", "color": "caption" })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": `~ ${source}`, "size": "copy", "family": "display", "weight": "medium", "color": "caption" })} </div> <div class="on-error -translate-y-4 opacity-0"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": error, "size": "1hx", "family": "display", "weight": "semi", "color": "caption" })} </div> </div> <form${addAttribute(id, "id")} form-id="fM7qnZ5XF"${addAttribute(success, "data-form-success")}${addAttribute(error, "data-form-error")}${addAttribute(source, "data-message-source")}> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-5"> ${renderComponent($$result, "InputText", $$InputText, { "label": "Name", "id": modal ? "modal-name" : "name", "name": modal ? "Name (Modal)" : "Name", "placeholder": "Your Full Name", "required": true, "useShadow": true, "hideLabel": false, "class": "w-full md:col-span-1" })} ${renderComponent($$result, "InputText", $$InputText, { "label": "Email", "id": modal ? "modal-email" : "email", "name": modal ? "Email (Modal)" : "Email", "placeholder": "Email Address", "required": true, "useShadow": true, "hideLabel": false, "class": "w-full md:col-span-1" })} ${renderComponent($$result, "InputText", $$InputText, { "label": "Organization", "id": modal ? "modal-org" : "org", "name": modal ? "Organization (Modal)" : "Organization", "placeholder": "Your Organization", "required": true, "useShadow": true, "hideLabel": false, "class": "w-full md:col-span-2" })} <div class="col-span-full space-y-3 my-4"> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": "Topics of Interest", "level": "h4", "size": "6", "padding": "small" })} ${topics.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i.content.title, "id": modal ? `modal-${_slugify(i.content.title)}` : _slugify(i.content.title), "name": i.content.title, "checked": true })}`)} </div> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "tag": "button", "label": "Subscribe", "type": "submit", "iconRight": true, "icon": "paper-plane", "data-form-submit": true })} </div> </form> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Newsletter.astro", void 0);

const $$Astro$1W = createAstro("https://jee-v2.k16e.co");
const $$Insight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1W, $$props, $$slots);
  Astro2.self = $$Insight;
  const { blok } = Astro2.props;
  const authors = blok.author.slice(0, 3);
  const expertise = blok.expertise.slice(0, 3);
  const suggested = blok.suggested;
  return renderTemplate`${renderComponent($$result, "HeaderInsight", $$HeaderInsight, { "blok": blok, "breadcrumbLink": "/insights", "breadcrumbLabel": "JEE Insights" })} ${renderComponent($$result, "Wrapper", $$Wrapper$1, { "class:list": [_sectionPadding("bottom"), "relative z-30"] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, { "class:list": [_gridGap("y")] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full lg:[grid-area:1/1/2/4] self-start lg:sticky z-10 lg:-top-px lg:pt-8 order-2 lg:order-1 lg:h-screen lg:pb-4 lg:overflow-auto" data-pin-top> <div class="flex flex-col gap-8 lg:gap-12"> <div class="flex flex-col gap-4"> ${renderComponent($$result3, "HeadingStretch", $$HeadingStretch, { "tag": "h3", "text": "Authors" })} ${authors.map((i) => renderTemplate`${renderComponent($$result3, "CardCapsule", $$CardCapsule, { "entry": i, "link": i.full_slug, "subtitle": `JEE People`, "top": true, "fill": false, "adjustWidth": false })}`)} </div> <div class="flex flex-col gap-4"> ${renderComponent($$result3, "HeadingStretch", $$HeadingStretch, { "tag": "h3", "text": "Expertise" })} ${expertise.map((i) => renderTemplate`${renderComponent($$result3, "CardCapsule", $$CardCapsule, { "entry": i, "link": i.full_slug, "subtitle": `JEE Expertise`, "fill": false, "adjustWidth": false })}`)} </div> </div> </div> <div class="col-span-full lg:[grid-area:1/4/2/13] grid grid-cols-6 order-1 lg:order-2"> <div${addAttribute([_sectionPadding("bottom"), "col-span-full"], "class:list")}> ${renderComponent($$result3, "Image", $$Image, { "filename": blok.image.filename, "alt": blok.image.alt, "class:list": [
    "h-[24rem] sm:h-[30rem] md:h-[35rem] rounded-[1.5rem] md:rounded-[2rem]"
  ] })} </div> <div${addAttribute([
    "col-span-full md:col-span-4 md:col-start-2 lg:col-start-1 lg:col-span-5",
    _spaceY()
  ], "class:list")}> <div class="md:mx-[calc(-50vw+75%)] lg:ml-0 lg:mr-[calc(-50vw+75%)]"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "text": blok.excerpt, "color": "body", "size": "1hx", "weight": "medium", "italic": true })} </div> ${renderComponent($$result3, "RichText", $$RichText, { "text": blok.post, "post": true })} <div class="mx-[calc(-50vw+50%)] md:mx-[calc(-50vw+75%)] lg:ml-0 lg:mr-[calc(-50vw+75%)] bg-[var(--color-bg-default-elevated)] px-4 py-4 border-t border-[var(--color-border-muted)]"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "text": blok.disclaimer, "color": "body", "size": "footnote" })} </div> </div> </div> ` })} ` })} ${renderComponent($$result, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [_sectionPadding("bottom"), "relative z-30"] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, { "class:list": [_gridGap("y")] }, { "default": ($$result3) => renderTemplate` <div class="col-span-full ml:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/6] bg-[var(--color-bg-default-elevated)] ml:rounded-r-[2rem]"> <div${addAttribute([
    _xPadding("left"),
    _spaceY(),
    "px-4 sm:px-4 md:px-6 ml:pr-8 py-6 sm:py-8 ml:py-10"
  ], "class:list")}> ${renderComponent($$result3, "Newsletter", $$Newsletter, {})} </div> </div> <div class="col-span-full ml:[grid-area:1/5/2/9] lg:[grid-area:1/6/2/13]"> ${renderComponent($$result3, "SectionLatest", $$SectionLatest, { "altHeading": "Related Insights", "altComponent": "related-insights", "altOverlap": true, "altLabel": "All Insights", "altLink": "/insights", "altInsights": suggested, "altCollection": suggested, "defaultCase": false })} </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/types/Insight.astro", void 0);

const $$Astro$1V = createAstro("https://jee-v2.k16e.co");
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1V, $$props, $$slots);
  Astro2.self = $$Chip;
  const {
    tag,
    text = "Hybrid",
    theme = "default",
    class: classes,
    ...props
  } = Astro2.props;
  const Tag = tag || "span";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "inline-flex w-auto items-center justify-center py-2 px-3.5 rounded-full max-w-28 tracking-wide",
    theme === "default" && "bg-parchment-600",
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "text": text, "color": "title-light", "size": "blurb", "weight": "medium", "uppercase": true, "loosen": true })} ` })}`;
}, "/Users/kb/Documents/jee/src/atoms/Chip.astro", void 0);

const $$Astro$1U = createAstro("https://jee-v2.k16e.co");
const $$ListSession = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1U, $$props, $$slots);
  Astro2.self = $$ListSession;
  const { heading, duration, person, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-3", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "HeadingStretch", $$HeadingStretch, { "tag": "h4", "text": heading, "size": "2hx" })} <div class="flex flex-col gap-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": duration ? duration : "All Day", "color": "body", "size": "emphasis", "weight": "medium" })} ${renderComponent($$result, "CardCapsule", $$CardCapsule, { "entry": person, "adjustWidth": false, "fill": false, "top": true })} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/ListSession.astro", void 0);

const $$Astro$1T = createAstro("https://jee-v2.k16e.co");
const $$ListStat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1T, $$props, $$slots);
  Astro2.self = $$ListStat;
  const { heading, uppercase = true, size = "6", body, richtext, color = "body", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-1", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": heading, "size": size, "weight": "semi", "color": color, "uppercase": uppercase, "loosen": uppercase })} ${richtext ? renderTemplate`${renderComponent($$result, "RichText", $$RichText, { "text": body, "pType": "blurb" })}` : renderTemplate`${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": body, "size": "blurb", "color": "caption" })}`} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/ListStat.astro", void 0);

const excludedPaths = atom(['/legal']);

function _hideBrandcutout(path) {
    return excludedPaths.get().some(excludedPath => path.startsWith(excludedPath))
}

const $$Astro$1S = createAstro("https://jee-v2.k16e.co");
const $$HeaderBasic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1S, $$props, $$slots);
  Astro2.self = $$HeaderBasic;
  const {
    blok,
    centered,
    altComponent,
    breadcrumbLink,
    breadcrumbLabel,
    altTitle,
    altCopy,
    more,
    class: classes,
    ...props
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isExcluded = _hideBrandcutout(currentPath);
  const copy = altCopy ? altCopy : blok.copy;
  const isCentered = blok?.centered || centered;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": altComponent ? altComponent : blok.component, "header": true, "section": false, "class:list": [
    "r-hide-overflow min-h-[16.5rem] md:min-h-[20rem] lg:min-h-[22rem]",
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "gap-y-5 md:gap-y-12 lg:gap-y-14" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full",
    isCentered ? "justify-self-center md:[grid-area:1/2/2/8] lg:[grid-area:1/3/2/11]" : "md:col-span-8"
  ], "class:list")}> <div${addAttribute([
    "flex flex-col gap-2 sm:gap-3 sm:pr-8 lg:pr-16 max-w-screen-sm ml:max-w-screen-md lg:max-w-screen-lg",
    isCentered && "text-center mx-auto"
  ], "class:list")}> ${renderComponent($$result4, "Breadcrumb", $$Breadcrumb, { "altLink": breadcrumbLink ? breadcrumbLink : blok.link[0].link, "labelText": breadcrumbLabel ? breadcrumbLabel : "JEE Home", "page": altTitle ? altTitle : blok.title, "class:list": isCentered && "justify-center" })} ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": altTitle ? altTitle : blok.headline, "color": "title", "size": "3", "weight": "extra", "tighten": true, "class": "line-clamp-3" })} ${!_empty(copy) && copy.length > 1 && renderTemplate`${renderComponent($$result4, "Text", $$Text, { "tag": "p", "text": copy, "color": "body", "size": "copy", "class": "mt-1" })}`} ${blok?.read_more && renderTemplate`<div class="flex items-center mt-4 sm:mt-6"> ${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "link": blok.read_more[0].link, "label": blok.read_more[0].label })} </div>`} ${more && renderTemplate`<div class="flex items-center mt-3 sm:mt-4 space-x-4"> ${renderSlot($$result4, $$slots["default"])} </div>`} </div> </div> ` })} ` })} ${!isExcluded && renderTemplate`${renderComponent($$result2, "BrandCutout", $$BrandCutout, { "top": true, "bottom": false, "class": "md:!top-[80%] lg:!top-[55%]" })}`}` })}`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderBasic.astro", void 0);

function _formatDate(d) {
    const
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        day = new Date(d);

    return day.toLocaleDateString('en-GB', options)
}

const $$Astro$1R = createAstro("https://jee-v2.k16e.co");
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1R, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id, theme = "light" } = Astro2.props;
  async function fetchTweet(id2, theme2 = "light") {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      oembedUrl.searchParams.set("theme", theme2);
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id, theme);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

const urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher$1(url) {
  const match = url.match(urlPattern$1);
  return match?.[3];
}

const $$Astro$1Q = createAstro("https://jee-v2.k16e.co");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1Q, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher$1(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span> </a> ` })} ${renderScript($$result, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(
  async (res) => parseHTML(await res.text()).document
);
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$1P = createAstro("https://jee-v2.k16e.co");
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1P, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const {
    id,
    poster,
    posterQuality = "default",
    params = "",
    playlabel = "Play",
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    if (data) {
      const resolution = { max: 1280, high: 640, default: 480, low: 120 }[posterQuality] || 480;
      const { thumbnail_large } = data?.[0] || {};
      if (thumbnail_large.endsWith("d_640")) {
        posterURL = thumbnail_large.slice(0, -3) + resolution;
      } else {
        posterURL = thumbnail_large;
      }
    }
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t) t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (style) styles.push(style);
  if (color) styles.push(`--ltv-color: #${color}`);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";"), ...attrs }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a> ` })} ${renderScript($$result, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro$1O = createAstro("https://jee-v2.k16e.co");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1O, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { id, hideMedia = false } = Astro2.props;
  const meta = await parseOpenGraph(id);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "link-preview",
    {
      "link-preview--has-video": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "class:list")} data-astro-cid-ztfdmrby><div class="link-preview__content" data-astro-cid-ztfdmrby><header data-astro-cid-ztfdmrby><a class="link-preview__title"${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain" data-astro-cid-ztfdmrby>${domain}</small>`}</header><small class="link-preview__description" data-astro-cid-ztfdmrby>${meta.description}</small></div>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-ztfdmrby><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-ztfdmrby></video>` : meta.image ? renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" data-astro-cid-ztfdmrby>` : null}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-ztfdmrby><a${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${id}</a></div>`}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);

const $$Astro$1N = createAstro("https://jee-v2.k16e.co");
const $$BaselineIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1N, $$props, $$slots);
  Astro2.self = $$BaselineIcon;
  const paths = {
    limited: `<path fill="var(--color-limited)" d="m10 0 6 6-2 2-6-6 2-2Zm12 12-2 2 6 6 2-2-6-6Zm4-12 2 2-18 18-2-2L26 0Z"/><path fill="var(--color-limited-secondary)" d="m8 2 2 2-6 6 6 6-2 2-8-8 8-8Zm20 0 8 8-8 8-2-2 6-6-6-6 2-2Z"/>`,
    widely: `<path fill="var(--color-widely)" d="m18 8 2 2-2 2-2-2 2-2Z"/><path fill="var(--color-widely)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/><path fill="var(--color-widely-secondary)" d="m28 2-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/>`,
    newly: `<path fill="var(--color-newly-secondary)" d="m10 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm16 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4-4 2 2-2 2-2-2 2-2ZM6 4l2 2-2 2-2-2 2-2Z"/><path fill="var(--color-newly)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`,
    no_data: `<path fill="var(--color-no_data-secondary)" d="m18 8 2 2-2 2-2-2 2-2Zm10-6-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/><path fill="var(--color-no_data-secondary)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`
  };
  return renderTemplate`${maybeRenderHead()}<svg width="36" height="20" viewBox="0 0 36 20" class="baseline-icon" aria-hidden="true">${unescapeHTML(paths[Astro2.props.support])}</svg>`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/BaselineIcon.astro", void 0);

const chrome = new Proxy({"src":"/_astro/chrome.f1eQSm4k.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/chrome.svg";
							}
							
							return target[name];
						}
					});

const edge = new Proxy({"src":"/_astro/edge.B7O1xshw.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/edge.svg";
							}
							
							return target[name];
						}
					});

const firefox = new Proxy({"src":"/_astro/firefox.CMmddY9p.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/firefox.svg";
							}
							
							return target[name];
						}
					});

const safari = new Proxy({"src":"/_astro/safari.CdqjFDzc.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/safari.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1M = createAstro("https://jee-v2.k16e.co");
const $$BrowserIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1M, $$props, $$slots);
  Astro2.self = $$BrowserIcon;
  const { browser } = Astro2.props;
  const icons = { chrome, edge, firefox, safari };
  const { src, width, height } = icons[browser];
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")} alt=""${addAttribute(width, "width")}${addAttribute(height, "height")}>`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/BrowserIcon.astro", void 0);

const $$Astro$1L = createAstro("https://jee-v2.k16e.co");
const $$SupportIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1L, $$props, $$slots);
  Astro2.self = $$SupportIcon;
  const { baseline, browserImplementation } = Astro2.props;
  const paths = {
    available: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/><path d="m11.35 8.13-5.01 4.93-3-2.96 1-.98 2 1.96 4-3.94 1 .98Z"/>`,
    unavailable: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.08-4.48 10.08-10S12.29.2 6.73.2C4.37.2 2.2 1 .5 2.34c.27.31.52.64.75.97Z"/><path d="M10.32 8.13 8.33 10.1l2 1.97-1 .99-1.99-1.98-1.99 1.98-.99-.99 1.99-1.97-1.99-1.97 1-.99 1.98 1.97 1.99-1.97 1 .99Z"/>`,
    no_data: `<path d="M7.18 12.28h-1.2c.01-.41.05-.74.12-1 .07-.27.19-.5.35-.72.16-.22.38-.47.65-.74l.54-.56c.16-.18.3-.37.4-.58.1-.2.16-.45.16-.74 0-.3-.06-.55-.16-.76a1.1 1.1 0 0 0-.47-.5 1.5 1.5 0 0 0-.75-.16c-.25 0-.48.04-.7.13-.23.09-.4.23-.54.41-.14.19-.21.43-.22.72H4.18c0-.48.12-.89.36-1.23.23-.35.55-.61.95-.8.4-.18.84-.27 1.33-.27.55 0 1 .1 1.39.3.38.2.68.47.88.84.2.36.3.79.3 1.29 0 .38-.08.73-.24 1.05-.15.32-.35.62-.6.9-.24.28-.5.55-.77.8-.24.22-.4.47-.48.74-.08.27-.12.56-.12.88ZM5.94 14.3c0-.2.06-.35.18-.49.12-.13.29-.2.52-.2.23 0 .4.07.52.2.12.14.18.3.18.49 0 .18-.06.34-.18.47-.12.13-.3.2-.52.2a.67.67 0 0 1-.52-.2.68.68 0 0 1-.18-.47Z"/><path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77c-2.06 0-3.96-.7-5.47-1.88-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/>`
  };
  const support = baseline === "limited" ? browserImplementation?.status || "unavailable" : baseline;
  const icon = support === "newly" || support === "widely" ? "available" : support;
  const fill = {
    no_data: "var(--color-no_data)",
    unavailable: "var(--color-limited)",
    newly: "var(--color-newly)",
    widely: "var(--color-widely)",
    available: "var(--color-widely)"
  }[support];
  return renderTemplate`${maybeRenderHead()}<svg width="17" height="21" aria-hidden="true"${addAttribute(fill, "fill")}>${unescapeHTML(paths[icon])}</svg>`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/SupportIcon.astro", void 0);

const $$Astro$1K = createAstro("https://jee-v2.k16e.co");
const $$BrowserSupport = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1K, $$props, $$slots);
  Astro2.self = $$BrowserSupport;
  const { browser, feature } = Astro2.props;
  const baseline = feature.baseline.status || "no_data";
  const browserImplementation = feature.browser_implementations?.[browser];
  const browserName = {
    chrome: "Chrome",
    edge: "Edge",
    firefox: "Firefox",
    safari: "Safari"
  }[browser];
  let supportLabel = browserImplementation?.status || "no";
  if (baseline === "no_data") supportLabel = "unknown";
  if (supportLabel === "available") supportLabel = "yes";
  return renderTemplate`${maybeRenderHead()}<span part="browser-support"> <span part="browser-support-label">
Supported in ${browserName}: ${supportLabel}.
</span> ${renderComponent($$result, "BrowserIcon", $$BrowserIcon, { "browser": browser })} ${renderComponent($$result, "SupportIcon", $$SupportIcon, { "baseline": baseline, "browserImplementation": browserImplementation })} </span>`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/BrowserSupport.astro", void 0);

const $$Astro$1J = createAstro("https://jee-v2.k16e.co");
const $$BaselineStatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1J, $$props, $$slots);
  Astro2.self = $$BaselineStatus;
  const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";
  const BASELINE_DEFS = {
    limited: {
      title: "Limited availability",
      defaultDescription: "This feature is not Baseline because it does not work in some of the most widely-used browsers."
    },
    newly: {
      title: "",
      defaultDescription: "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers."
    },
    widely: {
      title: "Widely available",
      defaultDescription: "This feature is well established and works across many devices and browser versions."
    },
    no_data: {
      title: "Unknown availability",
      defaultDescription: "We currently don\u2019t have browser support information about this feature."
    }
  };
  function getBaselineDate(feature2) {
    return feature2.baseline.low_date ? new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long"
    }).format(new Date(feature2.baseline.low_date)) : "";
  }
  function getDescriptionDate(baseline2, date) {
    if (baseline2 === "newly" && date) {
      return `Since ${date} this feature works across the latest
			devices and browser versions. This feature might not work in older
			devices or browsers.`;
    } else if (baseline2 === "widely" && date) {
      return `This feature is well established and works across many
			devices and browser versions. It\u2019s been available across browsers
			since ${date}`;
    }
    return BASELINE_DEFS[baseline2].defaultDescription;
  }
  const featureData = await safeGet(API_ENDPOINT + Astro2.props.id);
  const feature = featureData?.baseline ? featureData : {
    baseline: {
      status: "no_data"
    },
    name: Astro2.props.id || "Unknown feature"
  };
  const baseline = feature.baseline.status || "no_data";
  const title = BASELINE_DEFS[baseline].title;
  const baselineDate = getBaselineDate(feature);
  const description = getDescriptionDate(baseline, baselineDate);
  const year = baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`baseline-status baseline-status--${baseline}`, "class")} data-astro-cid-7wt35nye> <template shadowrootmode="open" data-astro-cid-7wt35nye> <div part="root" data-astro-cid-7wt35nye> <p part="feature-name" data-astro-cid-7wt35nye>${feature.name}</p> <details part="details" data-astro-cid-7wt35nye> <summary part="summary" data-astro-cid-7wt35nye> ${renderComponent($$result, "BaselineIcon", $$BaselineIcon, { "support": baseline, "data-astro-cid-7wt35nye": true })} <div part="summary-content" data-astro-cid-7wt35nye> <div part="summary-label" data-astro-cid-7wt35nye> ${!(baseline === "limited" || baseline === "no_data") && renderTemplate`<strong data-astro-cid-7wt35nye>Baseline</strong>`} ${title} ${year} ${baseline === "newly" && renderTemplate`<span part="badge" data-astro-cid-7wt35nye>newly available</span>`} </div> <div part="browsers" data-astro-cid-7wt35nye> ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "chrome", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "edge", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "firefox", "feature": feature, "data-astro-cid-7wt35nye": true })} ${renderComponent($$result, "BrowserSupport", $$BrowserSupport, { "browser": "safari", "feature": feature, "data-astro-cid-7wt35nye": true })} </div> </div> <style>
						[part='caret'] svg {
							transition: transform 0.3s;
						}
						details[open] [part='caret'] svg {
							transform: rotate(180deg);
						}
					</style> <span part="caret" aria-hidden="true" data-astro-cid-7wt35nye> <svg width="11" height="7" fill="currentColor" data-astro-cid-7wt35nye> <path d="M5.5 6.45.25 1.2l.94-.94L5.5 4.6 9.8.3l.95.94L5.5 6.45Z" data-astro-cid-7wt35nye></path> </svg> </span> </summary> <p part="description" data-astro-cid-7wt35nye>${unescapeHTML(description)}</p> ${baseline !== "no_data" && renderTemplate`<p data-astro-cid-7wt35nye> <a${addAttribute(`https://webstatus.dev/features/${feature.feature_id}`, "href")} target="_top" part="link" data-astro-cid-7wt35nye>${`${feature.name} on Web Platform Status`}</a> </p>`} </details> </div> </template> </div> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-baseline-status/BaselineStatus.astro", void 0);

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const escapeHTML = (str) => str?.replace(/[&<>"']/g, (match) => escapeMap[match] || match) ?? "";
function renderPostAsHtml(post) {
  if (!post) {
    return "";
  }
  const rt = new RichText(post.record);
  let html = "";
  for (const segment of rt.segments()) {
    if (segment.isLink()) {
      html += `<a href="${escapeHTML(segment.link?.uri)}">${escapeHTML(
        segment.text
      )}</a>`;
    } else if (segment.isMention()) {
      html += `<a href="https://bsky.app/profile/${escapeHTML(
        segment.mention?.did
      )}">${escapeHTML(segment.text)}</a>`;
    } else if (segment.isTag()) {
      html += `<a href="https://bsky.app/hastag/${escapeHTML(
        segment.tag?.tag
      )}">#${escapeHTML(segment.tag?.tag)}</a>`;
    } else {
      html += escapeHTML(segment.text);
    }
  }
  return html;
}
function viewRecordToPostView(viewRecord) {
  const { value, embeds, ...rest } = viewRecord;
  return {
    ...rest,
    $type: "app.bsky.feed.defs#postView",
    record: value,
    embed: embeds?.[0]
  };
}
function viewRecordToEmbed(viewRecord, allowNestedQuotes = false) {
  const { embed } = viewRecordToPostView(viewRecord);
  if (allowNestedQuotes) {
    return embed;
  } else {
    if (AppBskyEmbedImages.isView(embed) || AppBskyEmbedExternal.isView(embed) || AppBskyEmbedVideo.isView(embed)) {
      return embed;
    } else if (AppBskyEmbedRecordWithMedia.isView(embed) && (AppBskyEmbedImages.isView(embed.media) || AppBskyEmbedExternal.isView(embed.media) || AppBskyEmbedVideo.isView(embed.media))) {
      return embed.media;
    }
  }
  return void 0;
}
const agent = new AtpAgent({
  service: "https://public.api.bsky.app"
});
async function resolvePost(postUrl) {
  let atUri;
  if (typeof postUrl === "object") {
    return postUrl;
  }
  if (postUrl.startsWith("at:")) {
    atUri = postUrl;
  } else {
    if (!postUrl.startsWith("https://bsky.app/")) {
      return void 0;
    }
    const urlParts = new URL(postUrl).pathname.split("/");
    let did = urlParts[2];
    const postId = urlParts[4];
    if (!did || !postId) {
      return void 0;
    }
    if (!did.startsWith("did:")) {
      try {
        const handleResolution = await agent.resolveHandle({ handle: did });
        if (!handleResolution.data.did) {
          return void 0;
        }
        did = handleResolution.data.did;
      } catch (e) {
        console.error(
          `[error]  astro-embed
         ` + (e?.message ?? e)
        );
        return void 0;
      }
    }
    atUri = `at://${did}/app.bsky.feed.post/${postId}`;
  }
  try {
    const hydratedPost = await agent.getPosts({ uris: [atUri] });
    return hydratedPost.data.posts[0];
  } catch (e) {
    console.error(`[error]  astro-embed
         ` + (e?.message ?? e));
    return void 0;
  }
}
function atUriToPostUri(atUri) {
  const [, , did, , postId] = atUri.split("/");
  return `https://bsky.app/profile/${did}/post/${postId}`;
}
function atUriToStarterPackUri(atUri) {
  const [, , did, , packId] = atUri.split("/");
  return `https://bsky.app/starter-pack/${did}/${packId}`;
}
function atUriToListUri(atUri) {
  const [, , did, , listId] = atUri.split("/");
  return `https://bsky.app/profile/${did}/lists/${listId}`;
}
function starterPackOgImage(uri) {
  const [, , did, , packId] = uri.split("/");
  return `https://ogcard.cdn.bsky.app/start/${did}/${packId}`;
}

const $$Astro$1I = createAstro("https://jee-v2.k16e.co");
const $$External = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1I, $$props, $$slots);
  Astro2.self = $$External;
  const { uri, thumb, title, description } = Astro2.props.embed.external;
  const domain = new URL(uri).hostname;
  const { compact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(uri, "href")} target="_blank" rel="noopener noreferrer nofollow" class="external-link" data-astro-cid-stjl7fun> ${!compact && thumb && renderTemplate`<img${addAttribute(thumb, "src")}${addAttribute(title, "alt")} class="thumbnail" data-astro-cid-stjl7fun>`} <div class="content" data-astro-cid-stjl7fun> <p class="domain" data-astro-cid-stjl7fun>${domain}</p> ${!compact && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-stjl7fun": true }, { "default": ($$result2) => renderTemplate` <p class="title" data-astro-cid-stjl7fun>${title}</p> <p class="description" data-astro-cid-stjl7fun>${description}</p> ` })}`} </div> </a> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/external.astro", void 0);

const $$Astro$1H = createAstro("https://jee-v2.k16e.co");
const $$ImageGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1H, $$props, $$slots);
  Astro2.self = $$ImageGrid;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="image-grid-container" data-astro-cid-tayatr6q> <div${addAttribute(["image-grid", `image-grid--${images.length}`], "class:list")} data-astro-cid-tayatr6q> ${images.map((image) => renderTemplate`<div class="image-grid-item" data-astro-cid-tayatr6q> <img${addAttribute(image.thumb, "src")}${addAttribute(image.alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-tayatr6q> </div>`)} </div> </div> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/image-grid.astro", void 0);

const $$Astro$1G = createAstro("https://jee-v2.k16e.co");
const $$MediaContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1G, $$props, $$slots);
  Astro2.self = $$MediaContainer;
  const { aspectRatio, onClick, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["media-container", className], "class:list")}${addAttribute({
    aspectRatio: aspectRatio ? `${aspectRatio.width}/${aspectRatio.height}` : void 0
  }, "style")}${spreadAttributes(onClick ? { onClick } : {})} data-astro-cid-kx6yyo6i> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/media-container.astro", void 0);

const $$Astro$1F = createAstro("https://jee-v2.k16e.co");
const $$VideoThumbnail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1F, $$props, $$slots);
  Astro2.self = $$VideoThumbnail;
  const { thumbnail, aspectRatio } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MediaContainer", $$MediaContainer, { "aspectRatio": aspectRatio, "data-astro-cid-pkddrwlf": true }, { "default": ($$result2) => renderTemplate`${thumbnail && renderTemplate`${maybeRenderHead()}<img${addAttribute(thumbnail, "src")} class="thumbnail" alt="Video thumbnail" data-astro-cid-pkddrwlf>`}<div class="play-button" data-astro-cid-pkddrwlf> <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fff'%20d='M9.576%202.534C7.578%201.299%205%202.737%205%205.086v13.828c0%202.35%202.578%203.787%204.576%202.552l11.194-6.914c1.899-1.172%201.899-3.932%200-5.104L9.576%202.534Z'/%3e%3c/svg%3e" class="play-icon" alt="Play button" data-astro-cid-pkddrwlf> </div> ` })} `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/video-thumbnail.astro", void 0);

const $$Astro$1E = createAstro("https://jee-v2.k16e.co");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1E, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { user, link, size = "medium" } = Astro2.props;
  const src = user.avatar;
  return renderTemplate`${link ? renderTemplate`${maybeRenderHead()}<a${addAttribute(["avatar", size], "class:list")}${addAttribute(`https://bsky.app/profile/${user?.handle}`, "href")} target="_blank" rel="noopener noreferrer nofollow" data-astro-cid-manwa2bn>${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} data-astro-cid-manwa2bn>`}</a>` : renderTemplate`<div${addAttribute(["avatar", size], "class:list")} data-astro-cid-manwa2bn>${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} data-astro-cid-manwa2bn>`}</div>`}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/avatar.astro", void 0);

const $$Astro$1D = createAstro("https://jee-v2.k16e.co");
const $$QuoteEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1D, $$props, $$slots);
  Astro2.self = $$QuoteEmbed;
  const { embed } = Astro2.props;
  return renderTemplate`${AppBskyEmbedRecord.isViewRecord(embed.record) && AppBskyFeedPost.isRecord(embed.record.value) ? renderTemplate`${maybeRenderHead()}<div class="post-container" data-astro-cid-focmzavi><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link" data-astro-cid-focmzavi><div class="user-info" data-astro-cid-focmzavi>${renderComponent($$result, "Avatar", $$Avatar, { "user": embed.record.author, "size": "small", "data-astro-cid-focmzavi": true })}<p class="user-text" data-astro-cid-focmzavi><span class="name" data-astro-cid-focmzavi>${embed.record.author.displayName}</span><span class="handle" data-astro-cid-focmzavi>@${embed.record.author.handle}</span></p></div></a><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link" data-astro-cid-focmzavi><p class="content" data-astro-cid-focmzavi>${embed.record.value.text}</p></a>${renderComponent($$result, "Embed", $$Embed, { "embed": viewRecordToEmbed(embed.record), "postUrl": atUriToPostUri(embed.record.uri), "compact": true, "data-astro-cid-focmzavi": true })}</div>` : null}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/quote-embed.astro", void 0);

const $$Astro$1C = createAstro("https://jee-v2.k16e.co");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1C, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, image, avatarUser, title, subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer nofollow" class="card" data-astro-cid-ovxpf64e> ${image && renderTemplate`<img class="cover-image"${addAttribute(image.src, "src")}${addAttribute(image.alt ?? "", "alt")} data-astro-cid-ovxpf64e>`} <div class="content" data-astro-cid-ovxpf64e> <div class="header" data-astro-cid-ovxpf64e> ${renderComponent($$result, "Avatar", $$Avatar, { "user": avatarUser, "data-astro-cid-ovxpf64e": true })} <div class="title-group" data-astro-cid-ovxpf64e> <p class="title" data-astro-cid-ovxpf64e>${title}</p> <p class="subtitle" data-astro-cid-ovxpf64e>${subtitle}</p> </div> </div> ${description && renderTemplate`<p class="description" data-astro-cid-ovxpf64e>${description}</p>`} </div> </a> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/card.astro", void 0);

const $$Astro$1B = createAstro("https://jee-v2.k16e.co");
const $$StarterPack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1B, $$props, $$slots);
  Astro2.self = $$StarterPack;
  const { record } = Astro2.props;
  const pack = AppBskyGraphStarterpack.isRecord(record.record) ? record.record : null;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "href": atUriToStarterPackUri(record.uri), "image": {
    src: starterPackOgImage(record.uri),
    alt: pack?.name || "Starter pack cover image"
  }, "avatarUser": record.creator, "title": pack?.name || "", "subtitle": `Starter pack by ${record.creator.displayName}`, "description": pack?.description })}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/starter-pack.astro", void 0);

const $$Astro$1A = createAstro("https://jee-v2.k16e.co");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1A, $$props, $$slots);
  Astro2.self = $$List;
  const { record } = Astro2.props;
  const list = AppBskyGraphDefs.isListView(record) ? record : null;
  const purposes = {
    "app.bsky.graph.defs#curatelist": "User list",
    "app.bsky.graph.defs#modlist": "Moderation list",
    "app.bsky.graph.defs#referencelist": "List"
  };
  const purpose = (list && purposes[list.purpose]) ?? "List";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "href": atUriToListUri(record.uri), "avatarUser": record.creator, "title": list?.name || "", "subtitle": `${purpose} by ${record.creator.displayName}`, "description": list?.description })}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/list.astro", void 0);

const $$Astro$1z = createAstro("https://jee-v2.k16e.co");
const $$Embed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1z, $$props, $$slots);
  Astro2.self = $$Embed;
  const { embed, postUrl, compact } = Astro2.props;
  return renderTemplate`${match(embed).when(AppBskyEmbedRecordWithMedia.isView, (embed2) => renderTemplate`${maybeRenderHead()}<div class="record-with-media" data-astro-cid-ojlygtsz>${renderComponent($$result, "Astro.self", Astro2.self, { "embed": embed2.media, "postUrl": postUrl, "compact": compact, "data-astro-cid-ojlygtsz": true })}${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, { "embed": embed2.record, "data-astro-cid-ojlygtsz": true })}</div>`).when(AppBskyEmbedExternal.isView, (media) => renderTemplate`${renderComponent($$result, "External", $$External, { "embed": media, "compact": compact, "data-astro-cid-ojlygtsz": true })}`).when(AppBskyEmbedImages.isView, (media) => renderTemplate`<a${addAttribute(postUrl, "href")} data-astro-cid-ojlygtsz>${renderComponent($$result, "ImageGrid", $$ImageGrid, { "images": media.images, "data-astro-cid-ojlygtsz": true })}</a>`).when(AppBskyEmbedVideo.isView, (media) => renderTemplate`<a${addAttribute(postUrl, "href")} data-astro-cid-ojlygtsz>${renderComponent($$result, "VideoThumbnail", $$VideoThumbnail, { "thumbnail": media.thumbnail, "aspectRatio": media.aspectRatio, "data-astro-cid-ojlygtsz": true })}</a>`).with(
    { record: P.when(AppBskyGraphDefs.isStarterPackViewBasic) },
    (media) => renderTemplate`${renderComponent($$result, "StarterPack", $$StarterPack, { "record": media.record, "data-astro-cid-ojlygtsz": true })}`
  ).with({ record: P.when(AppBskyGraphDefs.isListView) }, (media) => renderTemplate`${renderComponent($$result, "List", $$List, { "record": media.record, "data-astro-cid-ojlygtsz": true })}`).when(AppBskyEmbedRecord.isView, (media) => renderTemplate`${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, { "embed": media, "data-astro-cid-ojlygtsz": true })}`).with(P.nullish, () => null).otherwise((media) => media?.$type)}`;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/embed.astro", void 0);

const $$Astro$1y = createAstro("https://jee-v2.k16e.co");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1y, $$props, $$slots);
  Astro2.self = $$Post;
  const postRef = Astro2.props.id ?? Astro2.props.post;
  if (!postRef) {
    return new Response("");
  }
  const post = await resolvePost(postRef);
  if (!post) {
    return new Response("");
  }
  const postUrl = atUriToPostUri(post.uri);
  const { record, embed, author } = post;
  const authorUrl = `https://bsky.app/profile/${author?.handle}`;
  const body = renderPostAsHtml(post);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
    timeZoneName: "short"
  });
  return renderTemplate`${maybeRenderHead()}<div class="bluesky-post-container not-content" data-astro-cid-cefdu6fu> <div class="post-content" data-astro-cid-cefdu6fu> <div class="post-header" data-astro-cid-cefdu6fu> ${renderComponent($$result, "Avatar", $$Avatar, { "user": author, "link": true, "data-astro-cid-cefdu6fu": true })} <div class="user-info" data-astro-cid-cefdu6fu> <a${addAttribute(authorUrl, "href")} class="display-name" data-astro-cid-cefdu6fu>${author?.displayName}</a> <a${addAttribute(authorUrl, "href")} class="username" data-astro-cid-cefdu6fu>@${author?.handle}</a> </div> <a${addAttribute(postUrl, "href")} class="logo-link" data-astro-cid-cefdu6fu> <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M69.364%2019.146c36.687%2027.806%2076.147%2084.186%2090.636%20114.439%2014.489-30.253%2053.948-86.633%2090.636-114.439C277.107-.917%20320-16.44%20320%2032.957c0%209.865-5.603%2082.875-8.889%2094.729-11.423%2041.208-53.045%2051.719-90.071%2045.357%2064.719%2011.12%2081.182%2047.953%2045.627%2084.785-80%2082.874-106.667-44.333-106.667-44.333s-26.667%20127.207-106.667%2044.333c-35.555-36.832-19.092-73.665%2045.627-84.785-37.026%206.362-78.648-4.149-90.071-45.357C5.603%20115.832%200%2042.822%200%2032.957%200-16.44%2042.893-.917%2069.364%2019.147Z'/%3e%3c/svg%3e" class="bluesky-logo" alt="Bluesky" data-astro-cid-cefdu6fu> </a> </div> <p class="post-text" data-astro-cid-cefdu6fu>${unescapeHTML(body)}</p> ${embed && renderTemplate`${renderComponent($$result, "Embed", $$Embed, { "embed": embed, "postUrl": postUrl, "data-astro-cid-cefdu6fu": true })}`} <a${addAttribute(postUrl, "href")} class="timestamp" data-astro-cid-cefdu6fu> ${formatter.format(new Date(record.createdAt ?? ""))} </a> </div> </div> `;
}, "/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-bluesky/src/post.astro", void 0);

const $$Astro$1x = createAstro("https://jee-v2.k16e.co");
const $$Event = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1x, $$props, $$slots);
  Astro2.self = $$Event;
  const { blok } = Astro2.props;
  const headings = [];
  const type = `/events?s=&type=${blok.type.toLowerCase()}`;
  !_empty(blok.video_id) && headings.push("Watch");
  headings.push(blok.description_label);
  headings.push(blok.panelists_label);
  headings.push(blok.sessions_label);
  headings.push(blok.rsvp_label);
  return renderTemplate`${renderComponent($$result, "HeaderBasic", $$HeaderBasic, { "altComponent": blok.component, "breadcrumbLink": "/events", "breadcrumbLabel": "JEE Events", "altTitle": blok.title, "altCopy": ".", "more": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Chip", $$Chip, { "tag": "a", "href": type, "text": blok.type })} ` })} ${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": "Event Details", "overlap": true, "spy": true, "class": "r-hide-overflow overflow-y-clip z-20 bg-[var(--color-bg-default)] lg:bg-transparent rounded-t-[1.5rem] md:rounded-t-[3.5rem] lg:rounded-t-0" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": ["overflow-x-clip"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "rounded-t-[1.5rem] md:rounded-t-[3.5rem] lg:rounded-t-0 overflow-clip" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full lg:[grid-area:1/1/2/4] xl:[grid-area:1/1/2/3] self-start sticky bg-[var(--color-bg-default)] z-10 -top-px [&.is-pinned]:shadow lg:!shadow-none overflow-auto",
    _sectionPadding("top-lg-up"),
    _xPadding("both-lg-down")
  ], "class:list")} data-pin-top> ${renderComponent($$result4, "SectionSpy", $$SectionSpy, { "headings": headings, "breakAt": "lg", "data-spy-sections": true })} </div> <div class="col-span-full lg:[grid-area:1/4/2/13] xl:[grid-area:1/4/2/12]"> <div${addAttribute([
    _sectionPadding("both-md-down"),
    _xPadding("both-md-down-lg-r"),
    "col-span-full grid grid-cols-12"
  ], "class:list")}> <!-- Video || Image --> ${_empty(blok.video_id) ? renderTemplate`<div class="col-span-full"> ${renderComponent($$result4, "Image", $$Image, { "filename": blok.image.filename, "alt": blok.image.alt, "class:list": [
    "h-[24rem] sm:h-[30rem] md:h-[35rem] rounded-[1.5rem] md:rounded-[2rem]"
  ] })} </div>` : renderTemplate`<div${addAttribute([
    _spaceY(),
    "col-span-full _section"
  ], "class:list")}${addAttribute("watch", "id")}> <div class="overflow-clip rounded-[1.5rem]"> ${renderComponent($$result4, "YouTube", $$YouTube, { "id": blok.video_id, "playlabel": blok.video_link_label ? blok.video_link_label : "Watch Full Sessions", "class:list": ["max-w-none"] })} </div> </div>`} <!-- Excerpt || Summary --> <div${addAttribute([
    _sectionPadding("top"),
    "col-span-full md:col-start-2 md:col-end-11 lg:col-start-1"
  ], "class:list")}> ${renderComponent($$result4, "Text", $$Text, { "tag": "p", "text": blok.summary, "color": "body", "size": "2hx", "italic": true })} </div> <!-- Description --> <div${addAttribute([
    _sectionPadding("top"),
    _spaceY(),
    "col-span-full md:col-start-2 md:col-end-11 lg:col-start-1 _section"
  ], "class:list")}${addAttribute(_slugify(blok.description_label), "id")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.description_label, "size": "4" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.description, "pType": "body" })} </div> <!-- Panelists --> <div${addAttribute([
    _sectionPadding("top"),
    _spaceY(),
    "col-span-full md:col-start-2 md:col-end-11 lg:col-start-1 _section"
  ], "class:list")}${addAttribute(_slugify(blok.panelists_label), "id")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.panelists_label, "size": "4" })} <ul class="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"> ${blok.panelists.map((i) => renderTemplate`<li class="!w-auto shrink-0"> ${renderComponent($$result4, "CardPerson", $$CardPerson, { "person": i.person, "size": "adaptive" })} </li>`)} </ul> </div> <!-- Sessions --> <div${addAttribute([
    _sectionPadding("top"),
    _spaceY(),
    "col-span-full md:col-start-2 md:col-end-11 lg:col-start-1 _section"
  ], "class:list")}${addAttribute(_slugify(blok.sessions_label), "id")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.sessions_label, "size": "4" })} <ul class="flex flex-col gap-8 sm:gap-10 md:gap-12"> ${blok.sessions.map((i) => renderTemplate`${renderComponent($$result4, "ListSession", $$ListSession, { "heading": i.title, "duration": i.duration, "person": i.host })}`)} </ul> </div> <!-- RSVP --> <div${addAttribute([
    _sectionPadding("top"),
    _spaceY(),
    "col-span-full md:col-start-2 md:col-end-11 lg:col-start-1 _section"
  ], "class:list")}${addAttribute(_slugify(blok.rsvp_label), "id")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.rsvp_label, "size": "4" })} <div class="flex flex-wrap [&>*]:max-w-[12rem] gap-4 sm:gap-6 md:gap-10"> ${renderComponent($$result4, "ListStat", $$ListStat, { "heading": "Venue", "body": blok.venue })} ${renderComponent($$result4, "ListStat", $$ListStat, { "heading": "Date", "body": _formatDate(blok.start_date) })} ${renderComponent($$result4, "ListStat", $$ListStat, { "heading": "Time", "body": blok.time })} </div> ${!_empty(blok.event_link) && renderTemplate`<div class="mt-4 sm:mt-6 lg:mt-8"> ${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "iconLeft": true, "icon": "calendar", "link": blok.event_link[0].link, "label": blok.event_link[0].label, "external": true })} </div>`} </div> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/types/Event.astro", void 0);

const $$Astro$1w = createAstro("https://jee-v2.k16e.co");
const $$HeaderExpertise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1w, $$props, $$slots);
  Astro2.self = $$HeaderExpertise;
  const {
    item,
    heads,
    breadcrumbLink,
    breadcrumbLabel,
    flipped,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": item.component, "header": true, "section": false, "class:list": ["r-hide-overflow", classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class": "" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap("y"), "lg:min-h-[42rem]"] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full",
    flipped ? "lg:[grid-area:1/8/2/13]" : "lg:[grid-area:1/1/2/6]"
  ], "class:list")}> <div${addAttribute([
    "h-[22.5rem] xs:h-[30rem] sm:h-[32.5rem] lg:h-[35rem] rounded-t-[1.5rem] md:rounded-t-[3.5rem] overflow-clip",
    flipped ? "rounded-bl-[1.5rem] lg:rounded-bl-[18rem] rounded-br-[12.5rem] lg:rounded-br-[3.5rem]" : "rounded-br-[12.5rem] md:rounded-br-[18rem] rounded-bl-[1.5rem] md:rounded-bl-[3.5rem]"
  ], "class:list")}> ${renderComponent($$result4, "Image", $$Image, { "filename": item.image.filename, "alt": item.image.alt, "filter": true, "class:list": ["h-full"] })} </div> </div> <div${addAttribute([
    "col-span-full",
    flipped ? "lg:[grid-area:1/1/2/8]" : "lg:[grid-area:1/6/2/13]"
  ], "class:list")}> <div${addAttribute(["flex flex-col justify-between h-full gap-2 sm:gap-3"], "class:list")}> <div${addAttribute([
    flipped && _xPadding("both-xlup-l"),
    "flex flex-col gap-2 sm:gap-3"
  ], "class:list")}> ${renderComponent($$result4, "Breadcrumb", $$Breadcrumb, { "page": item.title, "altLink": breadcrumbLink, "labelText": breadcrumbLabel })} <div${addAttribute([
    "flex flex-col gap-3 lg:gap-4",
    flipped ? "pr-4 xs:pr-6 sm:pr-8" : "pr-4 xs:pr-6 sm:pr-8 lg:pr-20 xl:pr-24"
  ], "class:list")}> ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": item.title, "color": "title", "size": "3", "weight": "extra", "tighten": true })} ${renderComponent($$result4, "Text", $$Text, { "text": item.excerpt, "color": "caption", "size": "1hx" })} </div> </div> <div${addAttribute([
    "pt-6 ml:pt-8 lg:pt-14 xl:pt-16",
    _spaceY(),
    flipped ? "lg:mr-[calc(-50vw+50%)]" : ""
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h2", "text": heads.title, "size": "5", "weight": "extra", "class": "max-w-max" })} <ul${addAttribute(["flex gap-4 overflow-auto"], "class:list")}> ${heads.persons.map((i) => renderTemplate`<li class="!w-auto shrink-0"> ${renderComponent($$result4, "CardPerson", $$CardPerson, { "person": i, "size": "mini" })} </li>`)} </ul> </div> </div> </div> ` })} ` })} ${renderComponent($$result2, "BrandCutDown", $$BrandCutDown, { "class": "z-[-1] lg:!top-[19%]", "specialCase": true, "flipped": flipped })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderExpertise.astro", void 0);

const $$Astro$1v = createAstro("https://jee-v2.k16e.co");
const $$Practice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1v, $$props, $$slots);
  Astro2.self = $$Practice;
  const { blok } = Astro2.props, url = Astro2.url, pathname = url.pathname, parent = pathname.split("/")[1];
  return renderTemplate`${renderComponent($$result, "HeaderExpertise", $$HeaderExpertise, { "item": blok, "heads": blok.contacts[0], "breadcrumbLink": `/${parent}`, "breadcrumbLabel": parent === "africa-expertise" ? "JEE Africa Expertise" : "JEE Practices", "class": "col-span-full", "flipped": true })} ${maybeRenderHead()}<div class="col-span-full"> ${blok.body.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div>`;
}, "/Users/kb/Documents/jee/src/types/Practice.astro", void 0);

const $$Astro$1u = createAstro("https://jee-v2.k16e.co");
const $$Sector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1u, $$props, $$slots);
  Astro2.self = $$Sector;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "HeaderExpertise", $$HeaderExpertise, { "item": blok, "heads": blok.chair[0], "breadcrumbLink": "/sectors", "breadcrumbLabel": "JEE Sectors", "class": "col-span-full" })} ${blok.body.map((blok2) => {
    return renderTemplate`${renderComponent($$result, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })}`;
}, "/Users/kb/Documents/jee/src/types/Sector.astro", void 0);

const $$Astro$1t = createAstro("https://jee-v2.k16e.co");
const $$BlockAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1t, $$props, $$slots);
  Astro2.self = $$BlockAccordion;
  const {
    entry,
    heading,
    registers,
    contain = true,
    class: classes,
    ...props
  } = Astro2.props;
  const accordions = entry?.accordion ?? registers;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap(), classes], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/4] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10",
    contain ? "lg:[grid-area:1/2/2/6]" : "lg:[grid-area:1/1/2/7]"
  ], "class:list")}> <div class="flex flex-col gap-8 md:flex-row"> ${renderComponent($$result2, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": entry?.heading ?? heading, "class": "min-w-[12rem] max-w-[13rem]" })} </div> </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/4/2/13] relative",
    contain ? "lg:[grid-area:1/6/2/12]" : "lg:[grid-area:1/7/2/13]",
    _spaceY()
  ], "class:list")}> <ul> ${accordions.map((i) => renderTemplate`<li class="accordion group border-t border-[var(--color-border-muted)] first:border-0 first:-mt-4"> <div class="accordion__button group/button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"${addAttribute(`${i.heading || i.item}`, "aria-controls")}> ${renderComponent($$result2, "Text", $$Text, { "size": "emphasis", "text": i.heading || i.item, "weight": "semi", "color": "title", "class": "group-hover/button:opacity-100 group-[.is-active]:opacity-100 pointer-events-none" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-title)] opacity-60 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content max-h-0 overflow-hidden transition-all ease-in-out"> ${renderComponent($$result2, "RichText", $$RichText, { "text": i.body || i.details, "pType": "body", "class": "pb-5" })} </div> </li>`)} </ul> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/BlockAccordion.astro", void 0);

const $$Astro$1s = createAstro("https://jee-v2.k16e.co");
const $$BlockDistribution = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1s, $$props, $$slots);
  Astro2.self = $$BlockDistribution;
  const {
    blok,
    heading,
    body,
    contain = true,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "class:list": [classes, _gridGap()], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full md:[grid-area:1/1/2/4] lg:[grid-area:1/1/2/6] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10 self-start h-full",
    contain && "xl:[grid-area:1/2/2/6]"
  ], "class:list")}> ${renderComponent($$result2, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": blok?.heading ?? heading, "class": "capitalize" })} </div> <div${addAttribute([
    "col-span-full md:[grid-area:1/4/2/9] lg:[grid-area:1/6/2/13] relative",
    contain && "xl:[grid-area:1/6/2/12]",
    _spaceY()
  ], "class:list")}> ${renderComponent($$result2, "RichText", $$RichText, { "text": blok?.body ?? body, "pType": "body", "class": "prose-li:list-image-[url(/graphics/marker.svg)]" })} </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/BlockDistribution.astro", void 0);

const $$Astro$1r = createAstro("https://jee-v2.k16e.co");
const $$CardCountry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1r, $$props, $$slots);
  Astro2.self = $$CardCountry;
  const { tag = "li", entry, class: classes, ...props } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": "group bg-[var(--color-bg-default-elevated)] rounded-xl overflow-clip" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`/${entry.full_slug}`, "href")} class="size-full flex flex-col justify-center items-center gap-3 px-4 py-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": entry.content.country, "class": "size-12 md:size-14 shrink-0 group-hover:scale-110" })} ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "text": entry.content.title, "color": "title", "weight": "medium", "size": "blurb", "class": "group-hover:text-[var(--color-emphasis)] text-center r-transition" })} </a> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/CardCountry.astro", void 0);

const $$Astro$1q = createAstro("https://jee-v2.k16e.co");
const $$HeaderIp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1q, $$props, $$slots);
  Astro2.self = $$HeaderIp;
  const {
    pageData,
    breadcrumbLink,
    breadcrumbLabel,
    flipped,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": pageData.component, "header": true, "section": false, "class:list": ["r-hide-overflow", classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap("y"), "lg:min-h-[42rem]"] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full lg:[grid-area:1/1/2/7]"], "class:list")}> <div${addAttribute(["flex flex-col gap-2 sm:gap-3"], "class:list")}> ${renderComponent($$result4, "Breadcrumb", $$Breadcrumb, { "page": pageData.title, "altLink": breadcrumbLink, "labelText": breadcrumbLabel })} <div${addAttribute(["flex flex-col gap-3 lg:gap-4 pr-4"], "class:list")}> ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": pageData.title, "color": "title", "size": "3", "weight": "extra", "tighten": true })} ${!_empty(pageData.summary) && renderTemplate`${renderComponent($$result4, "RichText", $$RichText, { "text": pageData.summary, "color": "caption", "pType": "1hx", "class": "mt-1 !leading-snug" })}`} </div> </div> ${!_empty(pageData.facts) && renderTemplate`<ul${addAttribute([
    "grid grid-cols-2 md:grid-cols-3 ml:grid-cols-4 lg:grid-cols-2 gap-8 md:gap-12 pt-8 sm:pt-10 md:pt-14"
  ], "class:list")}> ${pageData.facts.map((i) => renderTemplate`${renderComponent($$result4, "ListStat", $$ListStat, { "heading": i.title, "body": i.description, "size": "blurb", "color": "title" })}`)} </ul>`} </div> <div${addAttribute([
    "col-span-full lg:[grid-area:1/7/2/13] size-full sm:size-[30rem] md:size-[40rem] lg:size-full justify-self-center lg:justify-self-start self-start"
  ], "class:list")}> <div class="grid grid-cols-4 grid-rows-4 h-full"> <div class="[grid-area:1/1/5/5] z-0"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "africa-map", "class": "size-full saturate-[.2] opacity-35" })} </div> <div${addAttribute([
    "z-[2] r-flex-center relative w-full",
    pageData.region === "north" && "[grid-area:1/1/2/5]",
    pageData.region === "east" && "[grid-area:3/3/4/5] self-end justify-self-end",
    pageData.region === "south" && "[grid-area:4/1/5/5] ",
    pageData.region === "central" && "[grid-area:2/1/3/5]",
    pageData.region === "west" && "[grid-area:3/1/4/3] self-start justify-self-start"
  ], "class:list")}> <div class="z-0 absolute size-24 sm:size-36 rounded-full bg-[var(--color-emphasis)] animate-ping [animation-duration:5s]"></div> ${renderComponent($$result4, "Icon", $$Icon, { "name": pageData.country, "class": "size-16 z-[1] absolute" })} </div> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderIp.astro", void 0);

const api$3 = zn();

async function _getAfricaIp() {
    return await api$3.getAll('cdn/stories', {
        starts_with: 'ip/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
        per_page: 100,
    })
}

const $$Astro$1p = createAstro("https://jee-v2.k16e.co");
const $$Ip = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1p, $$props, $$slots);
  Astro2.self = $$Ip;
  const { blok } = Astro2.props;
  const region = blok.region;
  const ip = await _getAfricaIp();
  const related = ip.filter((i) => i.content.region === region);
  return renderTemplate`${renderComponent($$result, "HeaderIp", $$HeaderIp, { "pageData": blok, "breadcrumbLink": "/ip", "breadcrumbLabel": "Africa IP Practice" })} ${renderComponent($$result, "Section", $$Section, { "component": "description", "overlap": true, "id": _slugify("description") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "bg-[var(--color-bg-default-elevated)] rounded-2xl md:rounded-[1.5rem] px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 lg:py-[4.5rem] flex flex-col",
    _gridGap("y")
  ], "class:list")}> ${blok.description.content[0].content?.length && renderTemplate`${renderComponent($$result3, "BlockDistribution", $$BlockDistribution, { "heading": "Description", "body": blok.description })}`} ${renderComponent($$result3, "BlockAccordion", $$BlockAccordion, { "heading": blok.registers_title ?? "JEE Practice Details", "registers": blok.registers })} </div> ` })} ` })} ${renderComponent($$result, "Section", $$Section, { "component": "related-ips", "overlap": true, "id": _slugify("related-ips") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap("y")] }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": "Related IPs", "class": "min-w-[12rem] max-w-[13rem]" })} <ul class="col-span-full ml:[grid-area:1/4/2/13] grid grid-cols-2 sm:grid-cols-3 ml:grid-cols-4 gap-4"> ${related.map((i) => renderTemplate`${renderComponent($$result4, "CardCountry", $$CardCountry, { "entry": i })}`)} </ul> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/types/Ip.astro", void 0);

const $$Astro$1o = createAstro("https://jee-v2.k16e.co");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1o, $$props, $$slots);
  Astro2.self = $$Feature;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Feature...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Feature.astro", void 0);

const $$Astro$1n = createAstro("https://jee-v2.k16e.co");
const $$Graphic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1n, $$props, $$slots);
  Astro2.self = $$Graphic;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Graphic...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Graphic.astro", void 0);

const $$Astro$1m = createAstro("https://jee-v2.k16e.co");
const $$Illustration = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1m, $$props, $$slots);
  Astro2.self = $$Illustration;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Illustration...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Illustration.astro", void 0);

const $$Astro$1l = createAstro("https://jee-v2.k16e.co");
const $$Overlay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1l, $$props, $$slots);
  Astro2.self = $$Overlay;
  const { opacity = 80, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "fixed inset-0 bg-black",
    opacity ? opacity : "opacity-75",
    classes
  ], "class:list")} aria-hidden="true"${spreadAttributes(props)}></div>`;
}, "/Users/kb/Documents/jee/src/atoms/Overlay.astro", void 0);

const $$Astro$1k = createAstro("https://jee-v2.k16e.co");
const $$VideoFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1k, $$props, $$slots);
  Astro2.self = $$VideoFrame;
  const { video, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "flex justify-center w-full aspect-video bg-[var(--color-bg-default-elevated)] rounded-2xl md:rounded-3xl relative overflow-clip [transform:translateZ(0)] group cursor-pointer",
    classes
  ], "class:list")} data-modal-video-play${spreadAttributes(props)}> <iframe${addAttribute(`https://www.youtube.com/embed/${video}?controls=0&showinfo=0&autoplay=1&mute=1&playsinline=1&loop=1`, "src")} class="absolute inset-0 size-full"></iframe> <button class="play-video absolute z-30 r-dead-center text-[var(--color-accent)] rounded-full size-16 md:size-26 group-hover:scale-[2] ease-[cubic-bezier(0.76,0,0.24,1)] duration-[250ms]"${addAttribute(video, "data-video")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "play-circle", "class": "size-full" })} </button> ${renderComponent($$result, "Overlay", $$Overlay, { "opacity": "opacity-20", "class": "z-20" })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/VideoFrame.astro", void 0);

const $$Astro$1j = createAstro("https://jee-v2.k16e.co");
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1j, $$props, $$slots);
  Astro2.self = $$Intro;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "poster": true, "section": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "gap-y-5 md:gap-y-12 lg:gap-y-14" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full md:col-span-5 lg:col-span-7 md:max-w-screen-sm pr-4"> ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": blok.headline, "color": "title", "size": "2", "weight": "extra", "tighten": true })} </div> <div class="col-span-full md:col-span-3 md:col-start-6 lg:col-span-5 lg:col-start-8 max-w-screen-sm md:max-w-screen-xs md:pt-8"> ${renderComponent($$result4, "Text", $$Text, { "tag": "p", "text": blok.copy, "color": "body", "size": "copy" })} </div> <div class="col-span-full mt-2 md:mt-0"> ${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "link": blok.button[0].link, "label": blok.button[0].label })} </div> ` })} ` })} <div${addAttribute([_sectionPadding("top"), "relative overflow-x-clip"], "class:list")}> ${renderComponent($$result2, "Grid", $$Grid, { "class:list": _xPadding("both") }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "VideoFrame", $$VideoFrame, { "video": blok.video_id, "class": "col-span-full" })} ` })} ${renderComponent($$result2, "BrandCutFull", $$BrandCutFull, {})} </div> ` })}`;
}, "/Users/kb/Documents/jee/src/composites/posters/Intro.astro", void 0);

const $$Astro$1i = createAstro("https://jee-v2.k16e.co");
const $$Keynote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1i, $$props, $$slots);
  Astro2.self = $$Keynote;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Keynote...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Keynote.astro", void 0);

const $$Astro$1h = createAstro("https://jee-v2.k16e.co");
const $$Product = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1h, $$props, $$slots);
  Astro2.self = $$Product;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Product...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Product.astro", void 0);

const $$Astro$1g = createAstro("https://jee-v2.k16e.co");
const $$Speakers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1g, $$props, $$slots);
  Astro2.self = $$Speakers;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Speakers...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/posters/Speakers.astro", void 0);

const $$Astro$1f = createAstro("https://jee-v2.k16e.co");
const $$HeaderImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1f, $$props, $$slots);
  Astro2.self = $$HeaderImage;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Header Image...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderImage.astro", void 0);

const $$Astro$1e = createAstro("https://jee-v2.k16e.co");
const $$HeaderPersonnel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1e, $$props, $$slots);
  Astro2.self = $$HeaderPersonnel;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${spreadAttributes(props)}${addAttribute([
    // Default Classes
    "",
    // Classes can be passed in when called
    classes
  ], "class:list")}>
Header Personnel...
</section>`;
}, "/Users/kb/Documents/jee/src/composites/headers/HeaderPersonnel.astro", void 0);

const $$Astro$1d = createAstro("https://jee-v2.k16e.co");
const $$ImageHangingText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1d, $$props, $$slots);
  Astro2.self = $$ImageHangingText;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": blok.is_hashed ? _slugify(blok.heading) : _slugify(blok.component) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "marginsMd": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": ["gap-y-5 md:gap-y-12 lg:gap-y-14"] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "[grid-area:1/1/2/5]",
    blok.is_alternate ? "md:[grid-area:1/2/2/9] lg:[grid-area:1/5/2/13]" : "md:[grid-area:1/1/2/8] lg:[grid-area:1/1/2/9]"
  ], "class:list")}> ${renderComponent($$result4, "Image", $$Image, { "filename": blok.image.filename, "alt": blok.image.title, "class:list": [
    "h-[23rem] sm:h-[30rem] md:h-[35rem] lg:h-[41rem] rounded-t-[1.5rem] md:rounded-[1.5rem] lg:rounded-[3rem]"
  ] })} </div> <div${addAttribute([
    "[grid-area:1/1/2/5] pt-[18rem] md:pt-[16rem] px-4 lg:px-0 z-10",
    blok.is_alternate ? "md:[grid-area:1/1/2/6] lg:[grid-area:1/1/2/7]" : "md:[grid-area:1/4/2/9] lg:[grid-area:1/7/2/13]"
  ], "class:list")}> <div class="bg-[var(--color-bg-default-elevated)] rounded-2xl md:rounded-[32px] p-4 md:p-8 lg:p-12 flex flex-col gap-y-4 lg:gap-y-6"> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "text": blok.heading, "level": "h2", "size": "5" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.text, "pType": "body", "color": "title" })} ${!_empty(blok.action) && renderTemplate`${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "link": blok.action[0].link, "label": blok.action[0].label, "class": "my-3" })}`} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/ImageHangingText.astro", void 0);

const $$Astro$1c = createAstro("https://jee-v2.k16e.co");
const $$ImageHangingInsight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1c, $$props, $$slots);
  Astro2.self = $$ImageHangingInsight;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [
    "gap-y-5 md:gap-y-12 lg:gap-y-14",
    blok.is_alternate ? "lg:pl-8 xl:pl-18 2xl:pr-18" : "lg:pr-8 xl:pr-18 2xl:pl-18"
  ] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "[grid-area:1/1/2/5]",
    blok.is_alternate ? "md:[grid-area:1/2/2/9] lg:[grid-area:1/5/2/13]" : "md:[grid-area:1/1/2/8] lg:[grid-area:1/1/2/9]"
  ], "class:list")}> ${renderComponent($$result4, "Image", $$Image, { "filename": blok.insight.content.image.filename, "alt": blok.insight.content.image.title, "class:list": [
    "h-[25rem] sm:h-[31rem] md:h-[37.5rem] lg:h-[41rem] rounded-t-[1.5rem] 2xl:rounded-[4rem]",
    blok.is_alternate ? "md:rounded-tr-none md:rounded-tl-[3.5rem] lg:rounded-tl-[4rem]" : "md:rounded-tl-none md:rounded-tr-[3.5rem] lg:rounded-tr-[4rem]"
  ] })} </div> <div${addAttribute([
    "[grid-area:1/1/2/5] pt-[18rem] md:pt-[16rem] lg:pt-[14rem] px-4 lg:px-0 z-10",
    blok.is_alternate ? "md:[grid-area:1/1/2/6] lg:[grid-area:1/1/2/7]" : "md:[grid-area:1/4/2/9] lg:[grid-area:1/7/2/13]"
  ], "class:list")}> <div class="bg-[var(--color-bg-default-elevated)] rounded-2xl md:rounded-[32px] p-4 md:p-8 lg:p-12 flex flex-col gap-y-4 lg:gap-y-6 min-h-96 md:min-h-[30rem]"> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "text": blok.heading, "level": "h2", "size": "5" })} <div class="flex flex-col gap-4 md:gap-y-6 lg:gap-y-8"> <div class="flex flex-col gap-y-4"> ${renderComponent($$result4, "Text", $$Text, { "text": blok.insight.content.title, "color": "title", "size": "4", "family": "display", "weight": "bold", "tighten": true })} ${renderComponent($$result4, "Text", $$Text, { "text": blok.insight.content.excerpt, "color": "title", "size": "body", "family": "display", "class": "line-clamp-4 md:pr-4" })} </div> <div class="flex flex-col gap-1.5 sm:gap-2"> ${renderComponent($$result4, "Author", $$Author, { "source": blok.insight })} ${renderComponent($$result4, "FormattedDate", $$FormattedDate, { "dateString": blok.insight.content.published_date, "weight": "medium" })} </div> </div> ${!_empty(blok.action) && renderTemplate`${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "link": `/${blok.insight.full_slug}`, "label": blok.action, "class": "my-3" })}`} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/ImageHangingInsight.astro", void 0);

const $$Astro$1b = createAstro("https://jee-v2.k16e.co");
const $$BlockBentoBasic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1b, $$props, $$slots);
  Astro2.self = $$BlockBentoBasic;
  const { block } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "class:list": ["col-span-full", _gridGap("y")] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full lg:[grid-area:1/1/2/9] px-4 md:px-0 space-y-3 md:space-y-6"> ${renderComponent($$result2, "HeadingSection", $$HeadingSection, { "level": "h3", "text": block.heading, "underline": false, "padding": "none", "size": "3" })} <div class="grid grid-cols-4 lg:grid-cols-8 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6"> ${renderComponent($$result2, "RichText", $$RichText, { "text": block.content, "pType": "emphasis", "class": "col-span-full lg:col-span-6 sm:pr-4" })} <div class="col-span-full lg:col-span-2 lg:col-start-7"> ${renderComponent($$result2, "ButtonMore", $$ButtonMore, { "link": block.action[0].link, "label": block.action[0].label })} </div> </div> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/BlockBentoBasic.astro", void 0);

const $$Astro$1a = createAstro("https://jee-v2.k16e.co");
const $$BlockBentoPlaques = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1a, $$props, $$slots);
  Astro2.self = $$BlockBentoPlaques;
  const { block } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "class:list": ["col-span-full", _gridGap("y")] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full lg:[grid-area:1/1/2/6] px-4 md:px-0 columns-4 gap-4 space-y-4 sm:columns-7 md:columns-8 lg:columns-4 lg:space-y-5 lg:gap-5"> ${block.plaques.map((plaque) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "filename": plaque.content.plaque.filename, "alt": plaque.content.plaque.alt, "filter": false, "contain": true, "top": true, "class": "" })}`)} </div> <div class="col-span-full lg:[grid-area:1/6/2/13] space-y-3 md:space-y-6 bg-[var(--color-bg-default-elevated)] md:rounded-[32px] px-4 py-8 sm:px-5 md:px-8 md:py-9"> ${renderComponent($$result2, "HeadingSection", $$HeadingSection, { "level": "h3", "text": block.heading, "underline": false, "padding": "none", "size": "3" })} <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6"> ${renderComponent($$result2, "RichText", $$RichText, { "text": block.content, "pType": "emphasis", "class": "col-span-full lg:col-span-5 sm:pr-4" })} <div class="col-span-full lg:col-span-2 lg:col-start-6"> ${renderComponent($$result2, "ButtonMore", $$ButtonMore, { "link": block.action[0].link, "label": block.action[0].label })} </div> </div> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/BlockBentoPlaques.astro", void 0);

const $$Astro$19 = createAstro("https://jee-v2.k16e.co");
const $$Number = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$19, $$props, $$slots);
  Astro2.self = $$Number;
  const { number, headlineSize = "blurb", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-y-0", classes], "class:list")}${spreadAttributes(props)}> <p class="border-l-4 border-[var(--color-border-subtle)]"> ${renderComponent($$result, "Text", $$Text, { "text": number.number, "color": "title", "size": "4", "family": "display", "weight": "extra", "class": "pl-4 block" })} </p> <p class="border-l border-[var(--color-border-muted)] pt-1.5"> ${renderComponent($$result, "Text", $$Text, { "text": number.headline, "color": "caption", "size": headlineSize, "family": "display", "weight": "medium", "class": "pl-4 block" })} </p> </div>`;
}, "/Users/kb/Documents/jee/src/atoms/Number.astro", void 0);

const $$Astro$18 = createAstro("https://jee-v2.k16e.co");
const $$BlockBentoHighlights = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$18, $$props, $$slots);
  Astro2.self = $$BlockBentoHighlights;
  const { block } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "class:list": ["col-span-full items-center", _gridGap("y")] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full lg:[grid-area:1/1/2/8] px-4 md:px-0",
    _blockGap("y")
  ], "class:list")}> ${renderComponent($$result2, "HeadingSection", $$HeadingSection, { "level": "h3", "text": block.heading, "underline": false, "padding": "none", "size": "3" })} <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10 lg:gap-y-0"> ${block.highlights.map((h) => renderTemplate`${renderComponent($$result2, "Number", $$Number, { "number": h })}`)} </div> <div class="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 md:gap-y-6"> ${renderComponent($$result2, "RichText", $$RichText, { "text": block.content, "pType": "emphasis", "class": "col-span-full lg:col-span-5" })} <div class="col-span-full lg:col-span-2 lg:col-start-6"> ${renderComponent($$result2, "ButtonMore", $$ButtonMore, { "link": block.action[0].link, "label": block.action[0].label })} </div> </div> </div> <div class="col-span-full lg:[grid-area:1/8/2/13] px-4 md:px-0"> ${renderComponent($$result2, "Image", $$Image, { "filename": block.illustration.filename, "alt": block.illustration.alt, "contain": true, "class": "h-[23rem] md:h-[30rem] lg:h-[27rem] rounded-[2rem]" })} </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/BlockBentoHighlights.astro", void 0);

const $$Astro$17 = createAstro("https://jee-v2.k16e.co");
const $$SectionBentobox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$17, $$props, $$slots);
  Astro2.self = $$SectionBentobox;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.heading }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "marginsMd": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [_gridGap("y-double"), ""] }, { "default": ($$result4) => renderTemplate`${blok.blocks.map((block) => {
    switch (block.component) {
      case "block_bento_basic":
        return renderTemplate`${renderComponent($$result4, "BlockBentoBasic", $$BlockBentoBasic, { ...block, "block": block })}`;
      case "block_bento_plaques":
        return renderTemplate`${renderComponent($$result4, "BlockBentoPlaques", $$BlockBentoPlaques, { ...block, "block": block })}`;
      case "block_bento_highlights":
        return renderTemplate`${renderComponent($$result4, "BlockBentoHighlights", $$BlockBentoHighlights, { ...block, "block": block })}`;
      default:
        return null;
    }
  })}` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionBentobox.astro", void 0);

const $$Astro$16 = createAstro("https://jee-v2.k16e.co");
const $$SectionCtaClosing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$16, $$props, $$slots);
  Astro2.self = $$SectionCtaClosing;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "class": "relative [transform:translateZ(0)] overflow-x-clip min-h-[23rem] xs:min-h-[21rem] md:min-h-[23.5rem] lg:min-h-[25.5rem] bg-[var(--color-bg-default)]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [_gridGap("y"), ""] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full md:[grid-area:1/1/2/6] lg:[grid-area:1/1/2/8] flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-6"> ${renderComponent($$result4, "Text", $$Text, { "tag": "h2", "text": blok.heading, "color": "title", "size": "3", "family": "display", "weight": "extra", "tighten": true })} ${renderComponent($$result4, "Text", $$Text, { "text": blok.copy, "color": "body", "size": "1hx", "family": "display", "weight": "medium" })} </div> <div class="col-span-full md:[grid-area:1/6/2/9] lg:[grid-area:1/8/2/13] flex items-center gap-x-4 lg:gap-x-8 z-30"> ${renderComponent($$result4, "ButtonLink", $$ButtonLink, { "link": blok.link[0].link, "label": blok.link[0].label })} ${blok.link[1] && renderTemplate`${renderComponent($$result4, "ButtonMore", $$ButtonMore, { "link": blok.link[1].link, "label": blok.link[1].label })}`} </div> ` })} ` })} ${renderComponent($$result2, "BrandCutout", $$BrandCutout, { "bottom": false, "top": true })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionCtaClosing.astro", void 0);

const $$Astro$15 = createAstro("https://jee-v2.k16e.co");
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$15, $$props, $$slots);
  Astro2.self = $$Quote;
  const { quote, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": quote.quote, "color": "title", "size": "5", "weight": "medium" })} <div class="flex flex-col -space-y-0.5"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": quote.author[0].name, "color": "title", "size": "copy", "weight": "semi", "family": "display" })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": quote.author[0].designation, "color": "caption", "size": "copy", "weight": "medium", "family": "display" })} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Quote.astro", void 0);

const $$Astro$14 = createAstro("https://jee-v2.k16e.co");
const $$SwiperQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$14, $$props, $$slots);
  Astro2.self = $$SwiperQuotes;
  const { quotes, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["swiper swiper-quotes h-full space-y-6", classes], "class:list")}${spreadAttributes(props)}> <ul class="swiper-wrapper !h-auto"> ${quotes.map((quote) => renderTemplate`<li class="swiper-slide"> ${renderComponent($$result, "Quote", $$Quote, { "quote": quote })} </li>`)} </ul> <div class="swiper-pagination !relative !text-left !bottom-0 !left-0 [&>*]:!size-2.5 [&>.swiper-pagination-bullet-active]:!bg-[var(--color-main)] [&>.swiper-pagination-bullet-active]:!w-10 [&>.swiper-pagination-bullet-active]:!rounded-3xl" aria-hidden="true"></div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/SwiperQuotes.astro", void 0);

const $$Astro$13 = createAstro("https://jee-v2.k16e.co");
const $$FluidQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$13, $$props, $$slots);
  Astro2.self = $$FluidQuotes;
  const { blok, class: classes, ...props } = Astro2.props;
  const quotes = blok.quotes;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.heading, "class": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "marginsMd": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [_gridGap("y")] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full ml:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/7] 2xl:pl-18"> ${renderComponent($$result4, "Image", $$Image, { "filename": blok.image.filename, "alt": blok.image.alt, "top": true, "class:list": [
    "h-[24rem] sm:h-[32rem] lg:h-[36rem] rounded-bl-[1.5rem] md:rounded-bl-[1.5rem] rounded-br-[8rem] md:rounded-br-[14rem] lg:rounded-br-[20rem] rounded-tr-[1.5rem] rounded-tl-[1.5rem] md:rounded-tr-[4rem] lg:rounded-tr-[4.5rem] md:rounded-tl-4xl 2xl:rounded-tl-[4.5rem]"
  ] })} </div> <div class="col-span-full ml:[grid-area:1/5/2/9] lg:[grid-area:1/7/2/13] r-hide-overflow"> <div${addAttribute([
    _sectionPadding("top"),
    "px-5 sm:px-8 lg:px-10 xl:px-18 h-full"
  ], "class:list")}> <div class="absolute -top-2 -left-4 md:-top-6 md:-left-6 lg:-top-8"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "quote-open", "class": "size-28 md:size-48 lg:size-52 text-[var(--color-text-title)] opacity-10" })} </div> ${renderComponent($$result4, "SwiperQuotes", $$SwiperQuotes, { "quotes": quotes })} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/FluidQuotes.astro", void 0);

const $$Astro$12 = createAstro("https://jee-v2.k16e.co");
const $$FluidImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$12, $$props, $$slots);
  Astro2.self = $$FluidImage;
  const { blok, class: classes, ...props } = Astro2.props; blok.quotes;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.heading, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="col-span-full"> ${renderComponent($$result4, "Image", $$Image, { "filename": blok.image.filename, "alt": blok.image.alt, "class:list": ["h-[24.5rem] sm:h-[32.5rem] md:h-[37.5rem]"] })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/FluidImage.astro", void 0);

const $$Astro$11 = createAstro("https://jee-v2.k16e.co");
const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$11, $$props, $$slots);
  Astro2.self = $$Wrapper;
  const { blok } = Astro2.props;
  const headings = blok.sections.map((section) => section.heading);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.heading, "overlap": true, "spy": true, "class": "r-hide-overflow overflow-y-clip z-20 bg-[var(--color-bg-default)] rounded-t-[1.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4.5rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": ["overflow-x-clip"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "overflow-clip" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full xl:[grid-area:1/1/2/4] self-start sticky bg-[var(--color-bg-default)] z-10 -top-px [&.is-pinned]:shadow xl:!shadow-none overflow-auto",
    _sectionPadding("top-xl-up"),
    _xPadding("both")
  ], "class:list")} data-pin-top> ${renderComponent($$result4, "SectionSpy", $$SectionSpy, { "headings": headings, "data-spy-sections": true })} </div> <div class="col-span-full xl:[grid-area:1/4/2/13]"> ${blok.sections.map((blok2) => {
    return renderTemplate`${renderComponent($$result4, "StoryblokComponent", $$StoryblokComponent, { "blok": blok2 })}`;
  })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/Wrapper.astro", void 0);

const $$Astro$10 = createAstro("https://jee-v2.k16e.co");
const $$StackDownload = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$10, $$props, $$slots);
  Astro2.self = $$StackDownload;
  const { blok, spy, class: classes, ...props } = Astro2.props;
  const doc = blok.document[0];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [
    _xPadding("both-lg-down-l"),
    _gridGap("x"),
    _gridGap("y"),
    "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9"
  ] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full md:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/6] lg:pr-4",
    _spaceY()
  ], "class:list")}> ${renderComponent($$result3, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.heading, "size": "4" })} ${renderComponent($$result3, "RichText", $$RichText, { "text": blok.body, "pType": "body" })} </div> <div class="col-span-full md:[grid-area:1/5/2/9] lg:[grid-area:1/6/2/10] lg:justify-self-center sm:pl-8"> <a${addAttribute(doc.file.filename, "href")}${addAttribute(doc.file.title, "aria-label")} target="_blank" class="flex flex-col gap-0 w-64 max-h-min rounded-2xl border-2 border-[var(--color-accent)] hover:border-[var(--color-emphasis)] overflow-clip group"> ${renderComponent($$result3, "Image", $$Image, { "filename": doc.cover.filename, "alt": doc.cover.alt, "class:list": ["h-[20rem] w-full max-w-full shrink-0"], "top": true })} <div class="flex gap-2 items-center justify-center p-3"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "pdf", "class": "size-6 shrink-0 text-[var(--color-emphasis)] group-hover:scale-105 r-transition" })} ${renderComponent($$result3, "Text", $$Text, { "text": doc.cta_text, "color": "body", "size": "blurb", "weight": "medium", "class": "group-hover:text-[var(--color-emphasis)] r-transition" })} </div> </a> </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/StackDownload.astro", void 0);

const $$Astro$$ = createAstro("https://jee-v2.k16e.co");
const $$StackHighlights = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$$, $$props, $$slots);
  Astro2.self = $$StackHighlights;
  const { blok, spy, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [
    _xPadding("both-lg-down-l"),
    _gridGap("x"),
    _gridGap("y"),
    "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9"
  ] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full md:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/6] lg:pr-4",
    _spaceY()
  ], "class:list")}> ${renderComponent($$result3, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.heading, "size": "4" })} ${renderComponent($$result3, "RichText", $$RichText, { "text": blok.body, "pType": "body" })} </div> <div class="col-span-full md:[grid-area:1/5/2/9] lg:[grid-area:1/6/2/10] grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10 lg:gap-y-0"> ${blok.highlights.map((h) => renderTemplate`${renderComponent($$result3, "Number", $$Number, { "number": h })}`)} </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/StackHighlights.astro", void 0);

const $$Astro$_ = createAstro("https://jee-v2.k16e.co");
const $$CardValue = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$_, $$props, $$slots);
  Astro2.self = $$CardValue;
  const {
    title,
    description,
    facing = "west",
    dim = true,
    class: classes,
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "w-[18.5rem] h-[24.5rem] border-[8px] border-[var(--color-dark)]",
    classes
  ], "class:list")}${spreadAttributes(props)}> <div class="h-[30%] pt-3 p-3"> ${renderComponent($$result, "Text", $$Text, { "tag": "h4", "text": title, "color": "title", "size": "s4-upper", "family": "display", "weight": "extra", "uppercase": true })} </div> <div${addAttribute([
    "bg-[var(--color-backdrop)] h-[70%] p-3.5 flex flex-col justify-end",
    facing === "west" && "rounded-tl-[8rem] rounded-tr-[1.5rem]",
    facing === "east" && "rounded-tr-[8rem] rounded-tl-[1.5rem]"
  ], "class:list")}> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": description, "color": "title-light", "size": "sx1", "class:list": ["min-h-20", dim && "opacity-85"] })} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/CardValue.astro", void 0);

const $$Astro$Z = createAstro("https://jee-v2.k16e.co");
const $$CardValueV2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Z, $$props, $$slots);
  Astro2.self = $$CardValueV2;
  const { title, description, image, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "h-[26.5rem] w-[21rem] sm:w-[19.5rem] p-5 bg-parchment-100 rounded-[1.5rem] flex flex-col gap-4 justify-between items-center [&>*]:text-center group",
    classes
  ], "class:list")}${spreadAttributes(props)}> <div class="flex flex-col gap-2.5"> ${renderComponent($$result, "Text", $$Text, { "tag": "h4", "text": title, "color": "title", "size": "s4-upper", "weight": "bold" })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": description, "color": "caption", "size": "blurb", "class": "transition duration-300 ease-out lg:opacity-0 lg:scale-90 lg:translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 lg:h-0" })} </div> ${renderComponent($$result, "Image", $$Image, { "filename": image.filename, "alt": image.alt, "filter": true, "contain": true, "class:list": ["!size-[16.5rem] shrink-0 translate-y-4"] })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/CardValueV2.astro", void 0);

const $$Astro$Y = createAstro("https://jee-v2.k16e.co");
const $$CarouselValues = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Y, $$props, $$slots);
  Astro2.self = $$CarouselValues;
  const { blok, class: classes, ...props } = Astro2.props;
  const values = blok.values;
  const { pathname } = Astro2.url;
  const isAbout = pathname === "/about" || pathname === "/about/";
  const isCareers = pathname === "/careers" || pathname === "/careers/";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> <div${addAttribute([
    blok.is_standalone ? _xPadding("both") : _xPadding("both-lg-down-l")
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.heading, "size": "4", "hasCarouselControls": true })} </div> <div${addAttribute([
    blok.is_standalone ? _xPadding("left") : _xPadding("left-lg-down-l")
  ], "class:list")}> <div${addAttribute(["swiper swiper-all"], "class:list")}> <ul class="swiper-wrapper"> ${values.map(
    ({ title, description, image = null }, x) => renderTemplate`<li class="swiper-slide !w-auto"> ${isCareers ? renderTemplate`${renderComponent($$result4, "CardValue", $$CardValue, { "title": title, "description": description, "image": image, "facing": _odd(x + 1) ? "west" : "east" })}` : isAbout ? renderTemplate`${renderComponent($$result4, "CardValueV2", $$CardValueV2, { "title": title, "description": description, "image": image })}` : null} </li>`
  )} </ul> </div> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/CarouselValues.astro", void 0);

const $$Astro$X = createAstro("https://jee-v2.k16e.co");
const $$ImageGridQuotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$X, $$props, $$slots);
  Astro2.self = $$ImageGridQuotes;
  const { blok, class: classes, ...props } = Astro2.props, quotes = blok.quotes, images = blok.images.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.heading, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full lg:[grid-area:1/1/2/9] grid grid-cols-2 md:grid-cols-8 gap-4 md:gap-6 auto-rows-min",
    _xPadding("both-md-up-lg-l"),
    _sectionPadding("bottom-md-down")
  ], "class:list")}> ${images.map((i, x) => renderTemplate`<div${addAttribute([
    "relative overflow-clip",
    x === 0 && "[grid-area:1/1/2/3] md:[grid-area:1/1/3/5] h-[30rem] md:h-[40rem] rounded-t-2xl md:rounded-2xl lg:rounded-t-[1.5rem]",
    x === 1 && "[grid-area:2/1/3/3] md:[grid-area:1/5/2/9] h-[20rem] md:rounded-2xl lg:rounded-t-[1.5rem]",
    x === 2 && "[grid-area:3/1/4/2] md:[grid-area:2/5/3/7] h-[14rem] md:h-[18.5rem] lg:h-[18rem] rounded-bl-2xl md:rounded-2xl lg:rounded-t-[1.5rem]",
    x === 3 && "[grid-area:3/2/4/3] md:[grid-area:2/7/3/9] h-[14rem] md:h-[18.5rem] lg:h-[18rem] rounded-br-2xl md:rounded-2xl lg:rounded-t-[1.5rem]"
  ], "class:list")}> ${renderComponent($$result3, "Image", $$Image, { "filename": i.file.filename, "alt": i.file.alt, "loading": "lazy", "filter": false, "class": "h-full max-h-full" })} </div>`)} </div> <div class="col-span-full lg:[grid-area:1/9/2/13] grid grid-cols-7 r-hide-overflow"> <div${addAttribute([
    _sectionPadding("top"),
    "px-5 sm:px-8 lg:px-10 xl:px-18 h-full col-span-full sm:[grid-area:1/2/2/7] lg:col-span-full"
  ], "class:list")}> <div class="absolute -top-2 -left-4 md:-top-6 md:-left-6 lg:-top-8"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "quote-open", "class": "size-28 md:size-48 lg:size-52 text-[var(--color-text-title)] opacity-10" })} </div> ${renderComponent($$result3, "SwiperQuotes", $$SwiperQuotes, { "quotes": quotes })} </div> </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/ImageGridQuotes.astro", void 0);

const $$Astro$W = createAstro("https://jee-v2.k16e.co");
const $$ButtonLinkExternal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$W, $$props, $$slots);
  Astro2.self = $$ButtonLinkExternal;
  const { link, label, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute([
    "flex items-center gap-1.5 text-[var(--color-text-title)] hover:text-[var(--color-text-emphasis)] font-medium group",
    _fontSize("body"),
    classes
  ], "class:list")} target="_blank"${spreadAttributes(props)}> <span class="block pointer-events-none">${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "xlink", "class": "w-5 text-inherit opacity-60 group-hover:opacity-100" })} </a>`;
}, "/Users/kb/Documents/jee/src/atoms/ButtonLinkExternal.astro", void 0);

const $$Astro$V = createAstro("https://jee-v2.k16e.co");
const $$SectionOpenPositions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$V, $$props, $$slots);
  Astro2.self = $$SectionOpenPositions;
  const { blok, class: classes, ...props } = Astro2.props;
  const jobs = blok?.jobs;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bg-[var(--color-bg-default-elevated)] rounded-2xl md:rounded-[1.5rem] px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 lg:py-[4.5rem]"> ${renderComponent($$result3, "HeadingSection", $$HeadingSection, { "level": "h3", "text": blok.heading, "size": "4" })} <ul${addAttribute(["py-8 ml:py-10", _blockGap("y")], "class:list")}> ${jobs.map(({ content }) => renderTemplate`${renderComponent($$result3, "Grid", $$Grid, { "tag": "li", "grid": "4-12-12", "class:list": ["pb-4", _gridGap()] }, { "default": ($$result4) => renderTemplate` <div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/4] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10"
  ], "class:list")}> ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h4", "text": content.title, "class": "min-w-[12rem] max-w-[13rem]" })} </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/4/2/13] ml:grid ml:grid-cols-2 ml:gap-10 -mt-1"
  ], "class:list")}> ${renderComponent($$result4, "RichText", $$RichText, { "text": content.description, "pType": "body" })} <ul class="space-y-4 mt-4 ml:mt-0"> ${content.links.map(({ link, label }) => renderTemplate`${renderComponent($$result4, "ButtonLinkExternal", $$ButtonLinkExternal, { "link": link.cached_url, "label": label })}`)} </ul> </div> ` })}`)} </ul> </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionOpenPositions.astro", void 0);

const $$Astro$U = createAstro("https://jee-v2.k16e.co");
const $$SectionLongform = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$U, $$props, $$slots);
  Astro2.self = $$SectionLongform;
  const { blok, class: classes, ...props } = Astro2.props;
  const post = blok.literature;
  const excerpt = post.content[0].type === "paragraph" ? post.content[0]?.content[0]?.text : "";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading), "title": blok.heading, "overlap": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "inset": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "auto-rows-min" }, { "default": ($$result4) => renderTemplate`${!_empty(excerpt) && renderTemplate`${maybeRenderHead()}<div class="col-span-full md:[grid-area:1/2/2/8] lg:[grid-area:1/3/2/11] md:text-center mb-8"> ${renderComponent($$result4, "Text", $$Text, { "tag": "p", "text": excerpt, "color": "body", "size": "2hx" })} </div>`}<div class="col-span-full md:[grid-area:2/2/3/8] lg:[grid-area:2/3/3/11]"> ${renderComponent($$result4, "RichText", $$RichText, { "text": post, "post": true })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionLongform.astro", void 0);

const $$Astro$T = createAstro("https://jee-v2.k16e.co");
const $$SectionImpacts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$T, $$props, $$slots);
  Astro2.self = $$SectionImpacts;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading), "title": blok.heading }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [_gridGap()] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full md:[grid-area:1/1/2/5] lg:[grid-area:1/1/2/7] xl:[grid-area:1/2/2/7] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10"
  ], "class:list")}> ${blok.numbers.map((i) => renderTemplate`${renderComponent($$result4, "Number", $$Number, { "number": i, "class": "max-w-full lg:max-w-[14.5rem]", "headlineSize": "body" })}`)} </div> <div${addAttribute([
    "col-span-full md:[grid-area:1/5/2/9] lg:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/12] relative",
    _spaceY()
  ], "class:list")}> <div class="absolute -top-8 -left-8 md:-top-14 md:-left-12"> ${renderComponent($$result4, "Icon", $$Icon, { "name": "quote-open", "class": "size-24 md:size-40 text-[var(--color-text-title)] opacity-10" })} </div> ${renderComponent($$result4, "SwiperQuotes", $$SwiperQuotes, { "quotes": blok.quotes })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionImpacts.astro", void 0);

const $$Astro$S = createAstro("https://jee-v2.k16e.co");
const $$CardSuccess = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$S, $$props, $$slots);
  Astro2.self = $$CardSuccess;
  const { item, tag = "li", class: classes, ...props } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "w-[21rem] ml:w-[24rem] h-[25rem] relative overflow-clip",
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 relative overflow-clip"> <div class="rounded-tl-[1.5rem] rounded-tr-[3.5rem] rounded-bl-[1.5rem] rounded-br-[9rem] [grid-area:1/1/2/2] h-[18.5rem] relative overflow-clip"> ${renderComponent($$result2, "Image", $$Image, { "filename": item.content.image.filename, "alt": item.content.image.alt, "filter": true, "class:list": ["h-full"] })} </div> <div class="[grid-area:1/1/2/2] mt-[10rem] ml-4 mr-4 sm:ml-5 sm:mr-7 lg:mr-8 z-10"> <div class="bg-[var(--color-bg-default)] rounded-t-[1.5rem] min-h-[12rem] p-4 sm:p-5 space-y-1.5"> ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "size": "emphasis", "text": item.content.headline, "color": "title", "weight": "semi", "family": "display", "class": "pb-2" })} ${item.content.copy && renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "size": "footnote", "text": item.content.copy, "color": "body", "class": "line-clamp-4 pt-3 pr-4 border-t border-[var(--color-border-muted)]" })}`} </div> </div> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/CardSuccess.astro", void 0);

const $$Astro$R = createAstro("https://jee-v2.k16e.co");
const $$SectionSuccesses = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$R, $$props, $$slots);
  Astro2.self = $$SectionSuccesses;
  const { blok, class: classes, ...props } = Astro2.props, list = blok.list;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(["col-span-full", _spaceY()], "class:list")}> <div${addAttribute([
    blok.bleed ? _xPadding("both-lg-down-l") : _xPadding("both")
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "level": "h2", "text": blok.heading, "size": "4", "hasCarouselControls": true })} </div> <div${addAttribute([
    blok.bleed ? _xPadding("left-lg-down-l") : _xPadding("left")
  ], "class:list")}> <div${addAttribute(["swiper swiper-all"], "class:list")}> <ul class="swiper-wrapper"> ${list.map((i, x) => renderTemplate`${renderComponent($$result4, "CardSuccess", $$CardSuccess, { "item": i, "class": "swiper-slide" })}`)} </ul> </div> </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionSuccesses.astro", void 0);

const $$Astro$Q = createAstro("https://jee-v2.k16e.co");
const $$SectionDistribution = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$Q, $$props, $$slots);
  Astro2.self = $$SectionDistribution;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlockDistribution", $$BlockDistribution, { "blok": blok })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/SectionDistribution.astro", void 0);

const $$Astro$P = createAstro("https://jee-v2.k16e.co");
const $$DistributionAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$P, $$props, $$slots);
  Astro2.self = $$DistributionAccordion;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlockAccordion", $$BlockAccordion, { "entry": blok })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/DistributionAccordion.astro", void 0);

const $$Astro$O = createAstro("https://jee-v2.k16e.co");
const $$DistributionBullets = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$O, $$props, $$slots);
  Astro2.self = $$DistributionBullets;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap()] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/9] xl:[grid-area:1/2/2/9] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10"
  ], "class:list")}> <div class="flex flex-col gap-8 md:flex-row"> ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": blok.heading, "class": "min-w-[12rem] max-w-[13rem]" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.body, "pType": "body" })} </div> </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/9/2/13] xl:[grid-area:1/9/2/12] relative",
    _spaceY()
  ], "class:list")}> <div class="p-4 rounded-2xl bg-[var(--color-bg-default-elevated)]"> ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.bullets[0].content, "pType": "blurb" })} </div> </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/DistributionBullets.astro", void 0);

const $$Astro$N = createAstro("https://jee-v2.k16e.co");
const $$DistributionMulticol = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$N, $$props, $$slots);
  Astro2.self = $$DistributionMulticol;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap()] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/4] xl:[grid-area:1/2/2/4] flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-10"
  ], "class:list")}> ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": blok.heading, "class": "min-w-[12rem] max-w-[13rem]" })} </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/4/2/13] xl:[grid-area:1/4/2/12] relative",
    _spaceY()
  ], "class:list")}> ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.body, "pType": "body", "class": "ml:columns-2 ml:gap-8" })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/DistributionMulticol.astro", void 0);

const $$Astro$M = createAstro("https://jee-v2.k16e.co");
const $$VideoView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$M, $$props, $$slots);
  Astro2.self = $$VideoView;
  const { blok, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "id": _slugify(blok.heading) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class:list": [_gridGap()] }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/6] lg:[grid-area:1/1/2/9]"
  ], "class:list")}> <div class="overflow-clip rounded-[1.5rem]"> ${renderComponent($$result4, "YouTube", $$YouTube, { "id": blok.video_id, "class": "max-w-none" })} </div> </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/6/2/9] lg:[grid-area:1/9/2/13]",
    _spaceY()
  ], "class:list")}> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "text": blok.summary[0].title, "level": "h2", "size": "5" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.summary[0].body, "pType": "body" })} ${blok.takeaways && !_empty(blok.takeaways) && renderTemplate`<div class="flex flex-col gap-y-2"> ${renderComponent($$result4, "HeadingSection", $$HeadingSection, { "text": blok.takeaways[0].title, "level": "h3", "size": "6", "padding": "small" })} ${renderComponent($$result4, "RichText", $$RichText, { "text": blok.takeaways[0].content, "pType": "blurb", "class": "prose-li:list-image-[url(/graphics/marker.svg)]" })} </div>`} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/sections/VideoView.astro", void 0);

const $$Astro$L = createAstro("https://jee-v2.k16e.co");
const $$InputRadio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$L, $$props, $$slots);
  Astro2.self = $$InputRadio;
  const { label, id, name, checked, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(["flex items-center m-0 cursor-pointer w-full", classes], "class:list")}${spreadAttributes(props)}> <input type="radio"${addAttribute(name, "name")}${addAttribute(id, "value")}${addAttribute(id, "id")}${addAttribute([
    "h-4 w-4 border-[var(--color-border-subtle)] text-[var(--color-emphasis)] focus:ring-[var(--color-emphasis)]",
    _fontSize("blurb")
  ], "class:list")}${addAttribute(checked, "checked")}> <label${addAttribute(id, "for")}${addAttribute([
    "pl-3 block font-medium font-display text-[var(--color-text-body)] w-full",
    _fontSize("blurb")
  ], "class:list")}>${label}</label> </p>`;
}, "/Users/kb/Documents/jee/src/atoms/InputRadio.astro", void 0);

const $$Astro$K = createAstro("https://jee-v2.k16e.co");
const $$FiltersPeople = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$K, $$props, $$slots);
  Astro2.self = $$FiltersPeople;
  const {
    links,
    designations,
    locations,
    sectors,
    practices,
    selectedItems,
    class: classes,
    ...props
  } = Astro2.props;
  const roles = [
    "Managing Partner",
    "Partner",
    "Managing Associate",
    "Business Support"
  ];
  const {
    designation,
    practices: practicesFromParams,
    sectors: sectorsFromParams,
    offices
  } = selectedItems;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["pt-6", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": "Filters", "level": "h2", "size": "6", "weight": "semi", "padding": "small", "hasResetButton": true })} <ul> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Roles", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Sort JEE People by Role</legend> <div class="space-y-3"> ${roles.map((i) => renderTemplate`${renderComponent($$result, "InputRadio", $$InputRadio, { "label": i, "id": _slugify(i), "name": "role", "checked": designation === _slugify(i) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Practices", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">JEE Practices</legend> <div class="space-y-3"> ${practices.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "practices", "checked": practicesFromParams.includes(
    _slugify(i)
  ) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Sectors", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">JEE Sectors</legend> <div class="space-y-3"> ${sectors.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "sectors", "checked": sectorsFromParams.includes(
    _slugify(i)
  ) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Locations", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Offices of JEE Lawyers</legend> <div class="space-y-3"> ${locations.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "offices", "checked": offices.includes(_slugify(i)) })}`)} </div> </fieldset> </div> </li> </ul> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/FiltersPeople.astro", void 0);

const MAXITEMS = 18;
const RELATIONS = [
    'block_bento_plaques.plaques',
    'image_hanging_insight.insight',
    'carousel_people.people',
    'person.byline',
    'person_links.location',
    'collection.collection',
    'section_latest.insights',
    'insight.category',
    'insight.author',
    'insight.expertise',
    'insight.suggested',
    'session.host',
    'panelist.person',
    'chairpersons.persons',
    'practice.contacts',
    'section_successes.list',
    'office.contacts',
    'section_open_positions.jobs'
];

function _paginateLink(baseURL, current) {
    const url = new URL(baseURL);
    url.searchParams.set('page', current);

    return url.toString()
}

function _truncatesPagination(totalPages, currentPage) {
    const max = 5;

    if (totalPages <= max) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const hasStartEllipsis = currentPage > max - 2;
    const hasEndEllipsis = currentPage < totalPages - (max - 2);

    if (hasStartEllipsis && !hasEndEllipsis) {
        return [
            1,
            { text: '...' },
            ...Array.from({ length: 3 }, (_, i) => totalPages - 3 + i),
        ]
    }

    if (!hasStartEllipsis && hasEndEllipsis) {
        return [
            ...Array.from({ length: 3 }, (_, i) => i + 1),
            { text: '...' },
            totalPages,
        ]
    }

    return [
        1,
        { text: '...' },
        ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
        { text: '...' },
        totalPages,
    ]
}

const $$Astro$J = createAstro("https://jee-v2.k16e.co");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$J, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { ariaLabel = "Pagination", ...attrs } = Astro2.props;
  const { total, size, current } = Astro2.props, numberOfPages = Math.ceil(total / size);
  const { href } = Astro2.url;
  const truncatedPagination = _truncatesPagination(numberOfPages, current);
  return renderTemplate`${numberOfPages > 1 && renderTemplate`${maybeRenderHead()}<nav${addAttribute(ariaLabel, "aria-label")}${spreadAttributes(attrs)}${addAttribute(["flex items-center w-full", _sectionPadding("top")], "class:list")}>${renderComponent($$result, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": ariaLabel })}<ul class="flex items-center w-full justify-center lg:justify-start gap-0.5 sm:gap-3">${current > 1 && renderTemplate`<li><a${addAttribute(_paginateLink(href, current - 1), "href")}${addAttribute(`Go to page ${current - 1} of ${numberOfPages}`, "aria-label")}>${renderComponent($$result, "ButtonFab", $$ButtonFab, { "tag": "span", "size": "large", "label": `Go to page ${current - 1} of ${numberOfPages}`, "icon": "arrow-left" })}</a></li>`}<li><ul class="flex items-center gap-1.5 sm:gap-3">${truncatedPagination.map((number, index) => renderTemplate`<li class="page [&>a[aria-current=&quot;page&quot;]]:bg-[var(--color-emphasis)] [&>a]:rounded-full [&>a[aria-current=&quot;page&quot;]]:text-white [&>a:not([aria-current=&quot;page&quot;])]:hover:bg-[var(--color-bg-default-elevated)]">${typeof number === "object" ? renderTemplate`<p>${number.text}</p>` : renderTemplate`<a${addAttribute(_paginateLink(href, number), "href")}${addAttribute(
    number === current ? "page" : void 0,
    "aria-current"
  )} class="flex h-10 w-10 items-center justify-center relative">${number}</a>`}</li>`)}</ul></li>${current < numberOfPages && renderTemplate`<li><a${addAttribute(_paginateLink(href, current + 1), "href")}${addAttribute(`Go to page ${current + 1} of ${numberOfPages}`, "aria-label")}>${renderComponent($$result, "ButtonFab", $$ButtonFab, { "tag": "span", "size": "large", "label": `Go to page ${current + 1} of ${numberOfPages}`, "icon": "arrow-right" })}</a></li>`}</ul></nav>`}`;
}, "/Users/kb/Documents/jee/src/blocks/Pagination.astro", void 0);

function _getVisibleItems(totalItems, search, current, maxItems, allCategories) {
    const stemWord = (word) => {
        return word.toLowerCase().replace(/(?:s|es)$/, '')
    };

    const matchWords = (searchTerm, content) => {
        const searchWords = searchTerm.toLowerCase().split(/\s+/);
        const contentWords = content.toLowerCase().split(/\s+/);

        return searchWords.every(searchWord =>
            searchWord.length === 1
                ? contentWords.some(contentWord => contentWord.includes(searchWord))
                : contentWords.some(contentWord =>
                    stemWord(contentWord).includes(stemWord(searchWord)) ||
                    stemWord(searchWord).includes(stemWord(contentWord))
                )
        )
    };

    function filter(totalItems) {
        if (allCategories.page === 'People') {
            const { designation, practices, sectors, offices } = allCategories;
            return totalItems.filter((item) => {
                // Designation (radio) filter
                if (designation && item.content.byline[0].slug !== designation) {
                    return false;
                }

                // Practices (checkbox) filter
                if (practices.length > 0 && !practices.some(practice => item.content.practices[0].collection.some(p => practices.includes(p.slug)))) {
                    return false;
                }

                // Sectors (checkbox) filter
                if (sectors.length > 0 && !sectors.some(sector => item.content.sectors[0] && item.content.sectors[0].collection.some(p => sectors.includes(p.slug)))) {
                    return false;
                }

                // Offices (checkbox) filter
                if (offices.length > 0 && !offices.some(office => offices.includes(_slugify(item.content.links[0].location.content.tag)))) {
                    return false;
                }

                return true;
            });
        }
        if (allCategories.page === 'Events') {
            const { timing, type } = allCategories;
            return totalItems.filter((item) => {
                if (timing === 'upcoming' && new Date(item.content.start_date.replace(' ', 'T')) <= new Date()) {
                    return false;
                } else if (timing === 'past' && new Date(item.content.start_date.replace(' ', 'T')) > new Date()) {
                    return false;
                }
                if (type && item.content.type !== type) {
                    return false;
                }
                return true;
            })
        }
        if (allCategories.page === 'Insights') {
            const { categories, expertise, people } = allCategories;
            // Practices (checkbox) filter
            return totalItems.filter((item, index) => {
                if (categories.length > 0 && !categories.includes(_slugify(item.content.category.name))) {
                    return false;
                }
                if (expertise.length > 0 && !expertise.some(_ => item.content.expertise.some(p => expertise.includes(p.slug)))) {
                    return false;
                }
                if (people.length > 0 && !people.some(_ => item.content.author.some(p => people.includes(p.slug)))) {
                    return false;
                }
                return true
            })

        }
        return totalItems
    }
    const filteredItems = filter(totalItems);

    const searchResultsItems = filteredItems.filter((item) =>
        !search ||
        search.trim().length === 0 ||
        (item.content.name && matchWords(search, item.content.name)) ||
        (item.content.title && matchWords(search, item.content.title)) ||
        (item.content.byline?.[0]?.name && matchWords(search, item.content.byline[0].name)) ||
        (item.content.author?.[0]?.name && matchWords(search, item.content.author[0].name)) ||
        (item.content.category?.name && matchWords(search, item.content.category.name))
    );

    const visibleItems = searchResultsItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    );

    return { searchResultsItems, visibleItems }
}

const $$Astro$I = createAstro("https://jee-v2.k16e.co");
const $$NoResult = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$I, $$props, $$slots);
  Astro2.self = $$NoResult;
  const { content, class: classes, ...props } = Astro2.props;
  const textInside = content || `Sorry, we may not have any item matching your search or filter value. Kindly use the "Reset" button and try again.`;
  return renderTemplate`${maybeRenderHead()}<div class="size-full min-h-[25rem] rounded-[1.5rem] p-4 xl:p-8 flex flex-col bg-parchment-100"> ${renderComponent($$result, "Text", $$Text, { "text": textInside, "size": "copy", "color": "caption", "class": "max-w-screen-sm" })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/NoResult.astro", void 0);

const $$Astro$H = createAstro("https://jee-v2.k16e.co");
const $$AllPeople = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$H, $$props, $$slots);
  Astro2.self = $$AllPeople;
  const { blok } = Astro2.props;
  const people = await _getPeople();
  const designations = _designations.value.sort((a, b) => parseInt(a.content.rank - b.content.rank)).map((a) => a.content.title).slice(0, 4);
  const offices = _offices.value.map((o) => o.content.tag);
  const sectors = _sectors.value.map((o) => o.content.title);
  const practices = _practices.value.map((o) => o.content.title);
  const maxItems = MAXITEMS;
  const page = Astro2.url.searchParams.get("page") || "1";
  const search = Astro2.url.searchParams.get("s");
  const current = parseInt(page, 10);
  const allCategories = {
    page: "People",
    designation: Astro2.url.searchParams.get("role") || "",
    practices: Astro2.url.searchParams.getAll("practices[]"),
    sectors: Astro2.url.searchParams.getAll("sectors[]"),
    offices: Astro2.url.searchParams.getAll("offices[]")
  };
  const { searchResultsItems, visibleItems } = _getVisibleItems(
    people,
    search,
    current,
    maxItems,
    allCategories
  );
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20 bg-[var(--color-bg-default)] rounded-t-[1.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4.5rem]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, { "split": "sidebar", "class": "items-start" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "self-start sticky -top-px z-20 bg-[var(--color-bg-default)] ml:bg-transparent ml:pt-8 flex flex-col group [&.is-pinned]:shadow ml:!shadow-none ml:max-h-[calc(100vh-1.5rem)] overflow-y-clip px-4 md:px-8 ml:pr-0 lg:pl-16"
  ], "class:list")} data-pin-top> <form class="space-y-1.5 min-h-0 relative overflow-auto" data-search-filter> ${renderComponent($$result3, "ButtonMore", $$ButtonMore, { "tag": "button", "type": "submit", "label": "View Results", "class": "hidden ml-auto mb-4" })} <div class="flex items-center justify-between py-3 ml:!pb-0 gap-3"> ${renderComponent($$result3, "InputText", $$InputText, { "label": "Search", "value": search, "id": "text", "name": "s", "class": "w-full local-search", "isSearch": true })} <!-- <ButtonFab
						icon='funnel'
						label='Toggle Page Sorting & Filtering'
						class='xl:sr-only flex-shrink-0'
						type='button'
						data-drawer-trigger='filters-people'
						data-display='filters-people'
					/> --> </div> ${renderComponent($$result3, "FiltersPeople", $$FiltersPeople, { "designations": designations, "locations": offices, "sectors": sectors, "practices": practices, "selectedItems": allCategories, "class": "hidden ml:flex ml:flex-col" })} </form> </div> <div${addAttribute([
    "flex items-center justify-center ml:justify-start flex-wrap gap-6 lg:gap-8 relative z-10 pt-4 ml:pt-8 px-4 md:px-8 ml:pl-0 ml:pr-8"
  ], "class:list")}> ${visibleItems.length > 0 ? visibleItems.map((i, x) => renderTemplate`${renderComponent($$result3, "CardPerson", $$CardPerson, { "person": i, "tag": "h3", "size": "default" })}`) : renderTemplate`${renderComponent($$result3, "NoResult", $$NoResult, {})}`} ${renderComponent($$result3, "Pagination", $$Pagination, { "total": searchResultsItems.length, "size": maxItems, "current": current })} </div> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllPeople.astro", void 0);

const $$Astro$G = createAstro("https://jee-v2.k16e.co");
const $$FiltersInsights = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$G, $$props, $$slots);
  Astro2.self = $$FiltersInsights;
  const {
    links,
    categories,
    sectors,
    practices,
    people,
    selectedItems,
    class: classes,
    ...props
  } = Astro2.props;
  const expertise = [...sectors, ...practices];
  const {
    categories: categoriesFromParams,
    expertise: expertiseFromParams,
    people: peopleFromParams
  } = selectedItems;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["pt-6", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": "Filters", "size": "6", "weight": "semi", "padding": "small", "hasResetButton": true })} <ul> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Categories", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Filter JEE Insights by Category</legend> <div class="space-y-3"> ${categories.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "categories", "checked": categoriesFromParams.includes(
    _slugify(i)
  ) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Expertise", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Filter JEE Insights by Practices</legend> <div class="space-y-3"> ${expertise.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "expertise", "checked": expertiseFromParams.includes(
    _slugify(i)
  ) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "People", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Filter JEE Insights by People</legend> <div class="space-y-3"> ${people.map((i) => renderTemplate`${renderComponent($$result, "InputCheck", $$InputCheck, { "label": i, "id": _slugify(i), "name": "people", "checked": peopleFromParams.includes(
    _slugify(i)
  ) })}`)} </div> </fieldset> </div> </li> </ul> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/FiltersInsights.astro", void 0);

const $$Astro$F = createAstro("https://jee-v2.k16e.co");
const $$AllInsights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$F, $$props, $$slots);
  Astro2.self = $$AllInsights;
  const { blok } = Astro2.props;
  const insights = await _getInsights();
  const categories = _categories.value.map((i) => i.content.title);
  const sectors = _sectors.value.map((i) => i.content.title);
  const practices = _practices.value.map((i) => i.content.title);
  const authors = insights.map((i) => i.content.author).flat().map((i) => i.name);
  const uniqueAuthors = [...new Set(authors)];
  const maxItems = MAXITEMS;
  const page = Astro2.url.searchParams.get("page") || "1";
  const search = Astro2.url.searchParams.get("s");
  const current = parseInt(page, 10);
  const allCategories = {
    page: "Insights",
    categories: Astro2.url.searchParams.getAll("categories[]") || [],
    expertise: Astro2.url.searchParams.getAll("expertise[]") || [],
    people: Astro2.url.searchParams.getAll("people[]") || []
  };
  const { searchResultsItems, visibleItems } = _getVisibleItems(
    insights,
    search,
    current,
    maxItems,
    allCategories
  );
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [
    "overflow-clip bg-[var(--color-bg-default)] ml:bg-transparent rounded-t-[1.5rem] md:rounded-t-[3.5rem] ml:rounded-t-none"
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "items-start" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/3] lg:[grid-area:1/1/2/4] sticky bg-[var(--color-bg-default)] z-10 -top-px [&.is-pinned]:shadow ml:!shadow-none ml:pt-8 ml:max-h-[calc(100vh-1.5rem)] overflow-y-clip flex flex-col px-4 md:px-8 ml:pr-0 lg:pl-16"
  ], "class:list")} data-pin-top> <form class="space-y-1.5 min-h-0 relative overflow-auto" data-search-filter> ${renderComponent($$result4, "ButtonMore", $$ButtonMore, { "tag": "button", "type": "submit", "label": "View Results", "class": "hidden ml-auto mb-4" })} <div class="flex items-center justify-between py-3 ml:!pb-0 gap-3"> ${renderComponent($$result4, "InputText", $$InputText, { "isSearch": true, "label": "Search", "value": search, "id": "text", "name": "s", "placeholder": "Search JEE Insights", "class": "w-full local-search" })} <!-- <ButtonFab
							icon='funnel'
							label='Toggle Page Sorting & Filtering'
							class='lg:sr-only flex-shrink-0'
							type='button'
						/> --> </div> ${renderComponent($$result4, "FiltersInsights", $$FiltersInsights, { "categories": categories, "sectors": sectors, "practices": practices, "people": uniqueAuthors, "selectedItems": allCategories, "class": "hidden ml:flex ml:flex-col" })} </form> </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/3/2/13] lg:[grid-area:1/4/2/13] grid grid-cols-1 gap-y-6 md:gap-y-8 px-4 md:px-8 ml:pl-0 lg:pr-16"
  ], "class:list")}> ${visibleItems.length > 0 ? visibleItems.map((i, x) => renderTemplate`${renderComponent($$result4, "CardInsight", $$CardInsight, { "piece": i, "landscape": true, "profile": false })}`) : renderTemplate`${renderComponent($$result4, "NoResult", $$NoResult, {})}`} ${renderComponent($$result4, "Pagination", $$Pagination, { "total": searchResultsItems.length, "size": maxItems, "current": current })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllInsights.astro", void 0);

const $$Astro$E = createAstro("https://jee-v2.k16e.co");
const $$ListBullet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$E, $$props, $$slots);
  Astro2.self = $$ListBullet;
  const { icon, text, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-1 sm:gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "size-5 text-[var(--color-emphasis)]" })} ${renderComponent($$result, "Text", $$Text, { "text": text, "color": "body", "size": "blurb", "weight": "medium", "class": "line-clamp-3" })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/ListBullet.astro", void 0);

const $$Astro$D = createAstro("https://jee-v2.k16e.co");
const $$CardEvent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$D, $$props, $$slots);
  Astro2.self = $$CardEvent;
  const { entry, class: classes, ...props } = Astro2.props;
  const image = entry.featured_image ? entry.featured_image.filename : entry.content.image.filename;
  const altText = entry.featured_image ? entry.featured_image.alt : entry.content.image.alt;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(_slug(entry.full_slug), "href")}${addAttribute([
    "r-hide-overflow overflow-y-clip group flex flex-col md:flex-row h-full md:h-[32rem] bg-parchment-100 rounded-3xl p-2",
    classes
  ], "class:list")}${spreadAttributes(props)}> <div class="order-2 md:order-1 px-2 sm:px-4 py-6 sm:py-7 md:px-8 md:py-10 w-full min-h-[14rem] gap-y-4"> <div class="flex flex-col gap-5 md:gap-8 pr-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "h3", "text": entry.content.title, "color": "title", "size": "4", "weight": "extra", "class": "line-clamp-4" })} <div class="flex flex-col gap-1.5 md:gap-2 lg:pr-12"> ${renderComponent($$result, "ListBullet", $$ListBullet, { "icon": "map-pin", "text": entry.content.venue })} ${renderComponent($$result, "ListBullet", $$ListBullet, { "icon": "calendar", "text": _formatDate(entry.content.start_date) })} ${renderComponent($$result, "ListBullet", $$ListBullet, { "icon": "clock", "text": entry.content.time })} </div> ${renderComponent($$result, "ButtonMore", $$ButtonMore, { "tag": "span", "label": entry.content.index_link_label })} </div> ${renderComponent($$result, "Chip", $$Chip, { "text": entry.content.type, "class": "absolute bottom-5 right-5 md:right-auto md:left-10 md:bottom-10" })} </div> <div class="w-full h-[32rem] md:h-full md:min-w-[28rem] md:max-w-[28rem] rounded-tl-[2rem] rounded-br-[1.5rem] rounded-tr-[2rem] rounded-bl-[10rem] order-1 md:order-2 overflow-clip"> ${renderComponent($$result, "Image", $$Image, { "filename": image, "alt": altText, "filter": true, "class:list": [
    "transition-transform duration-200 group-hover:scale-110 h-full"
  ] })} </div> </a>`;
}, "/Users/kb/Documents/jee/src/blocks/CardEvent.astro", void 0);

const $$Astro$C = createAstro("https://jee-v2.k16e.co");
const $$FiltersEvents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$FiltersEvents;
  const { class: classes, selectedItems, ...props } = Astro2.props;
  const timing = ["Upcoming", "Past"];
  const type = ["Live", "Virtual", "Hybrid"];
  const { type: typeFromParams, timing: timingFromParams } = selectedItems;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["pt-6", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": "Filters", "level": "h2", "size": "6", "weight": "semi", "padding": "small", "hasResetButton": true })} <ul> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Timing", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Sort JEE Event by Timing</legend> <div class="space-y-3"> ${timing.map((i) => renderTemplate`${renderComponent($$result, "InputRadio", $$InputRadio, { "label": i, "id": _slugify(i), "name": "timing", "checked": timingFromParams === _slugify(i) })}`)} </div> </fieldset> </div> </li> <li class="accordion group border-b border-[var(--color-border-muted)]"> <div class="accordion__button r-transition flex items-center justify-between h-14 cursor-pointer" aria-expanded="false"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "text": "Type", "color": "body", "weight": "semi" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-text-caption)] opacity-70 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content overflow-hidden max-h-0 transition-all ease-in-out"> <fieldset class="max-w-full pt-1 px-4 pb-4 transition-[height] duration-300"> <legend class="sr-only">Sort JEE Event by Type</legend> <div class="space-y-3"> ${type.map((i) => renderTemplate`${renderComponent($$result, "InputRadio", $$InputRadio, { "label": i, "id": _slugify(i), "name": "type", "checked": typeFromParams === _slugify(i) })}`)} </div> </fieldset> </div> </li> </ul> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/FiltersEvents.astro", void 0);

const api$2 = zn();

async function _getEvents() {
    return await api$2.getAll('cdn/stories', {
        starts_with: 'events/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.start_date:desc',
        resolve_links: 'url',
        resolve_relations: ['session.host', 'panelist.person'],
    })
}

const $$Astro$B = createAstro("https://jee-v2.k16e.co");
const $$AllEvents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$AllEvents;
  const { blok } = Astro2.props;
  const events = await _getEvents();
  const maxItems = MAXITEMS;
  const page = Astro2.url.searchParams.get("page") || "1";
  const search = Astro2.url.searchParams.get("s");
  const current = parseInt(page, 10);
  const allCategories = {
    page: "Events",
    timing: Astro2.url.searchParams.get("timing") || "",
    type: Astro2.url.searchParams.get("type") || ""
  };
  const { searchResultsItems, visibleItems } = _getVisibleItems(
    events,
    search,
    current,
    maxItems,
    allCategories
  );
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "margins": false, "class:list": [
    "overflow-clip bg-[var(--color-bg-default)] ml:bg-transparent rounded-t-[1.5rem] md:rounded-t-[3.5rem] ml:rounded-t-none"
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "class": "overflow-clip self-start" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "col-span-full ml:[grid-area:1/1/2/3] lg:[grid-area:1/1/2/4] sticky bg-[var(--color-bg-default)] z-10 -top-px [&.is-pinned]:shadow ml:!shadow-none ml:pt-8 ml:max-h-[calc(100vh-1.5rem)] overflow-y-clip flex flex-col px-4 md:px-8 ml:pr-0 lg:pl-16"
  ], "class:list")} data-pin-top> <form class="space-y-1.5 min-h-0 relative overflow-auto" data-search-filter> ${renderComponent($$result4, "ButtonMore", $$ButtonMore, { "tag": "button", "type": "submit", "label": "View Results", "class": "hidden ml-auto mb-4" })} <div class="flex items-center justify-between py-3 ml:!pb-0 gap-3"> ${renderComponent($$result4, "InputText", $$InputText, { "isSearch": true, "label": "Search", "value": search, "id": "text", "name": "s", "placeholder": "Find a JEE Event", "class": "w-full local-search" })} <!-- <ButtonFab
							icon='funnel'
							label='Toggle Page Sorting & Filtering'
							class='lg:sr-only flex-shrink-0'
							type='button'
						/> --> </div> ${renderComponent($$result4, "FiltersEvents", $$FiltersEvents, { "class": "hidden ml:flex ml:flex-col", "selectedItems": allCategories })} </form> </div> <div${addAttribute([
    "col-span-full ml:[grid-area:1/3/2/13] lg:[grid-area:1/4/2/13] grid grid-cols-1 gap-y-6 md:gap-y-8 px-4 md:px-8 ml:pl-0 lg:pr-16"
  ], "class:list")}> ${visibleItems.length > 0 ? visibleItems.map((i, x) => renderTemplate`${renderComponent($$result4, "CardEvent", $$CardEvent, { "entry": i })}`) : renderTemplate`${renderComponent($$result4, "NoResult", $$NoResult, {})}`} ${renderComponent($$result4, "Pagination", $$Pagination, { "total": searchResultsItems.length, "size": maxItems, "current": current })} </div> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllEvents.astro", void 0);

const $$Astro$A = createAstro("https://jee-v2.k16e.co");
const $$CardContactPerson = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$CardContactPerson;
  const {
    link,
    image,
    tag = "li",
    name,
    designation,
    email,
    phone,
    class: classes,
    ...props
  } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": "relative group flex gap-3" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`/${link}`, "href")} target="_self" rel="follow" tabindex="-1" class="absolute inset-0 size-full z-[3]"></a> <div class="rounded-tl-[0.75rem] rounded-tr-2xl rounded-br-[2.5rem] rounded-bl-2xl overflow-clip size-[4.5rem] shrink-0 bg-[var(--color-bg-default-elevated)] border-2 border-transparent group-hover:border-[var(--color-emphasis)] r-transition"> ${renderComponent($$result2, "Image", $$Image, { "filename": image.filename, "alt": image.alt, "top": true, "contain": true, "class:list": [
    "h-full scale-110 translate-y-2 group-hover:scale-125 r-transition"
  ] })} </div> <div class="flex flex-col gap-0.5"> <div class="flex flex-col gap-0.5"> ${renderComponent($$result2, "Text", $$Text, { "text": name, "color": "title", "size": "1hx", "family": "display", "weight": "semi" })} ${renderComponent($$result2, "Text", $$Text, { "text": designation, "color": "caption", "size": "footnote", "family": "display", "weight": "medium" })} </div> <div class="flex flex-col gap-1 [&>*]:text-[var(--color-text-caption)] hover:[&>*]:text-[var(--color-text-emphasis)] relative [&>*]:font-medium underline underline-offset-1 [&>*]:break-all"> <a${addAttribute(email.link.url, "href")}${addAttribute(["relative z-[4]", _fontSize("footnote")], "class:list")}>${email.label}</a> <a${addAttribute(phone.link.url, "href")}${addAttribute(["relative z-[4]", _fontSize("footnote")], "class:list")}>${phone.label}</a> </div> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/CardContactPerson.astro", void 0);

const $$Astro$z = createAstro("https://jee-v2.k16e.co");
const $$AllOffices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$AllOffices;
  const { blok } = Astro2.props, offices = _offices.value;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "overlap": blok.overlap, "id": _slugify(blok.title) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class:list": [_spaceY()] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HeadingSection", $$HeadingSection, { "text": blok.title, "level": "h2", "size": "4" })} ${renderComponent($$result3, "Grid", $$Grid, { "grid": "1-2-3", "tag": "ul", "class": [_gridGap("y")] }, { "default": ($$result4) => renderTemplate`${offices.map((i) => renderTemplate`${maybeRenderHead()}<li class="space-y-6 md:space-y-8"> ${renderComponent($$result4, "ListStat", $$ListStat, { "heading": i.content.tag, "color": "title", "size": "1hx", "body": i.content.address, "richtext": true, "uppercase": false })} ${!_empty(i.content.contacts) && renderTemplate`<ul class="flex flex-col gap-4"> ${i.content.contacts.map((j) => renderTemplate`${renderComponent($$result4, "CardContactPerson", $$CardContactPerson, { "link": j.full_slug, "image": j.content.headshot, "name": j.content.name, "designation": j.content.byline[0]?.content?.title, "email": j.content.links[0].email[0], "phone": j.content.links[0].phone[0] })}`)} </ul>`} </li>`)}` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllOffices.astro", void 0);

const $$Astro$y = createAstro("https://jee-v2.k16e.co");
const $$CardExpertise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$CardExpertise;
  const { item, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(_slug(item.full_slug), "href")}${addAttribute(["size-full group", classes], "class:list")}${spreadAttributes(props)}> <div class="relative overflow-clip grid grid-cols-1"> <div class="rounded-tl-[2rem] rounded-tr-[3.5rem] rounded-bl-[1.5rem] rounded-br-[9rem] relative overflow-clip [grid-area:1/1/2/2] h-72"> ${renderComponent($$result, "Image", $$Image, { "filename": item.content.image.filename, "alt": item.content.image.alt, "filter": true, "class:list": [
    "size-full transition-transform duration-200 group-hover:scale-110"
  ] })} </div> <div class="[grid-area:1/1/2/2] mt-[12.5rem] ml-4 mr-4 sm:ml-5 sm:mr-7 lg:mr-8 z-10"> <div class="bg-[var(--color-bg-default)] rounded-t-[1.5rem] min-h-44 lg:min-h-52 p-4 sm:p-5 space-y-1.5"> <div> ${renderComponent($$result, "Text", $$Text, { "tag": "h3", "size": "2hx", "text": item.content.title, "color": "title", "weight": "bold" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "highlight", "class": "fix-svg-stroke w-7 text-[var(--color-text-emphasis)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0.5 transition duration-200" })} </div> <div class="pr-2 sm:pr-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "size": "blurb", "text": item.content.excerpt, "color": "body", "class": "line-clamp-4" })} </div> </div> </div> </div> </a>`;
}, "/Users/kb/Documents/jee/src/blocks/CardExpertise.astro", void 0);

const $$Astro$x = createAstro("https://jee-v2.k16e.co");
const $$AllSectors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$AllSectors;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class": "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-10" }, { "default": ($$result3) => renderTemplate`${_sectors.value.map((i, x) => renderTemplate`${renderComponent($$result3, "CardExpertise", $$CardExpertise, { "item": i })}`)}` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllSectors.astro", void 0);

const $$Astro$w = createAstro("https://jee-v2.k16e.co");
const $$AllPractices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$AllPractices;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class": "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-10" }, { "default": ($$result3) => renderTemplate`${_practices.value.map((i, x) => renderTemplate`${renderComponent($$result3, "CardExpertise", $$CardExpertise, { "item": i })}`)}` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllPractices.astro", void 0);

const $$Astro$v = createAstro("https://jee-v2.k16e.co");
const $$AllAfricaExpertise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$AllAfricaExpertise;
  const { blok } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class": "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-10" }, { "default": ($$result3) => renderTemplate`${_africaExpertise.value.map((i, x) => renderTemplate`${renderComponent($$result3, "CardExpertise", $$CardExpertise, { "item": i })}`)}` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllAfricaExpertise.astro", void 0);

const $$Astro$u = createAstro("https://jee-v2.k16e.co");
const $$AllAfricaIp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$AllAfricaIp;
  const { blok } = Astro2.props;
  const ip = await _getAfricaIp();
  const regionalGroups = ip.filter((i) => i.content.country === "rg");
  const other = ip.filter((i) => i.content.country !== "rg");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "component": blok.component, "title": blok.title, "overlap": true, "class": "r-hide-overflow overflow-y-clip z-20" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper$1, { "class:list": [
    "bg-[var(--color-bg-default)] rounded-t-[1.5rem] md:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] ml:max-w-screen-lg flex flex-col gap-8 ml:gap-12",
    _sectionPadding("top")
  ] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap("y")] }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": "Regional Groups", "class": "min-w-[12rem] max-w-[13rem] col-span-full ml:[grid-area:1/1/2/4]" })} ${maybeRenderHead()}<ul class="col-span-full ml:[grid-area:1/4/2/13] grid grid-cols-2 sm:grid-cols-3 ml:grid-cols-4 gap-4"> ${regionalGroups.map((i) => renderTemplate`${renderComponent($$result4, "CardCountry", $$CardCountry, { "entry": i })}`)} </ul> ` })} ${renderComponent($$result3, "Grid", $$Grid, { "grid": "4-12-12", "class:list": [_gridGap("y")] }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeadingStretch", $$HeadingStretch, { "tag": "h2", "text": "All Africa", "class": "min-w-[12rem] max-w-[13rem]" })} <ul class="col-span-full ml:[grid-area:1/4/2/13] grid grid-cols-2 sm:grid-cols-3 ml:grid-cols-4 gap-4"> ${other.map((i) => renderTemplate`${renderComponent($$result4, "CardCountry", $$CardCountry, { "entry": i })}`)} </ul> ` })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/composites/collections/AllAfricaIp.astro", void 0);

const components = {page: $$Page,person: $$Person,insight: $$Insight,event: $$Event,practice: $$Practice,sector: $$Sector,ip: $$Ip,feature: $$Feature,graphic: $$Graphic,illustration: $$Illustration,intro: $$Intro,keynote: $$Keynote,product: $$Product,speakers: $$Speakers,headerBasic: $$HeaderBasic,headerImage: $$HeaderImage,headerImageExpressive: $$HeaderImageExpressive,headerPersonnel: $$HeaderPersonnel,imageHangingText: $$ImageHangingText,imageHangingInsight: $$ImageHangingInsight,sectionBentobox: $$SectionBentobox,sectionCtaClosing: $$SectionCtaClosing,sectionStack: $$SectionStack,sectionLatest: $$SectionLatest,fluidQuotes: $$FluidQuotes,fluidImage: $$FluidImage,wrapper: $$Wrapper,stackDownload: $$StackDownload,stackHighlights: $$StackHighlights,carouselValues: $$CarouselValues,carouselPeople: $$CarouselPeople,imageGridQuotes: $$ImageGridQuotes,sectionOpenPositions: $$SectionOpenPositions,sectionLongform: $$SectionLongform,sectionImpacts: $$SectionImpacts,sectionSuccesses: $$SectionSuccesses,sectionDistribution: $$SectionDistribution,distributionAccordion: $$DistributionAccordion,distributionBullets: $$DistributionBullets,distributionMulticol: $$DistributionMulticol,videoView: $$VideoView,allPeople: $$AllPeople,allInsights: $$AllInsights,allEvents: $$AllEvents,allOffices: $$AllOffices,allSectors: $$AllSectors,allPractices: $$AllPractices,allAfricaExpertise: $$AllAfricaExpertise,allAfricaIp: $$AllAfricaIp};

const $$Astro$t = createAstro("https://jee-v2.k16e.co");
const $$StoryblokComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$StoryblokComponent;
  const { blok, ...props } = Astro2.props;
  if (!blok) {
    throw new Error(
      "Cannot render StoryblokComponent. 'blok' prop is undefined."
    );
  }
  let key = Fe(blok.component);
  const componentFound = key in components;
  let Component;
  if (!componentFound) {
    throw new Error(
        `Component could not be found for blok "${blok.component}"! Is it defined in astro.config.mjs?`
      );
  } else {
    Component = components[key];
  }
  return renderTemplate`${renderComponent($$result, "Component", Component, { "blok": blok, ...props })}`;
}, "/Users/kb/Documents/jee/node_modules/@storyblok/astro/dist/components/StoryblokComponent.astro", void 0);

const $$Astro$s = createAstro("https://jee-v2.k16e.co");
const $$NavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$NavItem;
  const { tag = "a", class: classes, ...props } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "block px-4 py-3 font-medium group/anchor",
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/kb/Documents/jee/src/atoms/NavItem.astro", void 0);

const $$Astro$r = createAstro("https://jee-v2.k16e.co");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { link, children = false, child, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "text-[var(--color-text-caption)] group-hover/li:text-[var(--color-text-emphasis)] group-[&.active]/anchor:text-[var(--color-text-emphasis)] has-[.active]:text-[var(--color-text-emphasis)] flex items-center gap-[0.125rem] text-base 2xl:text-lg 3xl:text-xl transition duration-200 ease-out",
    classes
  ], "class:list")}${spreadAttributes(props)}> <span class="block">${link.label}</span> ${children && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "class": "w-3 text-inherit opacity-70" })}`} </div>`;
}, "/Users/kb/Documents/jee/src/atoms/NavLink.astro", void 0);

const $$Astro$q = createAstro("https://jee-v2.k16e.co");
const $$NavDropdownLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$NavDropdownLink;
  const { tag = "a", label, external, class: classes, ...props } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "flex items-center gap-1 py-2 text-[var(--color-text-body)] group-hover/list:text-[var(--color-text-emphasis)] [&.active]:text-[var(--color-text-emphasis)] opacity-80 group-hover/list:opacity-100 [&.active]:opacity-100 font-medium",
    _fontSize("blurb"),
    classes
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="block pointer-events-none">${label}</span> ${external && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "xlink", "class": "w-4 text-inherit opacity-60" })}`}` })}`;
}, "/Users/kb/Documents/jee/src/atoms/NavDropdownLink.astro", void 0);

const $$Astro$p = createAstro("https://jee-v2.k16e.co");
const $$NavDropdownExpertise = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$NavDropdownExpertise;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["grid grid-cols-3 gap-10 max-w-screen-md", classes], "class:list")}${spreadAttributes(props)}> ${links.slice(0, 3).map((i) => renderTemplate`<ul> <li class="space-y-4"> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "text": i.label, "size": "2hx", "padding": "small" })} <ul class="flex flex-col"> <li class="group/list"> ${renderComponent($$result, "NavDropdownLink", $$NavDropdownLink, { "href": `/${i.children[0].link.cached_url.split("/")[0]}`, "data-anchor": _slugify(
    i.children[0].link.cached_url.split("/")[0]
  ), "aria-label": `JEE ${i.label}`, "label": `All ${i.label}`, "class": "font-semibold !text-base" })} </li> ${i.children.map((j) => renderTemplate`<li class="group/list"> ${renderComponent($$result, "NavDropdownLink", $$NavDropdownLink, { "href": _slug(j.link), "data-anchor": _slugify(j.link.cached_url), "aria-label": `${j.label} Page`, "label": j.label })} </li>`)} </ul> </li> </ul>`)} </li>`;
}, "/Users/kb/Documents/jee/src/blocks/NavDropdownExpertise.astro", void 0);

const $$Astro$o = createAstro("https://jee-v2.k16e.co");
const $$NavDropdownInsights = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$NavDropdownInsights;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(["", classes], "class:list")}${spreadAttributes(props)}> <ul class="flex flex-col"> ${links.map((i) => renderTemplate`<li class="group/list"> ${renderComponent($$result, "NavDropdownLink", $$NavDropdownLink, { "href": _slug(i.link), "data-anchor": _slugify(i.link.cached_url), "aria-label": `${i.label} Page`, "label": i.label, "target": i.link.target, "external": i.link.linktype === "url" })} </li>`)} </ul> </li>`;
}, "/Users/kb/Documents/jee/src/blocks/NavDropdownInsights.astro", void 0);

const $$Astro$n = createAstro("https://jee-v2.k16e.co");
const $$NavDropdownClienthub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$NavDropdownClienthub;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["flex flex-col", classes], "class:list")}${spreadAttributes(props)}> ${links.map((i) => renderTemplate`<li class="group/list"> ${renderComponent($$result, "NavDropdownLink", $$NavDropdownLink, { "href": _slug(i.link), "aria-label": `${i.label} Page`, "label": i.label, "target": "_blank", "external": true })} </li>`)} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/NavDropdownClienthub.astro", void 0);

const $$Astro$m = createAstro("https://jee-v2.k16e.co");
const $$NavDropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$NavDropdown;
  const { child, links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    classes,
    "invisible opacity-0 translate-y-4 scale-90 group-hover/li:visible group-hover/li:opacity-100 group-hover/li:translate-y-0 group-hover/li:scale-100 duration-300 group-hover/li:duration-300 ease-in-out group-hover/li:transition absolute left-1/2 z-50 w-screen max-w-max -translate-x-1/2 py-6 px-7 overflow-hidden rounded-[1.5rem] bg-white shadow ring-1 ring-[var(--color-bg-default-elevated)]"
  ], "class:list")}${spreadAttributes(props)}> ${child === "expertise" && renderTemplate`${renderComponent($$result, "NavDropdownExpertise", $$NavDropdownExpertise, { "links": links })}`} ${child === "insights-innovation" && renderTemplate`${renderComponent($$result, "NavDropdownInsights", $$NavDropdownInsights, { "links": links })}`} ${child === "client-hub" && renderTemplate`${renderComponent($$result, "NavDropdownClienthub", $$NavDropdownClienthub, { "links": links })}`} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/NavDropdown.astro", void 0);

const $$Astro$l = createAstro("https://jee-v2.k16e.co");
const $$NavDesktop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$NavDesktop;
  const { links, class: classes, ...props } = Astro2.props;
  console.log(links);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([classes, "items-center h-full"], "class:list")}${spreadAttributes(props)}> ${links.map((link) => renderTemplate`<li class="group/li relative"> ${_empty(link.link.cached_url) ? renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { "tag": "button", "aria-label": `${link.label} Pages Dropdown` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavLink", $$NavLink, { "link": link, "children": !_empty(link.children) })} ` })}
                    ${renderComponent($$result, "NavDropdown", $$NavDropdown, { "child": _slugify(link.label), "links": link.children })}` : renderTemplate`${renderComponent($$result, "NavItem", $$NavItem, { "href": _slug(link.link), "data-anchor": _slugify(link.link.story.full_slug), "aria-label": `${link.label} Page` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavLink", $$NavLink, { "link": link })} ` })}`} </li>`)} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/NavDesktop.astro", void 0);

const $$Astro$k = createAstro("https://jee-v2.k16e.co");
const $$ButtonFlat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$ButtonFlat;
  const { link, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "text-[var(--color-text-caption)] hover:text-[var(--color-text-emphasis)] h-10 flex items-center group",
    classes
  ], "class:list")}${spreadAttributes(props)}> <span class="text-[0.9rem] uppercase font-semibold tracking-wide block">${link.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-right", "class": "w-4 text-[var(--color-text-emphasis)] group-hover:translate-x-0.5 block" })} </button>`;
}, "/Users/kb/Documents/jee/src/atoms/ButtonFlat.astro", void 0);

const $$Astro$j = createAstro("https://jee-v2.k16e.co");
const $$NavTools = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$NavTools;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    classes,
    "flex items-center justify-end gap-2 sm:gap-3 translate-x-1 sm:translate-x-2 lg:translate-x-0"
  ], "class:list")}${spreadAttributes(props)}> <li class="hidden lg:flex group/li relative"> ${renderComponent($$result, "ButtonFlat", $$ButtonFlat, { "link": links[2] })} ${renderComponent($$result, "NavDropdown", $$NavDropdown, { "child": "client-hub", "links": links[2].children })} </li> <li class="flex items-center lg:items-start gap-2 sm:gap-3 lg:gap-1"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "link": links[1], "icon": "africa", "class": "order-2 lg:order-1", "data-drawer-trigger": "regions", "data-display": "regions" })} ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "blank", "link": links[0], "label": links[0].label, "icon": "search", "class": "order-1 lg:order-2", "data-drawer-trigger": "search", "data-display": "search" })} </li> <li class="h-full w-11 flex lg:hidden items-center justify-center relative"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "blank-brand", "label": "Open Mobile Menu", "icon": "menu", "data-open-menu": true })} </li> </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/NavTools.astro", void 0);

const $$Astro$i = createAstro("https://jee-v2.k16e.co");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Header;
  const { nav, tools, class: classes, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper$1, { "tag": "header", "class:list": ["h-[var(--spacing-1)] md:h-[var(--spacing-2)] lg:h-[var(--spacing-3)] bg-[var(--color-bg-default)] flex items-center z-50", classes], "data-header": true, ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, { "tag": "nav", "class": "w-full" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "Navigation (Desktop View)" })} ${maybeRenderHead()}<a href="/" class="col-span-2 justify-self-start w-full h-full flex items-center translate-y-[0.125rem] -translate-x-[0.15625rem]"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "logo", "class": "h-10 xl:h-[2.8rem]" })} </a> ${renderComponent($$result3, "NavDesktop", $$NavDesktop, { "links": nav, "class": "hidden lg:flex lg:col-span-7 lg:col-start-3 w-full justify-end" })} ${renderComponent($$result3, "NavTools", $$NavTools, { "class": "col-span-2 md:col-span-6 lg:col-span-3 lg:col-start-10 w-full justify-self-end translate-x-3", "links": tools })} ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/layouts/Header.astro", void 0);

const $$Astro$h = createAstro("https://jee-v2.k16e.co");
const $$ListSocials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ListSocials;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([classes, "flex items-center gap-6"], "class:list")}${spreadAttributes(props)}> ${links.map((item) => renderTemplate`<li class="group"> <a${addAttribute(item.url.url, "href")} target="_blank" rel="noopener noreferrer" class="text-[var(--color-muted)] opacity-70 group-hover:text-[var(--color-main)] group-hover:opacity-100"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.name, "class": "h-6" })} <span class="sr-only">${item.name}</span> </a> </li>`)} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/ListSocials.astro", void 0);

const $$Astro$g = createAstro("https://jee-v2.k16e.co");
const $$ListLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ListLink;
  const { link, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group/link"> <a${addAttribute(_slug(link.link), "href")} class="flex flex-col gap-0.5 py-1"> ${renderComponent($$result, "Text", $$Text, { "size": "footnote", "text": link.label, "color": "body-light", "class": "opacity-70 group-hover/link:opacity-100" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "highlight", "class": "fix-svg-stroke w-6 text-[var(--color-text-emphasis)] opacity-0 translate-y-1.5 group-hover/link:opacity-100 group-hover/link:translate-y-0" })} </a> </li>`;
}, "/Users/kb/Documents/jee/src/blocks/ListLink.astro", void 0);

const $$Astro$f = createAstro("https://jee-v2.k16e.co");
const $$ListSitemap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ListSitemap;
  const { links, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([classes, "flex flex-col lg:grid lg:grid-cols-4 lg:gap-8"], "class:list")}${spreadAttributes(props)}> ${links.map((item) => renderTemplate`<li class="accordion group border-t border-[var(--color-muted-dark)] first:border-0 lg:hidden"> <div class="group/button accordion__button r-transition flex items-center justify-between h-14 lg:h-10 cursor-pointer lg:cursor-default" aria-expanded="false"${addAttribute(`${item.label} Links`, "aria-controls")}> ${renderComponent($$result, "Text", $$Text, { "size": "emphasis", "text": item.label, "weight": "medium", "color": "title-light", "class": "opacity-90 group-hover/button:opacity-100 group-[.is-active]:opacity-100 lg:opacity-100 pointer-events-none" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-lightest)] opacity-50 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100 lg:hidden" })} </div> <div class="accordion__content max-h-0 lg:max-h-full overflow-hidden lg:overflow-auto transition-all ease-in-out"> <ul class="pt-2 pb-4 flex flex-col max-w-full transition-[height] duration-300"> ${item.children.map((link) => renderTemplate`${renderComponent($$result, "ListLink", $$ListLink, { "link": link })}`)} </ul> </div> </li>
            <li class="hidden lg:flex flex-col lg:col-span-1 lg:gap-6"> ${renderComponent($$result, "Text", $$Text, { "size": "emphasis", "text": item.label, "weight": "semi", "color": "body-light", "class": "opacity-100" })} <ul class="flex flex-col"> ${item.children.map((link) => renderTemplate`${renderComponent($$result, "ListLink", $$ListLink, { "link": link })}`)} </ul> </li>`)} </ul>`;
}, "/Users/kb/Documents/jee/src/blocks/ListSitemap.astro", void 0);

const $$Astro$e = createAstro("https://jee-v2.k16e.co");
const $$SwiperAwards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SwiperAwards;
  const { images, limit = 9, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    classes,
    "swiper swiper-awards relative [transform:translateZ(0)]"
  ], "class:list")}${spreadAttributes(props)}> <ul class="swiper-wrapper"> ${images.filter((item) => !_empty(item.content.plaque.filename)).map((item) => renderTemplate`<li class="swiper-slide"> <img${addAttribute(item.content.plaque.filename, "src")}${addAttribute(item.content.name, "alt")} class="object-contain object-top w-20 h-auto saturate-0 sepia-[.25]"> </li>`)} </ul> <div class="fixed -right-1 lg:right-0 top-0 z-10 bg-[var(--color-dark)] h-full w-14"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "brand-inverted", "label": "Control Carousel", "icon": "caret-right", "class": "swiper-next fixed right-0 lg:right-2 top-1/2 -translate-y-1/2 opacity-100" })} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/SwiperAwards.astro", void 0);

const $$Astro$d = createAstro("https://jee-v2.k16e.co");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear(), { site, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["z-20 relative r-hide-overflow", classes], "class:list")}${spreadAttributes(props)}> <div class="bg-[var(--color-dark)] md:mx-6 lg:mx-4 md:mb-6 lg:mb-4 rounded-tr-[2rem] md:rounded-[2rem]"> ${renderComponent($$result, "Wrapper", $$Wrapper$1, { "class": "pt-6 md:pt-10 lg:pt-12 xl:pt-16 pb-4 md:pb-8 lg:-mx-4" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, {}, { "default": ($$result3) => renderTemplate` <div class="col-span-full md:col-span-4 flex flex-col gap-6 md:gap-8 md:pr-6"> <a href="/"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "icon-white", "class": "h-10 md:h-12 lg:h-14" })} <span class="sr-only">${site.title}</span> </a> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "text": site.description, "size": "subtext", "color": "body-light", "class": "opacity-70 max-w-screen-sm" })} ${renderComponent($$result3, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "JEE Social Media Presence" })} ${renderComponent($$result3, "ListSocials", $$ListSocials, { "links": site.socials[0].content.global })} ${renderComponent($$result3, "ButtonMore", $$ButtonMore, { "tag": "button", "theme": "on-dark", "label": "Subscribe to JEE Insights", "class": "my-3", "data-modal-trigger": "newsletter", "data-display": "newsletter" })} </div> <div class="col-span-full md:col-span-4 lg:col-span-8 flex flex-col gap-8 py-6 md:gap-10 lg:gap-16 md:pt-0"> <div> ${renderComponent($$result3, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "Site Cross-Section Links Map" })} ${renderComponent($$result3, "ListSitemap", $$ListSitemap, { "links": site.links, "class": "col-span-full md:col-span-4" })} </div> <div class="col-span-full md:col-span-4"> ${renderComponent($$result3, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "JEE Awards & Recognition (Plaques)" })} ${renderComponent($$result3, "SwiperAwards", $$SwiperAwards, { "images": site.awards })} </div> </div> <div class="col-span-full md:col-span-4 lg:col-span-full text-[var(--color-muted)] opacity-70"> ${renderComponent($$result3, "Text", $$Text, { "text": `&copy; ${year} ${site.legalName}. All rights reserved.`, "size": "footnote" })} </div> ` })} ` })} </div> </footer>`;
}, "/Users/kb/Documents/jee/src/layouts/Footer.astro", void 0);

const $$Astro$c = createAstro("https://jee-v2.k16e.co");
const $$Shim = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Shim;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    `
        fixed inset-0 bg-black z-[100]
        cursor-pointer transition duration-500 ease-in-out
        opacity-0 invisible
    `,
    classes
  ], "class:list")}${spreadAttributes(props)}></div>`;
}, "/Users/kb/Documents/jee/src/blocks/Shim.astro", void 0);

const $$Astro$b = createAstro("https://jee-v2.k16e.co");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Modal;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "fixed w-full md:w-auto r-hide-overflow bottom-0 z-[150] p-4 md:p-0 md:bottom-auto left-1/2 -translate-x-1/2 md:top-24 transition duration-300 ease-in-out translate-y-full scale-90 opacity-0 invisible flex justify-center",
    classes
  ], "class:list")} aria-labelledby="modal-title" role="dialog" aria-modal="true" id="modal"${spreadAttributes(props)}> <div class="relative overflow-auto rounded-[1.5rem] bg-[var(--color-bg-default)] shadow-xl transition-all w-full sm:w-[36rem] h-[36rem] p-4 sm:py-6 sm:p-8"> <div class="sr-only md:not-sr-only"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "data-modal-close": true, "class": "fixed top-1 right-1", "icon": "close-x", "style": "neutral-dark", "size": "mini" })} </div> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Modal.astro", void 0);

const $$Astro$a = createAstro("https://jee-v2.k16e.co");
const $$ModalNewsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ModalNewsletter;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["", classes], "class:list")}${spreadAttributes(props)}> ${renderComponent($$result, "Newsletter", $$Newsletter, { "formId": "modal-newsletter", "headingType": "", "modal": true })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/ModalNewsletter.astro", void 0);

function _startsWith(s, a) {
    return a.some(i => s.toLowerCase().startsWith(i.toLowerCase()))
}

const $$Astro$9 = createAstro("https://jee-v2.k16e.co");
const $$Drapery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Drapery;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "fixed inset-0 w-screen h-screen bg-[var(--color-surface-dark)] z-[200] transition-all duration-300 ease-in-out -translate-y-full scale-95 opacity-0 invisible overflow-hidden",
    classes
  ], "class:list")} aria-labelledby="modal-title" role="dialog" aria-modal="true"${spreadAttributes(props)}> ${renderComponent($$result, "Wrapper", $$Wrapper$1, { "class": "relative" }, { "default": ($$result2) => renderTemplate` <div class="h-[var(--spacing-1)] md:h-[var(--spacing-2)] w-full lg:h-[var(--spacing-3)] flex items-center justify-end translate-x-1 sm:translate-x-2 lg:translate-x-0"> <div class="h-full w-11 flex items-center justify-center relative"> ${renderComponent($$result2, "ButtonFab", $$ButtonFab, { "style": "neutral", "label": "Close Mobile Menu", "icon": "close-x", "data-close-menu": true })} </div> </div> ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Drapery.astro", void 0);

const $$Astro$8 = createAstro("https://jee-v2.k16e.co");
const $$NavItemMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NavItemMobile;
  const { tag = "a", label, class: classes, ...props } = Astro2.props, Tag = tag;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["block px-4 py-[1.25rem] font-medium group-hover/li:opacity-70", classes], ...props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "text": label, "size": "5", "color": "title-light", "weight": "bold" })} ` })}`;
}, "/Users/kb/Documents/jee/src/atoms/NavItemMobile.astro", void 0);

const $$Astro$7 = createAstro("https://jee-v2.k16e.co");
const $$NavMobileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NavMobileLink;
  const { link, altLink, label, class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link ? _slug(link.link) : altLink, "href")} class="flex items-center size-full p-4"${spreadAttributes(props)}> ${renderComponent($$result, "Text", $$Text, { "size": "1hx", "text": label ? label : link.label, "color": "title-light", "weight": "semi", "class": "opacity-100 group-hover/link:opacity-80" })} </a>`;
}, "/Users/kb/Documents/jee/src/atoms/NavMobileLink.astro", void 0);

const $$Astro$6 = createAstro("https://jee-v2.k16e.co");
const $$NavMobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NavMobile;
  const { class: classes, ...props } = Astro2.props, nav = _settings.value.nav, hub = _settings.value.tools[2];
  return renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper$1, { "tag": "nav", "margins": false, "class": "py-4 sm:py-8 overflow-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TitleHidden", $$TitleHidden, { "tag": "h2", "title": "Mobile Navigation" })} ${renderComponent($$result2, "Grid", $$Grid, { "grid": "4-12-12" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul${addAttribute([
    "col-span-full ml:[grid-area:1/3/2/11] items-center h-full [&>*]:border-t [&>*]:border-[var(--color-muted-dark)] [&>*:first-child]:border-t-0",
    classes
  ], "class:list")}${spreadAttributes(props)}> ${nav.map(
    (i) => _empty(i.children) ? renderTemplate`<li${addAttribute(["group/li relative"], "class:list")}> ${renderComponent($$result3, "NavItemMobile", $$NavItemMobile, { "href": _slug(i.link), "label": i.label })} </li>` : renderTemplate`<li${addAttribute([
      "group/li relative accordion group [&.is-active]:bg-[var(--color-elevation-1-inverted)]"
    ], "class:list")}> <div class="group/button accordion__button r-transition flex items-center justify-between px-4 py-[1.25rem] cursor-pointer" aria-expanded="false"${addAttribute(`${i.label} Links`, "aria-controls")}> ${renderComponent($$result3, "Text", $$Text, { "text": i.label, "size": "5", "color": "title-light", "weight": "bold", "class": "opacity-100 group-hover/button:opacity-70 group-[.is-active]:opacity-100 pointer-events-none" })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-lightest)] opacity-50 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content max-h-0 lg:max-h-full overflow-hidden lg:overflow-auto transition-all ease-in-out"> <ul class="px-4 flex flex-col max-w-full transition-[height] duration-300"> ${i.children.map((j) => renderTemplate`<li class="group/link flex items-center"> ${renderComponent($$result3, "NavMobileLink", $$NavMobileLink, { "altLink": j.link.linktype === "story" ? _slugify(
      i.label
    ).includes(
      "expertise"
    ) ? `/${j.children[0].link.cached_url.split("/")[0]}` : `/${_unslash(j.link.cached_url)}` : _unslash(
      j.link.cached_url
    ), "label": j.label, "target": j.link.target })} </li>`)}  </ul> </div> </li>`
  )} <li class="accordion group [&.is-active]:bg-[var(--color-elevation-1-inverted)]"> <div class="group/button accordion__button r-transition flex items-center justify-between px-4 py-[1.25rem] cursor-pointer" aria-expanded="false"${addAttribute(`${hub.label} Links`, "aria-controls")}> ${renderComponent($$result3, "Text", $$Text, { "text": hub.label, "size": "5", "color": "title-light", "weight": "bold", "class": "opacity-100 group-hover/button:opacity-70 group-[.is-active]:opacity-100 pointer-events-none" })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "caret-down", "aria-hidden": "true", "class": "accordion__icon block w-5 text-[var(--color-lightest)] opacity-50 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content max-h-0 lg:max-h-full overflow-hidden lg:overflow-auto transition-all ease-in-out"> <ul class="px-4 flex flex-col max-w-full transition-[height] duration-300"> ${hub.children.map((i) => renderTemplate`<li class="group/link flex items-center"> ${renderComponent($$result3, "NavMobileLink", $$NavMobileLink, { "link": i })} </li>`)} </ul> </div> </li> </ul> ` })} ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/NavMobile.astro", void 0);

const $$Astro$5 = createAstro("https://jee-v2.k16e.co");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "fixed inset-y-0 right-4 lg:right-12 z-[150] flex flex-col justify-center items-center r-hide-overflow translate-x-full opacity-0 invisible transition-all duration-300 ease-in-out",
    classes
  ], "class:list")} role="dialog" aria-modal="true" id="drawer"${spreadAttributes(props)}> <div class="relative r-hide-overflow rounded-2xl sm:rounded-t-[1.5rem] h-[calc(100vh-3.5rem)] bg-white w-[calc(100svw-2rem)] sm:w-[30rem] px-4 py-6 sm:px-6"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "class": "fixed top-1 right-1", "icon": "close-x", "style": "neutral-dark", "size": "mini", "data-drawer-close": true })} ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/Drawer.astro", void 0);

const $$Astro$4 = createAstro("https://jee-v2.k16e.co");
const $$CardRegion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardRegion;
  const {
    tag = "li",
    name,
    flag,
    office,
    contact,
    class: classes,
    ...props
  } = Astro2.props, Tag = tag, pastel = {
    ng: "EEF8DD",
    zw: "F5E7B2",
    cm: "D2E0FB"
  };
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": ["rounded-lg overflow-clip relative accordion", classes], "style": `background-color: #${pastel[flag]};`, ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="group/button accordion__button cursor-pointer r-transition flex items-center justify-between h-[4.25rem] px-4" aria-expanded="false"${addAttribute(`JEE ${name} Offices`, "aria-controls")}> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": flag, "class": "size-10 shrink-0" })} ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "text": name, "color": "title", "size": "copy", "weight": "medium" })} </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevron-down", "aria-hidden": "true", "class": "accordion__icon block w-4 text-[var(--color-text-body)] opacity-50 group-hover/button:opacity-100 shrink-0 transition-all group-[.is-active]:opacity-100" })} </div> <div class="accordion__content max-h-0 transition-all ease-in-out overflow-hidden"> <div class="pt-1 px-4 pb-4 flex flex-col gap-6 max-w-full transition-[height] duration-300"> ${renderComponent($$result2, "ListStat", $$ListStat, { "heading": office.content.tag, "color": "title", "size": "1hx", "body": office.content.address, "richtext": true, "uppercase": false })} ${renderComponent($$result2, "CardContactPerson", $$CardContactPerson, { "tag": "span", "link": contact.full_slug, "image": contact.content.headshot, "name": contact.content.name, "designation": contact.content.byline[0]?.content?.title, "email": contact.content.links[0].email[0], "phone": contact.content.links[0].phone[0] })} ${renderComponent($$result2, "ButtonMore", $$ButtonMore, { "label": "All JEE Offices", "link": "/contact" })} </div> </div> ` })}`;
}, "/Users/kb/Documents/jee/src/blocks/CardRegion.astro", void 0);

const api$1 = zn();

async function _getRegions() {
    return await api$1.getAll('cdn/stories', {
        starts_with: 'regions/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.position:asc',
        resolve_links: 'url',
        resolve_relations: ['region.offices', 'region.contacts'],
    })
}

const $$Astro$3 = createAstro("https://jee-v2.k16e.co");
const $$DrawerRegions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DrawerRegions;
  const { class: classes, ...props } = Astro2.props;
  const regions = await _getRegions();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["h-full flex flex-col", classes], "class:list")} data-regions${spreadAttributes(props)}> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "level": "h2", "text": "JEE Africa Regions", "size": "5", "padding": "small" })} <ul class="py-5 flex flex-col gap-2 flex-1 overflow-auto"> ${regions.map((i) => renderTemplate`${renderComponent($$result, "CardRegion", $$CardRegion, { "name": i.content.name, "flag": i.content.flag, "office": i.content.offices[0], "contact": i.content.contacts[0] })}`)} </ul> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/DrawerRegions.astro", void 0);

const $$Astro$2 = createAstro("https://jee-v2.k16e.co");
const $$SearchGlobal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SearchGlobal;
  const { class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="form-global-search"${addAttribute(["flex flex-col h-full", classes], "class:list")} data-search${spreadAttributes(props)}> <div class="flex flex-col gap-3 pb-3"> ${renderComponent($$result, "HeadingSection", $$HeadingSection, { "level": "h2", "text": "Search JEE.Africa", "size": "5", "padding": "small" })} ${renderComponent($$result, "InputText", $$InputText, { "label": "Search JEE Africa", "id": "global-search", "name": "Search JEE Africa", "class": "w-full", "isSearch": true })} ${renderComponent($$result, "HeadingStretch", $$HeadingStretch, { "tag": "h3", "id": "search-status", "text": `Your search results will show below...` })} </div> <div class="pt-1 pb-4 flex flex-col gap-6 flex-1 overflow-auto"> <ul id="results-list" class="pb-4 flex flex-col gap-4"></ul> </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/SearchGlobal.astro", void 0);

const $$Astro$1 = createAstro("https://jee-v2.k16e.co");
const $$ModalVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModalVideo;
  const { video = "EBHx2ds-LpQ", class: classes, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    `fixed inset-0 size-full r-hide-overflow bg-black z-[150] flex flex-col h-screen pb-18
        transition duration-300 ease-in-out translate-y-16 scale-50 opacity-0 invisible`,
    classes
  ], "class:list")} aria-labelledby="modal-title" role="dialog" aria-modal="true"${spreadAttributes(props)}> <div class="w-full flex items-center justify-end shrink-0 px-5 h-18"> ${renderComponent($$result, "ButtonFab", $$ButtonFab, { "style": "neutral", "label": "Close Video Modal", "icon": "close-x", "data-modal-close": true, "class": "shrink-0 relative z-[150]" })} </div> <div class="flex-1 relative h-[calc(100vh-8rem)] z-[200]"> <iframe${addAttribute(`https://www.youtube.com/embed/${video}`, "src")} frameborder="0" allowfullscreen class="absolute inset-0 size-full"></iframe> </div> </div>`;
}, "/Users/kb/Documents/jee/src/blocks/ModalVideo.astro", void 0);

const $$Astro = createAstro("https://jee-v2.k16e.co");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { pageTitle, pageDescription, pageThumbnail, settings } = Astro2.props;
  const site = settings || _settings.value;
  let fixHeader = true;
  let currPath = Astro2.url.pathname;
  let unfixHeader = ["about", "people", "insights", "events"];
  if (currPath == "/")
    currPath = currPath.replace(/^\//, "home").replace(/\.html$/, "");
  else currPath = currPath.replace(/^\//, "").replace(/\.html$/, "");
  _startsWith(currPath, unfixHeader) ? fixHeader = false : fixHeader = true;
  return renderTemplate`<html lang="en"${addAttribute([
    `scroll-smooth bg-[var(--color-bg-default)]
        scrollbar-thin scrollbar-track-[#F2ECD3] scrollbar-thumb-[#FF2626]`
  ], "class:list")}> ${renderComponent($$result, "Head", $$Head, { "title": `${pageTitle} | ${site.title}`, "description": pageDescription || site.description, "image": pageThumbnail || "/thumbnail.png" })}${maybeRenderHead()}<body class="max-w-screen-3xl mx-auto flex flex-col min-h-screen overflow-x-hidden"> ${renderComponent($$result, "TitleHidden", $$TitleHidden, { "tag": "h1", "title": pageTitle, "id": "title-hidden" })} ${renderComponent($$result, "Header", $$Header, { "nav": site.nav, "tools": site.tools, "class:list": [fixHeader && "fixed inset-x-0 top-0"], "id": "header" })} <main${addAttribute([
    "mb-auto swup-in",
    fixHeader && "pt-[var(--spacing-1)] md:pt-[var(--spacing-2)] lg:pt-[var(--spacing-3)]"
  ], "class:list")} id="swup"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "site": site, "id": "footer" })} ${renderComponent($$result, "Drapery", $$Drapery, { "data-drapery": true, "id": "drapery" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavMobile", $$NavMobile, {})} ` })} ${renderComponent($$result, "Modal", $$Modal, { "data-modal": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModalNewsletter", $$ModalNewsletter, { "data-modal-display": "newsletter" })} ` })} ${renderComponent($$result, "ModalVideo", $$ModalVideo, { "data-modal-video": true })} ${renderComponent($$result, "Drawer", $$Drawer, { "data-drawer": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DrawerRegions", $$DrawerRegions, { "data-drawer-display": "regions" })} ${renderComponent($$result2, "SearchGlobal", $$SearchGlobal, { "data-drawer-display": "search" })}  ` })} ${renderComponent($$result, "Shim", $$Shim, { "data-shim": true })} ${renderScript($$result, "/Users/kb/Documents/jee/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/kb/Documents/jee/src/layouts/Base.astro", void 0);

async function _getPageData(slug) {
    const storyblokApi = zn();

    const { data } = await storyblokApi.get(
        `cdn/stories/${slug === undefined ? 'home' : slug}`,
        {
            version: 'published',
            resolve_links: 'url',
            resolve_relations: RELATIONS,
        }
    );

    const page = data.story;
    const content = page.content;
    const seo = content.seo[0];

    return { page, content, seo }
}

const api = zn();
new Date().getFullYear();

const getSettings = async () => {
    return await api.get('cdn/stories/settings', {
        version: 'published',
        resolve_links: 'url',
        resolve_relations: ['settings.awards', 'settings.links', 'settings.socials'],
    })
};
const getDesignations = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'designations/',
        version: 'published',
        is_startpage: false,
    })
};
const getCategories = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'category/',
        version: 'published',
        is_startpage: false,
    })
};
const getOffices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'offices/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.order:asc',
        resolve_links: 'url',
        resolve_relations: ['office.contacts'],
    })
};
const getSectors = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'sectors/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
};
const getPractices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'practices/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        per_page: 50,
        sort_by: 'content.title:asc',
    })
};
const getAfricaExpertise = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'africa-expertise/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
};
const getNewsletter = async () => {
    return await api.get('cdn/stories/global/newsletter', {
        version: 'published',
    })
};

const _getAllAPIs = () => {
    return [getSettings, getDesignations, getCategories, getOffices, getSectors, getPractices, getAfricaExpertise, getNewsletter]
};

export { $$Base as $, _getPageData as _, $$StoryblokComponent as a, _getAllAPIs as b, getSettings as g, zn as z };
