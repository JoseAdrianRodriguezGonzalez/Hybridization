<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/footer.svelte";
    import './Radial.css'
    import { onMount } from 'svelte';
    import MathJax from 'mathjax/es5/tex-mml-chtml.js';
let mathContent = `
  \\(  \\Psi \\)
`;
onMount(() => {
    // Carga MathJax desde una CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    script.onload = () => {
      window.MathJax.typesetPromise();
    };
    document.head.appendChild(script);
  });
</script>
<main class="main">
    <div class="Principle">
        <Header></Header>
        <h1>Radial function</h1>
        <section>
            <p>
                The Radial function is one of the solutions from the Schrödinger's equation
                {@html mathContent}
            </p>
        </section>
    </div>
    <Footer></Footer>
</main>

