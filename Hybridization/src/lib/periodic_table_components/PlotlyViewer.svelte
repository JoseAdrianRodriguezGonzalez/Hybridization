<script>
  import { onMount } from "svelte";

  /** @type {any[]} */
  export let data = [];
  export let layout = {};
  export let config = { responsive: true, displayModeBar: true };

  /** @type {HTMLDivElement | null} */
  let plotContainer = null;

  // Tema cuántico oscuro por defecto adaptado a QuPlots
  const defaultLayout = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: { color: "#e2e8f0" },
    margin: { t: 30, r: 20, l: 40, b: 40 },
    scene: {
      xaxis: { color: "#94a3b8", gridcolor: "#334155" },
      yaxis: { color: "#94a3b8", gridcolor: "#334155" },
      zaxis: { color: "#94a3b8", gridcolor: "#334155" }
    }
  };

  $: combinedLayout = { ...defaultLayout, ...layout };

  onMount(() => {
    let disposed = false;
    /** @type {any} */
    let Plotly;
    /** @type {ResizeObserver | null} */
    let resizeObserver = null;

    const initializePlot = async () => {
      // Importación dinámica de Plotly (evita errores SSR en SvelteKit o Vite)
      Plotly = (await import("plotly.js-dist-min")).default;
      if (disposed || !plotContainer) return;

      // Crear el gráfico inicial
      Plotly.newPlot(plotContainer, data, combinedLayout, config);

      // Escuchar el evento resize de ventana
      resizeObserver = new ResizeObserver(() => {
        if (plotContainer) Plotly.Plots.resize(plotContainer);
      });
      resizeObserver.observe(plotContainer);
    };

    initializePlot();

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
      if (Plotly && plotContainer) Plotly.purge(plotContainer);
    };
  });
</script>

<div class="plotly-wrapper" bind:this={plotContainer}></div>

<style>
  .plotly-wrapper {
    width: 100%;
    height: 100%;
    min-height: 400px;
  }
</style>