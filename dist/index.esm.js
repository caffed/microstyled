import e,{createContext as t,useRef as r,useEffect as a,useContext as n}from"react";const o=(e=20,t="",r=!0)=>{let a=Math.random().toString(36).slice(2,2+e);return a=r?a.replace(/[0-9]/g,""):a,a.length!==e?o(e-a.length,t.concat(a),r):t.concat(a)},i=/(@)(.*?)(\}\s+\})/gm,l=/(&)(.*?)(\})/gm,s=(e,t,r={})=>e.reduce(((e,a,n)=>{var o;const i=t[n];let l="";return"function"==typeof i?l=null!==(o=i(r))&&void 0!==o?o:"":"string"==typeof i&&(l=i),e.concat(a,l)}),""),c=e=>e.replace(/\s{1,}/gm," ").replace(/\n/gm,"").trim(),d=(e,t)=>{let r=e;const a=r.match(t)||[];return a&&a.length>0&&a.forEach((e=>{const t=r.indexOf(e);r=r.slice(0,t).concat(r.slice(t+e.length))})),[r,a]},u=e=>{try{const[t,r]=d(e,i),[a,n]=d(t,l);return{mediaQueries:r,psuedoClasses:n,keyValue:a.split(";").map((e=>e.trim())).filter((e=>e.length>0))}}catch(e){return console.warn(`Resultant CSS is invalid: ${e}`),{mediaQueries:[],psuedoClasses:[],keyValue:[]}}},m=(e,t)=>{const{keyValue:r,psuedoClasses:a,mediaQueries:n}=e;let o="";return o=r&&r.length>0?`.${t} { ${r.join(";\n").concat(";")} }\n`:"",o+=a&&a.length>0?`${a.join("\n")}\n`:"",o+=n&&n.length>0?`${n.join("\n")}\n`:"",o.replace(/&/gm,"."+t)},p=(e,t)=>{const r=document.createElement("style");return r.innerHTML=t,r.id=e,r},g=t(null),h=t=>r=>e.createElement(g.Provider,{value:{container:t}},r.children),b=t(null),f=t=>r=>e.createElement(b.Provider,{value:{theme:t}},r.children),v=(t,i,l=[],d=!1)=>{const h=o();return o=>{const f=`micro-styled-${h}`,v={className:h},{theme:y}=n(b)||{},{container:k}=n(g)||{container:document.head},j=m(u(c(s(i,l,y?Object.assign(Object.assign({},o),{config:v,theme:y}):Object.assign(Object.assign({},o),{config:v})))),h),E=r(null);return a((()=>(E.current&&(E.current.classList.add(h),k.appendChild(p(f,j))),()=>{var e,t;null===(e=E.current)||void 0===e||e.classList.remove(h),null===(t=k.querySelector(f))||void 0===t||t.remove()}))),d?e.createElement(t,Object.assign({key:h},o,{ref:E})):e.createElement(t,Object.assign({key:h},o,{ref:E}),o.children)}},y=(e,t=!1)=>(r,...a)=>v(e,r,a,t);var k={a:y("a"),address:y("address"),area:y("area"),article:y("article"),aside:y("aside"),audio:y("audio"),b:y("b"),base:y("base"),bdi:y("bdi"),bdo:y("bdo"),blockquote:y("blockquote"),br:y("br",!0),button:y("button"),canvas:y("canvas"),cite:y("cite"),code:y("code"),col:y("col"),colgroup:y("colgroup"),data:y("data"),datalist:y("datalist"),dd:y("dd"),del:y("del"),details:y("details"),dfn:y("dfn"),dialog:y("dialog"),div:y("div"),dl:y("dl"),dt:y("dt"),em:y("em"),embed:y("embed"),fieldset:y("fieldset"),figcaption:y("figcaption"),figure:y("figure"),footer:y("footer"),form:y("form"),h1:y("h1"),h2:y("h2"),h3:y("h3"),h4:y("h4"),h5:y("h5"),h6:y("h6"),header:y("header"),hgroup:y("hgroup"),hr:y("hr",!0),i:y("i"),iframe:y("iframe"),img:y("img",!0),input:y("input",!0),ins:y("ins",!0),kbd:y("kbd"),keygen:y("keygen"),label:y("label"),legend:y("legend"),li:y("li"),link:y("link"),main:y("main"),map:y("map"),mark:y("mark"),menu:y("menu"),menuitem:y("menuitem"),meter:y("meter"),nav:y("nav"),nobr:y("nobr"),noframes:y("noframes"),noscript:y("noscript"),object:y("object"),ol:y("ol"),optgroup:y("optgroup"),option:y("option"),output:y("output"),p:y("p"),picture:y("picture"),plaintext:y("plaintext"),pre:y("pre"),progress:y("progress"),q:y("q"),rp:y("rp"),rt:y("rt"),rtc:y("rtc"),ruby:y("ruby"),s:y("s"),samp:y("samp"),section:y("section"),select:y("select"),shadow:y("shadow"),small:y("small"),span:y("span"),strong:y("strong"),sub:y("sub"),summary:y("summary"),sup:y("sup"),table:y("table"),tbody:y("tbody"),td:y("td"),textarea:y("textarea"),tfoot:y("tfoot"),th:y("th"),thead:y("thead"),time:y("time"),tr:y("tr"),track:y("track"),tt:y("tt"),u:y("u"),ul:y("ul"),varEl:y("var"),video:y("video"),wbr:y("wbr")};export{h as ThemeCacheProvider,f as ThemeProvider,u as createCSSObject,m as createCSSString,p as createStyleElement,k as default,s as interpolate,i as mediaQueryRegex,l as psuedoClassRegex,o as randomString,c as removeWhitespace};
