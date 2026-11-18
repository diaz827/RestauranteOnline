import type { Product } from '../types/product'

export interface CartItem {
  plato: Product
  cantidad: number
}

export type CartAction =
  | { tipo: 'anadir'; plato: Product; cantidad: number }
  | { tipo: 'cambiarCantidad'; id: number; cantidad: number }
  | { tipo: 'quitar'; id: number }
  | { tipo: 'vaciar' }

export function cartReducer(estado: CartItem[], accion: CartAction): CartItem[] {
  switch (accion.tipo) {
    case 'anadir': {
      const yaEsta = estado.some((item) => item.plato.id === accion.plato.id)
      if (yaEsta) {
        return estado.map((item) =>
          item.plato.id === accion.plato.id
            ? { ...item, cantidad: item.cantidad + accion.cantidad }
            : item,
        )
      }
      return [...estado, { plato: accion.plato, cantidad: accion.cantidad }]
    }
    case 'cambiarCantidad':
      return estado.map((item) =>
        item.plato.id === accion.id
          ? { ...item, cantidad: Math.max(1, accion.cantidad) }
          : item,
      )
    case 'quitar':
      return estado.filter((item) => item.plato.id !== accion.id)
    case 'vaciar':
      return []
  }
}