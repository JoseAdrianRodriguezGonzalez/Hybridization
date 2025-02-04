<script>
    import "./main.css";
    import radial from "./assets/Radial.png"
    import real from "./assets/Real.png"
    import complex from "./assets/Complex.png"
    import WF2D from "./assets/wf2d.png"
    import WF3D from "./assets/wf3d.png"
    import HYBRID from "./assets/sp.png"
    import{link} from 'svelte-spa-router';
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
</article>
</div>