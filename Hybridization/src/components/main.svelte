<script>
    import "./main.css";
    import radial from "./assets/Radial.png"
    import real from "./assets/Real.png"
    import complex from "./assets/Complex.png"
    import WF2D from "./assets/wf2d.png"
    import WF3D from "./assets/wf3d.png"
    import HYBRID from "./assets/sp.png"

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
            <img src={radial} alt="Radial">
            <span>Radial Function</span>
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
    </section>
    <h2>Introduction:</h2>
    <p>Part of this website will contain some relevant information that could help to understand the usage of the project, so here will be a little index which can show this extra information.</p>
</div>