import type { Product } from '../types/product'

function precioFinal(plato: Product): number {
  return plato.precioOferta ?? plato.precio
}

export function ordenarPlatos(platos: Product[], orden: string): Product[] {
  const copia = [...platos]

  if (orden === 'precio-asc') {
    copia.sort((a, b) => precioFinal(a) - precioFinal(b))
  } else if (orden === 'precio-desc') {
    copia.sort((a, b) => precioFinal(b) - precioFinal(a))
  } else if (orden === 'nombre') {
    copia.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'))
  }

  return copia
}