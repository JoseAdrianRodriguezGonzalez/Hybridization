<!-- GenerateSp3.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función generate_sp3()",
    functionName: "generate_sp3()",
    parameters: [],
    description: `La hibridación \\(sp^3\\) (tetrahédrica) está descrita por las siguientes ecuaciones:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp^3_1} &= \\frac{1}{2}\\left(\\psi_s + \\psi_{p_x} + \\psi_{p_y} + \\psi_{p_z}\\right) \\\\
          \\psi_{sp^3_2} &= \\frac{1}{2}\\left(\\psi_s + \\psi_{p_x} - \\psi_{p_y} - \\psi_{p_z}\\right) \\\\
          \\psi_{sp^3_3} &= \\frac{1}{2}\\left(\\psi_s - \\psi_{p_x} - \\psi_{p_y} + \\psi_{p_z}\\right) \\\\
          \\psi_{sp^3_4} &= \\frac{1}{2}\\left(\\psi_s - \\psi_{p_x} + \\psi_{p_y} - \\psi_{p_z}\\right)
        \\end{aligned}
      \\]
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span>, <span class="variable">psi3</span>, <span class="variable">psi4</span> = <span class="variable">h</span>.<span class="function">generate_sp3</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1, psi2, psi3 y psi4--`
  };
</script>

<DocumentationTemplate {...content} />
