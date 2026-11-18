import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import ReservasInfo from '../components/ReservasInfo'
import type { DatosReserva } from '../types/reserva'
import { horasDisponibles } from '../utils/horarioReservas'
import { validarReserva } from '../utils/validarReserva'
import type { ErroresReserva } from '../utils/validarReserva'

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

const claseCampo = 'w-full rounded-md border bg-white px-4 py-3 font-normal disabled:opacity-50'

interface FormFieldProps {
  campo: keyof DatosReserva
  etiqueta: string
  error?: string
  children: ReactNode
}

function FormField({ campo, etiqueta, error, children }: FormFieldProps) {
  return (
    <span className="grid gap-1">
      <label htmlFor={campo} className="font-bold">
        {etiqueta}
      </label>
      {children}
      {error !== undefined && (
        <small id={`error-${campo}`} className="font-bold text-rojo">
          {error}
        </small>
      )}
    </span>
  )
}

export default function ReservasPage() {
  const [datos, setDatos] = useState<DatosReserva>(DATOS_INICIALES)
  const [intentado, setIntentado] = useState(false)
  const [hoy] = useState(() => new Date().toLocaleDateString('sv-SE'))

  const horas = horasDisponibles(datos.fecha)
  const errores: ErroresReserva = intentado ? validarReserva(datos, hoy) : {}
  const hayErrores = Object.keys(errores).length > 0

  function cambiar(campo: keyof DatosReserva, valor: string | boolean) {
    if (campo === 'fecha') {
      setDatos({ ...datos, fecha: String(valor), hora: '' })
    } else {
      setDatos({ ...datos, [campo]: valor })
    }
  }

  function atributos(campo: keyof DatosReserva) {
    const hayError = errores[campo] !== undefined
    return {
      id: campo,
      'aria-invalid': hayError,
      'aria-describedby': hayError ? `error-${campo}` : undefined,
      className: `${claseCampo} ${hayError ? 'border-rojo' : 'border-borde'}`,
    }
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setIntentado(true)
  }

  return (
    <main className="mx-auto grid max-w-5xl gap-x-12 gap-y-8 px-4 py-8 lg:grid-cols-[1fr_20rem]">
      <header className="lg:col-span-2">
        <h1 className="mb-4 w-fit border-b-4 border-rojo pb-1 font-titulos text-3xl font-semibold md:text-[40px]">
          Reservar mesa
        </h1>
        <p>Reserva tu mesa en Crunna Diner. Te confirmaremos la reserva por correo electrónico.</p>
      </header>

      <form onSubmit={manejarEnvio} noValidate className="grid gap-8">
        <fieldset className="grid gap-4">
          <legend className="mb-3 font-titulos text-xl font-semibold">Tus datos</legend>

          <FormField campo="nombre" etiqueta="Nombre" error={errores.nombre}>
            <input
              type="text"
              autoComplete="name"
              value={datos.nombre}
              onChange={(evento) => cambiar('nombre', evento.target.value)}
              {...atributos('nombre')}
            />
          </FormField>

          <FormField campo="telefono" etiqueta="Teléfono" error={errores.telefono}>
            <input
              type="tel"
              autoComplete="tel"
              value={datos.telefono}
              onChange={(evento) => cambiar('telefono', evento.target.value)}
              {...atributos('telefono')}
            />
          </FormField>

          <FormField campo="email" etiqueta="Correo electrónico" error={errores.email}>
            <input
              type="email"
              autoComplete="email"
              value={datos.email}
              onChange={(evento) => cambiar('email', evento.target.value)}
              {...atributos('email')}
            />
          </FormField>
        </fieldset>

        <fieldset className="grid gap-4">
          <legend className="mb-3 font-titulos text-xl font-semibold">Tu reserva</legend>

          <FormField campo="fecha" etiqueta="Fecha" error={errores.fecha}>
            <input
              type="date"
              min={hoy}
              value={datos.fecha}
              onChange={(evento) => cambiar('fecha', evento.target.value)}
              {...atributos('fecha')}
            />
          </FormField>

          <FormField campo="hora" etiqueta="Hora" error={errores.hora}>
            <select
              value={datos.hora}
              disabled={datos.fecha === ''}
              onChange={(evento) => cambiar('hora', evento.target.value)}
              {...atributos('hora')}
            >
              <option value="">{datos.fecha === '' ? 'Elige primero la fecha' : 'Elige una hora'}</option>
              {horas.map((hora) => (
                <option key={hora} value={hora}>
                  {hora}
                </option>
              ))}
            </select>
          </FormField>

          <FormField campo="comensales" etiqueta="Comensales">
            <select
              value={datos.comensales}
              onChange={(evento) => cambiar('comensales', evento.target.value)}
              {...atributos('comensales')}
            >
              {Array.from({ length: 10 }, (_, indice) => indice + 1).map((numero) => (
                <option key={numero} value={String(numero)}>
                  {numero}
                </option>
              ))}
            </select>
          </FormField>

          <FormField campo="comentarios" etiqueta="Comentarios (opcional)">
            <textarea
              rows={4}
              value={datos.comentarios}
              onChange={(evento) => cambiar('comentarios', evento.target.value)}
              {...atributos('comentarios')}
            />
          </FormField>
        </fieldset>

        <span className="grid gap-1">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={datos.privacidad}
              onChange={(evento) => cambiar('privacidad', evento.target.checked)}
              aria-invalid={errores.privacidad !== undefined}
              aria-describedby={errores.privacidad !== undefined ? 'error-privacidad' : undefined}
              className="mt-1 h-5 w-5"
            />
            <span>Acepto que Crunna Diner use mis datos para gestionar la reserva.</span>
          </label>
          {errores.privacidad !== undefined && (
            <small id="error-privacidad" className="font-bold text-rojo">
              {errores.privacidad}
            </small>
          )}
        </span>

        {hayErrores && (
          <p role="alert" className="font-bold text-rojo">
            Revisa los campos marcados en rojo.
          </p>
        )}

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