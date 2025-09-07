<!-- GetSphericalGrid.svelte -->
<script>
import DocumentationTemplate from './DocumentationTemplate.svelte';

// Todos los datos definidos localmente en el componente
const content = {
  title: "Función get_spherical_grid(x, y, z)",
  functionName: "get_spherical_grid(x, y, z)",
  parameters: [
    {
      "name": "x",
      "type": "numpy.ndarray",
      "description": "Array de coordenadas x en el sistema cartesiano",
      "mathNotation": "$x \\in \\mathbb{R}^n$"
    },
    {
      "name": "y", 
      "type": "numpy.ndarray",
      "description": "Array de coordenadas y en el sistema cartesiano",
      "mathNotation": "$y \\in \\mathbb{R}^n$"
    },
    {
      "name": "z",
      "type": "numpy.ndarray", 
      "description": "Array de coordenadas z en el sistema cartesiano",
      "mathNotation": "$z \\in \\mathbb{R}^n$"
    }
  ],
  returnDescription: `Convierte las coordenadas cartesianas de entrada a coordenadas esféricas. 
  Devuelve una tupla de tres arrays numpy (r, θ, φ) que representan:
  <ul>
    <li><strong>r</strong>: Radio esférico (distancia desde el origen)</li>
    <li><strong>θ</strong>: Ángulo polar o colatitud (medido desde el eje z)</li>
    <li><strong>φ</strong>: Ángulo azimutal (medido desde el eje x en el plano xy)</li>
  </ul>
  La función mantiene las mismas dimensiones de los arrays de entrada.`,
  equations: [
    {
      name: "Radio esférico",
      formula: "$$r = \\sqrt{x^2 + y^2 + z^2}$$",
      description: "Distancia euclidiana desde el origen hasta cada punto en el espacio 3D"
    },
    {
      name: "Ángulo polar (colatitud)",
      formula: "$$\\theta = \\cos^{-1} \\left( \\frac{z}{\\sqrt{x^2 + y^2 + z^2}} \\right)$$",
      description: "Ángulo medido desde el eje z positivo hacia abajo, donde $\\theta \\in [0, \\pi]$"
    },
    {
      name: "Ángulo azimutal",
      formula: "$$\\phi = \\tan^{-1} \\left( \\frac{y}{x} \\right)$$",
      description: "Ángulo de rotación en el plano xy medido desde el eje x positivo, donde $\\phi \\in [0, 2\\pi]$"
    }
  ],
  syntaxCode: `<span class="keyword">import</span> numpy <span class="keyword">as</span> np
<span class="keyword">from</span> quplots <span class="keyword">import</span> <span class="function">electron</span>

<span class="comment"># Crear instancia del electrón (n=2, l=1, m=0, grid_size=10)</span>
<span class="variable">e</span> = <span class="function">electron</span>(<span class="number">2</span>, <span class="number">1</span>, <span class="number">0</span>, <span class="number">10</span>)

<span class="comment"># Obtener malla cartesiana</span>
<span class="variable">x</span>, <span class="variable">y</span>, <span class="variable">z</span> = <span class="variable">e</span>.<span class="function">get_cartesian_grid</span>()

<span class="comment"># Convertir a coordenadas esféricas</span>
<span class="variable">r</span>, <span class="variable">theta</span>, <span class="variable">phi</span> = <span class="variable">e</span>.<span class="function">get_spherical_grid</span>(<span class="variable">x</span>, <span class="variable">y</span>, <span class="variable">z</span>)

<span class="comment"># Verificar que las dimensiones se mantienen</span>
<span class="function">print</span>(<span class="string">f"Entrada - x: {x.shape}, y: {y.shape}, z: {z.shape}"</span>)
<span class="function">print</span>(<span class="string">f"Salida - r: {r.shape}, θ: {theta.shape}, φ: {phi.shape}"</span>)

<span class="comment"># Ejemplo de uso con la función de onda</span>
<span class="variable">psi</span> = <span class="variable">e</span>.<span class="function">wave_function</span>(<span class="variable">r</span>, <span class="variable">theta</span>, <span class="variable">phi</span>)`,
  output: `Entrada - x: (10, 10, 10), y: (10, 10, 10), z: (10, 10, 10)
Salida - r: (10, 10, 10), θ: (10, 10, 10), φ: (10, 10, 10)

Tupla de arrays numpy:
├─ r (radio): valores de 0 a ~15 unidades
├─ theta (polar): valores de 0 a π radianes  
└─ phi (azimutal): valores de 0 a 2π radianes

Cada array mantiene la forma (10, 10, 10) de la malla original.`
};
</script>

<DocumentationTemplate {...content} />