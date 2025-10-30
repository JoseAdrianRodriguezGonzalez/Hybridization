<script>
  import { onMount, onDestroy } from 'svelte';
  
  // Props del componente
  export let images = []; // Array de objetos: [{id, src, alt}] o [{src, alt, caption}]
  export let showIndicators = true; // Mostrar indicadores
  export let showControls = true; // Mostrar controles
  export let autoplay = true; // Reproducción automática
  export let interval = 5000; // Intervalo en ms
  export let height = '400px'; // Altura del carrusel
  export let showAltAsCaption = false; // Mostrar el alt como caption
  export let itemsToShow = 3; // Número de items a mostrar (desktop)
  export let gap = 20; // Espacio entre items en px
  
  let currentIndex = 0;
  let intervalId;
  let isTransitioning = false;
  let itemsPerView = itemsToShow; // Cantidad actual de items visibles
  let containerWidth = 0;
  
  // Calcular items por vista según el ancho
  $: {
    if (containerWidth > 0) {
      if (containerWidth < 640) {
        itemsPerView = 1; // Móvil
      } else if (containerWidth < 1024) {
        itemsPerView = 2; // Tablet
      } else {
        itemsPerView = Math.min(itemsToShow, images.length); // Desktop
      }
    }
  }
  
  // Calcular el índice máximo para no mostrar espacios vacíos
  $: maxIndex = Math.max(0, images.length - itemsPerView);
  
  // Navegar a un slide específico
  function goToSlide(index) {
    if (isTransitioning) return;
    
    // Limitar el índice al rango válido
    const validIndex = Math.max(0, Math.min(index, maxIndex));
    if (validIndex === currentIndex) return;
    
    isTransitioning = true;
    currentIndex = validIndex;
    
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
    
    resetInterval();
  }
  
  // Siguiente slide
  function nextSlide() {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    } else if (autoplay) {
      // Si está en autoplay, volver al inicio
      goToSlide(0);
    }
  }
  
  // Slide anterior
  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else if (autoplay) {
      // Si está en autoplay, ir al final
      goToSlide(maxIndex);
    }
  }
  
  // Resetear el intervalo de autoplay
  function resetInterval() {
    if (autoplay && images.length > itemsPerView) {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, interval);
    }
  }
  
  // Manejar teclado
  function handleKeydown(event) {
    if (event.key === 'ArrowLeft') prevSlide();
    if (event.key === 'ArrowRight') nextSlide();
  }
  
  // Calcular el desplazamiento
  $: translateX = -(currentIndex * (100 / itemsPerView));
  
  onMount(() => {
    if (autoplay && images.length > itemsPerView) {
      intervalId = setInterval(nextSlide, interval);
    }
  });
  
  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div 
  class="carousel" 
  style="--carousel-height: {height}; --gap: {gap}px; --items-per-view: {itemsPerView}"
  bind:clientWidth={containerWidth}
>
  
  <!-- Slides Container -->
  <div class="carousel-track-wrapper">
    <div 
      class="carousel-track"
      style="transform: translateX({translateX}%)"
    >
      {#each images as image, index}
        <div class="carousel-slide">
          <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          
          <!-- Caption -->
          {#if image.caption || showAltAsCaption}
            <div class="carousel-caption">
              {#if image.caption?.title}
                <h3>{image.caption.title}</h3>
              {:else if showAltAsCaption}
                <h3>{image.alt}</h3>
              {/if}
              
              {#if image.caption?.description}
                <p>{image.caption.description}</p>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Controles Previous/Next -->
  {#if showControls && images.length > itemsPerView}
    <button 
      class="carousel-control prev" 
      class:disabled={currentIndex === 0 && !autoplay}
      on:click={prevSlide}
      aria-label="Anterior"
      disabled={currentIndex === 0 && !autoplay}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    
    <button 
      class="carousel-control next" 
      class:disabled={currentIndex >= maxIndex && !autoplay}
      on:click={nextSlide}
      aria-label="Siguiente"
      disabled={currentIndex >= maxIndex && !autoplay}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  {/if}
  
  <!-- Indicadores -->
  {#if showIndicators && images.length > itemsPerView}
    <div class="carousel-indicators">
      {#each Array(maxIndex + 1) as _, index}
        <button
          class="indicator"
          class:active={index === currentIndex}
          on:click={() => goToSlide(index)}
          aria-label={`Ir al grupo ${index + 1}`}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: var(--carousel-height);
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .carousel-track-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    gap: var(--gap);
    padding: 0 calc(var(--gap) / 2);
  }
  
  .carousel-slide {
    position: relative;
    flex: 0 0 calc((100% - (var(--gap) * (var(--items-per-view) - 1))) / var(--items-per-view));
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
  }
  
  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  /* Caption */
  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    padding: 20px 15px;
    text-align: center;
  }
  
  .carousel-caption h3 {
    margin: 0 0 5px 0;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3;
  }
  
  .carousel-caption p {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.9;
    line-height: 1.4;
  }
  
  /* Controles */
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .carousel-control:not(.disabled):hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  .carousel-control:not(.disabled):active {
    transform: translateY(-50%) scale(0.95);
  }
  
  .carousel-control.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  
  .carousel-control svg {
    color: #333;
  }
  
  /* Indicadores */
  .carousel-indicators {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    padding: 8px 12px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
  }
  
  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  
  .indicator:hover {
    background: rgba(255, 255, 255, 0.7);
    transform: scale(1.2);
  }
  
  .indicator.active {
    background: white;
    width: 28px;
    border-radius: 5px;
  }
  
  /* Responsive */
  @media (max-width: 1024px) {
    .carousel-caption h3 {
      font-size: 1rem;
    }
    
    .carousel-caption p {
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: 768px) {
    .carousel {
      border-radius: 8px;
    }
    
    .carousel-control {
      width: 40px;
      height: 40px;
    }
    
    .carousel-control.prev {
      left: 5px;
    }
    
    .carousel-control.next {
      right: 5px;
    }
    
    .carousel-caption {
      padding: 15px 10px;
    }
    
    .carousel-caption h3 {
      font-size: 0.9rem;
    }
    
    .carousel-caption p {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 640px) {
    .carousel-control {
      width: 36px;
      height: 36px;
    }
    
    .carousel-caption h3 {
      font-size: 0.85rem;
    }
    
    .carousel-indicators {
      bottom: 10px;
      padding: 6px 10px;
    }
    
    .indicator {
      width: 8px;
      height: 8px;
    }
    
    .indicator.active {
      width: 24px;
    }
  }
</style>