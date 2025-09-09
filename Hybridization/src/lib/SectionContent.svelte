<script>
  export let sections;
  export let activeSection = 0;
  export let activeLink = 0;
</script>

<div class="section-content">
  <h2>{sections[activeSection].links[activeLink].name}</h2>
  <p>{sections[activeSection].links[activeLink].content}</p>
  <!-- Aquí podrías añadir imágenes o formatos extra según la sección -->
</div>
