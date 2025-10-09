<!-- PlotSp.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_sp(**kwargs)",
    functionName: "plot_sp(**kwargs)",
    parameters: [
        {
            name: "**kwargs",
            type: "argumentos de palabra clave",
            description: `Estilos personalizados de plotly para la hibridación sp. La documentación completa está disponible <a href="https://plotly.com/python/reference/isosurface/" target="_blank">aquí</a>.`,
            mathNotation: null
        }
    ],
    description: `
    Función que únicamente requiere estilos personalizados de plotly para generar la gráfica de hibridación sp (lineal).
    `,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">p</span>.<span class="function">plot_sp</span>(
    <span class="parameter">colorscale</span>=<span class="string">'Viridis'</span>,
    <span class="parameter">reversescale</span>=<span class="keyword">True</span>,
    <span class="parameter">opacity</span>=<span class="number">0.6</span>,
    <span class="parameter">surface_count</span>=<span class="number">5</span>,
    <span class="parameter">caps</span>={<span class="string">x_show</span>: <span class="keyword">False</span>, <span class="string">y_show</span>: <span class="keyword">False</span>, <span class="string">z_show</span>: <span class="keyword">False</span>},
    <span class="parameter">lighting</span>={<span class="string">ambient</span>: <span class="number">0.4</span>, <span class="string">diffuse</span>: <span class="number">0.9</span>, <span class="string">specular</span>: <span class="number">0.5</span>, <span class="string">roughness</span>: <span class="number">0.9</span>, <span class="string">fresnel</span>: <span class="number">0.1</span>},
    <span class="parameter">lightposition</span>={<span class="string">x</span>: <span class="number">100</span>, <span class="string">y</span>: <span class="number">200</span>, <span class="string">z</span>: <span class="number">0</span>},
    <span class="parameter">showscale</span>=<span class="keyword">True</span>,
    <span class="parameter">name</span>=<span class="string">'Orbital'</span>
)`,
    output: `<div style="text-align:center; margin: 20px 0;">
        <img src="/Hybridization/documentacion/i_sp.png" style="max-width: 100%; height: auto; border-radius: 5px;">
        <div>Gráfica hibridación <code>sp</code> (lineal)</div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
