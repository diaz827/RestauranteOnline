import { useState } from 'react'
import type { FormEvent } from 'react'

interface SearchBarProps {
  valorInicial: string
  onBuscar: (texto: string) => void
}

export default function SearchBar({ valorInicial, onBuscar }: SearchBarProps) {
  const [texto, setTexto] = useState(valorInicial)

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    onBuscar(texto.trim())
  }

  return (
    <form role="search" onSubmit={manejarEnvio} className="mb-6 flex gap-3">
      <label htmlFor="buscador-carta" className="sr-only">
        Buscar en la carta
      </label>
      <input
        id="buscador-carta"
        type="search"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        placeholder="Buscar un plato..."
        className="min-w-0 flex-1 rounded-md border border-borde bg-white px-4 py-3"
      />
      <button
        type="submit"
        className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
      >
        Buscar
      </button>
    </form>
  )
}