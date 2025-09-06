<!-- ContentSection.svelte -->
<script>
  export let content = '';
  export let title = '';
  
  function getDisplayContent(content) {
    if (!content || content === 'pending') {
      return `
        <div style="text-align: center; padding: 3rem; color: #6b7280;">
          <h3>📝 Contenido en desarrollo</h3>
          <p>Esta sección está siendo preparada. Próximamente disponible.</p>
        </div>
      `;
    }
    
    if (content === 'short') {
      return `
        <div style="text-align: center; padding: 2rem; color: #f59e0b;">
          <h3>📋 Descripción breve</h3>
          <p>Contenido resumido disponible. Versión completa próximamente.</p>
        </div>
      `;
    }
    
    return content;
  }
</script>

<div class="content-section">
  {#if title}
    <h1 class="content-title">{title}</h1>
  {/if}
  
  <div class="content-body">
    {@html getDisplayContent(content)}
  </div>
</div>