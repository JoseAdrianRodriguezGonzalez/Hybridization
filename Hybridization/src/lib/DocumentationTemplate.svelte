<!-- syntaxCodeTemplate.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Props que recibe el componente
  export let title = "";
  export let functionName = "nombre_funcion";
  export let parameters = [];
  export let syntaxCodeription = "Descripción del retorno";
  export let equations = []; // Nueva prop para ecuaciones con viñetas
  export let syntaxCode = "";
  export let output="";
  let mathContainer;
  
  onMount(async () => {
    // Cargar MathJax dinámicamente
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          tags: 'ams',
          processEscapes: true
        },
        options: {
          processHtmlClass: 'tex2jax_process',
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
      };
      
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js';
      script.onload = () => {
        window.MathJax.typesetPromise([mathContainer]);
      };
      document.head.appendChild(script);
    } else {
      // Si MathJax ya está cargado, solo procesar
      window.MathJax.typesetPromise([mathContainer]);
    }
  });
</script>

<div class="syntaxCode-container tex2jax_process" bind:this={mathContainer}>
  <div class="content-wrapper">
    <!-- <h1>{title}</h1> -->
    <h2>{functionName}</h2>
    
    <!-- Sección de retorno -->
    <div class="syntaxCodeription">
      <h3>Descripción</h3>
      <div class="tex2jax_process description-content">
        {@html syntaxCodeription}
      </div>
      
      <!-- Ecuaciones con viñetas (si existen) -->
      {#if equations && equations.length > 0}
        <div class="equations-list">
          <h4>Ecuaciones:</h4>
          <ul class="equation-bullets">
            {#each equations as equation, index}
              <li class="tex2jax_process">
                <div class="equation-content">
                  <strong>{equation.name}:</strong>
                  <div class="math-display">
                    {@html equation.formula}
                  </div>
                  {#if equation.description}
                    <p class="equation-description tex2jax_process">{@html equation.description}</p>
                  {/if}
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>

    <div class="parameters-section">
      <h3>Parámetros</h3>
      <ul class="parameter-list">
        {#each parameters as param}
          <li class="tex2jax_process">
            <strong>{param.name}</strong> ({param.type}): <span class="tex2jax_process">{@html param.description}</span>
            {#if param.mathNotation}
              <span class="math-inline tex2jax_process">{@html param.mathNotation}</span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
        
    <!-- Sintaxis -->
    {#if syntaxCode}
      <div class="syntax-section">
        <h2>Código</h2>
        <pre class="code-block"><code>{@html syntaxCode}</code></pre>
      </div>
    {/if}
    {#if output}
      <div class="output-section">
        <h2>Output</h2>
        <pre class="code-block"><code>{@html output}</code></pre>
      </div>
    {/if}
  </div>
</div>

<style>
  .syntaxCode-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
  }
  
  .content-wrapper {
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
  
  h1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  h2 {
    color: #2d3748;
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
    padding-left: 1rem;
    position: relative;
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    color: #ffffff;
    border-radius: 12px;
  }
  
  h2::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    
  }
  
  h3 {
    color: #4a5568;
    font-size: 1.2rem;
    margin: 1.5rem 0 0.5rem 0;
  }
  
  h4 {
    color: #2d3748;
    font-size: 1rem;
    margin: 1rem 0 0.5rem 0;
    font-weight: 600;
    background: #ffff;
  }
  
  .syntaxCodeription {
    border: 1px solid #9ae6b4;
    background: #ffff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 6px solid #48bb78;
  }
  
  .syntaxCodeription p {
    margin: 0 0 1rem 0;
    color: #2d3748;
    line-height: 1.8;
  }
  
  .description-content {
    margin-bottom: 1rem;
  }
  
  .description-content p {
    margin: 0.5rem 0;
    color: #2d3748;
    line-height: 1.8;
  }
  
  .equations-list {
    margin-top: 1.5rem;
    border-top: 2px solid #9ae6b4;
    padding-top: 1rem;
  }
  
  .equation-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .equation-bullets li {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    color: #2d3748;
    line-height: 1.8;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    padding: 0.2rem 0.2rem 0.2rem 2rem;
    border-left: 3px solid #48bb78;
  }
  
  .equation-bullets li::before {
    content: "•";
    position: absolute;
    left: 0.5rem;
    top: 1rem;
    color: #48bb78;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .equation-content {
    display: block;
    width: 100%;
  }
  
  .parameters-section,
  .return-section {
    background: linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 100%);
    border: 1px solid #bee5eb;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 6px solid #667eea;
  }
  
  .parameter-list {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .parameter-list li {
    margin-bottom: 0.8rem;
    color: #4a5568;
    line-height: 1.8;
  }
  
  .equation-description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
    font-style: italic;
    line-height: 1.6;
  }
  
  .math-display {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.2rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
  }
  
  .math-inline {
    background: #f7fafc;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Times New Roman', serif;
    margin-left: 0.5rem;
    display: inline-block;
  }
  
  .syntax-section,
  .output-section {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    border-radius: 12px;
    padding: 0;
    margin: 1.5rem 0;
    overflow: hidden;
  }
  
  .syntax-section h2,
  .output-section h2 {
    color: white;
    margin: 0;
    padding: 1rem 1.5rem;
    border-left: none;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .code-block {
    margin: 0;
    padding: 1.5rem;
    background: transparent;
    border-radius: 0;
    overflow-x: auto;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #e2e8f0;
  }
  
  .highlight {
    background: linear-gradient(120deg, #bee3f8 0%, #90cdf4 100%);
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    font-weight: 500;
    color: #1a365d;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
  }
  
  .note-section {
    background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
    border: 1px solid #fbbf24;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-left: 6px solid #f59e0b;
  }
  
  p {
    margin-bottom: 1rem;
    text-align: justify;
    color: #4a5568;
  }
  
  strong {
    color: #2d3748;
  }
  
  /* Estilos específicos para MathJax */
  :global(.MathJax) {
    font-size: inherit !important;
    display: inline-block !important;
    vertical-align: baseline !important;
  }
  
  :global(.MathJax_Display) {
    margin: 0.8em 0 !important;
    text-align: center !important;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .syntaxCode-container {
      padding: 1rem;
    }
    
    .content-wrapper {
      padding: 1.5rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    .equation-bullets li {
      padding: 0.8rem 0.8rem 0.8rem 1.5rem;
    }
  }
</style>