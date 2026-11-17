import { categorias } from '../data/categorias'

interface CategoryFilterProps {
  categoriaActiva: string
  onElegir: (categoria: string) => void
}

const claseBase = 'border-b-4 px-1 py-3 font-bold whitespace-nowrap'
const claseActiva = 'border-rojo text-negro'
const claseInactiva = 'border-transparent text-gris hover:text-negro'

export default function CategoryFilter({ categoriaActiva, onElegir }: CategoryFilterProps) {
  return (
    <section aria-labelledby="titulo-categorias" className="mb-6">
      <h2 id="titulo-categorias" className="sr-only">
        Filtrar por categoría
      </h2>
      <ul className="flex gap-5 overflow-x-auto border-b border-borde [scrollbar-width:none] lg:gap-8">
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