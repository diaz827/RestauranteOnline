import { useState } from 'react'
import { Link } from 'react-router'
import CartLine from '../components/CartLine'
import ConfirmDialog from '../components/ConfirmDialog'
import { useCart } from '../context/useCart'
import type { Product } from '../types/product'
import { formatearPrecio } from '../utils/formatearPrecio'

export default function CartPage() {
  const { items, totalUnidades, totalPrecio, quitar, vaciar } = useCart()
  const [platoAQuitar, setPlatoAQuitar] = useState<Product | null>(null)
  const [confirmandoVaciar, setConfirmandoVaciar] = useState(false)

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h1 className="mb-4 font-titulos text-3xl font-semibold">Tu carrito está vacío</h1>
        <p className="mb-6">Aún no has añadido ningún plato.</p>
        <Link
          to="/carta"
          className="inline-block rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
        >
          Ver la carta
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 lg:grid-cols-[1fr_20rem] lg:pb-8">
      <hgroup className="flex items-baseline gap-4 lg:col-span-2">
        <h1 className="w-fit border-b-4 border-rojo pb-1 font-titulos text-3xl font-semibold md:text-[40px]">
          Tu pedido
        </h1>
        <p className="text-gris">
          {totalUnidades} {totalUnidades === 1 ? 'artículo' : 'artículos'}
        </p>
      </hgroup>

      <section aria-label="Platos del carrito">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.plato.id}>
              <CartLine item={item} onQuitar={() => setPlatoAQuitar(item.plato)} />
            </li>
          ))}
        </ul>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <Link to="/carta" className="font-bold tracking-widest uppercase underline">
            ← Seguir comprando
          </Link>
          <button
            type="button"
            onClick={() => setConfirmandoVaciar(true)}
            className="rounded-md border border-negro px-5 py-3 font-bold tracking-widest uppercase"
          >
            Vaciar carrito
          </button>
        </footer>
      </section>

      <aside
        aria-labelledby="titulo-resumen"
        className="sticky bottom-0 -mx-4 border-t border-borde bg-white p-4 lg:static lg:mx-0 lg:self-start lg:rounded-xl lg:border lg:p-6"
      >
        <h2 id="titulo-resumen" className="mb-2 text-sm font-bold tracking-widest text-gris uppercase">
          Resumen
        </h2>
        <p className="flex items-center justify-between text-xl font-bold">
          Total <span>{formatearPrecio(totalPrecio)}</span>
        </p>
      </aside>

      <ConfirmDialog
        abierto={platoAQuitar !== null}
        titulo="¿Eliminar este plato?"
        texto={platoAQuitar === null ? '' : `Se quitará ${platoAQuitar.nombre} de tu pedido.`}
        textoConfirmar="Eliminar"
        onConfirmar={() => {
          if (platoAQuitar !== null) {
            quitar(platoAQuitar.id)
          }
          setPlatoAQuitar(null)
        }}
        onCancelar={() => setPlatoAQuitar(null)}
      />

      <ConfirmDialog
        abierto={confirmandoVaciar}
        titulo="¿Vaciar el carrito?"
        texto="Se quitarán todos los platos de tu pedido. No se puede deshacer."
        textoConfirmar="Vaciar"
        onConfirmar={() => {
          vaciar()
          setConfirmandoVaciar(false)
        }}
        onCancelar={() => setConfirmandoVaciar(false)}
      />
    </main>
  )
}
