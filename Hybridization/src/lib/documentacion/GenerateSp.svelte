<!-- GenerateSp.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función generate_sp()",
    functionName: "generate_sp()",
    parameters: [],
    description: `La función no recibe valores y devuelve una tupla de dos tensores.
    <br>
    La hibridación es la combinación lineal de funciones \\(\\psi\\) de onda, cumpliendo la ortonormalidad.
    La hibridación sp (linear) se define por las siguientes ecuaciones:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp_1} &= \\frac{1}{\\sqrt{2}}\\left(\\psi_s - \\psi_{p_z}\\right) \\\\
          \\psi_{sp_2} &= \\frac{1}{\\sqrt{2}}\\left(\\psi_s + \\psi_{p_z}\\right)
        \\end{aligned}
      \\]
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span> = <span class="variable">h</span>.<span class="function">generate_sp</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1 y psi2--`
  };
</script>

<DocumentationTemplate {...content} />
