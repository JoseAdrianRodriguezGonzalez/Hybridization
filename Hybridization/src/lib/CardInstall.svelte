<script>
  // Card.svelte (componente individual)
  import{link} from 'svelte-spa-router';
  export let titulo;
  export let texto;
  export let enlace;
  console.log(enlace)
</script>

<div class="card">
  <h2>{titulo}</h2>
  <pre><code class="language-bash">{texto}</code></pre>
</div>

<style>
  .card {
    background: #02023A;
    border-radius: 1vw;
    box-shadow: 0 0 0.2vw #21234d22;
    padding: 1vw 1vw;
    width: 30vw;
    min-width: 22vw;
    max-width: 40vw;
    text-align: center;
    margin-bottom: 1vw;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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

  pre {
  background: #021353;
  border-radius: 0.3vw;
  box-shadow: 0 0 0.1vw #33333333;
  padding: 1vw;
  margin-top: 0.5rem;
  text-align: left;
  overflow-x: auto;
}
code.language-bash {
  display: block;
  color: #D3D3D3;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
  font-size: 1.1vw;
  background: none;
}
  
  /* Responsive */
  @media (max-width: 768px) {
    .card {
      padding: 1rem;
      width: 20vw;
      min-width: 20vw;
      max-width: 20vw;
    }

    h2::after {
      margin: 0.5rem auto 0 auto;
      border-bottom: 0.25rem solid #48C6FF;
    }
    
  }
</style>