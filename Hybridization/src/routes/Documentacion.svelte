<script>
import { link } from 'svelte-spa-router';
import Header from '../components/Header.svelte';
import Footer from '../components/footer.svelte';
import AsideNav from '../lib/AsideNav.svelte';
import { onMount } from 'svelte';
import ContentSection from '../lib/ContentSection.svelte';
import ComputeRadial from '../lib/ComputeRadial.svelte';
import GetSphericalGrid from '../lib/GetSphericalGrid.svelte.svelte';
import GetCartesianGrid from '../lib/GetCartesianGrid.svelte';
import ComputeRealSpherical from '../lib/ComputeRealSpherical.svelte'
import ComputeImaginarySpherical from '../lib/ComputeImaginarySpherical.svelte';
import ComputeWavefunction2D from '../lib/ComputeWavefunction2D.svelte';
import ComputeWavefunction3D from '../lib/ComputeWavefunction3D.svelte';
import ComputeWavefunction3DComplex from '../lib/ComputeWavefunction3DComplex.svelte';
import GetN from '../lib/GetN.svelte';
import GetL from '../lib/GetL.svelte';
import GetM from '../lib/GetM.svelte';
import GetRadius from '../lib/GetRadius.svelte';
import GenerateSp from '../lib/GenerateSp.svelte';
import GenerateSp2 from '../lib/GenerateSp2.svelte';
import GenerateSp3 from '../lib/GenerateSp3.svelte';
import GenerateSp2d from '../lib/GenerateSp2d.svelte';
import GenerateSp3d from '../lib/GenerateSp3d.svelte';
import GenerateSp3d2 from '../lib/GenerateSp3d2.svelte';
import QElectron from '../lib/QElectron.svelte';
import QHybridization from '../lib/QHybridization.svelte';
import QPlots from '../lib/QPlots.svelte';
import PlotRadial from '../lib/PlotRadial.svelte';
import PlotSphericalReal from '../lib/PlotSphericalReal.svelte';
import PlotSphericalImaginary from '../lib/PlotSphericalImaginary.svelte';
import PlotWf2d from '../lib/PlotWf2d.svelte';
import PlotWf3d from '../lib/PlotWf3d.svelte';
import PlotSp2 from '../lib/PlotSp2.svelte';
import PlotSp3 from '../lib/PlotSp3.svelte';
import PlotSp2d from '../lib/PlotSp2d.svelte';
import PlotSp from '../lib/PlotSp.svelte';
import BienvenidaDocu from '../lib/BienvenidaDocu.svelte';

// Datos para el estado de la aplicación
let jsonData = [];
let loading = true;
let error = null;
let activeSection = 0;
let activeLink = 0;
let currentContent = '';
let currentContentType = 'markdown';
let currentComponent = null;

// Estado para controlar la visibilidad del índice
let isIndexOpen = false;

// Función para alternar el índice
function toggleIndex() {
  isIndexOpen = !isIndexOpen;
}

// Función para cerrar el índice
function closeIndex() {
  isIndexOpen = false;
}

