import { useReducer } from 'react'
import type { ReactNode } from 'react'
import { CartContext } from './cartContextValue'
import type { CartContextValue } from './cartContextValue'
import { cartReducer } from './cartReducer'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const totalUnidades = items.reduce((suma, item) => suma + item.cantidad, 0)
  const totalPrecio = items.reduce(
    (suma, item) => suma + item.cantidad * (item.plato.precioOferta ?? item.plato.precio),
    0,
  )

  const valor: CartContextValue = {
    items,
    totalUnidades,
    totalPrecio,
    anadir: (plato, cantidad) => dispatch({ tipo: 'anadir', plato, cantidad }),
    cambiarCantidad: (id, cantidad) => dispatch({ tipo: 'cambiarCantidad', id, cantidad }),
    quitar: (id) => dispatch({ tipo: 'quitar', id }),
    vaciar: () => dispatch({ tipo: 'vaciar' }),
  }

  return <CartContext value={valor}>{children}</CartContext>
}
