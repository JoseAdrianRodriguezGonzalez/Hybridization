<script>
  import './Header.css';
  import { link } from 'svelte-spa-router';
  import logo from "/images/quplotssp.svg"

  
  // Estado para controlar si el menú está abierto
  let isMenuOpen = false;
  
  // Función para alternar el menú hamburguesa
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  // Función para cerrar el menú
  function closeMenu() {
    isMenuOpen = false;
  }
  
  // Cerrar menú automáticamente al redimensionar ventana
  function handleResize() {
    if (window.innerWidth > 768) {
      isMenuOpen = false;
    }
  }
</script>

<!-- Event listener para el resize de ventana -->
<svelte:window on:resize={handleResize} />

<header>
  <div class="header-container">

    
    <!-- Navegación -->
    <nav class="nav">
      <ul class="nav-menu" class:active={isMenuOpen}>
        <li><a href="/Documentacion" use:link on:click={closeMenu}>Documentación</a></li>
        <li><a href="/Galeria" use:link on:click={closeMenu}>Galería</a></li>
        <li><a href="/" use:link on:click={closeMenu}>Inicio</a></li>
        <li><a href="/table" use:link on:click={closeMenu}>Tabla Periódica</a></li>
        <li><a href="/Teoria" use:link on:click={closeMenu}>Teoría</a></li>
        <li><a href="/Instalacion" use:link on:click={closeMenu}>Instalación</a></li>
      </ul>
    </nav>
    
    <!-- Botón hamburguesa -->
    <button 
      class="hamburger" 
      class:active={isMenuOpen} 
      on:click={toggleMenu} 
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>