import { createContext } from 'react'
import type { Product } from '../types/product'
import type { CartItem } from './cartReducer'

export interface CartContextValue {
  items: CartItem[]
  totalUnidades: number
  totalPrecio: number
  anadir: (plato: Product, cantidad: number) => void
  cambiarCantidad: (id: number, cantidad: number) => void
  quitar: (id: number) => void
  vaciar: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
