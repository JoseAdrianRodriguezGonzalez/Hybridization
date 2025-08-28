<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/footer.svelte";
  import './Radial.css';
  import { onMount } from 'svelte';

  let mathContent = `\\( \\Psi \\)`;
  let radil = `
    \\[
    R_{nl}(r)=\\sqrt{\\left(\\frac{2}{na_0}\\right)^3 \\cdot \\frac{(n-l-1)!}{2n(n+l)!}}
    \\cdot e^{-\\frac{r}{na_0}} \\left(\\frac{2r}{na_0}\\right)^l L^{2l+1}_{n-l-1}\\left(\\frac{2r}{na_0}\\right)
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

<main class="main">
  <div class="Principle">
    <Header />
    <h1>Radial Function</h1>

    <section>
      <p>
        The Radial function is one of the solutions from Schrödinger's equation
        <span>{@html mathContent}</span>
        that is described by this expression:<br />
        <span>{@html radil}</span>
      </p>
      <p>
        This expression is the result from one of the 3 proposed equations at Schrödinger's equation.
      </p>
      <p>In the library, it contains a function that can calculate it, and will require 3 parameters</p>
      <ul>
        <li>r = radius</li>
        <li>n = energetic level</li>
        <li>l = suborbital</li>
      </ul>
    </section>
  </div>
  <Footer />
</main>
