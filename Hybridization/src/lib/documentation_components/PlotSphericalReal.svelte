<!-- PlotSphericalReal.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_spherical_real(elect=None, R=None, theta=None, phi=None, fcolors=None, l=None, m=None, **plots_kwargs)",
    functionName: "plot_spherical_real(elect=None, R=None, theta=None, phi=None, fcolors=None, l=None, m=None, **plots_kwargs)",
    parameters: [
        {
            name: "elect",
            type: "objeto electron o None",
            description: "Objeto de la clase electron con valores definidos de n, l, m, radius. Si se proporciona, no es necesario especificar R, theta, phi, fcolors, l, m.",
            mathNotation: "Objeto electron con $(n,l,m,r)$ definidos"
        },
        {
            name: "R",
            type: "numpy.ndarray o None",
            description: "Array de valores de radio generado por electron.compute_real_spherical(), solo requerido si elect es None.",
            mathNotation: "$R \\in \\mathbb{R}^{n \\times m}$"
        },
        {
            name: "theta",
            type: "numpy.ndarray o None",
            description: "Array de valores de coordenada polar generado por electron.compute_real_spherical(), solo requerido si elect es None.",
            mathNotation: "$\\theta \\in [0,\\pi]$"
        },
        {
            name: "phi",
            type: "numpy.ndarray o None",
            description: "Array de valores de coordenada azimutal generado por electron.compute_real_spherical(), solo requerido si elect es None.",
            mathNotation: "$\\phi \\in [0,2\\pi]$"
        },
        {
            name: "fcolors",
            type: "numpy.ndarray o None",
            description: "Array de colores definido por la distribución de probabilidad generado por electron.compute_real_spherical(), solo requerido si elect es None.",
            mathNotation: "Distribución de colores, normalizada sobre la malla"
        },
        {
            name: "l",
            type: "int o None",
            description: "Número cuántico azimutal, solo requerido si elect es None.",
            mathNotation: "$l \\in \\mathbb{Z}^+, l < n$"
        },
        {
            name: "m",
            type: "int o None",
            description: "Número cuántico magnético, solo requerido si elect es None.",
            mathNotation: "$m \\in \\mathbb{Z}, -l \\leq m \\leq l$"
        },
        {
            name: "**plots_kwargs",
            type: "argumentos de palabra clave",
            description: "Parámetros adicionales para personalizar el estilo del gráfico según matplotlib/plotly.",
        }
    ],
    description: `
    La función requiere varios parámetros. Puede recibir un objeto electron o los valores manualmente.<br>
    Estos valores suelen ser resultado de la función <code>e.compute_real_spherical()</code>.<br><br>
    Recordando la sección 3.4, la función <code>compute_real_spherical()</code> devuelve una tupla de 6 elementos:<br>
    Los primeros 4 son arreglos numpy de dos dimensiones, los otros dos son escalares.<br><br>
    <strong>Nota:</strong> En la versión 0.0.1 existe un bug al correr <code>plot_spherical_real</code> <i>sin el objeto</i> en Google Colab, por cuestiones numéricas de $\\theta,\\phi$. Se recomienda usar <code>plot_spherical_real</code> <i>con el objeto</i> en Colab.<br><br>
    `,
    equations: [],
    syntaxCode: `<span class="comment"># Con objeto electron</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>, <span class="function">plots</span>
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">6</span>, <span class="number">5</span>, <span class="number">0</span>, <span class="number">15</span>)
<span class="variable">R</span>, <span class="variable">theta</span>, <span class="variable">phi</span>, <span class="variable">colors</span>, <span class="variable">l</span>, <span class="variable">m</span> = <span class="variable">e1</span>.<span class="function">compute_real_spherical</span>()
<span class="variable">p</span>.<span class="function">plot_spherical_real</span>(<span class="variable">e1</span>, <span class="parameter">colorscale</span>=<span class="string">'Inferno'</span>, <span class="parameter">showscale</span>=<span class="keyword">False</span>)
<br>
<span class="comment"># Sin objeto electron</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>, <span class="function">plots</span>
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">6</span>, <span class="number">5</span>, <span class="number">0</span>, <span class="number">15</span>)
<span class="variable">R</span>, <span class="variable">theta</span>, <span class="variable">phi</span>, <span class="variable">colors</span>, <span class="variable">l</span>, <span class="variable">m</span> = <span class="variable">e1</span>.<span class="function">compute_real_spherical</span>()
<span class="variable">p</span>.<span class="function">plot_spherical_real</span>(<span class="keyword">None</span>, <span class="variable">R</span>, <span class="variable">phi</span>, <span class="variable">theta</span>, <span class="variable">colors</span>, <span class="variable">l</span>, <span class="variable">m</span>, <span class="parameter">colorscale</span>=<span class="string">'Icefire'</span>, <span class="parameter">showscale</span>=<span class="keyword">False</span>)`,
    output: `<div style="display: flex; gap: 20px; margin: 20px 0;">
        <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/real_objeto.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
            <div>Gráfico con el objeto <code>electron</code></div>
        </div>
         <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/real_sin_objeto.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
            <div>Gráfico sin el objeto</div>
        </div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
