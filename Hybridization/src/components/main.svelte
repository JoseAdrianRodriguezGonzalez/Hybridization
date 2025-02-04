<script>
    import "./main.css";
    import radial from "./assets/Radial.png"
    import real from "./assets/Real.png"
    import complex from "./assets/Complex.png"
    import WF2D from "./assets/wf2d.png"
    import WF3D from "./assets/wf3d.png"
    import HYBRID from "./assets/sp.png"
    import{link} from 'svelte-spa-router';
    import {onMount} from 'svelte';
    let mathContent = 'Equation Schrödinger: '
    let ecS ='\\[ i\\hbar \\frac{\\partial}{\\partial t} \\Psi = \\hat{H} \\Psi \\]';
    
    let radil = `
        \\[
        R_{nl}(r)=\\sqrt{\\left(\\frac{2}{na_0}\\right)^3 \\cdot \\frac{(n-l-1)!}{2n(n+l)!}}
        \\cdot e^{-\\frac{r}{na_0}} \\left(\\frac{2r}{na_0}\\right)^l L^{2l+1}_{n-l-1}\\left(\\frac{2r}{na_0}\\right)
        \\]
    `;

    let mathContent2 = 'Orbital: '
    let Orbital = `\\[
        Y_l^m (\\theta, \\phi) = \\sqrt{\\frac{(2l+1)}{4\\pi} \\frac{(l-m)!}{(l+m)!}} P_l^m(\\cos\\theta) e^{im\\phi}
        \\]
        `;
  onMount(() => {
    if (!window.MathJax) {
      window.MathJax = {
        tex: { inlineMath: [['\\(', '\\)'], ['$', '$']] },
        svg: { fontCache: 'global' },
      };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
      script.async = true;
      script.onload = () => window.MathJax.typesetPromise();
      document.head.appendChild(script);
    } else {
      window.MathJax.typesetPromise();
    }
  });

  $: {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
</script>

<div class="Principal">

    <h1>Quantum simulator</h1>
    <article class="Index">
        <p>This package can plot the solutions from the Schrödinger equation with the library of plotly,that allows to the user interact with graph.
            The project is divided in several parts, listed as:
        </p>
        <ol>
            <li>The radial function</li>
            <li>The real part for spherical harmmonics</li>
            <li>The complex part for spherical harmmonics</li>
            <li>The Probability Density Function on 2 dimmensions with psi function</li>
            <li>The Probability Density Function on 3 dimmensions with psi function</li>
            <li>The visualization of the hibrydization with 3 dimmensions</li>
        </ol>
    </article>
    <h2>PLOTS</h2>
    <section class="catalogue">
        <div class="RADIAL">
            <a href="/Radial" use:link>
                <img src={radial} alt="Radial">
                <span>Radial Function</span>
            </a>
        </div>
        <div class="REAL">
            <img src={real} alt="real">
            <span>Real part of spherical harmmonics</span>
        </div>
        <div class="COMPLEX">
            <img src={complex} alt="complex">
            <span>Complex part of spherical harmmonics</span>
        </div>
        <div class="FUNCTION-2D">
            <img src={WF2D} alt="wave function 2d">
            <span>Probability density function view on 2D</span>
        </div>
        <div class="FUNCTION-3D">
            <img src={WF3D} alt="wave function 3d">
            <span>Probability density function view on 3D</span>
        </div>
        <div class="HYBRID">
            <img src={HYBRID} alt="Hybridization">
            <span>Hybridization</span>
        </div>
        <div class="PERIODIC">
            <a href="/table" use:link>
                <!--<img src={HYBRID} alt="Hybridization">-->
                <span>Periodic Table</span>
            </a>
        </div>
    </section>
    <h2>Introduction:</h2>
    <p>Part of this website will contain some relevant information that could help to understand the usage of the project,however it is indispensable to understand some quantum notations that will be useful to catch the idea up..
At the main page of the website will describe some general aspects of the Schrödinger's equation and relevant aspects of it, to get more involve, you can go to Documentation and review these relevant aspects.</p>
        <h3>Preabmule</h3>
        <!--Aqui-->
        <article>At XIX, everyone thought that the Physics were finished, that the physical laws and theorems were enough to represent all phenoms. However, at this century, Thermodynamics was a new physics area that had many troubles into its creation.
As this area of Physics introduced many aspects of particles, some of them had not a contingent response. This problem corresponds to the "black body", and how a contradictory statement was established. Meanwhile you decrease the size of an object, its temperature can be infinitly increased. However, this doesn't have sense, so Planck Proposed that the particles actually make "jumps", and this denomination was called quantums.
It was from here that one of the most emerging and modern branches of physics began: quantum physics. Later works emerged as a result of this essential foundation, including those of Albert Einstein, Werner Heisenberg, Erwin Schrödinger, and Paul Dirac. However, the work on which this project will be based is the great contribution made by Erwin Schrödinger.

<h4>Erwin Schrödinger's Equation</h4>
Erwin Schrödinger's equation was a key component in the implementation of a model that explains the behavior of particles. In the 20th century, Heisenberg and Erwin Schrödinger sought a definitive model to explain how particle motion works. While Heisenberg aimed to find a matrix-based solution, Erwin Schrödinger presented an approach through a differential equation (Schrödinger, 1926).

<p>
    <span>{@html mathContent}</span>
    <span>{@html ecS}</span>
</p>

Thanks to this work, quantum mechanics was firmly established, and through the solutions of this equation, we can graph quantum orbitals.
The particle is described in four dimensions,space and time, however, only space will be used for visualization purposes.

<h4>Solutions to Erwin Schrödinger' equation</h4>
Given Erwin Schrödinger's differential equation, which helps us understand the behavior of a particle, a standardized result was established for the hydrogen atom, from which two equations arise.

<h4>For the radial function:</h4>
The particle exhibits a "radius" or distance from the center of the atom. The radial function describes this phenomenon, allowing us to define a distance between energy levels and sublevels for a given energy state.

<p>
    <span>{@html mathContent}</span>
    that is described by this expression:<br />
    <span>{@html radil}</span>
  </p>
The first-moment equation may seem impossible to understand; however, it simply involves considering a formula that takes three parameters:
<ol>
    <li>The quantum number <b><i>n</i></b>: Describes the energy levels of the atom (n=1,2,3,…).</li>
<li>The quantum number <b><i>l</i></b>: Describes the sublevels or "subshells" of energy (l=0,1,2,…).</li>
<li>A radius value <b><i>r</i></b>: This parameter is calculated within the program.</li>
</ol>
This formula is extremely useful for plotting the probability of where a particle is likely to be found.

<h4>For the shape of the orbital</h4>

    <p>Erwin Schrödinger's particle model does not describe perfect orbitals but rather probability densities where the electron might be found, given the quantum numbers <b><i>l</i></b> and <b><i>m</i></b>. 
    <b><i>l</i></b> describes the energy sublevel, and <b><i>m</i></b> describes the orientation of each orbital.</p>

    <p>The function that corresponds to the second part of Schrödinger's equation solution is:</p>

    <p>
        <span>{@html mathContent2}</span>
        that is described by this expression:<br />
        <span>{@html Orbital}</span>
      </p>
</article>
</div>