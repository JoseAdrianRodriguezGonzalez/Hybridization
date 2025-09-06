<h2>Función get_cartesian_grid()</h2>

<p>Esta función genera una grilla cartesiana 3D para cálculos cuánticos.</p>

<div class="display-math">
  \\Psi(x,y,z) = R(r) Y(\\theta, \\phi)
</div>

<pre data-lang="python"><code class="language-python">
def get_cartesian_grid(nx=100, ny=100, nz=100, extent=10):
    x = np.linspace(-extent, extent, nx)
    y = np.linspace(-extent, extent, ny) 
    z = np.linspace(-extent, extent, nz)
    return np.meshgrid(x, y, z)
</code></pre>