// Mapa de componentes disponibles
const componentMap = {
  'QElectron.svelte':QElectron,
  'GetSphericalGrid.svelte': GetSphericalGrid,
  'ComputeRadial.svelte':ComputeRadial,
   'GetCartesianGrid.svelte':GetCartesianGrid,
   'ComputeRealSpherical.svelte':ComputeRealSpherical,
   'ComputeImaginarySpherical.svelte':ComputeImaginarySpherical,
   'ComputeWavefunction2D.svelte':ComputeWavefunction2D,
   'ComputeWavefunction3D.svelte':ComputeWavefunction3D,
   'ComputeWavefunction3DComplex.svelte':ComputeWavefunction3DComplex,
   'GetN.svelte':GetN,
   'GetL.svelte':GetL,
   'GetM.svelte':GetM,
   'GetRadius.svelte':GetRadius,
   'GenerateSp.svelte':GenerateSp,
   'GenerateSp2.svelte':GenerateSp2,
   'GenerateSp3.svelte':GenerateSp3,
   'GenerateSp2d.svelte':GenerateSp2d,
   'GenerateSp3d.svelte':GenerateSp3d,
   'GenerateSp3d2.svelte':GenerateSp3d2,
   'QHybridization.svelte':QHybridization,
   'QPlots.svelte':QPlots,
   'PlotRadial.svelte':PlotRadial,
   'PlotSphericalReal.svelte':PlotSphericalReal,
   'PlotSphericalImaginary.svelte':PlotSphericalImaginary,
   'PlotWf2d.svelte':PlotWf2d,
   'PlotWf3d.svelte':PlotWf3d,
   'PlotSp2.svelte':PlotSp2,
   'PlotSp3.svelte':PlotSp3,
   'PlotSp2d.svelte':PlotSp2d,
   'PlotSp.svelte':PlotSp,
   'BienvenidaDocu.svelte':BienvenidaDocu,
};

// Función para cargar el JSON
async function loadJsonData() {
  try {
    const jsonUrl = "/Hybridization/documentacion/documentacion.json";

    const res = await fetch(jsonUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    
    console.log("Respuesta recibida:");
    console.log("- Status:", res.status);
    console.log("- Status Text:", res.statusText);
    console.log("- Headers:", Object.fromEntries(res.headers.entries()));
    
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}. URL: ${jsonUrl}`);
    }
    
    const contentType = res.headers.get('content-type');
    console.log("Content-Type:", contentType);
    
    const responseText = await res.text();
    console.log("Respuesta cruda (primeros 200 chars):", responseText.substring(0, 200));
    
    if (!contentType || !contentType.includes('application/json')) {
      if (responseText.includes('<!DOCTYPE html>') || responseText.includes('<meta charset="UTF-8"')) {
        throw new Error('El servidor está devolviendo HTML en lugar de JSON. Verifica que el archivo documentacion.json existe en public/documentacion/');
      }
    }
    
    try {
      jsonData = JSON.parse(responseText);
      console.log("JSON parseado exitosamente:", jsonData);
    } catch (parseError) {
      console.error("Error parseando JSON:", parseError);
      console.error("Texto recibido:", responseText);
      throw new Error(`Error parseando JSON: ${parseError.message}`);
    }
    
    loading = false;
    
    if (jsonData.length > 0) {
      await loadContent();
    } else {
      console.warn("El JSON está vacío o no tiene elementos");
    }
  } catch (err) {
    console.error("=== ERROR CARGANDO JSON ===");
    console.error("Error completo:", err);
    console.error("Stack:", err.stack);
    error = `Error cargando JSON: ${err.message}`;
    loading = false;
  }
}

// Función para determinar el tipo de archivo
function getFileType(filename) {
  const extension = filename.split('.').pop()?.toLowerCase();
  return extension === 'svelte' ? 'svelte' : 'markdown';
}

// Función para cargar contenido (Markdown o Svelte)
async function loadContent() {
  if (jsonData.length === 0 || 
      !jsonData[activeSection] ||
      !jsonData[activeSection].links || 
      jsonData[activeSection].links.length === 0) {
    currentContent = "No hay contenido disponible para esta sección.";
    currentContentType = 'markdown';
    currentComponent = null;
    return;
  }
  
  const currentLink = jsonData[activeSection].links[activeLink];
  console.log("Cargando contenido para:", currentLink.name, "desde:", currentLink.href);
  
  const fileType = getFileType(currentLink.href);
  currentContentType = fileType;
  
  if (fileType === 'svelte') {
    await loadSvelteComponent(currentLink);
  } else {
    await loadMarkdownContent(currentLink);
  }
}

// Función para cargar componente Svelte
async function loadSvelteComponent(linkData) {
  try {
    const componentName = linkData.href.split('/').pop();
    console.log("Buscando componente:", componentName);
    
    if (componentMap[componentName]) {
      currentComponent = componentMap[componentName];
      currentContent = '';
      console.log("Componente Svelte cargado exitosamente:", componentName);
    } else {
      console.warn("Componente no encontrado en componentMap:", componentName);
      currentContentType = 'markdown';
      currentComponent = null;
      currentContent = `
## ${linkData.name}

**Error:** El componente Svelte \`${componentName}\` no está disponible.

**Componentes disponibles:**
${Object.keys(componentMap).map(name => `- ${name}`).join('\n')}

Para usar este componente, asegúrate de:
1. Importarlo en el script principal
2. Agregarlo al \`componentMap\`
      `;
    }
  } catch (err) {
    console.error("Error al cargar componente Svelte:", err);
    currentContentType = 'markdown';
    currentComponent = null;
    currentContent = `
## ${linkData.name}

**Error al cargar el componente:** ${err.message}
    `;
  }
}

