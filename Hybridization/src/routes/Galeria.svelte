<script>
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import Header from '../components/Header.svelte';
  import Footer from '../components/footer.svelte';
  import DownloadSection from './DownloadSection.svelte';
  import Carousel from './carousel.svelte';
  import yti from "/icons/youtube.svg";

  const yt = [{
    label: "Videos",
    description: "Canal de Youtube",
    url: "https://youtube.com/@quplots?si=KterFMrhEb8fjEYS",
    icon: yti,
  }];

  // Variables para almacenar los datos del JSON
  let hibri = [];
  let loading = true;
  let error = null;

  // Cargar el JSON al montar el componente
  onMount(async () => {
    try {
      const response = await fetch("/Hybridization/public/data/carHibri.json");
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON');
      }
      hibri = await response.json();
      loading = false;
    } catch (err) {
      console.error('Error cargando JSON:', err);
      error = err.message;
      loading = false;
    }
  });

  function handleImageClick(imagen) {
    console.log('Imagen clickeada:', imagen.alt);
  }

  function handleImageError(event) {
    console.warn('No se pudo cargar la imagen:', event.target.src);
  }
</script>

<Header />

<main class="principal">
  
  <!-- Carrusel Principal -->
  <section class="carousel-section">
    <div class="section-header">
      <h1>Tipos de Hibridación</h1>
    </div>
    
    {#if loading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Cargando imágenes...</p>
      </div>
    {:else if error}
      <div class="error">
        <p>⚠️ Error: {error}</p>
      </div>
    {:else if hibri.length > 0}
      <Carousel 
        images={hibri}
        showIndicators={true}
        showControls={true}
        autoplay={true}
        interval={6000}
        height="300px"
        showAltAsCaption={true}
        itemsToShow={3}
        gap={20} 
      />
    {:else}
      <div class="error">
        <p>No hay imágenes para mostrar</p>
      </div>
    {/if}
  </section>

  <!-- Grid de Galería -->
  {#if hibri.length > 0}
    <section class="image-grid-responsive">
      <h2>Galería de Hibridaciones</h2>
      <div class="grid-responsive">
        {#each hibri as imagen (imagen.id)}
          <div 
            class="image-item-responsive" 
            on:click={() => handleImageClick(imagen)}
            on:keydown={(e) => e.key === 'Enter' && handleImageClick(imagen)}
            role="button"
            tabindex="0"
          >
            <img 
              src={imagen.src} 
              alt={imagen.alt} 
              on:error={handleImageError}
              loading="lazy"
            />
            <div class="overlay">
              <span>{imagen.alt}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Sección de YouTube -->
  <DownloadSection downloads={yt} />

</main>

<Footer />

<style>
  .principal {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  /* Sección del Carrusel */
  .carousel-section {
    margin-bottom: 80px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-header h1 {
    font-size: 2.8rem;
    color: #2c3e50;
    margin: 0 0 10px 0;
    font-weight: 700;
  }

  .section-header p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin: 0;
  }

  /* Loading State */
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    gap: 20px;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading p {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin: 0;
  }

  /* Error State */
  .error {
    background: #fff3cd;
    border: 2px solid #ffc107;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
  }

  .error p {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    color: #856404;
  }

  .error-hint {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }

  .error code {
    background: #f8f9fa;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }

  /* Grid de Galería */
  .image-grid-responsive {
    margin-bottom: 80px;
  }

  .image-grid-responsive h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin: 0 0 30px 0;
    text-align: center;
    font-weight: 600;
  }

  .grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
  }

  .image-item-responsive {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background: #f8f9fa;
  }

  .image-item-responsive:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .image-item-responsive:focus {
    outline: 3px solid #667eea;
    outline-offset: 2px;
  }

  .image-item-responsive img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .image-item-responsive:hover img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .image-item-responsive:hover .overlay {
    transform: translateY(0);
  }

  .overlay span {
    font-size: 1rem;
    font-weight: 500;
    display: block;
  }

  /* Responsivo */
  @media (max-width: 768px) {
    .principal {
      padding: 20px 15px;
    }

    .section-header h1 {
      font-size: 2rem;
    }

    .section-header p {
      font-size: 1rem;
    }

    .carousel-section {
      margin-bottom: 60px;
    }

    .image-grid-responsive {
      margin-bottom: 60px;
    }

    .image-grid-responsive h2 {
      font-size: 1.5rem;
    }

    .grid-responsive {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .image-item-responsive img {
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    .section-header h1 {
      font-size: 1.5rem;
    }

    .grid-responsive {
      grid-template-columns: 1fr;
    }

    .image-item-responsive img {
      height: 180px;
    }
  }
</style>