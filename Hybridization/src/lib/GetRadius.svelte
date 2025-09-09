<!-- GetRadius.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función getRadius()",
    functionName: "getRadius()",
    parameters: [],
    description: `Función que no recibe parámetros y devuelve el atributo radius de nuestro objeto de la clase electron.`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">radius</span> = <span class="variable">e</span>.<span class="function">getRadius</span>()
<span class="function">print</span>(<span class="variable">radius</span>)`,
    output: `1`
  };
</script>

<DocumentationTemplate {...content} />
