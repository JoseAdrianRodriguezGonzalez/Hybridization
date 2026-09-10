<script>
  import { createEventDispatcher, tick } from "svelte";
  import { fade } from "svelte/transition";

  export let open = false;
  export let title = "";

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }

  /** @param {KeyboardEvent} event */
  function handleKeydown(event) {
    if (event.key === "Escape") {
      close();
    }
  }

  // Notifica a Plotly para recalcular el tamaño una vez montado el modal en el DOM
  $: if (open) {
    notifyResize();
  }

  async function notifyResize() {
    await tick();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 50);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <div class="modal-overlay" transition:fade={{ duration: 150 }}>
    <button
      type="button"
      class="modal-backdrop"
      aria-label="Cerrar modal"
      on:click={close}
    ></button>
    <div 
      class="modal-container" 
      role="dialog"
      aria-modal="true"
    >
      <header class="modal-header">
        <h3 class="modal-title">{title || "Visualización de Orbital"}</h3>
        <button class="close-btn" on:click={close} aria-label="Cerrar modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </header>

      <main class="modal-body">
        <slot />
      </main>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal-backdrop {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0;
    background: rgba(10, 15, 26, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    cursor: default;
  }

  .modal-container {
    background: #0f172a;
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.7), 
                0 0 25px rgba(56, 189, 248, 0.15);
    width: 90%;
    max-width: 900px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #f8fafc;
    position: relative;
    z-index: 1;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(15, 23, 42, 0.9);
    flex-shrink: 0;
  }

  .modal-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 600;
    color: #38bdf8;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 6px;
  }

  .close-btn:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  .modal-body {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    min-height: 0; /* Clave en Flexbox para permitir que el hijo 3D tome el 100% */
  }
</style>