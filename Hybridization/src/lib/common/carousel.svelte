<script>
  import { onMount, onDestroy } from 'svelte';
  
  // Props del componente
  export let images = []; // [{id, src, alt}] o [{src, alt, caption}]
  export let showIndicators = true;
  export let showControls = true;
  export let autoplay = true;
  export let interval = 5000;
  export let height = '400px';
  export let showAltAsCaption = false;
  export let itemsToShow = 3;
  export let gap = 20;
  
  let currentIndex = 0;
  let intervalId;
  let isTransitioning = false;
  let itemsPerView = itemsToShow;
  let containerWidth = 0;
  
  // Estado para el modal
  let showModal = false;
  let modalImageIndex = 0;
  let modalImage = null;
  
  $: {
    if (containerWidth > 0) {
      if (containerWidth < 640) {
        itemsPerView = 1;
      } else if (containerWidth < 1024) {
        itemsPerView = 2; 
      } else {
        itemsPerView = Math.min(itemsToShow, images.length);
      }
    }
  }
  
  $: maxIndex = Math.max(0, images.length - itemsPerView);
  
  function goToSlide(index) {
    if (isTransitioning) return;
    
    const validIndex = Math.max(0, Math.min(index, maxIndex));
    if (validIndex === currentIndex) return;
    
    isTransitioning = true;
    currentIndex = validIndex;
    
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
    
    resetInterval();
  }
  
  function nextSlide() {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    } else if (autoplay) {
      goToSlide(0);
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else if (autoplay) {
      goToSlide(maxIndex);
    }
  }
  
  function resetInterval() {
    if (autoplay && images.length > itemsPerView) {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, interval);
    }
  }
  
  function handleKeydown(event) {
    if (event.key === 'ArrowLeft') prevSlide();
    if (event.key === 'ArrowRight') nextSlide();
    if (event.key === 'Escape' && showModal) closeModal();
  }
  
  $: translateX = -(currentIndex * (100 / itemsPerView));
  
  function openModal(imageIndex) {
    modalImageIndex = imageIndex;
    modalImage = images[imageIndex];
    showModal = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    showModal = false;
    document.body.style.overflow = '';
  }
  
  function nextModalImage() {
    modalImageIndex = (modalImageIndex + 1) % images.length;
    modalImage = images[modalImageIndex];
  }
  
  function prevModalImage() {
    modalImageIndex = (modalImageIndex - 1 + images.length) % images.length;
    modalImage = images[modalImageIndex];
  }
  
  function handleModalClick(event) {
    if (event.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  }
  
  onMount(() => {
    if (autoplay && images.length > itemsPerView) {
      intervalId = setInterval(nextSlide, interval);
    }
  });
  
  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
    document.body.style.overflow = '';
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div 
  class="carousel" 
  style="--carousel-height: {height}; --gap: {gap}px; --items-per-view: {itemsPerView}"
  bind:clientWidth={containerWidth}
>
  
  <div class="carousel-track-wrapper">
    <div 
      class="carousel-track"
      style="transform: translateX({translateX}%)"
    >
      {#each images as image, index}
        <div class="carousel-slide">
          <img 
            src={image.src} 
            alt={image.alt || `Slide ${index + 1}`} 
            on:click={() => openModal(index)}
            class="clickable-image"
          />
          
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

{#if showModal && modalImage}
  <div class="modal-backdrop" on:click={handleModalClick}>
    <div class="modal-content">
      <button class="modal-close" on:click={closeModal} aria-label="Cerrar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      {#if images.length > 1}
        <button class="modal-nav modal-prev" on:click={prevModalImage} aria-label="Imagen anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button class="modal-nav modal-next" on:click={nextModalImage} aria-label="Imagen siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      {/if}
      
      <div class="modal-image-container">
        <img 
          src={modalImage.src} 
          alt={modalImage.alt || `Imagen ${modalImageIndex + 1}`}
          class="modal-image"
        />
      </div>
      
      <!-- Información de la imagen -->
      <div class="modal-info">
        <h3>{modalImage.alt || `Imagen ${modalImageIndex + 1}`}</h3>
        {#if modalImage.caption?.description}
          <p>{modalImage.caption.description}</p>
        {/if}
        <div class="modal-counter">
          {modalImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  </div>
{/if}

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
    background: #ffffff00; /* Fondo para áreas vacías */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
  
  .clickable-image {
    cursor: pointer;
  }
  
  .clickable-image:hover {
    transform: scale(1.05);
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
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
  
  /* Modal Styles */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.3s ease;
}

  .modal-content {
      position: relative;
      max-width: min(95vw, 1000px); /* REDUCIDO de 1200px a 1000px */
      max-height: min(95vh, 700px);  /* REDUCIDO de 800px a 700px */
      background: white;
      border-radius: 12px;
      overflow: hidden;
      animation: scaleIn 0.3s ease;
      display: flex;
      flex-direction: column;
  }

  .modal-image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: calc(100% - 100px); /* REDUCIDO de 120px a 100px */
    padding: 30px; /* REDUCIDO de 40px a 30px */
    background: #f8f9fa;
    overflow: hidden;
}

  .modal-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    width: auto;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .modal-info {
    padding: 20px;
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;
    min-height: 80px;
  }

  .modal-info h3 {
    margin: 0 0 8px 0;
    font-size: 1.2rem;
    color: #333;
    text-align: center;
  }

  .modal-info p {
    margin: 0 0 10px 0;
    color: #666;
    line-height: 1.4;
    text-align: center;
  }

  .modal-counter {
    text-align: center;
    color: #999;
    font-size: 0.9rem;
    font-weight: 500;
  }

  /* Mejorar los controles del modal */
  .modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .modal-close:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }

  .modal-close svg {
    color: white;
    width: 20px;
    height: 20px;
  }

  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    border: none;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .modal-nav:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  .modal-prev {
    left: 25px;
  }

  .modal-next {
    right: 25px;
  }

  .modal-nav svg {
    color: white;
    width: 24px;
    height: 24px;
  }
@media (max-width: 1366px) {
    .modal-content {
        max-width: min(92vw, 900px);
        max-height: min(92vh, 600px);
    }
    
    .modal-image-container {
        padding: 25px;
        max-height: calc(100% - 90px);
    }
}

@media (max-width: 1024px) {
    .modal-content {
        max-width: min(95vw, 800px);
        max-height: min(95vh, 550px);
    }
    
    .modal-image-container {
        padding: 20px;
        max-height: calc(100% - 80px);
    }
    
    .modal-info {
        padding: 15px;
        min-height: 70px;
    }
    
    .modal-info h3 {
        font-size: 1.1rem;
    }
}
  /* Para pantallas muy grandes, limitar aún más */
  @media (min-width: 1600px) {
    .modal-content {
      max-width: min(80vw, 1400px);
      max-height: min(80vh, 900px);
    }
  }

  /* Para móviles, ajustar padding */
  @media (max-width: 768px) {
    .modal-backdrop {
      padding: 10px;
    }

    .modal-content {
      max-width: 95vw;
      max-height: 95vh;
    }

    .modal-image-container {
      padding: 20px;
      max-height: calc(100% - 100px);
    }

    .modal-info {
      padding: 15px;
      min-height: 70px;
    }

    .modal-info h3 {
      font-size: 1.1rem;
    }

    .modal-close {
      width: 40px;
      height: 40px;
      top: 10px;
      right: 10px;
    }

    .modal-nav {
      width: 45px;
      height: 45px;
    }

    .modal-prev {
      left: 15px;
    }

    .modal-next {
      right: 15px;
    }
  }

  @media (max-width: 480px) {
    .modal-image-container {
      padding: 15px;
    }

    .modal-info {
      padding: 12px;
    }

    .modal-info h3 {
      font-size: 1rem;
    }

    .modal-close {
      width: 35px;
      height: 35px;
    }

    .modal-nav {
      width: 40px;
      height: 40px;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.9);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @media (max-width: 1024px) {
    .carousel-caption h3 {
      font-size: 1rem;
    }
    
    .carousel-caption p {
      font-size: 0.8rem;
    }
    
    .modal-nav {
      width: 40px;
      height: 40px;
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
    
    .modal-backdrop {
      padding: 10px;
    }
    
    .modal-content {
      max-width: 95vw;
      max-height: 95vh;
    }
    
    .modal-image-container {
      max-height: 60vh;
      padding: 15px;
    }
    
    .modal-info {
      padding: 15px;
    }
    
    .modal-info h3 {
      font-size: 1.1rem;
    }
    
    .modal-nav {
      width: 35px;
      height: 35px;
    }
    
    .modal-prev {
      left: 10px;
    }
    
    .modal-next {
      right: 10px;
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
    
    .modal-close {
      width: 35px;
      height: 35px;
      top: 10px;
      right: 10px;
    }
  }
</style>