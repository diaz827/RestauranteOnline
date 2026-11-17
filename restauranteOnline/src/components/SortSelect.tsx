interface SortSelectProps {
  orden: string
  onElegir: (orden: string) => void
}

const opciones = [
  { valor: '', texto: 'Recomendado' },
  { valor: 'precio-asc', texto: 'Precio: de menor a mayor' },
  { valor: 'precio-desc', texto: 'Precio: de mayor a menor' },
  { valor: 'nombre', texto: 'Nombre: de la A a la Z' },
]

export default function SortSelect({ orden, onElegir }: SortSelectProps) {
  return (
    <label className="mb-6 flex items-center gap-3 md:justify-end">
      <span className="font-bold">Ordenar por</span>
      <select
        value={orden}
        onChange={(evento) => onElegir(evento.target.value)}
        className="rounded-md border border-borde bg-white px-3 py-2"
      >
        {opciones.map((opcion) => (
          <option key={opcion.valor} value={opcion.valor}>
            {opcion.texto}
          </option>
        ))}
      </select>
    </label>
  )
}