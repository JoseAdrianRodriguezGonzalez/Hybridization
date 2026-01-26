<!-- PlotWf2d.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_wf_2d(elect=None, psi_sq=None, max_r=None, n=None, l=None, m=None, **plot_kwargs)",
    functionName: "plot_wf_2d(elect=None, psi_sq=None, max_r=None, n=None, l=None, m=None, **plot_kwargs)",
    parameters: [
        {
            name: "elect",
            type: "objeto electron o None",
            description: "Objeto de la clase electron con parámetros n, l, m, radio. Si se proporciona, no es necesario especificar psi_sq, max_r, n, l, m.",
            mathNotation: "Objeto electron con $(n,l,m,r)$ definidos"
        },
        {
            name: "psi_sq",
            type: "numpy.ndarray o None",
            description: "Arreglo numpy con la función de onda al cuadrado, resultado de compute_wavefunction_2D(). Solo requerido si elect es None.",
            mathNotation: "$\\psi_{sq} \\in \\mathbb{R}^{n \\times m}$"
        },
        {
            name: "max_r",
            type: "float o None",
            description: "Valor máximo del radio, resultado de compute_wavefunction_2D(). Solo requerido si elect es None.",
            mathNotation: "$max_r \\in \\mathbb{R}^+$"
        },
        {
            name: "n",
            type: "int o None",
            description: "Número cuántico principal. Solo requerido si elect es None.",
            mathNotation: "$n \\in \\mathbb{N}$"
        },
        {
            name: "l",
            type: "int o None",
            description: "Número cuántico azimutal. Solo requerido si elect es None.",
            mathNotation: "$l \\in \\mathbb{Z}^+, l < n$"
        },
        {
            name: "m",
            type: "int o None",
            description: "Número cuántico magnético. Solo requerido si elect es None.",
            mathNotation: "$m \\in \\mathbb{Z}, -l \\leq m \\leq l$"
        },
        {
            name: "**plot_kwargs",
            type: "argumentos de palabra clave",
            description: "Parámetros adicionales para personalizar el estilo del gráfico según matplotlib/plotly.",
            mathNotation: "Ver documentación matplotlib/plotly"
        }
    ],
    description: `
    La función requiere el objeto electron de la clase electron o los parámetros psi_sq, max_r, n, l, m manualmente.<br>
    Según la sección 3.6, devuelve una tupla con psi (arreglo numpy), r (arreglo numpy), y los escalares enteros n, l, m.<br><br>
    `,
    equations: [],
    syntaxCode: `<span class="comment"># plot_wf_2d con objeto electron</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> electron, plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">3</span>, <span class="number">1</span>, <span class="number">0</span>, <span class="number">5</span>)
<span class="variable">p</span>.<span class="function">plot_wf_2d</span>(<span class="variable">e1</span>)
<br>
<span class="comment"># plot_wf_2d sin objeto electron</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> electron, plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">3</span>, <span class="number">1</span>, <span class="number">0</span>, <span class="number">5</span>)
<span class="variable">y</span>, <span class="variable">r</span>, <span class="variable">n</span>, <span class="variable">l</span>, <span class="variable">m</span> = <span class="variable">e1</span>.<span class="function">compute_wavefunction_2D</span>()
<span class="variable">p</span>.<span class="function">plot_wf_2d</span>(<span class="keyword">None</span>, <span class="variable">y</span>, <span class="variable">r</span>, <span class="variable">n</span>, <span class="variable">l</span>, <span class="variable">m</span>,
             <span class="parameter">levels</span>=<span class="number">10</span>,
             <span class="parameter">cmap</span>=<span class="string">'viridis'</span>,
             <span class="parameter">linewidths</span>=<span class="number">1.5</span>,
             <span class="parameter">alpha</span>=<span class="number">0.8</span>)`,
    output: `<div style="display: flex; gap: 20px; margin: 20px 0;">
        <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/wf2d.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
            <div>Gráfico con el objeto <code>electron</code></div>
        </div>
         <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/WF2D1.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
            <div>Gráfico sin el objeto</div>
        </div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
