<script>
    import { link } from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import AsideNav from '../lib/AsideNav.svelte';
    import SectionContent from '../lib/SectionContent.svelte';
    import ContentSection from '../lib/ContentSection.svelte';
    import { onMount } from 'svelte';


    let activeSection = 0;
    let activeLink = 0;
    let sections = [];
    let loading = true;
    let loadError = null;

    onMount(async () => {
        try {
        const cleanUrl = window.location.href.split("#")[0] + "/documentacion/documentacion.json";
        const res = await fetch(cleanUrl);
        if (!res.ok) throw new Error("Failed to load JSON");
        sections = await res.json();
        console.log("First element loaded:", sections[0]);
        } catch (error) {
        console.error("Error loading data:", error);
        loadError = error.message;
        } finally {
        loading = false;
        }
    });

    function handleSectionChange(event) {
        sections = sections.map((section, index) => ({
        ...section,
        open: index === event.detail
        }));
        activeSection = event.detail;
        activeLink = 0;
    }

    function handleLinkChange(event) {
        activeSection = event.detail.sectionIndex;
        activeLink = event.detail.linkIndex;
    }
    </script>

    <div class="main-layout">
    <Header />
    <main class="Principal">
        <div class="container">
        <aside class="aside-wrap">
            {#if loading}
            <div class="empty">Cargando documentación...</div>
            {:else if loadError}
            <div class="empty error">Error: {loadError}</div>
            {:else if sections.length === 0}
            <div class="empty">No hay documentación disponible.</div>
            {:else}
            <AsideNav
                {sections}
                {activeSection}
                {activeLink}
                on:sectionChange={handleSectionChange}
                on:linkChange={handleLinkChange}
            />
            {/if}
        </aside>

        <section class="content">
            {#if loading}
            <div class="empty">Cargando contenido...</div>
            {:else if loadError}
            <div class="empty error">No se pudo cargar el contenido.</div>
            {:else}
            <!-- CAMBIO: Usar ContentSection en lugar de SectionContent -->
            //<ContentSection  {activeSection} {activeLink} />
            {/if}
        </section>
        </div>
    </main>
    <Footer />
    </div>

<style>
    .main-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .Principal {
        flex: 1;
        width: 100%;
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
        flex: 0 0 300px; /* ancho fijo del aside */
        max-width: 300px;
    }

    .content {
        flex: 1; /* el contenido ocupa el resto del espacio */
        min-width: 0; /* evita overflow en flex */
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