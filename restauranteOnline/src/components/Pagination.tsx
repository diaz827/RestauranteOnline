interface PaginationProps {
  paginaActual: number
  totalPaginas: number
  onCambiar: (pagina: number) => void
}

const claseBase = 'rounded-md border px-4 py-2 font-bold'
const claseActiva = 'border-negro bg-negro text-white'
const claseInactiva = 'border-borde bg-white hover:border-negro'
const claseDesactivada = 'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-borde'

export default function Pagination({ paginaActual, totalPaginas, onCambiar }: PaginationProps) {
  if (totalPaginas <= 1) {
    return null
  }

  const paginas = Array.from({ length: totalPaginas }, (_, indice) => indice + 1)

  return (
    <nav aria-label="Paginación" className="mt-8">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          <button
            type="button"
            disabled={paginaActual === 1}
            onClick={() => onCambiar(paginaActual - 1)}
            className={`${claseBase} ${claseInactiva} ${claseDesactivada} tracking-widest uppercase`}
          >
            Anterior
          </button>
        </li>

        {paginas.map((pagina) => (
          <li key={pagina}>
            <button
              type="button"
              aria-label={`Página ${pagina}`}
              aria-current={pagina === paginaActual ? 'page' : undefined}
              onClick={() => onCambiar(pagina)}
              className={`${claseBase} ${pagina === paginaActual ? claseActiva : claseInactiva}`}
            >
              {pagina}
            </button>
          </li>
        ))}

        <li>
          <button
            type="button"
            disabled={paginaActual === totalPaginas}
            onClick={() => onCambiar(paginaActual + 1)}
            className={`${claseBase} ${claseInactiva} ${claseDesactivada} tracking-widest uppercase`}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  )
}