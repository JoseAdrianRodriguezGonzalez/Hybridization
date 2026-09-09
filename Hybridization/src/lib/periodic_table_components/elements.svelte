<script>
  import { createEventDispatcher } from "svelte";
  import "./elements.css";

  export let atomicNumber = 1;
  export let elementName = "Hydrogen";
  export let Symbol = "H";
  export let n = 1;
  export let l = 0;
  export let m = 0;
  export let imgUrl = "";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<div 
  class="element-card" 
  on:click={handleClick} 
  role="button" 
  tabindex="0"
  on:keydown={(e) => e.key === 'Enter' && handleClick()}
>
  <!-- Cabecera superpuesta -->
  <div class="card-header">
    <span class="atomic-number">{atomicNumber}</span>
    <span class="symbol">{Symbol}</span>
  </div>

  <!-- Imagen ocupando casi todo el espacio del contenedor -->
  <div class="card-body">
    {#if imgUrl}
      <img class="thumbnail" src={imgUrl} alt={`Orbital de ${elementName}`} />
    {:else}
      <div class="orbital-placeholder"></div>
    {/if}
  </div>

  <!-- Pie con ajuste de texto mejorado -->
  <div class="card-footer">
    <span class="element-name" title={elementName}>{elementName}</span>
    <span class="quantum-numbers">n:{n}, l:{l}, m:{m}</span>
  </div>
</div>