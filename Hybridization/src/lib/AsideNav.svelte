<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  export let sections;
  export let activeSection = 0;
  export let activeLink = 0;

  function toggleSection(index) {
    sections[index].open = !sections[index].open;
    sections = sections; // Trigger reactivity
  }

  function selectSection(index) {
    dispatch('sectionChange', index);
  }

  function selectLink(sectionIndex, linkIndex) {
    dispatch('linkChange', { sectionIndex, linkIndex });
  }
</script>

<nav class="aside-nav">
  <ul class="nav-list">
    {#each sections as section, i}
      <li class="section-item">
        <div class="section-header">
          <button 
            type="button" 
            class="section-title {i === activeSection ? 'active' : ''}" 
            on:click={() => selectSection(i)}
          >
            <span class="section-text">{section.title}</span>
          </button>
          
          <button 
            class="toggle-btn {section.open ? 'expanded' : ''}" 
            aria-label="Toggle section" 
            on:click={() => toggleSection(i)}
          >
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
        </div>
        
        {#if section.open}
          <ul class="sub-menu" class:show={section.open}>
            {#each section.links as link, j}
              <li class="sub-menu-item">
                <button
                  type="button"
                  class="link {i === activeSection && j === activeLink ? 'active' : ''}"
                  on:click={() => selectLink(i, j)}
                >
                  <span class="link-bullet">•</span>
                  <span class="link-text">{link.name}</span>
                  {#if i === activeSection && j === activeLink}
                    <span class="active-indicator">→</span>
                  {/if}
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .aside-nav {
    width: 100%;
    min-width: 280px;
    color: #e8eaed;
    padding: 1.5rem 0;
    height: calc(100vh - 100px);
    overflow-y: auto;
    border-right: 2px solid rgba(255, 255, 255, 0.1);
    position: relative;
    top: 0;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .section-item {
    margin-bottom: 0.5rem;
  }

  .section-header {
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 1rem;
  }

  .section-title {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    color: inherit;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 8px;
    margin-right: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  .section-title::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
    transition: left 0.5s;
  }

  .section-title:hover::before {
    left: 100%;
  }

  .section-title:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .section-title.active {
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
    transform: translateX(2px);
  }
  .section-text {
    flex: 1;
  }

  .toggle-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .toggle-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }

  .arrow-icon {
    width: 16px;
    height: 16px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    stroke-width: 2.5;
  }

  .toggle-btn.expanded .arrow-icon {
    transform: rotate(180deg);
  }

  .sub-menu {
    margin: 0.5rem 0 0 2rem;
    padding-left: 1rem;
    list-style: none;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    animation: slideDown 0.3s ease-out;
    transform-origin: top;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
      max-height: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
      max-height: 500px;
    }
  }

  .sub-menu-item {
    margin: 0.25rem 0;
  }

  .link {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: left;
    padding: 0.5rem 0.75rem;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 6px;
    position: relative;
  }

  .link-bullet {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    line-height: 1;
  }

  .link-text {
    flex: 1;
  }

  .active-indicator {
    color: #60a5fa;
    font-weight: bold;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .link:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #ffffff;
    transform: translateX(4px);
    border-left: 3px solid rgba(96, 165, 250, 0.5);
    padding-left: calc(0.75rem - 3px);
  }

  .link:hover .link-bullet {
    color: #60a5fa;
    transform: scale(1.2);
  }

  .link.active {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 197, 253, 0.1));
    color: #93c5fd;
    border-left: 3px solid #3b82f6;
    padding-left: calc(0.75rem - 3px);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }

  .link.active .link-bullet {
    color: #3b82f6;
  }

  /* Scrollbar personalizado */
  .aside-nav::-webkit-scrollbar {
    width: 8px;
  }

  .aside-nav::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  .aside-nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  .aside-nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }


@media (max-width: 768px) {
  .aside-nav {
    /* Remover position fixed que está causando conflicto */
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    max-width: none !important;
    height: auto !important;
    min-height: calc(100vh - 5vh) !important;
    background: transparent !important;
    box-shadow: none !important;
    transition: none !important;
    z-index: auto !important;
    border-right: none !important;
    padding: 1rem 0 !important;
  }
  
  /* Asegurar que todos los elementos sean visibles */
  .section-title,
  .link,
  .toggle-btn {
    color: #e8eaed !important;
  }
  
  .section-title:hover,
  .link:hover {
    background: rgba(255, 255, 255, 0.08) !important;
  }
  
  .section-title.active {
    background: linear-gradient(135deg, #1e3a8a, #3b82f6) !important;
    color: #ffffff !important;
  }
  
  .link.active {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 197, 253, 0.1)) !important;
    color: #93c5fd !important;
  }
}

</style>