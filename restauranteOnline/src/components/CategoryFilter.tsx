import { categorias } from '../data/categorias'

interface CategoryFilterProps {
  categoriaActiva: string
  onElegir: (categoria: string) => void
}

const claseBase = 'rounded-full border px-4 py-2 text-sm font-bold'
const claseActiva = 'border-negro bg-negro text-white'
const claseInactiva = 'border-borde bg-white hover:border-negro'

export default function CategoryFilter({ categoriaActiva, onElegir }: CategoryFilterProps) {
  return (
    <section aria-labelledby="titulo-categorias" className="mb-6">
      <h2 id="titulo-categorias" className="sr-only">
        Filtrar por categoría
      </h2>
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            aria-pressed={categoriaActiva === ''}
            onClick={() => onElegir('')}
            className={`${claseBase} ${categoriaActiva === '' ? claseActiva : claseInactiva}`}
          >
            Todas
          </button>
        </li>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <button
              type="button"
              aria-pressed={categoriaActiva === categoria}
              onClick={() => onElegir(categoria)}
              className={`${claseBase} ${categoriaActiva === categoria ? claseActiva : claseInactiva}`}
            >
              {categoria}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}