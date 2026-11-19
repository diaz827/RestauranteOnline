import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { platos } from '../data/platos'
import { normalizarTexto } from '../utils/normalizarTexto'

interface SearchBarProps {
  valorInicial: string
  onBuscar: (texto: string) => void
}

export default function SearchBar({ valorInicial, onBuscar }: SearchBarProps) {
  const [texto, setTexto] = useState(valorInicial)
  const [abierto, setAbierto] = useState(false)

  const sugerencias =
    texto.trim() === ''
      ? []
      : platos
          .filter((plato) => normalizarTexto(plato.nombre).includes(normalizarTexto(texto.trim())))
          .slice(0, 6)

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setAbierto(false)
    onBuscar(texto.trim())
  }

  return (
    <form role="search" onSubmit={manejarEnvio} className="relative mb-6 flex gap-3">
      <label htmlFor="buscador-carta" className="sr-only">
        Buscar en la carta
      </label>
      <input
        id="buscador-carta"
        type="search"
        value={texto}
        onChange={(evento) => {
          setTexto(evento.target.value)
          setAbierto(true)
        }}
        onKeyDown={(evento) => {
          if (evento.key === 'Escape') setAbierto(false)
        }}
        autoComplete="off"
        placeholder="Buscar un plato..."
        className="min-w-0 flex-1 rounded-md border border-borde bg-white px-4 py-3 placeholder:text-gris"
      />
      <button
        type="submit"
        className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
      >
        Buscar
      </button>

      {abierto && sugerencias.length > 0 && (
        <ul
          className="absolute top-full right-0 left-0 z-10 mt-1 overflow-hidden rounded-md border border-borde bg-white shadow-lg"
        >
          {sugerencias.map((plato) => (
            <li key={plato.id}>
              <Link
                to={`/carta/${plato.id}`}
                className="block w-full px-4 py-2 text-left hover:bg-hueso focus:bg-hueso"
              >
                {plato.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p role="status" className="sr-only">
        {abierto && sugerencias.length > 0 ? `${sugerencias.length} sugerencias disponibles` : ''}
      </p>
    </form>
  )
}