<!-- GenerateSp3d2.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';
  const content = {
    title: "Función generate_sp3d2()",
    functionName: "generate_sp3d2()",
    description: `La función no recibe valores y retorna una tupla de 6 tensores.
    <br>
    La hibridación \\(sp^{3}d^{2}\\) (trigonal bipiramidal) se describe como:
    <br>
    <div style="text-align: center;">
      \\[
        \\begin{aligned}
          \\psi_{sp^{3}d^{2}_1} &= \\frac{1}{\\sqrt{6}}\, \\psi_s + \\frac{1}{\\sqrt{2}}\, \\psi_{p_z} + \\frac{1}{\\sqrt{3}}\, \\psi_{d_{z^{2}}} \\\\
          \\psi_{sp^{3}d^{2}_2} &= \\frac{1}{\\sqrt{6}}\, \\psi_s + \\frac{1}{\\sqrt{2}}\, \\psi_{p_x} - \\frac{1}{\\sqrt{12}}\, \\psi_{d_{z^{2}}} + \\frac{1}{2}\, \\psi_{d_{x^{2} - y^{2}}} \\\\
          \\psi_{sp^{3}d^{2}_3} &= \\frac{1}{\\sqrt{6}}\, \\psi_s + \\frac{1}{\\sqrt{2}}\, \\psi_{p_y} - \\frac{1}{\\sqrt{12}}\, \\psi_{d_{z^{2}}} - \\frac{1}{2}\, \\psi_{d_{x^{2} - y^{2}}} \\\\
          \\psi_{sp^{3}d^{2}_4} &= \\frac{1}{\\sqrt{6}}\, \\psi_s - \\frac{1}{\\sqrt{2}}\, \\psi_{p_x} - \\frac{1}{\\sqrt{12}}\, \\psi_{d_{z^{2}}} + \\frac{1}{2}\, \\psi_{d_{x^{2} - y^{2}}} \\\\
          \\psi_{sp^{3}d^{2}_5} &= \\frac{1}{\\sqrt{6}}\, \\psi_s - \\frac{1}{\\sqrt{2}}\, \\psi_{p_y} - \\frac{1}{\\sqrt{12}}\, \\psi_{d_{z^{2}}} - \\frac{1}{2}\, \\psi_{d_{x^{2} - y^{2}}} \\\\
          \\psi_{sp^{3}d^{2}_6} &= \\frac{1}{\\sqrt{6}}\, \\psi_s - \\frac{1}{\\sqrt{2}}\, \\psi_{p_z} + \\frac{1}{\\sqrt{3}}\, \\psi_{d_{z^{2}}}
        \\end{aligned}
      \\]
    </div>`,
    parameters: [{ name: "Sin parámetros",type:"", description: "Función que no recibe parámetros" }],

    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> hybridization
<span class="variable">h</span> = <span class="function">hybridization</span>()
<span class="variable">psi1</span>, <span class="variable">psi2</span>, <span class="variable">psi3</span>, <span class="variable">psi4</span>, <span class="variable">psi5</span>, <span class="variable">psi6</span> = <span class="variable">h</span>.<span class="function">generate_sp3d2</span>()
<span class="function">print</span>(<span class="variable">psi1</span>)`,
    output: `--Salida de los tensores psi1, psi2, psi3, psi4, psi5 y psi6--`
  };
</script>

<DocumentationTemplate {...content} />
