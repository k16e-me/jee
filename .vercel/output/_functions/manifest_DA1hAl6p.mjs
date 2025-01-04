import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CF--MPqe.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_qoIXZOaG.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kb/Documents/jee/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CkZnRWfb.css"},{"type":"external","src":"/_astro/events.CzQQziew.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"},{"type":"external","src":"/_astro/events.D-uiQ341.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CkZnRWfb.css"},{"type":"external","src":"/_astro/events.CzQQziew.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"},{"type":"external","src":"/_astro/events.D-uiQ341.css"}],"routeData":{"route":"/insights","isIndex":false,"type":"page","pattern":"^\\/insights$","segments":[[{"content":"insights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/insights.astro","pathname":"/insights","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CkZnRWfb.css"},{"type":"external","src":"/_astro/events.CzQQziew.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"},{"type":"external","src":"/_astro/events.D-uiQ341.css"}],"routeData":{"route":"/people","isIndex":false,"type":"page","pattern":"^\\/people$","segments":[[{"content":"people","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/people.astro","pathname":"/people","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://jee-v2.k16e.co","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/kb/Documents/jee/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/jee/src/pages/insights.astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/jee/src/pages/people.astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/jee/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["/Users/kb/Documents/jee/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/insights@_@astro":"pages/insights.astro.mjs","\u0000@astro-page:src/pages/people@_@astro":"pages/people.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","/Users/kb/Documents/jee/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DWnZ9MLg.mjs","\u0000@astrojs-manifest":"manifest_DA1hAl6p.mjs","/Users/kb/Documents/jee/src/layouts/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.DNk6Kxn3.js","/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts":"_astro/Vimeo.astro_astro_type_script_index_0_lang.CgRsrQuG.js","/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts":"_astro/YouTube.astro_astro_type_script_index_0_lang.Dkyb9mLy.js","astro:scripts/page.js":"_astro/page.7qqag-5g.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts","class t extends HTMLElement{constructor(){super(...arguments),this.videoId=encodeURIComponent(this.dataset.id)}static{this.preconnected=!1}connectedCallback(){this.addEventListener(\"pointerover\",t.warmConnections,{once:!0}),this.addEventListener(\"click\",e=>this.addIframe(e));const c=this.querySelector(\"a\");if(c){const e=document.createElement(\"button\");e.classList.add(...c.classList.values()),e.setAttribute(\"aria-label\",c.getAttribute(\"aria-label\")),c.replaceWith(e)}}static addPrefetch(c,e){const a=document.createElement(\"link\");a.rel=c,a.href=e,document.head.append(a)}static warmConnections(){t.preconnected||(t.addPrefetch(\"preconnect\",\"https://player.vimeo.com\"),t.addPrefetch(\"preconnect\",\"https://i.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://f.vimeocdn.com\"),t.addPrefetch(\"preconnect\",\"https://fresnel.vimeocdn.com\"),t.preconnected=!0)}addIframe(c){if(this.classList.contains(\"ltv-activated\"))return;c.preventDefault(),this.classList.add(\"ltv-activated\");const e=encodeURIComponent(this.dataset.t||\"0m\"),a=new URLSearchParams(this.dataset.params||[]),n=document.createElement(\"iframe\");n.width=\"640\",n.height=\"360\",n.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",n.allowFullscreen=!0,n.src=`https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${e}`,this.append(n)}}customElements.get(\"lite-vimeo\")||customElements.define(\"lite-vimeo\",t);"],["/Users/kb/Documents/jee/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts","class i extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute(\"videoid\");let e=this.querySelector(\".lty-playbtn\");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute(\"playlabel\")||\"Play\",this.dataset.title=this.getAttribute(\"title\")||\"\",this.style.backgroundImage||(this.style.backgroundImage=`url(\"https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg\")`,this.upgradePosterImage()),e||(e=document.createElement(\"button\"),e.type=\"button\",e.classList.add(\"lty-playbtn\"),this.append(e)),!e.textContent){const t=document.createElement(\"span\");t.className=\"lyt-visually-hidden\",t.textContent=this.playLabel,e.append(t)}this.addNoscriptIframe(),e.nodeName===\"A\"&&(e.removeAttribute(\"href\"),e.setAttribute(\"tabindex\",\"0\"),e.setAttribute(\"role\",\"button\"),e.addEventListener(\"keydown\",t=>{(t.key===\"Enter\"||t.key===\" \")&&(t.preventDefault(),this.activate())})),this.addEventListener(\"pointerover\",i.warmConnections,{once:!0}),this.addEventListener(\"focusin\",i.warmConnections,{once:!0}),this.addEventListener(\"click\",this.activate),this.needsYTApi=this.hasAttribute(\"js-api\")||navigator.vendor.includes(\"Apple\")||navigator.userAgent.includes(\"Mobi\")}static addPrefetch(e,t,a){const r=document.createElement(\"link\");r.rel=e,r.href=t,a&&(r.as=a),document.head.append(r)}static warmConnections(){i.preconnected||(i.addPrefetch(\"preconnect\",\"https://www.youtube-nocookie.com\"),i.addPrefetch(\"preconnect\",\"https://www.google.com\"),i.addPrefetch(\"preconnect\",\"https://googleads.g.doubleclick.net\"),i.addPrefetch(\"preconnect\",\"https://static.doubleclick.net\"),i.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var a=document.createElement(\"script\");a.src=\"https://www.youtube.com/iframe_api\",a.async=!0,a.onload=r=>{YT.ready(e)},a.onerror=t,this.append(a)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement(\"div\");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(a=>{let r=new YT.Player(e,{width:\"100%\",videoId:this.videoId,playerVars:t,events:{onReady:n=>{n.target.playVideo(),a(r)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement(\"noscript\");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute(\"params\")||[]);return e.append(\"autoplay\",\"1\"),e.append(\"playsinline\",\"1\"),e}async activate(){if(this.classList.contains(\"lyt-activated\"))return;if(this.classList.add(\"lyt-activated\"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const e=this.createBasicIframe();this.append(e),e.focus()}createBasicIframe(){const e=document.createElement(\"iframe\");return e.width=560,e.height=315,e.title=this.playLabel,e.allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority=\"low\",t.referrerpolicy=\"origin\",t.src=e,t.onload=a=>{a.target.naturalHeight==90&&a.target.naturalWidth==120||(this.style.backgroundImage=`url(\"${e}\")`)}},100)}}customElements.define(\"lite-youtube\",i);"]],"assets":["/_astro/chrome.f1eQSm4k.svg","/_astro/edge.B7O1xshw.svg","/_astro/firefox.CMmddY9p.svg","/_astro/safari.CdqjFDzc.svg","/_astro/_slug_.CkZnRWfb.css","/_astro/events.CzQQziew.css","/_astro/events.D-uiQ341.css","/_headers","/browserconfig.xml","/favicon.ico","/favicon.svg","/humans.txt","/site.webmanifest","/thumbnail.png","/_astro/Base.astro_astro_type_script_index_0_lang.DNk6Kxn3.js","/_astro/page.7qqag-5g.js","/favicons/android-chrome-192x192.png","/favicons/android-chrome-512x512.png","/favicons/apple-touch-icon.png","/favicons/favicon-16x16.png","/favicons/favicon-32x32.png","/favicons/favicon.ico","/graphics/404.jpg","/graphics/marker.svg","/_astro/page.7qqag-5g.js","/404.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"zXY9l+dns6wtunBSJqfBH9OuL9M42eDFNxOuE+M4Jvc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
