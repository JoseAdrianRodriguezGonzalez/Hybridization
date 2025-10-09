<!-- ComputeWavefunction2D.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función compute_wavefunction_2D(d=20)",
    functionName: "compute_wavefunction_2D(d=20)",
    parameters: [
      {
        name: "d",
        type: "int (opcional)",
        description: "Parámetro de amplitud para la proyección de la función de onda en 2D. Por defecto es 20.",
        mathNotation: null
      }
    ],
    description: `La función recibe un parámetro de amplitud, por defecto es 20. Devuelve el valor de psi (\\(\\psi\\)), r, n, l, m.
    <br>Esta función realiza la proyección de la función de onda \\(\\psi\\) para un plano de dos dimensiones, definida como:
    <div style="text-align: center;">
      $$|\\psi_{n,l,m}|^2 = |R_n(r) \\cdot Y_{l,m}(\\theta, \\phi)|^2$$
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron
<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)
<span class="variable">psi</span>, <span class="variable">r</span>, <span class="variable">n</span>, <span class="variable">l</span>, <span class="variable">m</span> = <span class="variable">e</span>.<span class="function">compute_wavefunction_2D</span>()
<span class="function">print</span>(<span class="string">f'Psi={psi}'</span>)
<span class="function">print</span>(<span class="string">f'rmax={r}'</span>)
<span class="function">print</span>(<span class="string">f'n={n}'</span>)
<span class="function">print</span>(<span class="string">f'Number L={l}'</span>)
<span class="function">print</span>(<span class="string">f'Number m={m}'</span>)`,
    output: `Psi=[[4.32069605e-05 4.39825656e-05 4.47704891e-05 ... 4.47704891e-05
  4.39825656e-05 4.32069605e-05]
 [4.39825656e-05 4.47736914e-05 4.55774175e-05 ... 4.55774175e-05
  4.47736914e-05 4.39825656e-05]
 [4.47704891e-05 4.55774175e-05 4.63972337e-05 ... 4.63972337e-05
  4.55774175e-05 4.47704891e-05]
 ...
 [4.47704891e-05 4.55774175e-05 4.63972337e-05 ... 4.63972337e-05
  4.55774175e-05 4.47704891e-05]
 [4.39825656e-05 4.47736914e-05 4.55774175e-05 ... 4.55774175e-05
  4.47736914e-05 4.39825656e-05]
 [4.32069605e-05 4.39825656e-05 4.47704891e-05 ... 4.47704891e-05
  4.39825656e-05 4.32069605e-05]]
rmax=3.148314831483148
n=1
Number L=0
Number m=0`
  };
</script>

<DocumentationTemplate {...content} />
