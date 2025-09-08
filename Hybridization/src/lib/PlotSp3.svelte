<!-- PlotSp3.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    title: "Función plot_sp3(**kwargs)",
    functionName: "plot_sp3(**kwargs)",
    parameters: [
        {
            name: "**kwargs",
            type: "argumentos de palabra clave",
            description: "Estilos personalizados de plotly para hibridación sp³ (tetrahedral).",
            mathNotation: "Ver documentación oficial de plotly isosurface."
        }
    ],
    description: `Función que únicamente requiere estilos personalizados de plotly para la gráfica de hibridación <code>sp^3</code> (tetrahédrica).`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> plots
<span class="variable">p</span> = <span class="function">plots</span>()
<span class="variable">p</span>.<span class="function">plot_sp3</span>(
    <span class="parameter">colorscale</span>=<span class="string">'Cividis'</span>,
    <span class="parameter">reversescale</span>=<span class="keyword">False</span>,
    <span class="parameter">opacity</span>=<span class="number">0.6</span>,
    <span class="parameter">surface_count</span>=<span class="number">5</span>
)`,
    output: `<div style="text-align:center; margin: 20px 0;">
        <img src="/Hybridization/documentacion/i_sp3.png" style="max-width: 100%; height: auto; border-radius: 5px;">
        <div>Gráfica hibridación <code>sp^3</code> (tetrahedral)</div>
    </div>`
};
</script>
<DocumentationTemplate {...content} />
