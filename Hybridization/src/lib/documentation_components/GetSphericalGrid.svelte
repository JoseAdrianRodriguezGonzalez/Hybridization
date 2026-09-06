<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

const content = {
  title: "Función get_spherical_grid(x, y, z)",
  functionName: "get_spherical_grid(x, y, z)",
  parameters: [
    {
      "name": "x",
      "type": "lista, tupla o numpy.ndarray",
      "description": "Coordenadas x en el sistema cartesiano",
      "mathNotation": "$x \\in \\mathbb{R}^n$"
    },
    {
      "name": "y", 
      "type": "lista, tupla o numpy.ndarray",
      "description": "Coordenadas y en el sistema cartesiano",
      "mathNotation": "$y \\in \\mathbb{R}^n$"
    },
    {
      "name": "z",
      "type": "lista, tupla o numpy.ndarray", 
      "description": "Coordenadas z en el sistema cartesiano",
      "mathNotation": "$z \\in \\mathbb{R}^n$"
    }
  ],
  description: `Convierte las coordenadas cartesianas de entrada a coordenadas esféricas. 
  Devuelve una tupla de tres arrays numpy (r, θ, φ) que representan:
  <ul>
    <li><strong>r</strong>: Radio esférico (distancia desde el origen)</li>
    <li><strong>θ</strong>: Ángulo polar o colatitud (medido desde el eje z)</li>
    <li><strong>φ</strong>: Ángulo azimutal (medido desde el eje x en el plano xy)</li>
  </ul>
  Las coordenadas esféricas r, θ, φ son de gran utilidad en la solución de la ecuación de Schrödinger, 
  ya que es más clara y menos compleja la descripción de la partícula en coordenadas esféricas que en coordenadas cartesianas.`,
  equations: [
    {
      name: "Radio esférico",
      formula: "$$r = \\sqrt{x^2 + y^2 + z^2}$$",
      description: "Distancia euclidiana desde el origen hasta cada punto en el espacio 3D"
    },
    {
      name: "Ángulo azimutal",
      formula: "$$\\phi = \\tan^{-1} \\left( \\frac{y}{x} \\right)$$",
      description: "Ángulo de rotación en el plano xy medido desde el eje x positivo"
    },
    {
      name: "Ángulo polar (colatitud)",
      formula: "$$\\theta = \\cos^{-1} \\left( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\right)$$",
      description: "Ángulo medido desde el eje z positivo hacia abajo"
    }
  ],
  syntaxCode: `<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>

<span class="comment"># n, l, m, y radio</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">1</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">1</span>)

<span class="comment"># Obtener malla cartesiana</span>
<span class="variable">x</span>, <span class="variable">y</span>, <span class="variable">z</span> = <span class="variable">e</span>.<span class="function">get_cartesian_grid</span>()

<span class="comment"># Convertir a coordenadas esféricas</span>
<span class="variable">r</span>, <span class="variable">theta</span>, <span class="variable">phi</span> = <span class="variable">e</span>.<span class="function">get_spherical_grid</span>(<span class="variable">x</span>, <span class="variable">y</span>, <span class="variable">z</span>)

<span class="comment"># Mostrar el array r</span>
<span class="variable">r</span>`,
  output: `array([[[0.        , 0.2       , 0.4       , ..., 1.4       , 1.6       , 1.8       ],
        [0.2       , 0.28284271, 0.44721360, ..., 1.41421356, 1.61245155, 1.81384776],
        [0.4       , 0.44721360, 0.56568542, ..., 1.48660687, 1.64924225, 1.83303027],
        ...],
       [[0.2       , 0.28284271, 0.44721360, ..., 1.41421356, 1.61245155, 1.81384776],
        [0.28284271, 0.34641016, 0.50990195, ..., 1.43178211, 1.62788206, 1.82482951],
        [0.44721360, 0.50990195, 0.60827625, ..., 1.50332964, 1.67630546, 1.85472157],
        ...]])

Tupla de arrays numpy con coordenadas esféricas:
├─ r (radio): distancias desde el origen
├─ theta (polar): ángulos de 0 a π radianes  
└─ phi (azimutal): ángulos de 0 a 2π radianes`
};


</script>

<!-- Renderizar ambas funciones -->
<DocumentationTemplate {...content} />
