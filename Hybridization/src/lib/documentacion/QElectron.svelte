<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
    functionName: "Clase quplots.electron",
    description: `
      Esta clase realiza los cálculos necesarios para describir las propiedades geométricas del electrón. Posee los siguientes atributos:
      <ul>
        <li><strong>n</strong>: número cuántico principal, define los niveles de energía del electrón.</li>
        <li><strong>l</strong>: número cuántico azimutal, define los subniveles o "subcapas" de energía del electrón.</li>
        <li><strong>m</strong>: número cuántico magnético, define la orientación de la dirección de movimiento del electrón.</li>
        <li><strong>radius</strong>: define un radio atómico.</li>
      </ul>
      <br>
      Los números cuánticos deben ser enteros y cumplen las siguientes reglas:
      <div style="text-align: center;">
        \\[
          \\begin{aligned}
            n &\\in \\mathbb{N} = \\{1,2,3, ...\\} \\\\
            l &\\in \\mathbb{Z}^+ = \\{0 \\leq l < n\\} \\\\
            m &\\in \\mathbb{Z} = \\{-l \\leq m \\leq l\\}
          \\end{aligned}
        \\]
      </div>
      <br>
      El radio puede ser \\( r \\in \\mathbb{R}^+ \\).

      La clase posee las siguientes funciones:
      <ol>
        <li><code>get_cartesian_grid()</code></li>
        <li><code>get_spherical_grid(x,y,z)</code></li>
        <li><code>compute_radial()</code></li>
        <li><code>compute_real_spherical()</code></li>
        <li><code>compute_imaginary_spherical()</code></li>
        <li><code>compute_wavefunction_2D(d)</code></li>
        <li><code>compute_wavefunction_3D()</code></li>
        <li><code>compute_wavefunction_3D_complex()</code></li>
        <li><code>getN()</code></li>
        <li><code>getL()</code></li>
        <li><code>getM()</code></li>
        <li><code>getRadius()</code></li>
      </ol>
      <br>
      El siguiente bloque muestra cómo instanciar un objeto de tipo <code>electron</code> con números cuánticos \\(n=1, l=0, m=0\\) y radio igual a 1:
      <br>
    `,
      syntaxCode: `<span class="keyword">from quplots import hybridization</span>
# n,l, m, y radio
e = electron(1, 0, 0, 1)</span>()`
  };
</script>

<DocumentationTemplate {...content} />