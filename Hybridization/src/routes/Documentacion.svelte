<script>
import { link } from 'svelte-spa-router';
import Header from '../components/Header.svelte';
import Footer from '../components/footer.svelte';
import AsideNav from '../lib/AsideNav.svelte';
import { onMount } from 'svelte';
import ContentSection from '../lib/ContentSection.svelte';

// Datos para el estado de la aplicación
let jsonData = [];
let loading = true;
let error = null;
let activeSection = 0;
let activeLink = 0;
let currentContent = '';

// Función para cargar el JSON
async function loadJsonData() {
  try {
    // URL directa para prueba
    const jsonUrl = "/Hybridization/documentacion/documentacion.json";
    
    console.log("=== DEBUG JSON ===");
    console.log("Cargando JSON desde:", jsonUrl);
    console.log("URL completa:", window.location.origin + jsonUrl);
    
    // Intentar hacer el fetch con logging detallado
    console.log("Iniciando fetch...");
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

// Función para cargar contenido Markdown
async function loadContent() {
  if (jsonData.length === 0 || 
      !jsonData[activeSection] ||
      !jsonData[activeSection].links || 
      jsonData[activeSection].links.length === 0) {
    currentContent = "No hay contenido disponible para esta sección.";
    return;
  }
  
  const currentLink = jsonData[activeSection].links[activeLink];
  console.log("Cargando contenido para:", currentLink.name, "desde:", currentLink.href);
  
  try {
    // URL directa para el contenido - usar el mismo patrón que funciona
    let contentUrl;
    if (currentLink.href.startsWith('/')) {
      contentUrl = currentLink.href;
    } else {
      contentUrl = `/Hybridization/documentacion/${currentLink.href}`;
    }
    
    console.log("URL completa del contenido:", contentUrl);
    
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
## ${currentLink.name}

**Error:** El servidor no puede encontrar el archivo Markdown.

**Archivo solicitado:** ${currentLink.href}
**URL intentada:** ${contentUrl}

**Solución:** Verifica que el archivo existe en la ruta correcta y que el servidor está configurado para servir archivos estáticos.
        `;
      } else {
        currentContent = text;
        console.log("Contenido MD cargado exitosamente");
      }
    } else {
      currentContent = `
## ${currentLink.name}

**Error HTTP ${response.status}:** ${response.statusText}

**Archivo:** ${currentLink.href}
**URL intentada:** ${contentUrl}
      `;
    }
  } catch (err) {
    console.error("Error al cargar el contenido:", err);
    currentContent = `
## ${currentLink.name}

**Error de red:** ${err.message}

**Archivo:** ${currentLink.href}
    `;
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
        <ContentSection 
          title={jsonData[activeSection].title}
          content={currentContent}
        />
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
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    height: 100%;
}

.aside-wrap {
    width: 300px;
    flex-shrink: 0;
}

.content {
    flex: 1;
    min-width: 0;
}

.empty {
    padding: 1.5rem;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    color: #333;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding: 1rem;
    }

    .aside-wrap {
        width: 100%;
        max-width: none;
    }

    .content {
        width: 100%;
    }
}
</style>