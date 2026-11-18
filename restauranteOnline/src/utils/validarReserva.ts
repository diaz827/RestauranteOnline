import type { DatosReserva } from '../types/reserva'
import { horasDisponibles } from './horarioReservas'

export type ErroresReserva = Partial<Record<keyof DatosReserva, string>>

const REGEX_TELEFONO = /^(\+34)?[6-9]\d{8}$/
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validarReserva(datos: DatosReserva, hoy: string): ErroresReserva {
  const errores: ErroresReserva = {}

  if (datos.nombre.trim().length < 2) {
    errores.nombre = 'Escribe tu nombre (mínimo 2 letras).'
  }

  const telefono = datos.telefono.replace(/[\s-]/g, '')
  if (telefono === '') {
    errores.telefono = 'Escribe tu teléfono.'
  } else if (!REGEX_TELEFONO.test(telefono)) {
    errores.telefono = 'Escribe un teléfono válido de 9 cifras, por ejemplo 612 34 56 78.'
  }

  const email = datos.email.trim()
  if (email === '') {
    errores.email = 'Escribe tu correo electrónico.'
  } else if (!REGEX_EMAIL.test(email)) {
    errores.email = 'Escribe un correo válido, por ejemplo nombre@correo.com.'
  }

  if (datos.fecha === '') {
    errores.fecha = 'Elige una fecha.'
  } else if (datos.fecha < hoy) {
    errores.fecha = 'La fecha no puede ser anterior a hoy.'
  }

  if (datos.hora === '') {
    errores.hora = datos.fecha === '' ? 'Elige primero la fecha y después la hora.' : 'Elige una hora.'
  } else if (!horasDisponibles(datos.fecha).includes(datos.hora)) {
    errores.hora = 'Esa hora no está disponible para el día elegido.'
  }

  if (!datos.privacidad) {
    errores.privacidad = 'Debes aceptar el uso de tus datos para poder reservar.'
  }

  return errores
}