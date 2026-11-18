import { useContext } from 'react'
import { CartContext } from './cartContextValue'

export function useCart() {
  const contexto = useContext(CartContext)
  if (contexto === null) {
    throw new Error('useCart debe usarse dentro de un CartProvider')
  }
  return contexto
}
