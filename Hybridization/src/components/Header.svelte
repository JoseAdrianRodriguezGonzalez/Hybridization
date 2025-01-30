<script>
    import './Header.css';
    import{link} from 'svelte-spa-router';
</script>
<header>
    <div>
        <nav class="nav">
            <ul>
              <li><a href="/Documentation" use:link>Documentation</a></li>
              <li><a href="/Examples" use:link>Examples</a></li>
              <li><a href="/" use:link>Home</a></li>
              <li><a href="/table" use:link>Periodic table</a></li>
            </ul>
          </nav>
    </div>
</header>
  