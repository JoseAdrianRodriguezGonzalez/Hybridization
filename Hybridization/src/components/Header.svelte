<script>
    import './Header.css';
    import{link} from 'svelte-spa-router';
</script>
<header>
    <div>
        <nav class="nav">
            <ul>
              <li><a href="/Documentacion" use:link>Documentación</a></li>
              <li><a href="/Galeria" use:link>Galería</a></li>
              <li><a href="/" use:link>Inicio</a></li>
              <li><a href="/table" use:link>Tabla Periódica</a></li>
              <li><a href="/Teoria" use:link>Teoría</a>
              <li><a href="/Instalacion" use:link>Instalación</a></li>
            </ul>
          </nav>
    </div>
</header>
  