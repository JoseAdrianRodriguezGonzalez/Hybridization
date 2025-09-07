# get_cartesian_grid()

La función  $get\_cartesian_grid()$ no requiere ningún parámetro de entrada,devuelve una tupla de 3 elementos, *x*, *y*, *z*. La
función genera una malla de tres dimensiones, cada elemento es un array de numpy, útil para cálculos
posteriores. Esta malla por defecto está definida en un rango de *x*, *y*, *z* ∈ [−10, 10] con 51 divisiones.

## Sintaxis

```python
from quplots import electron
# n,l, m, y radio
e=electron(1,0,0,1)
x,y,z=e.get_cartesian_grid()
print(x)