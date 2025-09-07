La función $get\_spherical_grid(x,y,z)$ recibe como parámetros 3 variables; $x,y,z$. Las variables tienen que ser o una lista,
tupla, un arreglo de la librería numpy. Devuelve una tupla de tres elementos, cada elemento es un
array de la librería numpy. La función convierte las coordenadas cartesianas entregadas en la entrada
a coordenadas esférica, devueltas en al salida de la función.
Las coordenadas $r, θ, ϕ$, son de gran utilidad en la solución de la ecuación de Schrödinger, ya que
es más clara y a su vez, no llega a ser complejo, el describir a la partícula en coordenadas esféricas que
en coordenadas cartesianas.

La conversión de coordenadas reales a esféricas se realiza como lo describe las siguientes ecuaciones:


\begin{align}
    r &= \sqrt{x^2 + y^2 + z^2} \label{Eq:r} \\
    \phi &= \tan^{-1} \left( \frac{y}{x} \right) \label{Eq:phi} \\
    \theta &= \cos^{-1} \left( \frac{z}{\sqrt{x^2 + y^2 + z^2}} \right) \label{Eq:theta}
\end{align}

## Sintaxis

```python
from quplots import electron
# n,l, m, y radio
e=electron(1,0,0,1)
x,y,z=e.get_cartesian_grid()
r,theta,phi=e.get_spherical_grid(x,y,z)
r