<!-- ComputeImaginarySpherical.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función compute_imaginary_spherical()",
    functionName: "compute_imaginary_spherical()",
    parameters: [],
    description: `Función que no recibe parámetros y que devuelve una tupla de 5 elementos: el valor de la función de los armónicos esféricos, los valores de las coordenadas θ, φ, los rangos de colores definidos por la distribución de probabilidad y los números cuánticos l, m.
    <br>
    Calcula la parte compleja de los armónicos esféricos.`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">Y</span>, <span class="variable">theta</span>, <span class="variable">phi</span>, <span class="variable">colors</span>, <span class="variable">l</span>, <span class="variable">m</span> = <span class="variable">e</span>.<span class="function">compute_imaginary_spherical</span>()
<span class="function">print</span>(<span class="string">f'Y={Y}'</span>)
<span class="function">print</span>(<span class="string">f'theta={theta}'</span>)
<span class="function">print</span>(<span class="string">f'phi={phi}'</span>)
<span class="function">print</span>(<span class="string">f'Probability Colors={colors}'</span>)
<span class="function">print</span>(<span class="string">f'Number L={l}'</span>)
<span class="function">print</span>(<span class="string">f'Number m={m}'</span>)`,
    output: `Y=[[0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]
 [0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]
 [0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]
 ...
 [0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]
 [0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]
 [0.28209479 0.28209479 0.28209479 ... 0.28209479 0.28209479 0.28209479]]
theta=[[0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]
 [0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]
 [0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]
 ...
 [0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]
 [0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]
 [0.         0.03173326 0.06346652 ... 3.07812614 3.10985939 3.14159265]]
phi=[[0.         0.         0.         ... 0.         0.         0.        ]
 [0.06346652 0.06346652 0.06346652 ... 0.06346652 0.06346652 0.06346652]
 [0.12693304 0.12693304 0.12693304 ... 0.12693304 0.12693304 0.12693304]
 ...
 [6.15625227 6.15625227 6.15625227 ... 6.15625227 6.15625227 6.15625227]
 [6.21971879 6.21971879 6.21971879 ... 6.21971879 6.21971879 6.21971879]
 [6.28318531 6.28318531 6.28318531 ... 6.28318531 6.28318531 6.28318531]]
Probability Colors=[[nan nan nan ... nan nan nan]
 [nan nan nan ... nan nan nan]
 [nan nan nan ... nan nan nan]
 ...
 [nan nan nan ... nan nan nan]
 [nan nan nan ... nan nan nan]
 [nan nan nan ... nan nan nan]]
Number L=0
Number m=0
`
  };
</script>

<DocumentationTemplate {...content} />
