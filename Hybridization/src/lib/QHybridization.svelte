<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const contentOverview = {
    functionName: "Clase quplots.hybridization",
    description: `
      La clase <code>hybridization</code> posee los siguientes métodos:
      <ol>
        <li><code>generate_sp()</code></li>
        <li><code>generate_sp2()</code></li>
        <li><code>generate_sp3()</code></li>
        <li><code>generate_sp2d()</code></li>
        <li><code>generate_sp3d()</code></li>
        <li><code>generate_sp3d2()</code></li>
      </ol>
      <br>
      Para instanciar un objeto de esta clase:
      
    `,
    syntaxCode: `<span class="keyword">from quplots import hybridization</span>
<span class="variable">h</span> = <span class="function">hybridization</span>()`

  };

</script>

<DocumentationTemplate {...contentOverview} />
