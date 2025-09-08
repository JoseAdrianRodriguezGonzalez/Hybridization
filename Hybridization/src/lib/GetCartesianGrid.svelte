<!-- GetCartesianGrid.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función get_cartesian_grid()",
    functionName: "get_cartesian_grid()",
    parameters: [],
    description: `Devuelve una tupla de 3 elementos (x, y, z). Cada elemento es un array de numpy que representa una malla tridimensional. Esta malla está por defecto definida en el rango <code>x, y, z \\in [-10, 10]</code> con 51 divisiones. Es útil para cálculos posteriores en sistemas de coordenadas cartesianas.`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">x</span>, <span class="variable">y</span>, <span class="variable">z</span> = <span class="variable">e</span>.<span class="function">get_cartesian_grid</span>()
<span class="function">print</span>(<span class="variable">x</span>)`,
    output: `array([
  [[-10. , -10. , -10. , ..., -10. , -10. , -10. ],
   [ -9.6,  -9.6,  -9.6, ...,  -9.6,  -9.6,  -9.6],
   [ -9.2,  -9.2,  -9.2, ...,  -9.2,  -9.2,  -9.2],
   ...,
   [  9.2,   9.2,   9.2, ...,   9.2,   9.2,   9.2],
   [  9.6,   9.6,   9.6, ...,   9.6,   9.6,   9.6],
   [ 10. ,  10. ,  10. , ...,  10. ,  10. ,  10. ]],
  [[-10. , -10. , -10. , ..., -10. , -10. , -10. ],
   [ -9.6,  -9.6,  -9.6, ...,  -9.6,  -9.6,  -9.6],
   [ -9.2,  -9.2,  -9.2, ...,  -9.2,  -9.2,  -9.2],
   ...,
   [  9.2,   9.2,   9.2, ...,   9.2,   9.2,   9.2],
   [  9.6,   9.6,   9.6, ...,   9.6,   9.6,   9.6],
   [ 10. ,  10. ,  10. , ...,  10. ,  10. ,  10. ]],
  [[-10. , -10. , -10. , ..., -10. , -10. , -10. ],
   [ -9.6,  -9.6,  -9.6, ...,  -9.6,  -9.6,  -9.6],
   [ -9.2,  -9.2,  -9.2, ...,  -9.2,  -9.2,  -9.2],
   ...,
   [  9.2,   9.2,   9.2, ...,   9.2,   9.2,   9.2],
   [  9.6,   9.6,   9.6, ...,   9.6,   9.6,   9.6],
   [ 10. ,  10. ,  10. , ...,  10. ,  10. ,  10. ]]
])`
  };
</script>

<DocumentationTemplate {...content} />
