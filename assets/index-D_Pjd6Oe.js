var Re=Object.defineProperty;var Le=(t,e,n)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>Le(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function p(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function we(t){return t()}function fe(){return Object.create(null)}function N(t){t.forEach(we)}function K(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function De(t){return Object.keys(t).length===0}function Se(t,...e){if(t==null){for(const r of e)r(void 0);return p}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Z(t){return t&&K(t.destroy)?t.destroy:p}function $(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function ye(t){return document.createTextNode(t)}function B(){return ye(" ")}function ie(){return ye("")}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ce(t){return Array.from(t.childNodes)}function Te(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function U(t,e){return new t(e)}let G;function J(t){G=t}function se(){if(!G)throw new Error("Function called outside component initialization");return G}function Pe(t){se().$$.after_update.push(t)}function Ne(t){se().$$.on_destroy.push(t)}function He(){const t=se();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=Te(e,n,{cancelable:r});return s.slice().forEach(a=>{a.call(t,i)}),!i.defaultPrevented}return!0}}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const F=[],he=[];let q=[];const pe=[],$e=Promise.resolve();let ne=!1;function ve(){ne||(ne=!0,$e.then(xe))}function Ie(){return ve(),$e}function re(t){q.push(t)}const ee=new Set;let H=0;function xe(){if(H!==0)return;const t=G;do{try{for(;H<F.length;){const e=F[H];H++,J(e),Fe(e.$$)}}catch(e){throw F.length=0,H=0,e}for(J(null),F.length=0,H=0;he.length;)he.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];ee.has(n)||(ee.add(n),n())}q.length=0}while(F.length);for(;pe.length;)pe.pop()();ne=!1,ee.clear(),J(t)}function Fe(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}function qe(t){const e=[],n=[];q.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),q=e}const X=new Set;let P;function oe(){P={r:0,c:[],p:P}}function le(){P.r||N(P.c),P=P.p}function y(t,e){t&&t.i&&(X.delete(t),t.i(e))}function v(t,e,n,r){if(t&&t.o){if(X.has(t))return;X.add(t),P.c.push(()=>{X.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function W(t,e){const n={},r={},s={$$scope:1};let i=t.length;for(;i--;){const a=t[i],c=e[i];if(c){for(const l in a)l in c||(r[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[i]=c}else for(const l in a)s[l]=1}for(const a in r)a in n||(n[a]=void 0);return n}function V(t){return typeof t=="object"&&t!==null?t:{}}function z(t){t&&t.c()}function x(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),re(()=>{const i=t.$$.on_mount.map(we).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...i):N(i),t.$$.on_mount=[]}),s.forEach(re)}function E(t,e){const n=t.$$;n.fragment!==null&&(qe(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(F.push(t),ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(t,e,n,r,s,i,a=null,c=[-1]){const l=G;J(t);const o=t.$$={fragment:null,ctx:[],props:i,update:p,not_equal:s,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:fe(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};a&&a(o.root);let h=!1;if(o.ctx=n?n(t,e.props||{},(m,g,...k)=>{const _=k.length?k[0]:g;return o.ctx&&s(o.ctx[m],o.ctx[m]=_)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](_),h&&Be(t,m)),g}):[],o.update(),h=!0,N(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const m=Ce(e.target);o.fragment&&o.fragment.l(m),m.forEach(j)}else o.fragment&&o.fragment.c();e.intro&&y(t.$$.fragment),x(t,e.target,e.anchor),xe()}J(l)}class T{constructor(){Q(this,"$$");Q(this,"$$set")}$destroy(){E(this,1),this.$destroy=p}$on(e,n){if(!K(n))return p;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Me);const I=[];function Ee(t,e){return{subscribe:ke(t,e).subscribe}}function ke(t,e=p){let n;const r=new Set;function s(c){if(D(t,c)&&(t=c,n)){const l=!I.length;for(const o of r)o[1](),I.push(o,t);if(l){for(let o=0;o<I.length;o+=2)I[o][0](I[o+1]);I.length=0}}}function i(c){s(c(t))}function a(c,l=p){const o=[c,l];return r.add(o),r.size===1&&(n=e(s,i)||p),c(t),()=>{r.delete(o),r.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:a}}function ze(t,e,n){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return Ee(n,(a,c)=>{let l=!1;const o=[];let h=0,m=p;const g=()=>{if(h)return;m();const _=e(r?o[0]:o,a,c);i?a(_):m=K(_)?_:p},k=s.map((_,A)=>Se(_,R=>{o[A]=R,h&=~(1<<A),l&&g()},()=>{h|=1<<A}));return l=!0,g(),function(){N(k),m(),l=!1}})}function Je(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,s,i,a=[],c="",l=t.split("/");for(l[0]||l.shift();s=l.shift();)n=s[0],n==="*"?(a.push("wild"),c+="/(.*)"):n===":"?(r=s.indexOf("?",1),i=s.indexOf(".",1),a.push(s.substring(1,~r?r:~i?i:s.length)),c+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(c+=(~r?"?":"")+"\\"+s.substring(i))):c+="/"+s;return{keys:a,pattern:new RegExp("^"+c+"/?$","i")}}function Ge(t){let e,n,r;const s=[t[2]];var i=t[0];function a(c,l){let o={};for(let h=0;h<s.length;h+=1)o=Y(o,s[h]);return l!==void 0&&l&4&&(o=Y(o,W(s,[V(c[2])]))),{props:o}}return i&&(e=U(i,a(t)),e.$on("routeEvent",t[7])),{c(){e&&z(e.$$.fragment),n=ie()},m(c,l){e&&x(e,c,l),L(c,n,l),r=!0},p(c,l){if(l&1&&i!==(i=c[0])){if(e){oe();const o=e;v(o.$$.fragment,1,0,()=>{E(o,1)}),le()}i?(e=U(i,a(c,l)),e.$on("routeEvent",c[7]),z(e.$$.fragment),y(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(i){const o=l&4?W(s,[V(c[2])]):{};e.$set(o)}},i(c){r||(e&&y(e.$$.fragment,c),r=!0)},o(c){e&&v(e.$$.fragment,c),r=!1},d(c){c&&j(n),e&&E(e,c)}}}function Xe(t){let e,n,r;const s=[{params:t[1]},t[2]];var i=t[0];function a(c,l){let o={};for(let h=0;h<s.length;h+=1)o=Y(o,s[h]);return l!==void 0&&l&6&&(o=Y(o,W(s,[l&2&&{params:c[1]},l&4&&V(c[2])]))),{props:o}}return i&&(e=U(i,a(t)),e.$on("routeEvent",t[6])),{c(){e&&z(e.$$.fragment),n=ie()},m(c,l){e&&x(e,c,l),L(c,n,l),r=!0},p(c,l){if(l&1&&i!==(i=c[0])){if(e){oe();const o=e;v(o.$$.fragment,1,0,()=>{E(o,1)}),le()}i?(e=U(i,a(c,l)),e.$on("routeEvent",c[6]),z(e.$$.fragment),y(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else if(i){const o=l&6?W(s,[l&2&&{params:c[1]},l&4&&V(c[2])]):{};e.$set(o)}},i(c){r||(e&&y(e.$$.fragment,c),r=!0)},o(c){e&&v(e.$$.fragment,c),r=!1},d(c){c&&j(n),e&&E(e,c)}}}function Ye(t){let e,n,r,s;const i=[Xe,Ge],a=[];function c(l,o){return l[1]?0:1}return e=c(t),n=a[e]=i[e](t),{c(){n.c(),r=ie()},m(l,o){a[e].m(l,o),L(l,r,o),s=!0},p(l,[o]){let h=e;e=c(l),e===h?a[e].p(l,o):(oe(),v(a[h],1,1,()=>{a[h]=null}),le(),n=a[e],n?n.p(l,o):(n=a[e]=i[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){s||(y(n),s=!0)},o(l){v(n),s=!1},d(l){l&&j(r),a[e].d(l)}}}function me(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const ce=Ee(null,function(e){e(me());const n=()=>{e(me())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});ze(ce,t=>t.location);ze(ce,t=>t.querystring);const _e=ke(void 0);function te(t,e){if(e=be(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return ge(t,e),{update(n){n=be(n),ge(t,n)}}}function Ue(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function ge(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||We(r.currentTarget.getAttribute("href"))})}function be(t){return t&&typeof t=="string"?{href:t}:t||{}}function We(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Ve(t,e,n){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class a{constructor(u,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!u||typeof u=="string"&&(u.length<1||u.charAt(0)!="/"&&u.charAt(0)!="*")||typeof u=="object"&&!(u instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:O,keys:b}=Je(u);this.path=u,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=O,this._keys=b}match(u){if(s){if(typeof s=="string")if(u.startsWith(s))u=u.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const S=u.match(s);if(S&&S[0])u=u.substr(S[0].length)||"/";else return null}}const d=this._pattern.exec(u);if(d===null)return null;if(this._keys===!1)return d;const O={};let b=0;for(;b<this._keys.length;){try{O[this._keys[b]]=decodeURIComponent(d[b+1]||"")||null}catch{O[this._keys[b]]=null}b++}return O}async checkConditions(u){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](u))return!1;return!0}}const c=[];r instanceof Map?r.forEach((f,u)=>{c.push(new a(u,f))}):Object.keys(r).forEach(f=>{c.push(new a(f,r[f]))});let l=null,o=null,h={};const m=He();async function g(f,u){await Ie(),m(f,u)}let k=null,_=null;i&&(_=f=>{f.state&&(f.state.__svelte_spa_router_scrollY||f.state.__svelte_spa_router_scrollX)?k=f.state:k=null},window.addEventListener("popstate",_),Pe(()=>{Ue(k)}));let A=null,R=null;const Oe=ce.subscribe(async f=>{A=f;let u=0;for(;u<c.length;){const d=c[u].match(f.location);if(!d){u++;continue}const O={route:c[u].path,location:f.location,querystring:f.querystring,userData:c[u].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await c[u].checkConditions(O)){n(0,l=null),R=null,g("conditionsFailed",O);return}g("routeLoading",Object.assign({},O));const b=c[u].component;if(R!=b){b.loading?(n(0,l=b.loading),R=b,n(1,o=b.loadingParams),n(2,h={}),g("routeLoaded",Object.assign({},O,{component:l,name:l.name,params:o}))):(n(0,l=null),R=null);const S=await b();if(f!=A)return;n(0,l=S&&S.default||S),R=b}d&&typeof d=="object"&&Object.keys(d).length?n(1,o=d):n(1,o=null),n(2,h=c[u].props),g("routeLoaded",Object.assign({},O,{component:l,name:l.name,params:o})).then(()=>{_e.set(o)});return}n(0,l=null),R=null,_e.set(void 0)});Ne(()=>{Oe(),_&&window.removeEventListener("popstate",_)});function je(f){de.call(this,t,f)}function Ae(f){de.call(this,t,f)}return t.$$set=f=>{"routes"in f&&n(3,r=f.routes),"prefix"in f&&n(4,s=f.prefix),"restoreScrollState"in f&&n(5,i=f.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[l,o,h,r,s,i,je,Ae]}class Ke extends T{constructor(e){super(),C(this,e,Ve,Ye,D,{routes:3,prefix:4,restoreScrollState:5})}}function Qe(t){let e,n,r,s,i,a,c,l,o,h,m,g,k,_;return{c(){e=w("header"),n=w("div"),r=w("nav"),s=w("ul"),i=w("li"),a=w("a"),a.textContent="Documentation",c=B(),l=w("li"),o=w("a"),o.textContent="Examples",h=B(),m=w("li"),g=w("a"),g.textContent="Home",M(a,"href","/Documentation"),M(o,"href","/Examples"),M(g,"href","/"),M(r,"class","nav")},m(A,R){L(A,e,R),$(e,n),$(n,r),$(r,s),$(s,i),$(i,a),$(s,c),$(s,l),$(l,o),$(s,h),$(s,m),$(m,g),k||(_=[Z(te.call(null,a)),Z(te.call(null,o)),Z(te.call(null,g))],k=!0)},p,i:p,o:p,d(A){A&&j(e),k=!1,N(_)}}}class ae extends T{constructor(e){super(),C(this,e,null,Qe,D,{})}}function Ze(t){let e;return{c(){e=w("footer"),e.innerHTML='<div class="">Contact us on</div> <div class=""><p>The information about this site you can look it at at different source and check the fidelity of the terms</p></div>'},m(n,r){L(n,e,r)},p,i:p,o:p,d(n){n&&j(e)}}}class ue extends T{constructor(e){super(),C(this,e,null,Ze,D,{})}}function et(t){let e,n,r,s;return e=new ae({}),r=new ue({}),{c(){z(e.$$.fragment),n=B(),z(r.$$.fragment)},m(i,a){x(e,i,a),L(i,n,a),x(r,i,a),s=!0},p,i(i){s||(y(e.$$.fragment,i),y(r.$$.fragment,i),s=!0)},o(i){v(e.$$.fragment,i),v(r.$$.fragment,i),s=!1},d(i){i&&j(n),E(e,i),E(r,i)}}}class tt extends T{constructor(e){super(),C(this,e,null,et,D,{})}}function nt(t){let e,n,r,s;return e=new ae({}),r=new ue({}),{c(){z(e.$$.fragment),n=B(),z(r.$$.fragment)},m(i,a){x(e,i,a),L(i,n,a),x(r,i,a),s=!0},p,i(i){s||(y(e.$$.fragment,i),y(r.$$.fragment,i),s=!0)},o(i){v(e.$$.fragment,i),v(r.$$.fragment,i),s=!1},d(i){i&&j(n),E(e,i),E(r,i)}}}class rt extends T{constructor(e){super(),C(this,e,null,nt,D,{})}}const it="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Radial-cMTjxAWz.png",st="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Real-CLXmeFlA.png",ot="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Complex-Bl_3rLT2.png",lt="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/wf2d-D1vWEjB2.png",ct="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/wf3d-BJajtjVV.png",at="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/sp-CBR3gz9k.png";function ut(t){let e;return{c(){e=w("div"),e.innerHTML=`<h1>Quantum simulator</h1> <article class="Index"><p>This package can plot the solutions from the Schrödinger equation with the library of plotly,that allows to the user interact with graph.
            The project is divided in several parts, listed as:</p> <ol><li>The radial function</li> <li>The real part for spherical harmmonics</li> <li>The complex part for spherical harmmonics</li> <li>The Probability Density Function on 2 dimmensions with psi function</li> <li>The Probability Density Function on 3 dimmensions with psi function</li> <li>The visualization of the hibrydization with 3 dimmensions</li></ol></article> <h2>PLOTS</h2> <section class="catalogue"><div class="RADIAL"><img src="${it}" alt="Radial"/> <span>Radial Function</span></div> <div class="REAL"><img src="${st}" alt="real"/> <span>Real part of spherical harmmonics</span></div> <div class="COMPLEX"><img src="${ot}" alt="complex"/> <span>Complex part of spherical harmmonics</span></div> <div class="FUNCTION-2D"><img src="${lt}" alt="wave function 2d"/> <span>Probability density function view on 2D</span></div> <div class="FUNCTION-3D"><img src="${ct}" alt="wave function 3d"/> <span>Probability density function view on 3D</span></div> <div class="HYBRID"><img src="${at}" alt="Hybridization"/> <span>Hybridization</span></div></section> <h2>Introduction:</h2> <p>Part of this website will contain some relevant information that could help to understand the usage of the project, so here will be a little index which can show this extra information.</p>`,M(e,"class","Principal")},m(n,r){L(n,e,r)},p,i:p,o:p,d(n){n&&j(e)}}}class ft extends T{constructor(e){super(),C(this,e,null,ut,D,{})}}function dt(t){let e,n,r,s,i,a,c,l;return r=new ae({}),i=new ft({}),c=new ue({}),{c(){e=w("main"),n=w("div"),z(r.$$.fragment),s=B(),z(i.$$.fragment),a=B(),z(c.$$.fragment)},m(o,h){L(o,e,h),$(e,n),x(r,n,null),$(e,s),x(i,e,null),$(e,a),x(c,e,null),l=!0},p,i(o){l||(y(r.$$.fragment,o),y(i.$$.fragment,o),y(c.$$.fragment,o),l=!0)},o(o){v(r.$$.fragment,o),v(i.$$.fragment,o),v(c.$$.fragment,o),l=!1},d(o){o&&j(e),E(r),E(i),E(c)}}}class ht extends T{constructor(e){super(),C(this,e,null,dt,D,{})}}const pt={"/Documentation":tt,"/Examples":rt,"/":ht};function mt(t){let e,n,r;return n=new Ke({props:{routes:pt}}),{c(){e=w("main"),z(n.$$.fragment)},m(s,i){L(s,e,i),x(n,e,null),r=!0},p,i(s){r||(y(n.$$.fragment,s),r=!0)},o(s){v(n.$$.fragment,s),r=!1},d(s){s&&j(e),E(n)}}}class _t extends T{constructor(e){super(),C(this,e,null,mt,D,{})}}new _t({target:document.body});