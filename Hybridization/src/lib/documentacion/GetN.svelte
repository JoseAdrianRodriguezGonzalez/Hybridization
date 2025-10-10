<!-- GetN.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función getN()",
    functionName: "getN()",
    description: `Función que no recibe parámetros y devuelve el atributo n (número cuántico principal) del objeto de la clase electron.`,
        parameters: [{ name: "Sin parámetros",type:"", description: "Función que no recibe parámetros" }],

    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">n</span> = <span class="variable">e</span>.<span class="function">getN</span>()
<span class="function">print</span>(<span class="variable">n</span>)`,
    output: `1`
  };
</script>

<DocumentationTemplate {...content} />
