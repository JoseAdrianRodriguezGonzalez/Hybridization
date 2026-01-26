<script>
    import "./main.css";

    import DocumentacionIcon from "/images/documentacion.svg";
    import TeoriaIcon from "/images/teoria.svg";
    import GaleriaIcon from "/images/galeria.svg";
    import Card from '../lib/Card.svelte';
    import{link} from 'svelte-spa-router';
    import {onMount} from 'svelte';
    import logo from "/images/LogoQP.svg"
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
    window["MathJax"]
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
    <article class="Index">
        <section class="main-container">
            <div class="left-block">
                <div class="logo-title">
                    <img src={logo} alt="QuPlots icon" class="orbital-icon" />
                </div>
            </div>
            <div class="right-block">
                <p class="desc">Visualizador de Modelos <br/> cuánticos en Python</p>
                <a href="/Instalacion" use:link class="install-btn">Instalar</a>
            </div>
        </section>
        <section class="cards-container">
         <Card titulo="Documentación"
            texto="Toda la información tecnica sobre el uso de la librería."
            icono={DocumentacionIcon}
            enlace="/Documentacion"/>
            <Card titulo="Galeria de contenido"
            texto="Encontraras videos e imagenes detalladas."
            icono={GaleriaIcon}
            enlace="/Galeria"/> 
            <!-- 
            <Card titulo="Teoria"
            texto="Encontraras conceptos matemáticos y que hay físicos detrás."
            icono={TeoriaIcon}
            enlace="/Teoria"/> 
            -->
        
            
        </section>
        

        <section class="content">
            <p class="description">
                QuPlots es una herramienta innovadora en Python diseñada para explorar y visualizar fenómenos de la química cuántica de forma intuitiva.
                A través de simulaciones gráficas dinámicas e interactivas construidas con Plotly, QuPlots convierte la abstracción matemática 
                de los modelos cuánticos en representaciones 2D y 3D fáciles de interpretar y de usar.
                Podras encontrar la visualización de:
            </p>
            <ol>
                <li>Función radial.</li>
                <li>Parte real de los armónicos esféricos.</li>
                <li>Parte compleja de los armónicos esféricos.</li>
                <li>Función de densidad de probabilidad en 2 y 3 dimensiones usando la función \( \Psi \).</li>
                <li>Hibridaciónes atómicas en 3 dimensiones.</li>
            </ol>
        </section>
        <!-- 
        <section class="gallery">
            <h2>Galería de Imagenes</h2>
        </section>
         -->
    </article>
</div>