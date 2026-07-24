<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function close() {
    dispatch("close");
  }
  export let open = false;
  function handleKeydown(event) {
    if (event.key === "Escape") {
      close();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />
{#if open}
  <div class="overlay" on:click={close}>
    <div class="element" on:click|stopPropagation>
      <button class="close" on:click={close}> close </button>
      <slot />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .element {
    background: blue;
    padding: 1rem;
    width: 80%;
    height: 80%;
    position: relative;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
</style>
