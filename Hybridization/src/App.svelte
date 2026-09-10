<script>

import Router from 'svelte-spa-router';
import Header from './components/Header.svelte';
import routes from './routes';
import Footer from './components/footer.svelte';

</script>

<Header />
<main class="main-content">
  <Router {routes} />
</main>

<Footer/>

