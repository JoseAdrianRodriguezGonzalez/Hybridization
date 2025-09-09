<!-- WelcomeTemplate.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Props que recibe el componente
  export let title = "Bienvenido";
  export let subtitle = "";
  export let welcomeMessage = "";
  export let features = []; // Array de características/funcionalidades
  
  // Soporte para múltiples descargas
  export let downloads = []; // Array de objetos de descarga
  export let showDownloadButton = true; // Para mantener compatibilidad
  
  // Props legacy para mantener compatibilidad con versión anterior
  export let downloadLabel = "Descargar Documento";
  export let downloadUrl = "";
  export let downloadFilename = "documento.pdf";
  
  let mathContainer;
  
  // Función para manejar la descarga
  function handleDownload(url, filename) {
    if (!url) {
      console.warn('No se ha proporcionado una URL de descarga');
      return;
    }
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Procesar descargas para mantener compatibilidad
  $: processedDownloads = downloads.length > 0 
    ? downloads 
    : (downloadUrl ? [{
        label: downloadLabel,
        url: downloadUrl,
        filename: downloadFilename,
        icon: "📥"
      }] : []);
  
  onMount(async () => {
    // Cargar MathJax dinámicamente si es necesario para contenido matemático
    if (!window.MathJax && document.querySelector('.tex2jax_process')) {
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
    } else if (window.MathJax) {
      window.MathJax.typesetPromise([mathContainer]);
    }
  });
</script>

<div class="welcome-container tex2jax_process" bind:this={mathContainer}>
  <div class="content-wrapper">
    <!-- Título principal -->
    <h1>{title}</h1>
    
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    
    <!-- Mensaje de bienvenida -->
    {#if welcomeMessage}
      <div class="welcome-message">
        <div class="tex2jax_process">
          {@html welcomeMessage}
        </div>
      </div>
    {/if}
    
    <!-- Sección ¿Qué podrás encontrar aquí? -->
    {#if features && features.length > 0}
      <div class="features-section">
        <h2>¿Qué podrás encontrar aquí?</h2>
        <ul class="features-list">
          {#each features as feature, index}
            <li class="tex2jax_process feature-item">
              <div class="feature-content">
                {#if feature.icon}
                  <div class="feature-icon">
                    {@html feature.icon}
                  </div>
                {/if}
                <div class="feature-text">
                  <strong>{feature.title}</strong>
                  {#if feature.description}
                    <p class="tex2jax_process">{@html feature.description}</p>
                  {/if}
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    
    <!-- Sección de descargas -->
    {#if showDownloadButton && processedDownloads.length > 0}
      <div class="download-section">
        <h3 class="download-title">Recursos Disponibles</h3>
        <div class="downloads-grid">
          {#each processedDownloads as download, index}
            <button 
              class="download-button"
              class:primary={index === 0}
              class:secondary={index > 0}
              on:click={() => handleDownload(download.url, download.filename)}
              disabled={!download.url}
            >
              <span class="download-icon">{download.icon || "📥"}</span>
              <div class="download-text">
                <span class="download-label">{download.label}</span>
                {#if download.description}
                  <span class="download-description">{download.description}</span>
                {/if}
              </div>
            </button>
            {#if !download.url}
              <p class="download-note">*URL de descarga no configurada para "{download.label}"</p>
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .welcome-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
  }
  
  .content-wrapper {
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
  }
  
  h1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    animation: fadeInUp 0.8s ease-out;
  }
  
  .subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #e2e8f0;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }
  
  .welcome-message {
    border: 1px solid #9ae6b4;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    border-left: 6px solid #48bb78;
    background: rgba(154, 230, 180, 0.1);
    animation: fadeInUp 0.8s ease-out 0.4s both;
  }
  
  .welcome-message p {
    margin: 0 0 1rem 0;
    color: #ffffff;
    line-height: 1.8;
  }
  
  .features-section {
    margin: 2rem 0;
    animation: fadeInUp 0.8s ease-out 0.6s both;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1.5rem 0;
    padding: 1rem 1.5rem;
    position: relative;
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    color: #ffffff;
    border-radius: 12px;
    text-align: center;
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
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
  }
  
  .feature-item {
    border: 1px solid #bee5eb;
    border-radius: 12px;
    padding: 1.5rem;
    border-left: 6px solid #667eea;
    background: rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
    animation: slideInLeft 0.6s ease-out;
  }
  
  .feature-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
    border-left-width: 8px;
  }
  
  .feature-content {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .feature-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
  }
  
  .feature-text {
    flex: 1;
  }
  
  .feature-text strong {
    color: #ffffff;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .feature-text p {
    color: #e2e8f0;
    margin: 0;
    line-height: 1.6;
  }
  
  .download-section {
    text-align: center;
    margin: 3rem 0 1rem 0;
    animation: fadeInUp 0.8s ease-out 0.8s both;
  }
  
  .download-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #ffffff;
    font-weight: 600;
  }
  
  .downloads-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 600px;
    margin: 0 auto;
  }
  
  .download-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;
    padding: 1.5rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    width: 100%;
  }
  
  .download-button.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  .download-button.secondary {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    color: #667eea;
    border: 2px solid #667eea;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
  }
  
  .download-button:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  
  .download-button.primary:hover:not(:disabled) {
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }
  
  .download-button.secondary:hover:not(:disabled) {
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.25);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
    border-color: #5a67d8;
    color: #5a67d8;
  }
  
  .download-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  .download-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  .download-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .download-label {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .download-description {
    font-size: 0.9rem;
    opacity: 0.8;
    font-weight: normal;
  }
  
  .download-note {
    margin-top: 0.5rem;
    color: #f56565;
    font-size: 0.9rem;
    font-style: italic;
    grid-column: 1 / -1;
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
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
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
    .welcome-container {
      padding: 0.5rem;
    }
    
    .content-wrapper {
      padding: 1rem;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.4rem;
      padding: 0.8rem 1rem;
    }
    
    .feature-content {
      flex-direction: column;
      text-align: center;
    }
    
    .feature-icon {
      align-self: center;
    }
    
    .downloads-grid {
      grid-template-columns: 1fr;
      gap: 0.8rem;
    }
    
    .download-button {
      padding: 1.2rem;
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 1.8rem;
    }
    
    .features-list {
      gap: 0.8rem;
    }
    
    .feature-item {
      padding: 1rem;
    }
    
    .download-button {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }
  }
</style>