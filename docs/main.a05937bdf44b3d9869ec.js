(()=>{var e={90:e=>{!function(t,n){var i=function(e,t,n){"use strict";var i,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var o,a,s,l,c,u,d,f,h,v,g,p,m,y,b,w,z,C,E,A,x,T,S,L,_,k,H,O,M,j,N,R,W,D,I,P,q,B,F,Y,$,U,G,J,K=t.documentElement,Q=e.HTMLPictureElement,V="addEventListener",X=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,ne=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],re={},oe=Array.prototype.forEach,ae=function(e,t){return re[t]||(re[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),re[t].test(e.getAttribute("class")||"")&&re[t]},se=function(e,t){ae(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},le=function(e,t){var n;(n=ae(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},ce=function(e,t,n){var i=n?V:"removeEventListener";n&&ce(e,t),ie.forEach((function(n){e[i](n,t)}))},ue=function(e,n,r,o,a){var s=t.createEvent("Event");return r||(r={}),r.instance=i,s.initEvent(n,!o,!a),s.detail=r,e.dispatchEvent(s),s},de=function(t,n){var i;!Q&&(i=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},he=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ve=($=[],U=Y=[],(J=function(e,n){B&&!n?e.apply(this,arguments):(U.push(e),F||(F=!0,(t.hidden?Z:ee)(G)))})._lsFlush=G=function(){var e=U;for(U=Y.length?$:Y,B=!0,F=!1;e.length;)e.shift()();B=!1},J),ge=function(e,t){return t?function(){ve(e)}:function(){var t=this,n=arguments;ve((function(){e.apply(t,n)}))}},pe=function(e){var t,i,r=function(){t=null,e()},o=function(){var e=n.now()-i;e<99?Z(o,99-e):(te||r)(r)};return function(){i=n.now(),t||(t=Z(o,99))}},me=(z=/^img$/i,C=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,A=0,x=0,T=-1,S=function(e){x--,(!e||x<0||!e.target)&&(x=0)},L=function(e){return null==w&&(w="hidden"==fe(t.body,"visibility")),w||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},_=function(e,n){var i,r=e,o=L(e);for(p-=n,b+=n,m-=n,y+=n;o&&(r=r.offsetParent)&&r!=t.body&&r!=K;)(o=(fe(r,"opacity")||1)>0)&&"visible"!=fe(r,"overflow")&&(i=r.getBoundingClientRect(),o=y>i.left&&m<i.right&&b>i.top-1&&p<i.bottom+1);return o},H=function(e){var t,i=0,o=r.throttleDelay,a=r.ricTimeout,s=function(){t=!1,i=n.now(),e()},l=te&&a>49?function(){te(s,{timeout:a}),a!==r.ricTimeout&&(a=r.ricTimeout)}:ge((function(){Z(s)}),!0);return function(e){var r;(e=!0===e)&&(a=33),t||(t=!0,(r=o-(n.now()-i))<0&&(r=0),e||r<9?l():Z(l,r))}}(k=function(){var e,n,o,a,s,l,d,h,z,C,S,k,H=i.elements;if((f=r.loadMode)&&x<8&&(e=H.length)){for(n=0,T++;n<e;n++)if(H[n]&&!H[n]._lazyRace)if(!E||i.prematureUnveil&&i.prematureUnveil(H[n]))D(H[n]);else if((h=H[n].getAttribute("data-expand"))&&(l=1*h)||(l=A),C||(C=!r.expand||r.expand<1?K.clientHeight>500&&K.clientWidth>500?500:370:r.expand,i._defEx=C,S=C*r.expFactor,k=r.hFac,w=null,A<S&&x<1&&T>2&&f>2&&!t.hidden?(A=S,T=0):A=f>1&&T>1&&x<6?C:0),z!==l&&(v=innerWidth+l*k,g=innerHeight+l,d=-1*l,z=l),o=H[n].getBoundingClientRect(),(b=o.bottom)>=d&&(p=o.top)<=g&&(y=o.right)>=d*k&&(m=o.left)<=v&&(b||y||m||p)&&(r.loadHidden||L(H[n]))&&(u&&x<3&&!h&&(f<3||T<4)||_(H[n],l))){if(D(H[n]),s=!0,x>9)break}else!s&&u&&!a&&x<4&&T<4&&f>2&&(c[0]||r.preloadAfterLoad)&&(c[0]||!h&&(b||y||m||p||"auto"!=H[n].getAttribute(r.sizesAttr)))&&(a=c[0]||H[n]);a&&!s&&D(a)}}),M=ge(O=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(S(e),se(t,r.loadedClass),le(t,r.loadingClass),ce(t,j),ue(t,"lazyloaded"))}),j=function(e){M({target:e.target})},N=function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},R=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},W=ge((function(e,t,n,i,o){var a,s,l,c,u,f;(u=ue(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?se(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),o&&(c=(l=e.parentNode)&&ne.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(s||a||c),u={target:e},se(e,r.loadingClass),f&&(clearTimeout(d),d=Z(S,2500),ce(e,j,!0)),c&&oe.call(l.getElementsByTagName("source"),R),s?e.setAttribute("srcset",s):a&&!c&&(C.test(e.nodeName)?N(e,a):e.src=a),o&&(s||c)&&de(e,{src:a})),e._lazyRace&&delete e._lazyRace,le(e,r.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&se(e,r.fastLoadedClass),O(u),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&x--}),!0)})),D=function(e){if(!e._lazyRace){var t,n=z.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),o="auto"==i;(!o&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||ae(e,r.errorClass)||!ae(e,r.lazyClass))&&(t=ue(e,"lazyunveilread").detail,o&&ye.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,x++,W(e,t,o,i,n))}},I=pe((function(){r.loadMode=3,H()})),q=function(){u||(n.now()-h<999?Z(q,999):(u=!0,r.loadMode=3,H(),X("scroll",P,!0)))},{_:function(){h=n.now(),i.elements=t.getElementsByClassName(r.lazyClass),c=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),X("scroll",H,!0),X("resize",H,!0),X("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&ee((function(){n.forEach((function(e){e.complete&&D(e)}))}))}})),e.MutationObserver?new MutationObserver(H).observe(K,{childList:!0,subtree:!0,attributes:!0}):(K.addEventListener("DOMNodeInserted",H,!0),K.addEventListener("DOMAttrModified",H,!0),setInterval(H,999)),X("hashchange",H,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,H,!0)})),/d$|^c/.test(t.readyState)?q():(X("load",q),t.addEventListener("DOMContentLoaded",H),Z(q,2e4)),i.elements.length?(k(),ve._lsFlush()):H()},checkElems:H,unveil:D,_aLSL:P=function(){3==r.loadMode&&(r.loadMode=2),I()}}),ye=(a=ge((function(e,t,n,i){var r,o,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),ne.test(t.nodeName||""))for(o=0,a=(r=t.getElementsByTagName("source")).length;o<a;o++)r[o].setAttribute("sizes",i);n.detail.dataAttr||de(e,n.detail)})),s=function(e,t,n){var i,r=e.parentNode;r&&(n=he(e,r,n),(i=ue(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,r,i,n))},{_:function(){o=t.getElementsByClassName(r.autosizesClass),X("resize",l)},checkElems:l=pe((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)s(o[e])})),updateElem:s}),be=function(){!be.i&&t.getElementsByClassName&&(be.i=!0,ye._(),me._())};return Z((function(){r.init&&be()})),i={cfg:r,autoSizer:ye,loader:me,init:be,uP:de,aC:se,rC:le,hC:ae,fire:ue,gW:he,rAF:ve}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},705:(e,t,n)=>{var i=n(639).Symbol;e.exports=i},239:(e,t,n)=>{var i=n(705),r=n(607),o=n(333),a=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):o(e)}},561:(e,t,n)=>{var i=n(990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(r,""):e}},957:(e,t,n)=>{var i="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=i},607:(e,t,n)=>{var i=n(705),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,s=i?i.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var i=!0}catch(e){}var r=a.call(e);return i&&(t?e[s]=n:delete e[s]),r}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,n)=>{var i=n(957),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();e.exports=o},990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},279:(e,t,n)=>{var i=n(218),r=n(771),o=n(841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,u,d,f,h,v=0,g=!1,p=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=l,i=c;return l=c=void 0,v=t,d=e.apply(i,n)}function b(e){return v=e,f=setTimeout(z,t),g?y(e):d}function w(e){var n=e-h;return void 0===h||n>=t||n<0||p&&e-v>=u}function z(){var e=r();if(w(e))return C(e);f=setTimeout(z,function(e){var n=t-(e-h);return p?s(n,u-(e-v)):n}(e))}function C(e){return f=void 0,m&&l?y(e):(l=c=void 0,d)}function E(){var e=r(),n=w(e);if(l=arguments,c=this,h=e,n){if(void 0===f)return b(h);if(p)return clearTimeout(f),f=setTimeout(z,t),y(h)}return void 0===f&&(f=setTimeout(z,t)),d}return t=o(t)||0,i(n)&&(g=!!n.leading,u=(p="maxWait"in n)?a(o(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=h=c=f=void 0},E.flush=function(){return void 0===f?d:C(r())},E}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,n)=>{var i=n(239),r=n(5);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==i(e)}},771:(e,t,n)=>{var i=n(639);e.exports=function(){return i.Date.now()}},493:(e,t,n)=>{var i=n(279),r=n(218);e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),i(e,t,{leading:o,maxWait:t,trailing:a})}},841:(e,t,n)=>{var i=n(561),r=n(218),o=n(448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n(90);const t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var n,i;return n=t,(i=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&e(n.prototype,i),t}();var i=n(493),r=n.n(i),o=n(279),a=n.n(o);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=r()(this.calcCaller,200).bind(this),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&s(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",r()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&c(t.prototype,n),e}()),new l(document.querySelectorAll(".skill-image"),80),new t})()})();