<!-- QuplotsPlotsOverview.svelte -->
<script>
  import DocumentationTemplate from './DocumentationTemplate.svelte';

  const content = {
    functionName: "Clase quplots.plots",
    description: `
      La clase <code>plots</code> posee los siguientes métodos:
      <ol>
        <li><code>plot_radial_(elect=None, d=None, n=None, l=None, **plot_kwargs)</code></li>
        <li><code>plot_spherical_real(elect=None, R=None, theta=None, phi=None, fcolors=None, l=None, m=None, **plots_kwargs)</code></li>
        <li><code>plot_spherical_imaginary(elect=None, R=None, theta=None, phi=None, fcolors=None, l=None, m=None, **plots_kwargs)</code></li>
        <li><code>plot_wf_2d(elect=None, psi_sq=None, max_r=None, n=None, l=None, m=None, **plot_kwargs)</code></li>
        <li><code>plot_wf_3d(elect, **kwargs_plot)</code></li>
        <li><code>plot_sp(**kwargs)</code></li>
        <li><code>plot_sp2(**kwargs)</code></li>
        <li><code>plot_sp3(**kwargs)</code></li>
        <li><code>plot_sp2d(**kwargs)</code></li>
        <li><code>plot_sp3d(**kwargs)</code></li>
        <li><code>plot_sp3d2(**kwargs)</code></li>
      </ol>
      <br>
      Para usar todas las funciones de esta librería se debe instanciar un objeto de la clase <code>plots</code>:

      Ninguna de las funciones retorna valores, solamente realizan gráficos con matplotlib y plotly.
    `,
    syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> plots
<span class="variable">p</span> = plots() <span class="function"></span>`,
  };
</script>

<DocumentationTemplate {...content} />
