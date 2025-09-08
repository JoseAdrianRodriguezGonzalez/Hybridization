<!-- GenerateSp2d.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función generate_sp2d()",
    functionName: "generate_sp2d()",
    parameters: [],
    description: `Función que no recibe valores y retorna una tupla de 4 tensores.
    <br>
    La hibridación \\(sp^{2}d\\) (square planar) se describe con las siguientes ecuaciones:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp^{2}d_1} &= \\frac{1}{2}\\psi_s + \\frac{1}{\\sqrt{2}}\\psi_{p_x} + \\frac{1}{2}\\psi_{d_{x^2 - y^2}} \\\\
          \\psi_{sp^{2}d_2} &= \\frac{1}{2}\\psi_s - \\frac{1}{\\sqrt{2}}\\psi_{p_x} + \\frac{1}{2}\\psi_{d_{x^2 - y^2}} \\\\
          \\psi_{sp^{2}d_3} &= \\frac{1}{2}\\psi_s + \\frac{1}{\\sqrt{2}}\\psi_{p_y} - \\frac{1}{2}\\psi_{d_{x^2 - y^2}} \\\\
          \\psi_{sp^{2}d_4} &= \\frac{1}{2}\\psi_s - \\frac{1}{\\sqrt{2}}\\psi_{p_y} - \\frac{1}{2}\\psi_{d_{x^2 - y^2}}
        \\end{aligned}
      \\]
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span>, <span class="variable">psi3</span>, <span class="variable">psi4</span> = <span class="variable">h</span>.<span class="function">generate_sp2d</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1, psi2, psi3 y psi4--`
  };
</script>

<DocumentationTemplate {...content} />
