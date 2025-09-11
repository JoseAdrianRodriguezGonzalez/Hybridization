<script>

import Router from 'svelte-spa-router';
import Header from './components/Header.svelte';
import routes from './routes';
import Footer from './components/footer.svelte';

    // Revisa si la ruta es la raízW
</script>

<Header />
<main class="main-content">
  <Router {routes} />
</main>

<Footer/>

<style>

  :global(.main-content) {
    max-width: 1200px; 
    padding: 2rem clamp(0rem, 2vw, 1rem);
    flex: 1; /* Toma todo el espacio disponible */
  }

  
  /* Layout de página completa */
  :global(html) {
    height: 100%;
  }
  
  :global(body) {
    margin:0;

  }
  
  :global(.main-content) {
    flex: 1; /* Toma todo el espacio disponible */
  }
</style>