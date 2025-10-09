<!-- GetM.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función getM()",
    functionName: "getM()",
    parameters: [],
    description: `Función que no recibe parámetros y devuelve el atributo m (número cuántico magnético) del objeto de la clase electron.`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">m</span> = <span class="variable">e</span>.<span class="function">getM</span>()
<span class="function">print</span>(<span class="variable">m</span>)`,
    output: `0`
  };
</script>

<DocumentationTemplate {...content} />
