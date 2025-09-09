<script>
  // Card.svelte (componente individual)
  import{link} from 'svelte-spa-router';
  export let titulo;
  export let texto;
  export let icono;
  export let enlace;
  console.log(enlace)
</script>

<a class="card" href={enlace} use:link>
  <img src={icono} alt="icono" class="icono" />
  <h2>{titulo}</h2>
  <p>{texto}</p>
</a>

<style>
  .card {
    background: #02023A;
    border-radius: 1vw;
    box-shadow: 0 0 0.2vw #21234d22;
    padding: 1vw 1vw;
    width: 100%;
    min-width: 22vw;
    max-width: 40vw;
    text-align: center;
    margin-bottom: 2vw;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(28, 26, 26, 0.3);
  }

  .icono {
    width: 8vw;
    margin-bottom: 0.1vw;
  }

  h2 {
    font-size: 2vw;
    margin-bottom: 0.5vw;
    font-weight: 500;
    color: #fff;
    position: relative;
  }
  
  h2::after {
    content: '';
    display: block;
    width: 100%;
    margin: 0.5vw auto 0 auto;
    border-bottom: 0.4vw solid #48C6FF;
    border-radius: 0.2vw;
  }

  p {
    font-size: 1.2vw;
    color: #cecfef;
    margin-top: 0.5rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .card {
      
      max-width: 95vw;
      margin: 1rem auto;
      padding: 1rem;
      min-width: auto;
      gap:1px;
  }
    }
    
    .icono {
      width: 10vw;
    }
    
    
    h2::after {
      margin: 0.5rem auto 0 auto;
      border-bottom: 0.25rem solid #48C6FF;
    }

@media (max-width: 480px) {
  
  .card {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
    padding: 1rem;
  }
  }
    
</style>