import { Fragment, useState } from 'react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { LuClock, LuInfo, LuMapPin, LuShieldCheck } from 'react-icons/lu'
import { restaurante } from '../data/restaurante'
import InfoDialog from './InfoDialog'

interface ReservasInfoProps {
  modo: 'tarjetas' | 'ventanas'
}

interface Bloque {
  id: string
  titulo: string
  Icono: IconType
  contenido: ReactNode
}

const claseTarjeta = 'rounded-xl border border-borde bg-white p-5'
const claseTitulo = 'mb-3 flex items-center gap-2 font-titulos text-lg font-semibold'
const claseIcono = 'h-5 w-5 text-rojo'

export default function ReservasInfo({ modo }: ReservasInfoProps) {
  const [abierto, setAbierto] = useState<string | null>(null)

  const bloques: Bloque[] = [
    {
      id: 'horario',
      titulo: 'Horario',
      Icono: LuClock,
      contenido: (
        <>
          <dl>
            {restaurante.horario.map(({ dias, horas }) => (
              <Fragment key={dias}>
                <dt className="font-bold">{dias}</dt>
                <dd className="mb-2">{horas}</dd>
              </Fragment>
            ))}
          </dl>
          <p className="text-sm text-gris">La última reserva se admite una hora antes del cierre.</p>
        </>
      ),
    },
    {
      id: 'util',
      titulo: 'Información útil',
      Icono: LuInfo,
      contenido: (
        <ul className="grid list-disc gap-2 pl-5">
          <li>
            Para mesas de más de 10 personas, llámanos al{' '}
            <a href={restaurante.telefonoEnlace} className="font-bold underline">
              {restaurante.telefono}
            </a>
            .
          </li>
          <li>Te enviaremos la confirmación de la reserva por correo electrónico.</li>
          <li>Para cambiar o cancelar tu reserva, llámanos por teléfono.</li>
          <li>Si tienes alergias o intolerancias, cuéntanoslo en los comentarios.</li>
        </ul>
      ),
    },
    {
      id: 'datos',
      titulo: 'Tus datos',
      Icono: LuShieldCheck,
      contenido: (
        <p>
          Usamos tus datos únicamente para gestionar tu reserva. No los compartimos con nadie ni los
          usamos para otros fines.
        </p>
      ),
    },
    {
      id: 'ubicacion',
      titulo: 'Dónde estamos',
      Icono: LuMapPin,
      contenido: (
        <address className="not-italic">
          <a href={restaurante.mapa} target="_blank" rel="noopener noreferrer" className="underline">
            {restaurante.direccion}
          </a>
        </address>
      ),
    },
  ]

  if (modo === 'ventanas') {
    const actual = bloques.find((bloque) => bloque.id === abierto)

    return (
      <section aria-label="Información sobre las reservas" className="mt-5 lg:hidden">
        <ul className="flex flex-wrap justify-center gap-2">
          {bloques.map(({ id, titulo, Icono }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => setAbierto(id)}
                className="flex items-center gap-2 rounded-full border border-borde bg-white px-4 py-2 text-sm font-bold"
              >
                <Icono className={claseIcono} aria-hidden="true" />
                {titulo}
              </button>
            </li>
          ))}
        </ul>

        <InfoDialog
          abierto={actual !== undefined}
          titulo={actual?.titulo ?? ''}
          onCerrar={() => setAbierto(null)}
        >
          {actual?.contenido}
        </InfoDialog>
      </section>
    )
  }

  return (
    <aside
      aria-label="Información sobre las reservas"
      className="hidden gap-4 lg:grid lg:self-start"
    >
      {bloques.map(({ id, titulo, Icono, contenido }) => (
        <section key={id} className={claseTarjeta}>
          <h2 className={claseTitulo}>
            <Icono className={claseIcono} aria-hidden="true" />
            {titulo}
          </h2>
          {contenido}
        </section>
      ))}
    </aside>
  )
}
