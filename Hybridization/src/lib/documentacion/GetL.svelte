<!-- GetL.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función getL()",
    functionName: "getL()",
    parameters: [],
    description: `Función que no recibe parámetros y devuelve el atributo l (número cuántico azimutal) del objeto de la clase electron.`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">l</span> = <span class="variable">e</span>.<span class="function">getL</span>()
<span class="function">print</span>(<span class="variable">l</span>)`,
    output: `0`
  };
</script>

<DocumentationTemplate {...content} />
