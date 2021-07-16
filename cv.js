(()=>{"use strict";var e,t,r,n,o,a,i,c,s,l,f,d,p,u,m={657:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(645),o=r.n(n),a=r(667),i=r.n(a),c=new URL(r(80),r.b),s=new URL(r(34),r.b),l=new URL(r(802),r.b),f=new URL(r(871),r.b),d=new URL(r(382),r.b),p=o()((function(e){return e[1]})),u=i()(c),m=i()(s),h=i()(l),b=i()(f),g=i()(d);p.push([e.id,"@font-face{font-family:'lmroman';font-style:normal;font-weight:normal;src:url("+u+");src:url("+u+") format(\"opentype\")}@font-face{font-family:'lmroman';font-style:italic;font-weight:normal;src:url("+m+");src:url("+m+") format(\"opentype\")}@font-face{font-family:'lmroman';font-style:normal;font-weight:bold;src:url("+h+");src:url("+h+") format(\"opentype\")}@font-face{font-family:'lmroman';font-style:italic;font-weight:bold;src:url("+b+");src:url("+b+") format(\"opentype\")}@font-face{font-family:'lmmonoprop';font-style:normal;font-weight:normal;src:url("+g+");src:url("+g+") format(\"opentype\")}body{font-family:'lmroman', serif;font-size:16px;padding:1.25rem}code{font-family:'lmroman', serif}table{border-collapse:collapse;border-style:hidden;margin:0 -.625rem}table td,table th{border:1px solid black;max-width:calc(100vw - 2.5rem);padding:0 .625rem;word-break:break-word}h3{border-bottom:1px solid #dbdee3;padding-bottom:0.3em}hr{margin:1.25rem 0}hr+h3{margin-top:0}.Content{margin:0 auto;max-width:750px;position:relative}.Content h1{margin-top:0}.Content code{position:absolute;right:0;text-align:right;width:5rem}.Content p{padding-right:5rem}@media only screen and (min-width: 750px){.Content code{width:10rem}.Content p{padding-right:10rem}}.Content table+p{padding-right:0 !important}\n",""]);const v=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},382:(e,t,r)=>{e.exports=r.p+"4fb3acac7b811157c033.otf"},802:(e,t,r)=>{e.exports=r.p+"ce4ab47fd84f28cd5cd8.otf"},871:(e,t,r)=>{e.exports=r.p+"db5141299f5b04f518cc.otf"},34:(e,t,r)=>{e.exports=r.p+"1a7363715b98e087053d.otf"},80:(e,t,r)=>{e.exports=r.p+"f67fc651d65db4e41c29.otf"},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=n.base?s[0]+n.base:s[0],f=a[l]||0,d="".concat(l," ").concat(f);a[l]=f+1;var p=r(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(u)):t.push({identifier:d,updater:o(u,n),references:1}),i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),l=0;l<a.length;l++){var f=r(a[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function b(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return m[e](r,r.exports,b),r.exports}b.m=m,b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var t=b.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),b.b=document.baseURI||self.location.href,e=b(379),t=b.n(e),r=b(795),n=b.n(r),o=b(569),a=b.n(o),i=b(565),c=b.n(i),s=b(216),l=b.n(s),f=b(589),d=b.n(f),p=b(657),(u={}).styleTagTransform=d(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=n(),u.insertStyleElement=l(),t()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals})();