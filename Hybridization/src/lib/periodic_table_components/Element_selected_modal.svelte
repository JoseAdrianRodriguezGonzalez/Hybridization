<script>
  import { createEventDispatcher } from "svelte";
  import { fade, scale } from "svelte/transition";

  export let open = false;
  export let title = "";

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }

  function handleKeydown(event) {
    if (open && event.key === "Escape") {
      close();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <!-- Fondo overlay con animación fade -->
  <div 
    class="modal-overlay" 
    on:click={close} 
    transition:fade={{ duration: 200 }}
    role="presentation"
  >
    <!-- Contenedor del modal con animación scale -->
    <div 
      class="modal-container" 
      on:click|stopPropagation 
      transition:scale={{ duration: 200, start: 0.95 }}
      role="dialog"
      aria-modal="true"
    >
      <!-- Cabecera del Modal -->
      <header class="modal-header">
        {#if title}
          <h3 class="modal-title">{title}</h3>
        {/if}
        <button class="close-btn" on:click={close} aria-label="Cerrar modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>

      <!-- Cuerpo / Contenido principal -->
      <main class="modal-body">
        <slot />
      </main>
    </div>
  </div>
{/if}

<style>
  /* Overlay oscuro con efecto Glassmorphism */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 15, 26, 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  /* Contenedor estilo QuPlots (Dark & Quantum Tech) */
  .modal-container {
    background: #0f172a; /* Azul oscuro profundo / Slate 900 */
    border: 1px solid rgba(56, 189, 248, 0.2); /* Borde cyan muy sutil */
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 
                0 0 15px rgba(56, 189, 248, 0.1); /* Brillo cuántico tenue */
    width: 100%;
    max-width: 900px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #f8fafc;
  }

  /* Header */
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(15, 23, 42, 0.6);
  }

  .modal-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #38bdf8; /* Color Cyan característico */
    letter-spacing: 0.5px;
  }

  /* Botón de cierre estilizado */
  .close-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  /* Cuerpo del modal preparado para gráficos Plotly */
  .modal-body {
    padding: 1.5rem;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Personalización del Scrollbar */
  .modal-body::-webkit-scrollbar {
    width: 8px;
  }
  .modal-body::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.5);
  }
  .modal-body::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
  }
  .modal-body::-webkit-scrollbar-thumb:hover {
    background: #475569;
  }
</style>