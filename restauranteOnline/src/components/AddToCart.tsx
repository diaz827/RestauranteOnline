import { useState } from 'react'
import type { FormEvent } from 'react'
import { useCart } from '../context/CartContext'
import type { Product } from '../types/product'

interface AddToCartProps {
  plato: Product
}

const CANTIDAD_MAXIMA = 99

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
        <span className="flex items-center rounded-md border border-borde bg-white">
          <button
            type="button"
            aria-label="Quitar una unidad"
            disabled={cantidad === 1}
            onClick={() => cambiarCantidad(cantidad - 1)}
            className="px-4 py-3 text-xl font-bold disabled:opacity-40"
          >
            –
          </button>
          <output className="w-10 text-center font-bold">{cantidad}</output>
          <button
            type="button"
            aria-label="Añadir una unidad"
            disabled={cantidad === CANTIDAD_MAXIMA}
            onClick={() => cambiarCantidad(cantidad + 1)}
            className="px-4 py-3 text-xl font-bold disabled:opacity-40"
          >
            +
          </button>
        </span>

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