// Función para cargar contenido Markdown
async function loadMarkdownContent(linkData) {
  try {
    let contentUrl;
    if (linkData.href.startsWith('/')) {
      contentUrl = linkData.href;
    } else {
      contentUrl = `/Hybridization/documentacion/${linkData.href}`;
    }
    
    console.log("URL completa del contenido MD:", contentUrl);
    
    const response = await fetch(contentUrl, {
      method: 'GET',
      headers: {
        'Accept': 'text/markdown, text/plain, */*',
        'Cache-Control': 'no-cache'
      }
    });
    
    if (response.ok) {
      const text = await response.text();
      
      if (text.includes('<!DOCTYPE html>') || text.includes('<meta charset="UTF-8"')) {
        console.warn("El servidor está devolviendo HTML en lugar del archivo MD");
        currentContent = `
## ${linkData.name}

**Error:** El servidor está devolviendo HTML en lugar del archivo Markdown.
Verifica que el archivo existe en la ruta correcta.
        `;
      } else {
        currentContent = text;
        console.log("Contenido MD cargado exitosamente");
      }
    } else {
      currentContent = `
## ${linkData.name}

**Error HTTP ${response.status}:** No se pudo cargar el contenido.
      `;
    }
    
    currentComponent = null;
  } catch (err) {
    console.error("Error al cargar el contenido Markdown:", err);
    currentContent = `
## ${linkData.name}

**Error:** ${err.message}
    `;
    currentComponent = null;
  }
}

// Manejadores de eventos para la navegación
function handleSectionChange(event) {
  activeSection = event.detail;
  activeLink = 0;
  loadContent();
  closeIndex(); // Cerrar índice al cambiar sección
}

function handleLinkChange(event) {
  activeSection = event.detail.sectionIndex;
  activeLink = event.detail.linkIndex;
  loadContent();
  closeIndex(); // Cerrar índice al cambiar enlace
}

// Cerrar índice al redimensionar ventana
function handleResize() {
  if (window.innerWidth > 768) {
    isIndexOpen = false;
  }
}

// Cargar los datos cuando el componente se monte
onMount(() => {
  loadJsonData();
});
</script>

<svelte:window on:resize={handleResize} />

<Header></Header>

<!-- Botón hamburguesa para el índice (lado izquierdo) -->
<button class="index-hamburger" class:active={isIndexOpen} on:click={toggleIndex} aria-label="Toggle index">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <!-- Icono de índice/lista -->
    <rect x="3" y="3" width="7" height="3" rx="1"></rect>
    <rect x="3" y="8" width="7" height="3" rx="1"></rect>
    <rect x="3" y="13" width="7" height="3" rx="1"></rect>
    <line x1="13" y1="4" x2="21" y2="4"></line>
    <line x1="13" y1="9" x2="21" y2="9"></line>
    <line x1="13" y1="14" x2="21" y2="14"></line>
  </svg>
  <span class="index-text">Índice</span>
