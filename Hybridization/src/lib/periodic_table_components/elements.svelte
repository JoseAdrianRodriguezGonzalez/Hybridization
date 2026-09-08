<script>
  import { createEventDispatcher } from "svelte";
  import "./elements.css";

  export let atomicNumber = 1;
  export let elementName = "Hydrogen";
  export let Symbol = "H";
  export let n = 1;
  export let l = 0;
  export let m = 0;
  
  // AQUÍ ESTABA EL ERROR: debe llamarse exactamente como la propiedad que envías (imgUrl)
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
  <!-- Cabecera: Número arriba a la izquierda y Símbolo arriba a la derecha -->
  <div class="card-header">
    <span class="atomic-number">{atomicNumber}</span>
    <span class="symbol">{Symbol}</span>
  </div>

  <!-- Centro: Miniatura del orbital cuántico -->
  <div class="card-body">
    {#if imgUrl}
      <img class="thumbnail" src={imgUrl} alt={`Orbital ${elementName}`} />
    {:else}
      <div class="orbital-placeholder"></div>
    {/if}
  </div>

  <!-- Pie: Nombre y Números Cuánticos (n, l, m) -->
  <div class="card-footer">
    <span class="element-name">{elementName}</span>
    <span class="quantum-numbers">n: {n}, l: {l}, m: {m}</span>
  </div>
</div>