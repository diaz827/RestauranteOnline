import { createContext, useContext, useReducer } from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../types/product'
import { cartReducer } from './cartReducer'
import type { CartItem } from './cartReducer'

interface CartContextValue {
  items: CartItem[]
  totalUnidades: number
  totalPrecio: number
  anadir: (plato: Product, cantidad: number) => void
  cambiarCantidad: (id: number, cantidad: number) => void
  quitar: (id: number) => void
  vaciar: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

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

export function useCart() {
  const contexto = useContext(CartContext)
  if (contexto === null) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return contexto
}