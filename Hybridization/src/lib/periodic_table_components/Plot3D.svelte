<script>
  import { onMount, onDestroy } from "svelte";

  export let dataUrl = "";
  /** @type {HTMLDivElement | null} */
  let plotContainer = null;
  /** @type {any} */
  let Plotly;
  
  let isMobile = false;
  let isLowEnd = false;
  let useFallback = false;
  /** @type {string | null} */
  let loadError = null;

  function detectDeviceCapabilities() {
    // Detectar móvil REAL (no solo por specs)
    const userAgent = navigator.userAgent;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // También detectar por pantalla táctil + tamaño pequeño
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    
    // Solo considerar móvil si es dispositivo táctil Y pantalla pequeña
    isMobile = isMobile || (isTouchDevice && isSmallScreen);
    
    const memory = /** @type {{ deviceMemory?: number }} */ (navigator).deviceMemory || 8;
    const cores = navigator.hardwareConcurrency || 4;
    
    // Solo usar modo optimizado en móviles REALES
    // Desktops con specs bajas seguirán usando versión completa
    isLowEnd = isMobile && (memory < 4 || cores < 4);
    
    const deviceType = isMobile ? (isLowEnd ? 'Móvil bajo' : 'Móvil') : 'Desktop';
    console.log(`📱 ${deviceType} | RAM: ${memory}GB | Cores: ${cores} | Touch: ${isTouchDevice}`);
    console.log(`⚡ Modo: ${isLowEnd ? 'Optimizado (móvil)' : 'Alta calidad'}`);
  }

  function hasWebGL() {
    try {
      const canvas = document.createElement('canvas');
      /** @type {WebGLRenderingContext | null} */
      const gl = canvas.getContext('webgl') || /** @type {WebGLRenderingContext | null} */ (canvas.getContext('experimental-webgl'));
      if (!gl) return false;
      
      // Verificar extensiones necesarias para isosurface
      const ext = gl.getExtension('WEBGL_depth_texture');
      return !!gl && !!ext;
    } catch (e) {
      return false;
    }
  }

  async function loadPlot() {
    if (!dataUrl || !plotContainer) return;
    
    loadError = null;
    useFallback = false;

    if (!hasWebGL()) {
      console.warn("⚠️ WebGL no soportado o sin extensiones necesarias");
      loadError = "WebGL no soportado";
      useFallback = true;
      return;
    }

    try {
      detectDeviceCapabilities();

      if (!Plotly) {
        Plotly = (await import("plotly.js-dist-min")).default;
      }

      const base = import.meta.env.BASE_URL || "/";
      const fileName = dataUrl.split('/').pop();
      
      let url;
      let res;
      
      if (isLowEnd) {
        // Intentar cargar versión móvil primero
        url = `${base}orbitals/coordinates_mobile/${fileName}`;
        console.log("🔍 Intentando versión móvil:", url);
        res = await fetch(url);
        
        if (!res.ok) {
          console.warn("⚠️ Versión móvil no disponible, usando versión completa");
          url = `${base}${dataUrl.replace(/^\//, "")}`;
          res = await fetch(url);
        }
      } else {
        // Desktop: usar versión completa directamente
        url = `${base}${dataUrl.replace(/^\//, "")}`;
        console.log("🔍 Cargando versión completa:", url);
        res = await fetch(url);
      }
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      
      const d = await res.json();

      /** @type {number[]} */
      let x, y, z, value;
      
      if (d.data && Array.isArray(d.data)) {
        const trace = d.data[0];
        x = trace.x;
        y = trace.y;
        z = trace.z;
        value = trace.value;
      } else {
        x = d.x;
        y = d.y;
        z = d.z;
        value = d.value;
      }

      console.log(`📊 Puntos cargados: ${value.length.toLocaleString()}`);

      // Validar datos
      if (!x || !y || !z || !value || x.length !== value.length) {
        throw new Error(`Datos inválidos: x=${x?.length}, value=${value?.length}`);
      }

      // Calcular umbrales
      let min = Infinity, max = -Infinity;
      for (let i = 0; i < value.length; i++) {
        if (value[i] < min) min = value[i];
        if (value[i] > max) max = value[i];
      }
      
      const absMax = Math.max(Math.abs(min), Math.abs(max));
      const valueNormalizado = value.map((/** @type {number} */ v) => Math.abs(v) / absMax);

      // Parámetros según dispositivo
      const surfaceCount = isLowEnd ? 3 : 8;
      const opacity = isLowEnd ? 0.5 : 0.7;

      const trace = {
        type: "isosurface",
        x: x,
        y: y,
        z: z,
        value: valueNormalizado,
        isomin: 0.1,
        isomax: 0.8,
        opacity: opacity,
        surface: { 
          count: surfaceCount,
          fill: isLowEnd ? 0.5 : 1,
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
        lighting: isLowEnd ? {
          ambient: 0.8,
          diffuse: 0.5,
          specular: 0.1,
          roughness: 0.5,
          fresnel: 0.2
        } : {
          ambient: 0.5,
          diffuse: 0.8,
          specular: 0.3,
          roughness: 0.3,
          fresnel: 0.5
        }
      };

      const layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        scene: {
          aspectmode: "cube",
          bgcolor: "rgba(0,0,0,0)",
          camera: {
            eye: { x: 1.5, y: 1.5, z: 1.5 }
          },
          xaxis: { showspikes: !isLowEnd },
          yaxis: { showspikes: !isLowEnd },
          zaxis: { showspikes: !isLowEnd }
        },
      };

      const config = {
        responsive: true,
        displayModeBar: !isMobile,
        displaylogo: false,
      };

      console.log("🎨 Renderizando...");
      await Plotly.react(plotContainer, [trace], layout, config);
      console.log("✅ Renderizado completado");

    } catch (err) {
      console.error("❌ Error:", err);
      loadError = err instanceof Error ? err.message : String(err);
      useFallback = true;
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

{#if useFallback}
  <div class="fallback-container">
    {#if dataUrl}
      <img 
        src="/orbitals/img/{(dataUrl.split('/').pop() ?? '').replace('.json', '.png')}" 
        alt="Orbital"
        class="fallback-image"
        on:error={(e) => console.error("❌ Error cargando imagen:", e)}
      />
    {/if}
    <p class="fallback-message">
      {#if loadError}
        ⚠️ {loadError}
      {:else}
        Vista estática (tu dispositivo no soporta visualización 3D interactiva)
      {/if}
    </p>
  </div>
{:else}
  <div bind:this={plotContainer} class="plot-container"></div>
{/if}
