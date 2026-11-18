import { Link, useParams } from 'react-router'
import AddToCart from '../components/AddToCart'
import ProductGrid from '../components/ProductGrid'
import { platos } from '../data/platos'
import { formatearPrecio } from '../utils/formatearPrecio'
import { imagenPlato } from '../utils/imagenPlato'

export default function ProductDetailPage() {
  const { id } = useParams()
  const plato = platos.find((p) => p.id === Number(id))

  if (plato === undefined) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 text-center">
        <title>Plato no encontrado · Crunna Diner</title>
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

  const relacionados = platos
    .filter((otro) => otro.categoria === plato.categoria && otro.id !== plato.id)
    .slice(0, 4)

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <title>{`${plato.nombre} · Crunna Diner`}</title>
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
          {(plato.vegetariano || plato.picante) && (
            <ul className="flex flex-wrap gap-2">
              {plato.vegetariano && (
                <li className="rounded-full border-2 border-negro px-4 py-1 text-sm font-bold tracking-widest uppercase">
                  Vegetariano
                </li>
              )}
              {plato.picante && (
                <li className="rounded-full border-2 border-rojo px-4 py-1 text-sm font-bold tracking-widest text-rojo uppercase">
                  Picante
                </li>
              )}
            </ul>
          )}

          <AddToCart key={plato.id} plato={plato} />

          <section
            aria-labelledby="titulo-ficha"
            className="mt-2 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-borde py-5"
          >
            <h2 id="titulo-ficha" className="sr-only">
              Ficha del plato
            </h2>

            <section className="col-span-2 md:col-span-1">
              <h3 className="mb-1 text-sm font-bold tracking-widest text-gris uppercase">Ingredientes</h3>
              <p className="first-letter:uppercase">{plato.ingredientes.join(', ')}</p>
            </section>

            <section className="col-span-2 md:col-span-1">
              <h3 className="mb-1 text-sm font-bold tracking-widest text-gris uppercase">Alérgenos</h3>
              {plato.alergenos.length === 0 ? (
                <p>Sin alérgenos declarados</p>
              ) : (
                <ul className="flex flex-wrap gap-2">
                  {plato.alergenos.map((alergeno) => (
                    <li key={alergeno} className="rounded-full border border-borde px-3 py-1 text-sm">
                      {alergeno}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section>
              <h3 className="mb-1 text-sm font-bold tracking-widest text-gris uppercase">Calorías</h3>
              <p>{plato.calorias} kcal</p>
            </section>

            <section>
              <h3 className="mb-1 text-sm font-bold tracking-widest text-gris uppercase">Preparación</h3>
              <p>{plato.tiempoPreparacion} min</p>
            </section>
          </section>
        </section>
      </article>
      <section aria-labelledby="titulo-relacionados" className="mt-12">
        <h2 id="titulo-relacionados" className="mb-6 font-titulos text-2xl font-semibold">
          Platos relacionados
        </h2>
        <ProductGrid platos={relacionados} />
      </section>
    </main>
  )
}
