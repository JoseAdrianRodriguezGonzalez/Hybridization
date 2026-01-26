<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
const content = {
    title: "Función plot_radial_(elect=None,d=None,n=None,l=None,**plot_kwargs)",
    functionName: "plot_radial_(elect=None,d=None,n=None,l=None,**plot_kwargs)",
    parameters: [
        {
            "name": "elect",
            "type": "objeto electron o None",
            "description": "Objeto de la clase electron con valores definidos de n, l, m, r. Si se proporciona, no es necesario especificar d, n, l",
            "mathNotation": "Objeto electron con $(n,l,m,r)$ definidos"
        },
        {
            "name": "d",
            "type": "float o None",
            "description": "Radio atómico (solo necesario si elect=None)",
            "mathNotation": "$d \\in \\mathbb{R}^+$"
        },
        {
            "name": "n",
            "type": "int o None", 
            "description": "Número cuántico principal (solo necesario si elect=None)",
            "mathNotation": "$n \\in \\mathbb{N}$"
        },
        {
            "name": "l",
            "type": "int o None",
            "description": "Número cuántico azimutal (solo necesario si elect=None)",
            "mathNotation": "$l \\in \\mathbb{Z}^+, l < n$"
        },
        {
            "name": "**plot_kwargs",
            "type": "argumentos de palabra clave",
            "description": "Parámetros adicionales para personalizar el estilo del gráfico según matplotlib.pyplot.plot",
            "mathNotation": "Ver <a href='https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib-pyplot-plot' target='_blank'>documentación matplotlib</a>"
        }
    ],
    description: `Genera un gráfico de la función radial del orbital atómico. La función acepta dos modos de uso:
    <br><br>
    <strong>Modo 1: Con objeto electron</strong><br>
    Se proporciona un objeto electron previamente configurado con los parámetros n, l, m, r.
    <br><br>
    <strong>Modo 2: Parámetros manuales</strong><br>
    Se especifican manualmente los valores de d (radio), n (número cuántico principal) y l (número cuántico azimutal).
    <br><br>
    
    El parámetro <strong>**plot_kwargs</strong> permite personalizar completamente el estilo visual del gráfico utilizando todos los parámetros disponibles en matplotlib.pyplot.plot.`,
    equations: [
        {
            name: "Función radial del hidrógeno",
            formula: "$$R_{nl}(r) = \\sqrt{\\left(\\frac{2Z}{na_0}\\right)^3 \\frac{(n-l-1)!}{2n(n+l)!}} e^{-Zr/na_0} \\left(\\frac{2Zr}{na_0}\\right)^l L_{n-l-1}^{2l+1}\\left(\\frac{2Zr}{na_0}\\right)$$",
            description: "Función radial para orbitales hidrogenoides donde Z es el número atómico, n es el número cuántico principal, l es el número cuántico azimutal, y $L_{n-l-1}^{2l+1}$ son los polinomios de Laguerre asociados"
        }
    ],
    syntaxCode: `<span class="comment"># Ejemplo 1: Usando objeto electron</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>, <span class="function">plots</span>

<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">15</span>)
<span class="variable">p</span> = <span class="function">plots</span>()

<span class="variable">p</span>.<span class="function">plot_radial_</span>(
    <span class="variable">e1</span>,
    <span class="parameter">color</span>=<span class="string">'#1f77b4'</span>,
    <span class="parameter">linestyle</span>=<span class="string">'-'</span>,
    <span class="parameter">linewidth</span>=<span class="number">2.0</span>,
    <span class="parameter">marker</span>=<span class="string">'o'</span>,
    <span class="parameter">markersize</span>=<span class="number">5</span>,
    <span class="parameter">markerfacecolor</span>=<span class="string">'white'</span>,
    <span class="parameter">markeredgecolor</span>=<span class="string">'#1f77b4'</span>,
    <span class="parameter">markeredgewidth</span>=<span class="number">1.2</span>,
    <span class="parameter">alpha</span>=<span class="number">1.0</span>
)

<span class="comment"># Ejemplo 2: Usando parámetros manuales</span>
<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">plots</span>

<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">p</span>.<span class="function">plot_radial_</span>(
    <span class="keyword">None</span>, <span class="number">15</span>, <span class="number">1</span>, <span class="number">0</span>,
    <span class="parameter">color</span>=<span class="string">'#4a27b4'</span>,
    <span class="parameter">linestyle</span>=<span class="string">'--'</span>,
    <span class="parameter">linewidth</span>=<span class="number">2.0</span>,
    <span class="parameter">marker</span>=<span class="string">','</span>,
    <span class="parameter">markersize</span>=<span class="number">5</span>,
    <span class="parameter">markerfacecolor</span>=<span class="string">'white'</span>,
    <span class="parameter">markeredgecolor</span>=<span class="string">'#1f77b4'</span>,
    <span class="parameter">markeredgewidth</span>=<span class="number">1.2</span>,
    <span class="parameter">alpha</span>=<span class="number">1.0</span>
)`,
    output: `<div style="display: flex; gap: 20px; margin: 20px 0;">
        <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/radial_objeto.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
        </div>
         <div style="flex: 1; text-align: center;">
            <img src="/Hybridization/documentacion/radial_sin_objeto.png"  style="max-width: 100%; height: auto; border-radius: 5px;">
        </div>
    </div>`
};
</script>

<!-- Renderizar la documentación -->
<DocumentationTemplate {...content} />