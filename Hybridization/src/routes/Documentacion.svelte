<script>
import { link } from 'svelte-spa-router';
import Header from '../components/Header.svelte';
import Footer from '../components/footer.svelte';
import AsideNav from '../lib/AsideNav.svelte';
import { onMount } from 'svelte';
import ContentSection from '../lib/ContentSection.svelte';

// Importar componentes .svelte dinámicamente
import GetSphericalGrid from '../lib/GetSphericalGrid.svelte.svelte';

// Datos para el estado de la aplicación
let jsonData = [];
let loading = true;
let error = null;
let activeSection = 0;
let activeLink = 0;
let currentContent = '';
let currentContentType = 'markdown'; // 'markdown' o 'svelte'
let currentComponent = null;

// Mapa de componentes disponibles
const componentMap = {
  'GetSphericalGrid.svelte': GetSphericalGrid,
  // Aquí puedes agregar más componentes según necesites
  // 'otro-componente.svelte': OtroComponente,
};

// Función para cargar el JSON
async function loadJsonData() {
  try {
    // URL directa para prueba
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
    
    // Verificar que realmente recibimos JSON
    const contentType = res.headers.get('content-type');
    console.log("Content-Type:", contentType);
    
    const responseText = await res.text();
    console.log("Respuesta cruda (primeros 200 chars):", responseText.substring(0, 200));
    
    if (!contentType || !contentType.includes('application/json')) {
      if (responseText.includes('<!DOCTYPE html>') || responseText.includes('<meta charset="UTF-8"')) {
        throw new Error('El servidor está devolviendo HTML en lugar de JSON. Verifica que el archivo documentacion.json existe en public/documentacion/');
      }
    }
    
    // Intentar parsear como JSON
    try {
      jsonData = JSON.parse(responseText);
      console.log("JSON parseado exitosamente:", jsonData);
    } catch (parseError) {
      console.error("Error parseando JSON:", parseError);
      console.error("Texto recibido:", responseText);
      throw new Error(`Error parseando JSON: ${parseError.message}`);
    }
    
    loading = false;
    
    // Cargar el contenido inicial
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
  
  // Determinar el tipo de contenido
  const fileType = getFileType(currentLink.href);
  currentContentType = fileType;
  
  if (fileType === 'svelte') {
    // Manejar componente Svelte
    await loadSvelteComponent(currentLink);
  } else {
    // Manejar archivo Markdown
    await loadMarkdownContent(currentLink);
  }
}

// Función para cargar componente Svelte
async function loadSvelteComponent(linkData) {
  try {
    const componentName = linkData.href.split('/').pop(); // Obtener solo el nombre del archivo
    console.log("Buscando componente:", componentName);
    
    if (componentMap[componentName]) {
      currentComponent = componentMap[componentName];
      currentContent = ''; // Limpiar contenido markdown
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
    // URL directa para el contenido
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
      
      // Verificar si realmente recibimos el archivo MD o el HTML del index
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
    
    currentComponent = null; // Limpiar componente
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
}

function handleLinkChange(event) {
  activeSection = event.detail.sectionIndex;
  activeLink = event.detail.linkIndex;
  loadContent();
}

// Cargar los datos cuando el componente se monte
onMount(() => {
  loadJsonData();
});
</script>

<div class="main-layout">
  <div class="container">
    <!-- Barra lateral de navegación -->
    <aside class="aside-wrap">
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
          <!-- Renderizar componente Svelte -->
          <div class="svelte-component-wrapper">
            <svelte:component this={currentComponent} />
          </div>
        {:else}
          <!-- Renderizar contenido Markdown -->
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

<style>
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.aside-wrap {
    flex: 0 0 300px;
    max-width: 300px;
    min-width: 250px;
}

.content {
    flex: 1;
    min-width: 0;
}

.svelte-component-wrapper {
    width: 100%;
    /* Permitir que el componente tome todo el espacio disponible */
}

.empty {
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    color: #333;
    background-color: #fff;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 1rem;
    }

    .aside-wrap {
        flex: none;
        width: 100%;
        max-width: none;
        min-width: auto;
    }
}
</style>