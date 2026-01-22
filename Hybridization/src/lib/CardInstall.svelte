<script>
  import{link} from 'svelte-spa-router';
  export let titulo;
  export let texto;
  export let enlace;
  console.log(enlace)
</script>

<div class="card2">
  <h2>{titulo}</h2>
  <pre><code class="language-bash">{texto}</code></pre>
</div>

<style>
.card2 {
  background: #02023A;
    border-radius: 1vw;
    box-shadow: 0 0 0.2vw #21234d22;
    padding: 1vw 1vw;
    width: 100%;
    min-width: 22vw;
    max-width: 40vw;
    text-align: center;
    margin-bottom: 1vw;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #fff;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 100%;
  margin: 0.4rem auto 0 auto;
  border-bottom: 3px solid #48C6FF;
  border-radius: 4px;
}

pre {
  background: #021353;
  border-radius: 0.3vw;
  box-shadow: 0 0 0.1vw #33333333;
  padding: 0.8rem;
  margin-top: 0.5rem;
  text-align: left;
  overflow-x: auto;
}

code.language-bash {
  display: block;
  color: #D3D3D3;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', monospace;
  font-size: 0.9rem;
  background: none;
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .card2 {
    max-width: 80vw; /* mayor ancho en pantallas medianas */
  }
  h2 {
    font-size: 4vw;
  }
  h2::after {
    border-bottom-width: 3px;
  }
  code.language-bash {
    font-size: 1.2vw;
  }
}

@media (max-width: 768px) {
  .card2 {
    max-width: 95vw;
    margin: 1rem auto;
    padding: 1rem;
    min-width: auto;
  }
  h2 {
    font-size: 5vw;
  }
  h2::after {
    border-bottom-width: 2.5px;
  }
  code.language-bash {
    font-size: 3vw;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 6vw;
  }
  h2::after {
    border-bottom-width: 2px;
  }
  code.language-bash {
    font-size: 3.5vw;
  }
}

</style>