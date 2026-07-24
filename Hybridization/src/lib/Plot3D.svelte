<script>
  import plotlyMin from "plotly.js-dist-min";
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  export let dataUrl;
  let plotDiv;
  const loadPlot = async () => {
    const cleanUrl = window.location.href.split("#")[0] + dataUrl;
    console.log(cleanUrl);
    const res = await fetch(cleanUrl);
    const d = await res.json();
    const trace = {
      type: "isosurface",
      x: d.x,
      y: d.y,
      z: d.z,
      value: d.value,
      isomin: 0.1,
      isomax: 0.8,
      surface: { count: 3 },
      colorscale: "Viridis",
      caps: {
        x: { show: false },
        y: { show: false },
        z: { show: false },
      },
    };
    const layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      scene: {
        aspectmode: "cube",
      },
    };
    plotlyMin.react(plotDiv, [trace], layout);
  };

  $: if (dataUrl && plotDiv) {
    loadPlot();
  }
  onDestroy(() => {
    if (plotDiv) {
      plotlyMin.purge(plotDiv);
    }
  });
</script>

<div bind:this={plotDiv} style="width:50%; height: 55%;"></div>
