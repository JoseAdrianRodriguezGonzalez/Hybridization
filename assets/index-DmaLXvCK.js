var M=Object.defineProperty;var F=(t,e,n)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $=(t,e,n)=>F(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function l(){}function S(t){return t()}function z(){return Object.create(null)}function _(t){t.forEach(S)}function j(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function q(t){return Object.keys(t).length===0}function C(t,e){t.appendChild(e)}function E(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function U(){return B(" ")}function k(t){return Array.from(t.childNodes)}let L;function p(t){L=t}const h=[],D=[];let f=[];const I=[];function w(t){f.push(t)}const v=new Set;let d=0;function G(){if(d!==0)return;const t=L;do{try{for(;d<h.length;){const e=h[d];d++,p(e),J(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;D.length;)D.pop()();for(let e=0;e<f.length;e+=1){const n=f[e];v.has(n)||(v.add(n),n())}f.length=0}while(h.length);for(;I.length;)I.pop()();v.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}function K(t){const e=[],n=[];f.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),f=e}const m=new Set;let Q;function b(t,e){t&&t.i&&(m.delete(t),t.i(e))}function A(t,e,n,i){if(t&&t.o){if(m.has(t))return;m.add(t),Q.c.push(()=>{m.delete(t)}),t.o(e)}}function H(t){t&&t.c()}function x(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),w(()=>{const o=t.$$.on_mount.map(S).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):_(o),t.$$.on_mount=[]}),r.forEach(w)}function O(t,e){const n=t.$$;n.fragment!==null&&(K(n.after_update),_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e,n,i,r,o,s=null,a=[-1]){const u=L;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:l,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:z(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};if(s&&s(c.root),c.ctx=[],c.update(),_(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const R=k(e.target);c.fragment&&c.fragment.l(R),R.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&b(t.$$.fragment),x(t,e.target,e.anchor),G()}p(u)}class P{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){O(this,1),this.$destroy=l}$on(e,n){if(!j(n))return l;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(V);function W(t){let e;return{c(){e=g("header"),e.innerHTML='<div><nav class="nav"><ul><li>Documentation</li> <li>Examples</li> <li>Home</li></ul></nav></div>'},m(n,i){E(n,e,i)},p:l,i:l,o:l,d(n){n&&y(e)}}}class X extends P{constructor(e){super(),N(this,e,null,W,T,{})}}const Y="https://JoseAdrianRodriguezGonzalez.github.io/Hybridization/assets/Radial-cMTjxAWz.png";function Z(t){let e;return{c(){e=g("div"),e.innerHTML=`<h1>Quantum simulator</h1> <article class="Index"><p>This package can plot the solutions from the Schrödinger equation with the library of plotly,that allows to the user interact with graph.
            The project is divided in several parts, listed as:</p> <ol><li>The radial function</li> <li>The real part for spherical harmmonics</li> <li>The complex part for spherical harmmonics</li> <li>The Probability Density Function on 2 dimmensions with psi function</li> <li>The Probability Density Function on 3 dimmensions with psi function</li> <li>The visualization of the hibrydization with 3 dimmensions</li></ol></article> <h2>PLOTS</h2> <section class="catalogue"><div class="RADIAL"><img src="${Y}" alt="Radial"/> <span>Radial Function</span></div> <div class="REAL"><img src="./assets/Real.png" alt="real"/> <span>Real part of spherical harmmonics</span></div> <div class="COMPLEX"><img src="./assets/Complex.png" alt="complex"/> <span>Complex part of spherical harmmonics</span></div> <div class="FUNCTION-2D"><img src="./assets/wf2d.png" alt="wave function 2d"/> <span>Probability density function view on 2D</span></div> <div class="FUNCTION-3D"><img src="./assets/wf3d.png" alt="wave function 3d"/> <span>Probability density function view on 3D</span></div> <div class="HYBRID"><img src="./assets/sp.png" alt="Hybridization"/> <span>Hybridization</span></div></section> <h2>Introduction:</h2> <p>Part of this website will contain some relevant information that could help to understand the usage of the project, so here will be a little index which can show this extra information.</p>`},m(n,i){E(n,e,i)},p:l,i:l,o:l,d(n){n&&y(e)}}}class tt extends P{constructor(e){super(),N(this,e,null,Z,T,{})}}function et(t){let e,n,i,r,o,s;return i=new X({}),o=new tt({}),{c(){e=g("main"),n=g("div"),H(i.$$.fragment),r=U(),H(o.$$.fragment)},m(a,u){E(a,e,u),C(e,n),x(i,n,null),C(e,r),x(o,e,null),s=!0},p:l,i(a){s||(b(i.$$.fragment,a),b(o.$$.fragment,a),s=!0)},o(a){A(i.$$.fragment,a),A(o.$$.fragment,a),s=!1},d(a){a&&y(e),O(i),O(o)}}}class nt extends P{constructor(e){super(),N(this,e,null,et,T,{})}}new nt({target:document.body});