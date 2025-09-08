<!-- GenerateSp2.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función generate_sp2()",
    functionName: "generate_sp2()",
    parameters: [],
    description: `Función que no recibe valores de entrada y que devuelve una tupla de 3 tensores.
    <br>
    La hibridación \\(sp^2\\) (trigonal planar) está descrita por las siguientes ecuaciones:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp^2_1} &= \\frac{1}{\\sqrt{3}}\\left(\\psi_s + \\sqrt{2} \\psi_{p_z}\\right) \\\\
          \\psi_{sp^2_2} &= \\frac{1}{\\sqrt{3}}\\left(\\psi_s - \\sqrt{\\frac{1}{2}} \\psi_{p_x} - \\sqrt{\\frac{3}{2}} \\psi_{p_z}\\right) \\\\
          \\psi_{sp^2_3} &= \\frac{1}{\\sqrt{3}}\\left(\\psi_s - \\sqrt{\\frac{1}{2}} \\psi_{p_x} + \\sqrt{\\frac{3}{2}} \\psi_{p_y}\\right)
        \\end{aligned}
      \\]
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span>, <span class="variable">psi3</span> = <span class="variable">h</span>.<span class="function">generate_sp2</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1, psi2 y psi3--`
  };
</script>

<DocumentationTemplate {...content} />
