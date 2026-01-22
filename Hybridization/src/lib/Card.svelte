<script>
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
    min-width: 24vw;
    max-width: 40vw;
    text-align: center;
    margin-bottom: 2vw;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(28, 26, 26, 0.3);
  }

  .icono {
    width: 9rem; 
    height: 9rem;
    margin-bottom: 0.5rem;
    object-fit: contain;
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
    width: 60%;
    margin: 0.5vw auto 0 auto;
    border-bottom: 0.4vw solid #48C6FF;
    border-radius: 0.2vw;
  }

  p {
    font-size: 1.2vw;
    color: #cecfef;
    margin-top: 0.5rem;
  }
  
   @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: 100vw;
      min-width: auto;
      margin: 1.5rem auto;
      padding: 2.5rem 1.5rem;
      border-radius: 1.5rem;
    }

    .icono {
      width: 25vw;
      height: 25vw;
      max-width: 80px;
      max-height: 80px;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    h2::after {
      border-bottom: 4px solid #48C6FF;
    }

    p {
      font-size: 1.1rem;
      color: #cecfef;
    }
  }
    
  @media (max-width: 480px) {
    .card {
      padding: 2rem 1rem;
    }
  }
    
</style>