<!-- ContentSection.svelte -->
<script>
  import Markdown from 'svelte-markdown';
  
  export let content = '';
  export let title = '';
</script>

<div class="content-section">
  {#if title}
    <h1 class="content-title">{title}</h1>
  {/if}
  
  <div class="content-body">
    <Markdown source={content} />
  </div>
</div>

<style>
.content-body :global(h1) {
  color: #f1f3f7;
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
}

.content-body :global(h2) {
  color: #f1f3f7;
  font-size: 1.3rem;
  margin: 1.3rem 0 0.8rem 0;
}

.content-body :global(h3) {
  color: #f1f3f7;
  font-size: 1.1rem;
  margin: 1.1rem 0 0.6rem 0;
}

.content-body :global(p) {
  margin-bottom: 1rem;
}

.content-body :global(a) {
  color: #3b82f6;
  text-decoration: none;
}

.content-body :global(a:hover) {
  text-decoration: underline;
}

.content-body :global(code) {
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
}

.content-body :global(pre) {
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}



@media (max-width: 768px) {
  .content-section {
    padding: 1rem;
    margin: 0.5rem 0;
  }

  .content-title {
    font-size: 1.5rem;
  }
}
</style>