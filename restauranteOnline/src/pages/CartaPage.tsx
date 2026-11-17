import { Link, useSearchParams } from 'react-router'
import ProductGrid from '../components/ProductGrid'
import SearchBar from '../components/SearchBar'
import { platos } from '../data/platos'
import { normalizarTexto } from '../utils/normalizarTexto'

export default function CartaPage() {
  const [parametros, setParametros] = useSearchParams()
  const q = parametros.get('q') ?? ''

  const resultados = platos.filter((plato) =>
    normalizarTexto(`${plato.nombre} ${plato.descripcion}`).includes(normalizarTexto(q)),
  )

  function buscar(texto: string) {
    if (texto === '') {
      setParametros({})
    } else {
      setParametros({ q: texto })
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 w-fit border-b-4 border-rojo pb-1 font-titulos text-3xl font-semibold md:text-[40px]">
        Nuestra carta
      </h1>

      <SearchBar key={q} valorInicial={q} onBuscar={buscar} />

      {q !== '' && (
        <p role="status" className="mb-6">
          Resultados para «{q}»: {resultados.length} {resultados.length === 1 ? 'plato' : 'platos'}{' '}
          <Link to="/carta" className="font-bold text-rojo underline">
            Limpiar búsqueda
          </Link>
        </p>
      )}

      {resultados.length === 0 ? (
        <section className="py-12 text-center">
          <h2 className="mb-4 font-titulos text-2xl">No hay platos que coincidan</h2>
          <Link
            to="/carta"
            className="inline-block rounded-md bg-negro px-5 py-3 font-bold text-white"
          >
            Ver toda la carta
          </Link>
        </section>
      ) : (
        <ProductGrid platos={resultados} />
      )}
    </main>
  )
}