</button>

<div class="main-layout">
  <div class="container">
    <!-- Barra lateral de navegación (índice) -->
    <aside class="aside-wrap" class:open={isIndexOpen}>
      {#if loading}
        <div class="empty">Cargando navegación...</div>
      {:else if error}
        <div class="empty">Error: {error}</div>
      {:else}
        <AsideNav 
          sections={jsonData} 
          activeSection={activeSection} 
          activeLink={activeLink}
          on:sectionChange={handleSectionChange}
          on:linkChange={handleLinkChange}
        />
      {/if}
    </aside>
    
    <!-- Contenido principal -->
    <main class="content">
      {#if loading}
        <div class="empty">Cargando contenido...</div>
      {:else if error}
        <div class="empty">Error al cargar el contenido: {error}</div>
      {:else if jsonData.length > 0}
        {#if currentContentType === 'svelte' && currentComponent}
          <div class="svelte-component-wrapper">
            <svelte:component this={currentComponent} />
          </div>
        {:else}
          <ContentSection 
            title={jsonData[activeSection].title}
            content={currentContent}
          />
        {/if}
      {:else}
        <div class="empty">No hay datos disponibles</div>
      {/if}
    </main>
  </div>
</div>

<!-- Overlay para cerrar el índice al tocar afuera -->
{#if isIndexOpen}
  <div class="index-overlay" on:click={closeIndex}></div>
{/if}

<Footer></Footer>

<style>
  /* Botón de índice (lado izquierdo) */
.index-hamburger {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1001;
  display: none;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: rgba(8, 7, 7, 0.9);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.index-hamburger:hover {
  background: rgba(8, 7, 7, 1);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.index-hamburger svg {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.index-hamburger.active {
  background: #1e3a8a;
  color: #93c5fd;
}

.index-hamburger.active svg {
  transform: rotate(5deg) scale(1.1);
}

.index-text {
  font-family: inherit;
  letter-spacing: 0.5px;
}


/* Overlay para cerrar el índice */
.index-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  cursor: pointer;
}

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 5vh; /* Espacio para el header fijo */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.aside-wrap {
  flex: 0 0 300px;
  max-width: 300px;
  min-width: 250px;
  transition: transform 0.3s ease;
  /* Asegurar que siempre tenga contenido visible */
  background: transparent;
}

/* Mantener estilos originales del AsideNav */
.aside-wrap :global(.aside-nav) {
  width: 100%;
  height: auto;
}

.content {
  flex: 1;
  min-width: 0;
}

.svelte-component-wrapper {
  width: 100%;
}

.empty {
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  background-color: #fff;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  /* Mostrar botón hamburguesa en móvil */
  .index-hamburger {
    display: flex;
  }
  
  .container {
    flex-direction: column;
    padding: 1rem;
    margin-top: 0;
  }

  /* Índice móvil */
  .aside-wrap {
    position: fixed;
    top: 5vh;
    left: -75%; /* Oculto inicialmente, ocupa 3/4 */
    width: 75%;
    height: calc(100vh - 5vh);
    backdrop-filter: blur(10px);
    z-index: 999;
    overflow-y: auto;
    padding: 1rem;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    transition: left 0.3s ease;
    flex: none;
    max-width: none;
    min-width: auto;
  }
  
  /* Índice activo - se desliza desde la izquierda */
  .aside-wrap.open {
    left: 0;
  }
  
  .content {
    width: 100%;
    margin-top: 1rem;
  }
  
  .main-layout {
    margin-top: 5vh;
  }
}

@media (max-width: 480px) {
  .index-hamburger {
    top: 10px;
    left: 10px;
    padding: 6px;
  }
  
  .index-hamburger span {
    width: 20px;
    height: 2px;
  }
  
  .aside-wrap {
    width: 80%; /* Un poco más ancho en móviles pequeños */
    left: -80%;
  }
}
</style>