type Turno = [primera: number, ultima: number]

// Minutos desde las 00:00. La última reserva es una hora antes del cierre.
const TURNOS_ENTRE_SEMANA: Turno[] = [
  [13 * 60, 15 * 60],
  [20 * 60, 22 * 60 + 30],
]
const TURNOS_FIN_DE_SEMANA: Turno[] = [[13 * 60, 23 * 60]]
const INTERVALO_MINUTOS = 30

function formatearHora(minutos: number): string {
  const horas = String(Math.floor(minutos / 60)).padStart(2, '0')
  const resto = String(minutos % 60).padStart(2, '0')
  return `${horas}:${resto}`
}

export function horasDisponibles(fecha: string): string[] {
  if (fecha === '') {
    return []
  }
  const dia = new Date(`${fecha}T00:00`).getDay()
  const turnos = dia === 0 || dia === 6 ? TURNOS_FIN_DE_SEMANA : TURNOS_ENTRE_SEMANA

  const horas: string[] = []
  for (const [primera, ultima] of turnos) {
    for (let minutos = primera; minutos <= ultima; minutos += INTERVALO_MINUTOS) {
      horas.push(formatearHora(minutos))
    }
  }
  return horas
}