<!-- DownloadSection.svelte -->
<script>
  // Props del componente
  export let downloads = []; // Array de objetos de descarga
  export let showSection = true; // Mostrar u ocultar la sección

  // Función para manejar la descarga o navegación
  function handleAction(downloadItem) {
    if (!downloadItem.url) {
      console.warn('No se ha proporcionado una URL');
      return;
    }
    
    // Si es tipo 'link', abrir en nueva pestaña
    if (downloadItem.type === 'link') {
      window.open(downloadItem.url, '_blank');
      return;
    }
    
    // Si es tipo 'download' o no está especificado (comportamiento por defecto), descargar
    const link = document.createElement('a');
    link.href = downloadItem.url;
    link.download = downloadItem.filename || 'documento.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

{#if showSection && downloads.length > 0}
  <div class="download-section">
    <div class="downloads-grid">
      {#each downloads as download, index}
        <button 
          class="download-button"
          class:primary={index === 0}
          class:secondary={index > 0}
          class:link-button={download.type === 'link'}
          on:click={() => handleAction(download)}
          disabled={!download.url}
          title={download.type === 'link' ? 'Abrir en nueva pestaña' : 'Descargar archivo'}
        >
          {#if download.icon}
            <img src={download.icon} alt="icono {download.label}" class="icono" />
          {/if}
          <div class="download-text">
            <span class="download-label">{download.label}</span>
            {#if download.description}
              <span class="download-description">{download.description}</span>
            {/if}
          </div>
          {#if download.type === 'link'}
            <span class="external-link-icon">↗</span>
          {/if}
        </button>
        {#if !download.url}
          <p class="download-note">*URL no configurada para "{download.label}"</p>
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style>
  .download-section {
    text-align: center;
    margin: 1rem 0 1rem 0;
    animation: fadeInUp 0.8s ease-out 0.8s both;
  }
  
  .downloads-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    max-width: 200px;
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
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    width: 20rem;
  }
  
  .icono {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }
  
  .download-button.primary {
    background: linear-gradient(135deg, #667eea 0%, #02023A 100%);
    color: white;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  .download-button.secondary {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    color: #667eea;
    border: 2px solid #667eea;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
  }
  
  .download-button.link-button {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%);
    color: #22c55e;
    border: 2px solid #22c55e;
    box-shadow: 0 4px 15px rgba(34, 197, 94, 0.15);
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
  
  .download-button.link-button:hover:not(:disabled) {
    box-shadow: 0 8px 25px rgba(34, 197, 94, 0.25);
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%);
    border-color: #16a34a;
    color: #16a34a;
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
    flex: 1;
  }
  
  .download-label {
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  .download-description {
    font-size: 0.9rem;
    opacity: 0.8;
    font-weight: normal;
    line-height: 1.4;
  }
  
  .external-link-icon {
    font-size: 1.2rem;
    opacity: 0.7;
    margin-left: auto;
    flex-shrink: 0;
  }
  
  .download-note {
    margin-top: 0.5rem;
    color: #f56565;
    font-size: 0.9rem;
    font-style: italic;
    grid-column: 1 / -1;
    text-align: center;
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
  @media (max-width: 768px) {
    .downloads-grid {
      grid-template-columns: 1fr;
      gap: 0.8rem;
      max-width: 100%;
    }
    
    .download-button {
      padding: 1.2rem;
      font-size: 0.95rem;
    }
    
    .download-icon {
      font-size: 1.3rem;
    }
    
    .download-label {
      font-size: 1rem;
    }
    
    .icono {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .download-section {
      margin: 2rem 0 1rem 0;
    }
    
    .download-button {
      flex-direction: column;
      text-align: center;
      gap: 0.8rem;
      padding: 1rem;
    }
    
    .download-text {
      text-align: center;
    }
    
    .external-link-icon {
      margin-left: 0;
      align-self: center;
    }
    
    .icono {
      width: 2rem;
      height: 2rem;
    }
  }
</style>