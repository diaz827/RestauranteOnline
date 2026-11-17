import { Link, useParams } from 'react-router'
import { platos } from '../data/platos'
import { formatearPrecio } from '../utils/formatearPrecio'
import { imagenPlato } from '../utils/imagenPlato'

export default function ProductDetailPage() {
  const { id } = useParams()
  const plato = platos.find((p) => p.id === Number(id))

  if (plato === undefined) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h1 className="mb-4 font-titulos text-3xl font-semibold">Este plato no existe</h1>
        <p className="mb-6">Puede que el enlace esté mal escrito o que el plato ya no esté en la carta.</p>
        <Link
          to="/carta"
          className="inline-block rounded-md bg-negro px-5 py-3 font-bold text-white"
        >
          Volver a la carta
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/carta" className="mb-6 inline-block font-bold tracking-widest uppercase underline">
        ← Volver a la carta
      </Link>

      <article className="grid gap-8 md:grid-cols-2">
        <img
          src={imagenPlato(plato.imagen)}
          alt={plato.nombre}
          className="aspect-4/3 w-full rounded-xl object-cover"
        />

        <section className="flex flex-col gap-4">
          <hgroup>
            <p className="text-sm font-bold tracking-widest text-gris uppercase">
              {plato.categoria}
            </p>
            <h1 className="font-titulos text-3xl font-semibold md:text-[40px]">{plato.nombre}</h1>
          </hgroup>

          <p className="flex flex-wrap items-center gap-3">
            {plato.precioOferta !== null && <s className="text-gris">{formatearPrecio(plato.precio)}</s>}
            <span className="text-3xl font-bold">
              {formatearPrecio(plato.precioOferta ?? plato.precio)}
            </span>
            {plato.precioOferta !== null && (
              <span className="rounded bg-negro px-2 py-1 text-xs font-bold tracking-widest text-white">
                OFERTA
              </span>
            )}
          </p>

          <p>{plato.descripcion}</p>
        </section>
      </article>
    </main>
  )
}