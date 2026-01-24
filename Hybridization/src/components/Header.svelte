<!-- Header.svelte - Implementación con mejores prácticas -->
<script>
  import './Header.css';
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  
  // Estado del menú móvil
  let isMenuOpen = false;
  let isScrolled = false;
  
  // Función para alternar el menú hamburguesa
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }
  
  // Función para cerrar el menú
  function closeMenu() {
    isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
  
  // Cerrar menú automáticamente al redimensionar ventana
  function handleResize() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  }
  
  // Detectar scroll para efectos visuales
  function handleScroll() {
    isScrolled = window.scrollY > 20;
  }
  
  // Cerrar menú al presionar Escape
  function handleKeydown(event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  }
  
  // Cleanup al destruir componente
  onMount(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
</script>

<!-- Event listeners globales -->
<svelte:window 
  on:resize={handleResize} 
  on:scroll={handleScroll}
  on:keydown={handleKeydown}
/>

<header>
  <div 
    class="header-container" 
    class:scrolled={isScrolled}
  >
    <a href="/" use:link class="logo" on:click={closeMenu}>
      QuPlots
    </a>
    
    <nav class="nav">
      <ul class="nav-menu" class:active={isMenuOpen}>
        <li>
          <a 
            href="/Documentacion" 
            use:link 
            on:click={closeMenu}
            aria-label="Ir a Documentación"
          >
            Documentación
          </a>
        </li>
        <li>
          <a 
            href="/Galeria" 
            use:link 
            on:click={closeMenu}
            aria-label="Ir a Galería"
          >
            Galería
          </a>
        </li>
        
        <!--<li>
          //<a 
            href="/table" 
            use:link 
            on:click={closeMenu}
            aria-label="Ir a Tabla Periódica"
          >
            Tabla Periódica
          </a>
        </li>
        -->
        <li>
          <a 
            href="/Instalacion" 
            use:link 
            on:click={closeMenu}
            aria-label="Ir a Instalación"
          >
            Instalación
          </a>
        </li>
      </ul>
    </nav>
    

    <button
      class="hamburger"
      class:active={isMenuOpen}
      on:click={toggleMenu}
      aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isMenuOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>