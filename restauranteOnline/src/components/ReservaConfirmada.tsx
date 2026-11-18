import { useEffect, useRef } from 'react'
import { LuCircleCheck } from 'react-icons/lu'
import { Link } from 'react-router'
import type { DatosReserva } from '../types/reserva'

interface ReservaConfirmadaProps {
  reserva: DatosReserva
  onNueva: () => void
}

export default function ReservaConfirmada({ reserva, onNueva }: ReservaConfirmadaProps) {
  const titulo = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    titulo.current?.focus()
  }, [])

  const fecha = new Date(`${reserva.fecha}T00:00`).toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const personas = reserva.comensales === '1' ? '1 persona' : `${reserva.comensales} personas`

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 text-center">
        <LuCircleCheck className="mx-auto mb-4 h-14 w-14 text-rojo" aria-hidden="true" />
        <h1
          ref={titulo}
          tabIndex={-1}
          className="mb-3 font-titulos text-3xl font-semibold outline-none md:text-[40px]"
        >
          Reserva recibida
        </h1>
        <p>
          Gracias, {reserva.nombre.trim()}. Hemos enviado la confirmación a{' '}
          <strong>{reserva.email.trim()}</strong>.
        </p>
      </header>

      <section
        aria-labelledby="titulo-resumen-reserva"
        className="rounded-xl border border-borde bg-white p-6"
      >
        <h2 id="titulo-resumen-reserva" className="mb-4 font-titulos text-xl font-semibold">
          Resumen de tu reserva
        </h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          <dt className="font-bold">Fecha</dt>
          <dd className="first-letter:uppercase">{fecha}</dd>
          <dt className="font-bold">Hora</dt>
          <dd>{reserva.hora}</dd>
          <dt className="font-bold">Comensales</dt>
          <dd>{personas}</dd>
          <dt className="font-bold">Nombre</dt>
          <dd>{reserva.nombre.trim()}</dd>
          <dt className="font-bold">Teléfono</dt>
          <dd>{reserva.telefono.trim()}</dd>
          <dt className="font-bold">Correo</dt>
          <dd>{reserva.email.trim()}</dd>
          {reserva.comentarios.trim() !== '' && (
            <>
              <dt className="font-bold">Comentarios</dt>
              <dd>{reserva.comentarios.trim()}</dd>
            </>
          )}
        </dl>
      </section>

      <footer className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={onNueva}
          className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
        >
          Hacer otra reserva
        </button>
        <Link
          to="/carta"
          className="rounded-md border border-negro px-5 py-3 font-bold tracking-widest uppercase"
        >
          Ver la carta
        </Link>
      </footer>
    </main>
  )
}
