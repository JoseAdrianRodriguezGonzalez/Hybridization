<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const computeRadialContent = {
  title: "Función compute_radial()",
  functionName: "compute_radial()",
  description: "Calcula la función radial de la ecuación de Erwin Schrödinger. No recibe parametros y devuelve un escalar para la función radial.",
  returnDescription: `Calcula la función radial de la ecuación de Schrödinger. 
  No recibe argumentos y devuelve un escalar para la función radial. 
  Siendo n, l los números cuánticos principal y azimutal, α₀ el radio de Bohr 
  y L^(2l+1)_(n-l-1) las funciones asociadas de Laguerre.`,
  equations: [
    {
      name: "Función radial",
      formula: "$$R_{nl}(r)=\\sqrt{\\left(\\frac{2}{n\\alpha_0}\\right)^3\\frac{(n-l-1)!}{2n(n+l)!}}\\left(e^{\\frac{-r}{n\\alpha_o}}\\right)\\left(\\frac{2r}{n\\alpha_0}\\right)^l\\cdot L^{2l+1}_{n-l-1}\\left(\\frac{2r}{n\\alpha_0}\\right)$$",
      description: "Función radial de la ecuación de Schrödinger donde n, l son los números cuánticos, α₀ es el radio de Bohr y L son las funciones asociadas de Laguerre"
    }
  ],
  parameters: [{ name: "Sin parámetros",type:"", description: "Función que no recibe parámetros" }],

  syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>

<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)

<span class="comment"># Calcular la función radial</span>
<span class="variable">e</span>.<span class="function">compute_radial</span>()`,
  output: `0.7357588823428847`
};
</script>

<DocumentationTemplate {...computeRadialContent} />