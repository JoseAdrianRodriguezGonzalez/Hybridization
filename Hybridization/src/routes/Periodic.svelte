<script>
  import { link } from "svelte-spa-router";
  import Header from "../components/Header.svelte";
  import Element from "../components/elements.svelte";
  import "./styles.css";
  import { onMount } from "svelte";
  import Plot3D from "../lib/Plot3D.svelte";
  import Modal from "../lib/Modal.svelte";

  const items = Array.from({ length: 126 }, (_, i) => i + 1);
  const items2 = Array.from({ length: 28 }, (_, i) => i + 1);

  let data = [];
  let visibleItems = [];
  let secondIndexes = [];

  onMount(async () => {
    try {
      const cleanUrl =
        window.location.href.split("#")[0] + "/data/periodic.json";
      console.log(cleanUrl);
      const res = await fetch(cleanUrl);
      if (!res.ok) throw new Error("Failed to load JSON");
      data = await res.json();
      console.log("First element loaded:", data[0]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  });
  /*
    $: if (data.length > 0) {
      let counter = 1;
      visibleItems = items.map(() => {
        if (counter === 57 || counter === 89) {
          let temp = counter + 14;
          counter = temp + 1;
          return temp;
        } else {
          return counter++;
        }
      });
    }
  
    
    $: secondIndexes = items2.map((_, index) => {
      let tempCounter = 57 + index;
      if (tempCounter === 71) tempCounter += 18;
      return tempCounter;
    });
  */

  onMount(() => {
    let counter = 1;
    const otherIndexes = () => {
      let counter2 = 57;
      secondIndexes = Array.from(document.querySelectorAll(".box_")).map(
        (e) => {
          if (counter2 == 71) {
            let temp = counter2 + 18;
            counter2 = temp + 1;
            return temp;
          }
          return counter2++;
        },
      );
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
    console.log(element);
    selectedElement = element;
    modalOpen = true;
    const { n, l, m } = element;
    selectedOrbital = `/orbitals/${n}_${l}_${m}.json`;
    //   console.log(selectedOrbital);
  };
</script>

<div class="Periodic">
  {#each items as item, index}
    <div class="box box-{index}">
      {#if data.length > 0}
        <Element
          on:click={() => handleClick(data[visibleItems[index] - 1])}
          atomicNumber={data[visibleItems[index] - 1]?.atomicNumber || "-"}
          elementName={data[visibleItems[index] - 1]?.name || "Unknown"}
          Symbol={data[visibleItems[index] - 1]?.symbol || "-"}
          n={data[visibleItems[index] - 1]?.n || ""}
          l={data[visibleItems[index] - 1]?.l || "-"}
          m={data[visibleItems[index] - 1]?.m || "-"}
        />
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  {/each}
</div>

<div class="Periodic-2">
  {#each items2 as item, index}
    <div class="box_ box-{index}">
      {#if data.length > 0}
        <Element
          atomicNumber={data[secondIndexes[index] - 1]?.atomicNumber || "-"}
          elementName={data[secondIndexes[index] - 1]?.name || "Unknown"}
          Symbol={data[secondIndexes[index] - 1]?.symbol || "-"}
          n={data[secondIndexes[index] - 1]?.n || ""}
          l={data[secondIndexes[index] - 1]?.l || "-"}
          m={data[secondIndexes[index] - 1]?.m || "-"}
        />
      {:else}
        <p>Loading...</p>
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
