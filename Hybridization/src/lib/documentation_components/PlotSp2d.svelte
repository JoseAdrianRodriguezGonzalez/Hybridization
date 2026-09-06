<!-- PlotSp2d.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_sp2d(**kwargs)",
    functionName: "plot_sp2d(**kwargs)",
    parameters: [
        {
            name: "**kwargs",
            type: "argumentos de palabra clave",
            description: "Estilos personalizados de plotly para hibridación sp²d (square planar).",
            mathNotation: "Ver documentación oficial de plotly isosurface."
        }
    ],
    description: `Función que solamente requiere estilos personalizados de plotly para la gráfica de hibridación <code>sp^2d</code> (square planar).`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">p</span>.<span class="function">plot_sp2d</span>(
    <span class="parameter">colorscale</span>=<span class="string">'Inferno'</span>,
    <span class="parameter">reversescale</span>=<span class="keyword">False</span>,
    <span class="parameter">opacity</span>=<span class="number">0.6</span>,
    <span class="parameter">surface_count</span>=<span class="number">5</span>
)`,
    output: `<div style="text-align:center; margin: 20px 0;">
        <img src="/Hybridization/documentacion/i_sp2d.png" style="max-width: 100%; height: auto; border-radius: 5px;">
        <div>Gráfica hibridación <code>sp^2d</code> (square planar)</div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
