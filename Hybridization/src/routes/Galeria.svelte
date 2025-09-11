<script>
  import{link} from 'svelte-spa-router'
  import Header from '../components/Header.svelte';
  import yti from "/icons/youtube.svg"
  import DownloadSection from './DownloadSection.svelte';
const yt= [
{
  label:"Videos",
  description: "Canal de Youtube",
  url: "https://youtube.com/@quplots?si=KterFMrhEb8fjEYS",
  icon: yti,
}]
let hibri = [
  { id: 1, src: 'Hybridization/galeria/hibri/nsp.png', alt: 'Hibridación sp (lineal)' },
  { id: 2, src: 'Hybridization/galeria/hibri/nsp2.png', alt: 'Hibridación sp² (trigonal plana)' },
  { id: 3, src: 'Hybridization/galeria/hibri/nsp2d.png', alt: 'Hibridación sp²d (piramidal cuadrada)' },
  { id: 4, src: 'Hybridization/galeria/hibri/nsp3.png', alt: 'Hibridación sp³ (tetraédrica)' },
  { id: 5, src: 'Hybridization/galeria/hibri/nsp3d.png', alt: 'Hibridación sp³d (bipiramidal trigonal)' },
  { id: 6, src: 'Hybridization/galeria/hibri/nsp3d2.png', alt: 'Hibridación sp³d² (octaédrica)' }
];

function handleImageClick(imagen) {
 console.log('Imagen clickeada:', imagen.alt);
}

// Función para manejar errores de carga
function handleImageError(event) {
 console.warn('No se pudo cargar la imagen:', event.target.src);
}
</script>

<div class="Principal">

  <div class="image-grid-responsive">
    <h1>Hibridaciónes</h1>
    <div class="grid-responsive">
      {#each hibri as imagen (imagen.id)}
      <div class="image-item-responsive" on:click={() => handleImageClick(imagen)}>
      <img src={imagen.src} alt={imagen.alt} on:error={handleImageError} />
      <div class="overlay">
        <span>{imagen.alt}</span>
          </div>
        </div>
      {/each}
  </div>
</div>
</div>

<DownloadSection 
      downloads={yt}
    />



<style>

  /* Grid responsivo */
  .grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .image-item-responsive {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }

  .image-item-responsive:hover {
    transform: translateY(-5px);
  }

  .image-item-responsive img {
    width: 100%;
    height: 250px;
    object-fit: cover;
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
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: white;
    padding: 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .image-item-responsive:hover .overlay {
    transform: translateY(0);
  }


  /* Responsivo general */
  @media (max-width: 768px) {
 

    .grid-responsive {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    

  }

  @media (max-width: 480px) {
    
    .grid-responsive {
      grid-template-columns: 1fr;
    }

  }



  .image-grid-responsive {
    margin-bottom: 50px;
  }
</style>