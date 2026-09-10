<script>
  import { onMount, onDestroy } from "svelte";

  export let dataUrl = "";
  /** @type {HTMLDivElement | null} */
  let plotContainer = null;
  /** @type {any} */
  let Plotly;

  async function loadPlot() {
    if (!dataUrl || !plotContainer) return;

    try {
      // Importación dinámica
      if (!Plotly) {
        Plotly = (await import("plotly.js-dist-min")).default;
      }

      // Construir URL correctamente con Vite base
      const base = import.meta.env.BASE_URL || "/";
      const url = `${base}${dataUrl.replace(/^\//, "")}`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      
      const d = await res.json();

      // Detectar estructura del JSON
      /** @type {number[]} */
      let x;
      /** @type {number[]} */
      let y;
      /** @type {number[]} */
      let z;
      /** @type {number[]} */
      let value;
      
      if (d.data && Array.isArray(d.data)) {
        // Formato nuevo: {data: [{type, x, y, z, value, ...}]}
        const trace = d.data[0];
        x = trace.x;
        y = trace.y;
        z = trace.z;
        value = trace.value;
      } else {
        // Formato viejo: {x, y, z, value}
        x = d.x;
        y = d.y;
        z = d.z;
        value = d.value;
      }

      // Calcular umbrales dinámicos correctamente
      let min = Infinity, max = -Infinity;
      for (let i = 0; i < value.length; i++) {
        if (value[i] < min) min = value[i];
        if (value[i] > max) max = value[i];
      }
      
      const absMax = Math.max(Math.abs(min), Math.abs(max));

      // Normalizar valores al rango 0-1 (como los originales)
      const valueNormalizado = value.map(v => Math.abs(v) / absMax);
        

      // Construir el trace manualmente (como en tu versión anterior)
      const trace = {
        type: "isosurface",
        x: x,
        y: y,
        z: z,
        value: valueNormalizado,
        isomin: 0.1,
        isomax: 0.8,
        opacity: 0.7,
        surface: { 
          count: 8,
          fill: 1,
          pattern: "all"
        },
        colorscale: "RdBu",
        reversescale: false,
        showscale: false,
        caps: {
          x: { show: false },
          y: { show: false },
          z: { show: false },
        },
      };

      const layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        scene: {
          aspectmode: "cube",  // ← Usar "cube" como antes
          bgcolor: "rgba(0,0,0,0)",
          camera: {
            eye: { x: 1.5, y: 1.5, z: 1.5 }
          }
        },
      };

      await Plotly.react(plotContainer, [trace], layout, { responsive: true });

    } catch (err) {
      console.error("❌ Error:", err);
    }
  }

  $: if (dataUrl && plotContainer) {
    loadPlot();
  }

  onDestroy(() => {
    if (Plotly && plotContainer) {
      Plotly.purge(plotContainer);
    }
  });
</script>

<div bind:this={plotContainer} style="width:100%; height:500px;"></div>