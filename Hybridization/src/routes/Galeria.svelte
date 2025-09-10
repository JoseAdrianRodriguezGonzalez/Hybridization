<script>
  import{link} from 'svelte-spa-router'
  import Header from '../components/Header.svelte';
  import Footer from '../components/footer.svelte';
    // Array de imágenes de ejemplo
  let images = [
    { id: 1, src: 'https://picsum.photos/300/200?random=1', alt: 'Imagen 1' },
    { id: 2, src: 'https://picsum.photos/300/200?random=2', alt: 'Imagen 2' },
    { id: 3, src: 'https://picsum.photos/300/200?random=3', alt: 'Imagen 3' },
    { id: 4, src: 'https://picsum.photos/300/200?random=4', alt: 'Imagen 4' },
    { id: 5, src: 'https://picsum.photos/300/200?random=5', alt: 'Imagen 5' },
    { id: 6, src: 'https://picsum.photos/300/200?random=6', alt: 'Imagen 6' },
    { id: 7, src: 'https://picsum.photos/300/200?random=7', alt: 'Imagen 7' },
    { id: 8, src: 'https://picsum.photos/300/200?random=8', alt: 'Imagen 8' }
  ];

  function handleImageClick(image) {
    console.log('Imagen clickeada:', image.alt);
  }
</script>
<Header></Header>

<div class="Principal">


<!-- Grid responsivo -->
<div class="image-grid-responsive">
  <h2>Grid Responsivo</h2>
  <div class="grid-responsive">
    {#each images as image (image.id)}
      <div class="image-item-responsive" on:click={() => handleImageClick(image)}>
        <img src={image.src} alt={image.alt} />
        <div class="overlay">
          <span>{image.alt}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
</div>

<Footer></Footer>


<style>

  /* Grid responsivo */
  .grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  h2 {
    color: #333;
    margin-bottom: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .image-grid-responsive {
    margin-bottom: 50px;
  }
</style>