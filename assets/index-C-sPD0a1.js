var M=Object.defineProperty;var S=(t,e,n)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var A=(t,e,n)=>S(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function a(){}function I(t){return t()}function C(){return Object.create(null)}function w(t){t.forEach(I)}function B(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function H(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function N(){return G(" ")}function k(t,e,n){t.getAttribute(e)!==n&&t.setAttribute(e,n)}function W(t){return Array.from(t.childNodes)}let P;function p(t){P=t}const h=[],j=[];let f=[];const F=[];function E(t){f.push(t)}const L=new Set;let d=0;function q(){if(d!==0)return;const t=P;do{try{for(;d<h.length;){const e=h[d];d++,p(e),U(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;j.length;)j.pop()();for(let e=0;e<f.length;e+=1){const n=f[e];L.has(n)||(L.add(n),n())}f.length=0}while(h.length);for(;F.length;)F.pop()();L.clear(),p(t)}function U(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}function V(t){const e=[],n=[];f.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),f=e}const _=new Set;let X;function y(t,e){t&&t.i&&(_.delete(t),t.i(e))}function O(t,e,n,i){if(t&&t.o){if(_.has(t))return;_.add(t),X.c.push(()=>{_.delete(t)}),t.o(e)}}function D(t){t&&t.c()}function b(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),E(()=>{const o=t.$$.on_mount.map(I).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...o):w(o),t.$$.on_mount=[]}),r.forEach(E)}function v(t,e){const n=t.$$;n.fragment!==null&&(V(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e,n,i,r,o,c=null,u=[-1]){const l=P;p(t);const s=t.$$={fragment:null,ctx:[],props:o,update:a,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};if(c&&c(s.root),s.ctx=[],s.update(),w(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){const $=W(e.target);s.fragment&&s.fragment.l($),$.forEach(g)}else s.fragment&&s.fragment.c();e.intro&&y(t.$$.fragment),b(t,e.target,e.anchor),q()}p(l)}class R{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){v(this,1),this.$destroy=a}$on(e,n){if(!B(n))return a;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);function K(t){let e;return{c(){e=m("header"),e.innerHTML='<div><nav class="nav"><ul><li>Documentation</li> <li>Examples</li> <li>Home</li></ul></nav></div>'},m(n,i){z(n,e,i)},p:a,i:a,o:a,d(n){n&&g(e)}}}class Q extends R{constructor(e){super(),T(this,e,null,K,x,{})}}const Z="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Radial-cMTjxAWz.png",tt="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Real-CLXmeFlA.png",et="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Complex-Bl_3rLT2.png",nt="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/wf2d-D1vWEjB2.png",it="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/wf3d-BJajtjVV.png",rt="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/sp-CBR3gz9k.png";function ot(t){let e;return{c(){e=m("div"),e.innerHTML=`<h1>Quantum simulator</h1> <article class="Index"><p>This package can plot the solutions from the Schrödinger equation with the library of plotly,that allows to the user interact with graph.
            The project is divided in several parts, listed as:</p> <ol><li>The radial function</li> <li>The real part for spherical harmmonics</li> <li>The complex part for spherical harmmonics</li> <li>The Probability Density Function on 2 dimmensions with psi function</li> <li>The Probability Density Function on 3 dimmensions with psi function</li> <li>The visualization of the hibrydization with 3 dimmensions</li></ol></article> <h2>PLOTS</h2> <section class="catalogue"><div class="RADIAL"><img src="${Z}" alt="Radial"/> <span>Radial Function</span></div> <div class="REAL"><img src="${tt}" alt="real"/> <span>Real part of spherical harmmonics</span></div> <div class="COMPLEX"><img src="${et}" alt="complex"/> <span>Complex part of spherical harmmonics</span></div> <div class="FUNCTION-2D"><img src="${nt}" alt="wave function 2d"/> <span>Probability density function view on 2D</span></div> <div class="FUNCTION-3D"><img src="${it}" alt="wave function 3d"/> <span>Probability density function view on 3D</span></div> <div class="HYBRID"><img src="${rt}" alt="Hybridization"/> <span>Hybridization</span></div></section> <h2>Introduction:</h2> <p>Part of this website will contain some relevant information that could help to understand the usage of the project, so here will be a little index which can show this extra information.</p>`,k(e,"class","Principal")},m(n,i){z(n,e,i)},p:a,i:a,o:a,d(n){n&&g(e)}}}class st extends R{constructor(e){super(),T(this,e,null,ot,x,{})}}function at(t){let e;return{c(){e=m("footer"),e.innerHTML='<div class="">Contact us on</div> <div class=""><p>The information about this site you can look it at at different source and check the fidelity of the terms</p></div>'},m(n,i){z(n,e,i)},p:a,i:a,o:a,d(n){n&&g(e)}}}class ct extends R{constructor(e){super(),T(this,e,null,at,x,{})}}function lt(t){let e,n,i,r,o,c,u,l;return i=new Q({}),o=new st({}),u=new ct({}),{c(){e=m("main"),n=m("div"),D(i.$$.fragment),r=N(),D(o.$$.fragment),c=N(),D(u.$$.fragment)},m(s,$){z(s,e,$),H(e,n),b(i,n,null),H(e,r),b(o,e,null),H(e,c),b(u,e,null),l=!0},p:a,i(s){l||(y(i.$$.fragment,s),y(o.$$.fragment,s),y(u.$$.fragment,s),l=!0)},o(s){O(i.$$.fragment,s),O(o.$$.fragment,s),O(u.$$.fragment,s),l=!1},d(s){s&&g(e),v(i),v(o),v(u)}}}class ut extends R{constructor(e){super(),T(this,e,null,lt,x,{})}}new ut({target:document.body});