(function(e){function t(t){for(var o,r,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d9b8bcd4"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"30d17b59"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",b.name="ChunkLoadError",b.type=o,b.request=r,n[1](b)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-pages/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"05cc":function(e,t,n){},"0c74":function(e,t,n){},"5abe":function(e,t,n){},6460:function(e,t,n){},"8b30":function(e,t,n){},"8c6a":function(e,t,n){e.exports=n.p+"img/logo-no-bg.7c9193bd.png"},a95a:function(e,t,n){"use strict";n("5abe")},b9ed:function(e,t,n){"use strict";n("6460")},c57b:function(e,t,n){"use strict";n("0c74")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=n("dac1"),a=n.n(r);const c=Object(o["f"])("div",{class:"logo-banner"},[Object(o["f"])("img",{src:a.a,alt:"logo-banner",class:"logo-banner"})],-1),s={id:"app",class:"app"},i={class:"router-view"};function l(e,t,n,r,a,l){const u=Object(o["w"])("Header"),b=Object(o["w"])("router-view"),f=Object(o["w"])("Footer"),d=Object(o["w"])("floating-button");return Object(o["r"])(),Object(o["e"])(o["a"],null,[c,Object(o["f"])("div",s,[Object(o["h"])(u),Object(o["f"])("div",i,[Object(o["h"])(b)]),Object(o["h"])(f)]),Object(o["h"])(d)],64)}var u=n("9ab4"),b=n("ce1f"),f=n("8c6a"),d=n.n(f);const p={class:"header"},h=Object(o["f"])("img",{src:d.a,alt:"brand-logo",class:"brand-logo"},null,-1),g=Object(o["f"])("div",{class:"menu"},null,-1),j={class:"date-picker"};function O(e,t,n,r,a,c){const s=Object(o["w"])("fa");return Object(o["r"])(),Object(o["e"])("div",p,[h,g,Object(o["f"])("div",j,[Object(o["h"])(s,{icon:"fa-regular fa-calendar-days"}),Object(o["f"])("span",null,Object(o["y"])(e.currentDate),1)])])}let v=class extends b["b"]{constructor(){super(...arguments),this.currentDate="DD-MMM-YYYY"}mounted(){this.manageDate()}manageDate(){const e=new Date,t=e.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}).replace(/ /g,"-");this.currentDate=t}};v=Object(u["a"])([Object(b["a"])({})],v);var m=v,w=(n("a95a"),n("6b0d")),y=n.n(w);const k=y()(m,[["render",O]]);var x=k;const A={class:"footer-container"},N={class:"share-links"},S=Object(o["f"])("p",null,"Share news options",-1),T={class:"share-options"},D={class:"footer"},E={class:"copy-right"},P=Object(o["f"])("span",null," Vamsha News",-1),B={class:"social-links"};function C(e,t,n,r,a,c){const s=Object(o["w"])("fa");return Object(o["r"])(),Object(o["e"])("div",A,[Object(o["f"])("div",N,[S,Object(o["f"])("div",T,[Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-square-whatsapp"}),Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-square-facebook"}),Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-square-twitter"})])]),Object(o["f"])("div",D,[Object(o["f"])("p",null,[Object(o["g"])(" Made with "),Object(o["h"])(s,{icon:"fa-solid fa-heart"}),Object(o["g"])(" and "),Object(o["h"])(s,{icon:"fa-solid fa-hammer"}),Object(o["g"])(" by Vamsha News ")]),Object(o["f"])("p",E,[Object(o["g"])(" All rights reserved "),Object(o["h"])(s,{icon:"fa-regular fa-copyright"}),P]),Object(o["f"])("div",B,[Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-facebook-f"}),Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-twitter"}),Object(o["h"])(s,{class:"fa-brands",icon:"fa-brands fa-youtube"})])])])}let _=class extends b["b"]{};_=Object(u["a"])([Object(b["a"])({})],_);var M=_;n("fb72");const F=y()(M,[["render",C]]);var q=F;function H(e,t,n,r,a,c){const s=Object(o["w"])("fa");return e.showButton?(Object(o["r"])(),Object(o["e"])("div",{key:0,class:"floating-button",onClick:t[0]||(t[0]=(...t)=>e.moveTobottom&&e.moveTobottom(...t))},[Object(o["h"])(s,{icon:"fa-solid fa-angles-down"})])):Object(o["d"])("",!0)}let L=class extends b["b"]{constructor(){super(...arguments),this.showButton=!0}moveTobottom(){window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"})}};L=Object(u["a"])([Object(b["a"])({})],L);var Y=L;n("c57b");const U=y()(Y,[["render",H]]);var I=U;let J=class extends b["b"]{};J=Object(u["a"])([Object(b["a"])({components:{Header:x,Footer:q,FloatingButton:I}})],J);var V=J;n("b9ed");const G=y()(V,[["render",l]]);var K=G,z=n("9483");Object(z["a"])("/vue-pages/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var Q=n("6605");const R={class:"home"},W=Object(o["f"])("iframe",{src:"https://docs.google.com/gview?url=https://drive.google.com/uc?id=1-Nc3Hd0jTrNgvIyiuAF14lvaUyui9vcU&embedded=true",frameBorder:"0",scrolling:"auto",style:{width:"100%",height:"800px"},loading:"eager",allowfullscreen:""},null,-1),X=[W];function Z(e,t,n,r,a,c){return Object(o["r"])(),Object(o["e"])("div",R,X)}let $=class extends b["b"]{};$=Object(u["a"])([Object(b["a"])({components:{}})],$);var ee=$;n("ce5e");const te=y()(ee,[["render",Z]]);var ne=te;const oe=[{path:"/",name:"Home",component:ne},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/admin",name:"Admin",component:()=>n.e("about").then(n.bind(null,"c651"))}],re=Object(Q["a"])({history:Object(Q["b"])("/vue-pages/"),routes:oe});var ae=re,ce=n("5502"),se=Object(ce["a"])({state:{},mutations:{},actions:{},modules:{}}),ie=n("ad3d"),le=n("be33"),ue=n("11ca"),be=n("2753"),fe=n("4ab5");le["c"].add(ue["a"],be["a"],fe["a"]),Object(o["c"])(K).use(se).use(ae).component("fa",ie["a"]).mount("#app")},ce5e:function(e,t,n){"use strict";n("8b30")},dac1:function(e,t,n){e.exports=n.p+"img/logo-banner.cee2a5ff.jpeg"},fb72:function(e,t,n){"use strict";n("05cc")}});
//# sourceMappingURL=app.9239e354.js.map