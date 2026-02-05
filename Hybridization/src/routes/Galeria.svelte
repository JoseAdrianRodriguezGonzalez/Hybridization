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

const carouselConfig = [
  //{ title: "Tipos de Hibridación", description: "Visualización de orbitales híbridos" },
  { title: "Funciones de Onda", description: "Representación de funciones de onda cuánticas" },
  { title: "Probabilidades 3D", description: "Distribuciones de probabilidad tridimensionales" },
  { title: "Armónicos Esféricos Imaginarios", description: "Representación de armónicos esféricos complejos" },
  { title: "Armónicos Esféricos Reales", description: "Representación de armónicos esféricos reales" },
  { title: "Funciones Radiales", description: "Distribuciones radiales de probabilidad" }
];

  let dataSets = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response3D = await fetch("/Hybridization/public/data/car3DProba.json");
      const responseArmoEsfIm = await fetch("/Hybridization/public/data/carArmonicosEsfericosImaginarios.json");
      const responseArmoEsfRe = await fetch("/Hybridization/public/data/carArmonicosEsfericosReales.json");
      //const responseHibri = await fetch("../data/carHibri.json");
      const responseRadial = await fetch("/Hybridization/public/data/carRadialFunction.json");
      const responseWave = await fetch("/Hybridization/public/data/carWaveFunction.json");

      //if (!responseHibri.ok) throw new Error('No se pudo cargar carHibri.json');
      if (!responseWave.ok) throw new Error('No se pudo cargar WaveFunction.json');
      if (!response3D.ok) throw new Error('No se pudo cargar 3DProba.json');
      if (!responseArmoEsfIm.ok) throw new Error('No se pudo cargar carArmonicosEsfericosImaginarios.json');
      if (!responseArmoEsfRe.ok) throw new Error('No se pudo cargar carArmonicosEsfericosReales.json');
      if (!responseRadial.ok) throw new Error('No se pudo cargar carRadialFunction.json');

      const proba = await response3D.json();
      const armoEsIm = await responseArmoEsfIm.json();
      const armoEsRe = await responseArmoEsfRe.json();
      //const hibri = await responseHibri.json();
      const radial = await responseRadial.json();
      const wave = await responseWave.json();

      dataSets = [ wave, proba, armoEsIm, armoEsRe, radial];
      loading = false;

    } catch (err) {
      console.error('Error cargando JSON:', err);
      error = err.message;
      loading = false;
    }
  });
</script>


<main class="principal">
  
  <section class="carousel-section">
    <div class="section-header">
      <h1>Galería de imagenes</h1>
      <p>Todos los graficos han sido creados con Quplots</p>
    </div>

    {#if loading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Cargando datos...</p>
      </div>
    {:else if error}
      <div class="error">
        <p>Error: {error}</p>
      </div>
    {:else}
      {#each dataSets as dataset, index}
        <div class="carousel-container">
          <h2>{carouselConfig[index].title}</h2>
          <p class="carousel-description">{carouselConfig[index].description}</p>
          {#if dataset && dataset.length > 0}
            <Carousel 
              images={dataset}
              showIndicators={false}
              showControls={true}
              autoplay={true}
              interval={6000}
              height="300px"
              showAltAsCaption={true}
              itemsToShow={3}
              gap={20} 
            />
          {:else}
            <p>No hay datos disponibles</p>
          {/if}
        </div>
      {/each}
    {/if}
  </section>

  <DownloadSection downloads={yt} />

</main>


<style>
  .principal {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .carousel-section {
    margin-bottom: 80px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-header h1 {
    font-size: 2.8rem;
    color: #ffffff;
    margin: 0 0 10px 0;
    font-weight: 700;
  }

  .section-header p {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin: 0;
    text-align: center;
  }

  .carousel-container {
    margin-bottom: 60px;
  }

  .carousel-container h2 {
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 600;
    display: inline-block;
  }

  .carousel-description {
    color: #7f8c8d;
    margin-bottom: 25px;
    font-size: 1.1rem;
    max-width: 600px;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }

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

  .error {
    background: #ffeaa7;
    border: 2px solid #fdcb6e;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    margin: 20px 0;
  }

  .error p {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    color: #e17055;
  }

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

    .carousel-container h2 {
      font-size: 1.5rem;
    }

    .carousel-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .section-header h1 {
      font-size: 1.5rem;
    }

    .carousel-container h2 {
      font-size: 1.3rem;
    }
  }
</style>