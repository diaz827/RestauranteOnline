interface QuantitySelectorProps {
  nombre: string
  cantidad: number
  onCambiar: (nueva: number) => void
}

const CANTIDAD_MINIMA = 1
const CANTIDAD_MAXIMA = 99

export default function QuantitySelector({ nombre, cantidad, onCambiar }: QuantitySelectorProps) {
  return (
    <span className="flex items-center rounded-md border border-borde bg-white">
      <button
        type="button"
        aria-label={`Quitar una unidad de ${nombre}`}
        disabled={cantidad <= CANTIDAD_MINIMA}
        onClick={() => onCambiar(cantidad - 1)}
        className="px-4 py-3 text-xl font-bold disabled:opacity-40"
      >
        –
      </button>
      <output className="w-10 text-center font-bold">{cantidad}</output>
      <button
        type="button"
        aria-label={`Añadir una unidad de ${nombre}`}
        disabled={cantidad >= CANTIDAD_MAXIMA}
        onClick={() => onCambiar(cantidad + 1)}
        className="px-4 py-3 text-xl font-bold disabled:opacity-40"
      >
        +
      </button>
    </span>
  )
}