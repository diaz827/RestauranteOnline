import { Fragment } from 'react'
import { LuClock, LuInfo, LuMapPin, LuShieldCheck } from 'react-icons/lu'
import { restaurante } from '../data/restaurante'

const claseTarjeta = 'rounded-xl border border-borde bg-white p-5'
const claseTitulo = 'mb-3 flex items-center gap-2 font-titulos text-lg font-semibold'
const claseIcono = 'h-5 w-5 text-rojo'

export default function ReservasInfo() {
  return (
    <aside aria-label="Información sobre las reservas" className="grid gap-4 lg:self-start">
      <section className={claseTarjeta}>
        <h2 className={claseTitulo}>
          <LuClock className={claseIcono} aria-hidden="true" />
          Horario
        </h2>
        <dl>
          {restaurante.horario.map(({ dias, horas }) => (
            <Fragment key={dias}>
              <dt className="font-bold">{dias}</dt>
              <dd className="mb-2">{horas}</dd>
            </Fragment>
          ))}
        </dl>
        <p className="text-sm text-gris">La última reserva se admite una hora antes del cierre.</p>
      </section>

      <section className={claseTarjeta}>
        <h2 className={claseTitulo}>
          <LuInfo className={claseIcono} aria-hidden="true" />
          Información útil
        </h2>
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
      </section>

      <section className={claseTarjeta}>
        <h2 className={claseTitulo}>
          <LuShieldCheck className={claseIcono} aria-hidden="true" />
          Tus datos
        </h2>
        <p>
          Usamos tus datos únicamente para gestionar tu reserva. No los compartimos con nadie ni los
          usamos para otros fines.
        </p>
      </section>

      <section className={claseTarjeta}>
        <h2 className={claseTitulo}>
          <LuMapPin className={claseIcono} aria-hidden="true" />
          Dónde estamos
        </h2>
        <address className="not-italic">
          <a href={restaurante.mapa} target="_blank" rel="noopener noreferrer" className="underline">
            {restaurante.direccion}
          </a>
        </address>
      </section>
    </aside>
  )
}
