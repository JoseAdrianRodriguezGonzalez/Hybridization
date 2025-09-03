<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let sections;
  export let activeSection = 0;
  export let activeLink = 0;

  function selectSection(index) {
    dispatch('sectionChange', index);
  }

  function selectLink(sectionIndex, linkIndex) {
    dispatch('linkChange', { sectionIndex, linkIndex });
  }
</script>

<ul class="aside-nav">
  {#each sections as section, i}
    <li class="section-item">
      <button 
        type="button" 
        class="section-title {i === activeSection ? 'active' : ''}" 
        on:click={() => selectSection(i)}
      >
        {section.title}
      </button>
      {#if section.open}
        <ul class="sub-menu">
          {#each section.links as link, j}
            <li class="sub-menu-item">
              <button
                type="button"
                class="link {i === activeSection && j === activeLink ? 'active' : ''}"
                on:click={() => selectLink(i, j)}
              >
                {link.name}
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .aside-nav {
    width: 25vw;
    background-color: #020216;
    color: #fff;
    padding: 1em;
    height: calc(100vh - 100px); /* Ajustado para considerar header/footer */
    overflow-y: auto;
    border-right: 2px solid #2b3139;
    list-style: none;
    margin: 0;
    position: sticky;
    top: 0;
  }

  .section-item {
    margin-bottom: 1rem;
  }

  .section-title {
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .section-title:hover,
  .section-title.active {
    background-color: #2b3139;
    border-radius: 4px;
  }

  .sub-menu {
    margin-left: 1rem;
    padding-left: 0;
    list-style: none;
  }

  .sub-menu-item {
    margin: 0.5rem 0;
  }

  .link {
    width: 100%;
    text-align: left;
    padding: 0.3rem 0.8rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
  }

  .link:hover,
  .link.active {
    background-color: #30363d;
    color: #56b6c2;
  }

  /* Estilos para scrollbar */
  .aside-nav::-webkit-scrollbar {
    width: 6px;
  }

  .aside-nav::-webkit-scrollbar-track {
    background: #020216;
  }

  .aside-nav::-webkit-scrollbar-thumb {
    background: #2b3139;
    border-radius: 3px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .aside-nav {
      width: 100%;
      height: auto;
      max-height: 300px;
    }

    .section-title,
    .link {
      font-size: 16px;
    }
  }
</style>