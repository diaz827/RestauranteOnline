import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import ReservasInfo from '../components/ReservasInfo'
import { horasDisponibles } from '../utils/horarioReservas'

interface DatosReserva {
  nombre: string
  telefono: string
  email: string
  fecha: string
  hora: string
  comensales: string
  comentarios: string
  privacidad: boolean
}

const DATOS_INICIALES: DatosReserva = {
  nombre: '',
  telefono: '',
  email: '',
  fecha: '',
  hora: '',
  comensales: '2',
  comentarios: '',
  privacidad: false,
}

const claseCampo = 'w-full rounded-md border border-borde bg-white px-4 py-3 font-normal'

function FormField({ etiqueta, children }: { etiqueta: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 font-bold">
      {etiqueta}
      {children}
    </label>
  )
}

export default function ReservasPage() {
  const [datos, setDatos] = useState<DatosReserva>(DATOS_INICIALES)

  const hoy = new Date().toLocaleDateString('sv-SE')
  const horas = horasDisponibles(datos.fecha)

  function cambiar(campo: keyof DatosReserva, valor: string | boolean) {
    if (campo === 'fecha') {
      setDatos({ ...datos, fecha: String(valor), hora: '' })
    } else {
      setDatos({ ...datos, [campo]: valor })
    }
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
  }

  return (
    <main className="mx-auto grid max-w-5xl gap-x-12 gap-y-8 px-4 py-8 lg:grid-cols-[1fr_20rem]">
      <header className="lg:col-span-2">
        <h1 className="mb-4 w-fit border-b-4 border-rojo pb-1 font-titulos text-3xl font-semibold md:text-[40px]">
          Reservar mesa
        </h1>
        <p>Reserva tu mesa en Crunna Diner. Te confirmaremos la reserva por correo electrónico.</p>
      </header>

      <form onSubmit={manejarEnvio} className="grid gap-8">
        <fieldset className="grid gap-4">
          <legend className="mb-3 font-titulos text-xl font-semibold">Tus datos</legend>

          <FormField etiqueta="Nombre">
            <input
              type="text"
              autoComplete="name"
              value={datos.nombre}
              onChange={(evento) => cambiar('nombre', evento.target.value)}
              className={claseCampo}
            />
          </FormField>

          <FormField etiqueta="Teléfono">
            <input
              type="tel"
              autoComplete="tel"
              value={datos.telefono}
              onChange={(evento) => cambiar('telefono', evento.target.value)}
              className={claseCampo}
            />
          </FormField>

          <FormField etiqueta="Correo electrónico">
            <input
              type="email"
              autoComplete="email"
              value={datos.email}
              onChange={(evento) => cambiar('email', evento.target.value)}
              className={claseCampo}
            />
          </FormField>
        </fieldset>

        <fieldset className="grid gap-4">
          <legend className="mb-3 font-titulos text-xl font-semibold">Tu reserva</legend>

          <FormField etiqueta="Fecha">
            <input
              type="date"
              min={hoy}
              value={datos.fecha}
              onChange={(evento) => cambiar('fecha', evento.target.value)}
              className={claseCampo}
            />
          </FormField>

          <FormField etiqueta="Hora">
            <select
              value={datos.hora}
              disabled={datos.fecha === ''}
              onChange={(evento) => cambiar('hora', evento.target.value)}
              className={`${claseCampo} disabled:opacity-50`}
            >
              <option value="">{datos.fecha === '' ? 'Elige primero la fecha' : 'Elige una hora'}</option>
              {horas.map((hora) => (
                <option key={hora} value={hora}>
                  {hora}
                </option>
              ))}
            </select>
          </FormField>

          <FormField etiqueta="Comensales">
            <select
              value={datos.comensales}
              onChange={(evento) => cambiar('comensales', evento.target.value)}
              className={claseCampo}
            >
              {Array.from({ length: 10 }, (_, indice) => indice + 1).map((numero) => (
                <option key={numero} value={String(numero)}>
                  {numero}
                </option>
              ))}
            </select>
          </FormField>

          <FormField etiqueta="Comentarios (opcional)">
            <textarea
              rows={4}
              value={datos.comentarios}
              onChange={(evento) => cambiar('comentarios', evento.target.value)}
              className={claseCampo}
            />
          </FormField>
        </fieldset>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={datos.privacidad}
            onChange={(evento) => cambiar('privacidad', evento.target.checked)}
            className="mt-1 h-5 w-5"
          />
          <span>Acepto que Crunna Diner use mis datos para gestionar la reserva.</span>
        </label>

        <button
          type="submit"
          className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
        >
          Reservar mesa
        </button>
      </form>

      <ReservasInfo />
    </main>
  )
}