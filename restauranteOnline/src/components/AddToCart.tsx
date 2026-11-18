import { useState } from 'react'
import type { FormEvent } from 'react'
import { useCart } from '../context/useCart'
import type { Product } from '../types/product'
import QuantitySelector from './QuantitySelector'

interface AddToCartProps {
  plato: Product
}

export default function AddToCart({ plato }: AddToCartProps) {
  const [cantidad, setCantidad] = useState(1)
  const [anadido, setAnadido] = useState(false)
  const { anadir } = useCart()

  function cambiarCantidad(nueva: number) {
    setCantidad(nueva)
    setAnadido(false)
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    anadir(plato, cantidad)
    setCantidad(1)
    setAnadido(true)
  }

  return (
    <>
      <form onSubmit={manejarEnvio} className="flex flex-wrap items-center gap-3">
        <QuantitySelector nombre={plato.nombre} cantidad={cantidad} onCambiar={cambiarCantidad} />

        <button
          type="submit"
          className="min-w-40 flex-1 rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
        >
          Añadir al carrito
        </button>
      </form>

      <p role="status" className="font-bold text-rojo empty:hidden">
        {anadido && 'Añadido al carrito'}
      </p>
    </>
  )
}