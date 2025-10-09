<!-- GenerateSp3d.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    title: "Función generate_sp3d()",
    functionName: "generate_sp3d()",
    parameters: [],
    description: `Función que no recibe valores y retorna una tupla de 5 tensores.
    <br>
    La hibridación \\(sp^{3}d\\) (trigonal bipyramidal) se describe como:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp^{3}d_1} &= \\sqrt{\\frac{1}{3}}\\left(\\psi_s + \\sqrt{2} \\psi_{p_z}\\right) \\\\
          \\psi_{sp^{3}d_2} &= \\sqrt{\\frac{1}{3}}\\left(\\psi_s - \\sqrt{\\frac{1}{2}} \\psi_{p_x} + \\sqrt{\\frac{3}{2}} \\psi_{p_y}\\right) \\\\
          \\psi_{sp^{3}d_3} &= \\sqrt{\\frac{1}{3}}\\left(\\psi_s - \\sqrt{\\frac{1}{2}} \\psi_{p_x} - \\sqrt{\\frac{3}{2}} \\psi_{p_z}\\right) \\\\
          \\psi_{sp^{3}d_4} &= \\sqrt{\\frac{1}{2}}\\left(\\psi_{d_{z^2}} + \\psi_{p_z}\\right) \\\\
          \\psi_{sp^{3}d_5} &= \\sqrt{\\frac{1}{2}}\\left(-\\psi_{d_{z^2}} + \\psi_{p_z}\\right)
        \\end{aligned}
      \\]
    </div>`,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span>, <span class="variable">psi3</span>, <span class="variable">psi4</span>, <span class="variable">psi5</span> = <span class="variable">h</span>.<span class="function">generate_sp3d</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1, psi2, psi3, psi4 y psi5--`
  };
</script>

<DocumentationTemplate {...content} />
