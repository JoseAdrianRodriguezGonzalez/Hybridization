<!-- PlotWf3d.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_wf_3d(elect, **kwargs_plot)",
    functionName: "plot_wf_3d(elect, **kwargs_plot)",
    parameters: [
        {
            name: "elect",
            type: "objeto electron",
            description: "Objeto de la clase electron con parámetros n, l, m, radius.",
            mathNotation: "Objeto electron con $(n,l,m,r)$ definidos"
        },
        {
            name: "**kwargs_plot",
            type: "argumentos de palabra clave",
            description: "Estilos personalizables para gráficas isosurfaces de plotly según documentación oficial.",
            mathNotation: "<a href='https://plotly.com/python/reference/isosurface/' target='_blank'>Documentación plotly isosurface</a>"
        }
    ],
    description: `
    La función recibe el objeto <code>elect</code> de la clase <code>electron</code>, y estilos personalizables para gráficos de isosurfaces de plotly.<br>
    Se pueden personalizar opacidad, colores, iluminación, posición de luz, tamaño y más.<br>
    La documentación completa de estilos está disponible <a href='https://plotly.com/python/reference/isosurface/' target='_blank'>aquí</a>.
    `,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> electron, plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">e1</span> = <span class="function">electron</span>(<span class="number">3</span>, <span class="number">1</span>, <span class="number">0</span>, <span class="number">5</span>)
<span class="variable">p</span>.<span class="function">plot_wf_3d</span>(
    <span class="variable">e1</span>,
    <span class="parameter">colorscale</span>=<span class="string">'Plotly3'</span>,
    <span class="parameter">opacity</span>=<span class="number">0.7</span>,
    <span class="parameter">surface_count</span>=<span class="number">4</span>,
    <span class="parameter">reversescale</span>=<span class="keyword">True</span>,
    <span class="parameter">caps</span>={<span class="string">x_show</span>: <span class="keyword">False</span>, <span class="string">y_show</span>: <span class="keyword">False</span>, <span class="string">z_show</span>: <span class="keyword">False</span>},
    <span class="parameter">showscale</span>=<span class="keyword">False</span>,
    <span class="parameter">lighting</span>={<span class="string">ambient</span>: <span class="number">0.1</span>, <span class="string">diffuse</span>: <span class="number">0.4</span>, <span class="string">specular</span>: <span class="number">1.0</span>, <span class="string">roughness</span>: <span class="number">0.05</span>, <span class="string">fresnel</span>: <span class="number">0.2</span>},
    <span class="parameter">lightposition</span>={<span class="string">x</span>: <span class="number">200</span>, <span class="string">y</span>: <span class="number">100</span>, <span class="string">z</span>: <span class="number">0</span>},
    <span class="parameter">width</span>=<span class="number">700</span>,
    <span class="parameter">height</span>=<span class="number">700</span>
)`,
    output: `<div style="text-align:center; margin: 20px 0;">
        <img src="/Hybridization/documentacion/wf3d.png" style="max-width: 100%; height: auto; border-radius: 5px;">
        <div>Función de onda en 3 dimensiones con estilos de plotly</div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
