<script>
  import { link } from "svelte-spa-router";
  import Element from "../lib/periodic_table_components/elements.svelte";
  import "./periodic.css";
  import { onMount } from "svelte";
  import Plot3D from "../lib/common/Plot3D.svelte";
  import Modal from "../lib/periodic_table_components/Element_selected_modal.svelte";

  const items = Array.from({ length: 126 }, (_, i) => i + 1);
  const items2 = Array.from({ length: 28 }, (_, i) => i + 1);

  let data = [];
  let visibleItems = [];
  let secondIndexes = [];

  onMount(async () => {
    try {
      const cleanUrl = window.location.href.split("#")[0] + "/data/periodic.json";
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

  let selectedElement = null;
  let modalOpen = false;
  let selectedOrbital = "";

  const handleClick = (element) => {
    if (!element) return;
    selectedElement = element;
    modalOpen = true;
    const { n, l, m } = element;
    selectedOrbital = `/orbitals/${n}_${l}_${m}.json`;
  };
</script>

<div class="Periodic-header">
  <div class="header-content">
    <h1>Periodic Table</h1>
  </div>
</div>

<div class="Periodic">
  {#each items as item, index}
    <div class="box box-{index}">
      {#if data.length > 0}
        {@const elem = data[visibleItems[index] - 1]}
        <Element
          on:click={() => handleClick(elem)}
          atomicNumber={elem?.atomicNumber || "-"}
          elementName={elem?.name || "Unknown"}
          Symbol={elem?.symbol || "-"}
          n={elem?.n ?? 0}
          l={elem?.l ?? 0}
          m={elem?.m ?? 0}
          imgUrl={elem?.image || `/orbitals/img/${elem?.n}_${elem?.l}_${elem?.m}.png`} 
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
          atomicNumber={elem?.atomicNumber || "-"}
          elementName={elem?.name || "Unknown"}
          Symbol={elem?.symbol || "-"}
          n={elem?.n ?? 0}
          l={elem?.l ?? 0}
          m={elem?.m ?? 0}
          imgUrl={elem?.image || `/orbitals/img/${elem?.n}_${elem?.l}_${elem?.m}.png`} 
        />
      {:else}
        <p class="loading">Loading...</p>
      {/if}
    </div>
  {/each}
</div>

<Modal open={modalOpen} on:close={() => (modalOpen = false)}>
  {#if selectedElement}
    <h2>{selectedElement.name}</h2>
    <Plot3D dataUrl={selectedOrbital}></Plot3D>
  {/if}
</Modal>