<script>
  import { link } from "svelte-spa-router";
  import Element from "../lib/periodic_table_components/elements.svelte";
  import "./periodic.css";
  import { onMount } from "svelte";
  import Modal from "../lib/periodic_table_components/Element_selected_modal.svelte";

  /**
   * @typedef {Object} ElementData
   * @property {number} atomicNumber
   * @property {string} name
   * @property {string} symbol
   * @property {number} n
   * @property {number} l
   * @property {number} m
   * @property {string} [image]
   */

  // Carga bajo demanda del componente 3D (No bloquea la carga de la página inicial)
  /** @type {typeof import("../lib/periodic_table_components/Plot3D.svelte").default | null} */
  let Plot3DComponent = null;

  const items = Array.from({ length: 126 }, (_, i) => i + 1);
  const items2 = Array.from({ length: 28 }, (_, i) => i + 1);

  /** @type {ElementData[]} */
  let data = [];
  /** @type {(number | null)[]} */
  let visibleItems = [];
  /** @type {number[]} */
  let secondIndexes = [];

  onMount(async () => {
    try {
      const cleanUrl = window.location.href.split("#")[0] + "/data/periodic_data.json";
      const res = await fetch(cleanUrl);
      if (!res.ok) throw new Error("Failed to load JSON");
      data = await res.json();
    } catch (error) {
      console.error("Error loading data:", error);
    }
  });

  onMount(() => {
    let counter = 1;
    const otherIndexes = () => {
      let counter2 = 57;
      secondIndexes = Array.from(document.querySelectorAll(".box_")).map(() => {
        if (counter2 == 71) {
          let temp = counter2 + 18;
          counter2 = temp + 1;
          return temp;
        }
        return counter2++;
      });
    };
    otherIndexes();

    visibleItems = Array.from(document.querySelectorAll(".box")).map((el) => {
      if (window.getComputedStyle(el).visibility !== "hidden") {
        if (counter == 57 || counter == 89) {
          let temp = counter + 14;
          counter = temp + 1;
          return temp;
        } else {
          return counter++;
        }
      }
      return null;
    });
  });

  /** @type {ElementData | null} */
  let selectedElement = null;
  let modalOpen = false;
  let selectedOrbital = "";

  // Al hacer clic, cargamos bajo demanda el componente con Plotly
  /** @param {ElementData | undefined} element */
  const handleClick = async (element) => {
    if (!element) return;
    selectedElement = element;
    const { n, l, m } = element;
    selectedOrbital = `/orbitals/coordinates/${n}_${l}_${m}.json`.replace(/\/\//g, '/');

    // Carga diferida del módulo Plot3D justo a tiempo
    if (!Plot3DComponent) {
      const module = await import("../lib/periodic_table_components/Plot3D.svelte");
      Plot3DComponent = module.default;
    }

    modalOpen = true;
  };

  const handleClose = () => {
    modalOpen = false;
    selectedOrbital = "";
  };
</script>

<div class="Periodic-header">
  <div class="header-content">
    <h1 style="margin: 1.5rem 1.5rem 1rem 1rem;">
      Periodic Table of Elements
    </h1>
  </div>
</div>

<div class="Periodic">
  {#each items as item, index}
    <div class="box box-{index}">
      {#if data.length > 0}
        {@const elem = data[(visibleItems[index] ?? 0) - 1]}
        <Element
          on:click={() => handleClick(elem)}
          atomicNumber={elem?.atomicNumber ?? 0}
          elementName={elem?.name || "Unknown"}
          Symbol={elem?.symbol || "-"}
          n={elem?.n ?? 0}
          l={elem?.l ?? 0}
          m={elem?.m ?? 0}
          imgUrl={elem ? (elem.image || `/orbitals/img/${elem.n}_${elem.l}_${elem.m}.webp`) : ""}
        />
      {:else}
        <p class="loading">Loading...</p>
      {/if}
    </div>
  {/each}
</div>

<div class="Periodic-2">
  {#each items2 as item, index}
    <div class="box_ box-{index}">
      {#if data.length > 0}
        {@const elem = data[secondIndexes[index] - 1]}
        <Element
          on:click={() => handleClick(elem)}
          atomicNumber={elem?.atomicNumber ?? 0}
          elementName={elem?.name || "Unknown"}
          Symbol={elem?.symbol || "-"}
          n={elem?.n ?? 0}
          l={elem?.l ?? 0}
          m={elem?.m ?? 0}
          imgUrl={elem ? (elem.image || `/orbitals/img/${elem.n}_${elem.l}_${elem.m}.webp`) : ""}

        />
      {:else}
        <p class="loading">Loading...</p>
      {/if}
    </div>
  {/each}
</div>

<Modal 
  open={modalOpen} 
  title={selectedElement ? `${selectedElement.name} (${selectedElement.symbol}) - Orbital (${selectedElement.n}, ${selectedElement.l}, ${selectedElement.m})` : ''} 
  on:close={handleClose}
>
  {#if selectedElement && modalOpen}
    <div class="orbital-info">
      <p><strong>Número atómico:</strong> {selectedElement.atomicNumber}</p>
      <p><strong>Configuración:</strong> n={selectedElement.n}, l={selectedElement.l}, m={selectedElement.m}</p>
    </div>
    
    <div class="plot-container-box">
      {#if Plot3DComponent && selectedOrbital}
        <!-- Componente cargado dinámicamente usando svelte:component -->
        <svelte:component this={Plot3DComponent} dataUrl={selectedOrbital} />
      {:else}
        <div class="loading-plot">
          <p>Cargando simulación cuántica 3D...</p>
        </div>
      {/if}
    </div>
  {/if}
</Modal>