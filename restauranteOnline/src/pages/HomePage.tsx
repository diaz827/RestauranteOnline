import { Fragment } from 'react'
import { LuMapPin, LuClock } from 'react-icons/lu'
import { Link } from 'react-router'
import heroEscritorio from '../assets/imgBanner/hero-escritorio.webp'
import heroMovil from '../assets/imgBanner/hero-movil.webp'
import ProductGrid from '../components/ProductGrid'
import { platos } from '../data/platos'
import { restaurante } from '../data/restaurante'

const destacados = platos.filter((plato) => plato.destacado)

function HomePage() {
  return (
    <main>
      <title>Crunna Diner · Comida de gigantes en A Coruña</title>
      <section aria-labelledby="titulo-bienvenida" className="relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroEscritorio} />
          <img
            src={heroMovil}
            alt="Hamburguesa doble con queso fundido sobre una mesa de madera"
            className="h-128 w-full object-cover md:h-136 md:object-right"
          />
        </picture>
        <article className="absolute right-4 bottom-4 left-4 rounded-xl border-l-8 border-rojo bg-hueso p-6 md:top-1/2 md:right-auto md:bottom-auto md:left-12 md:w-112 md:-translate-y-1/2 md:p-8">
          <h1 id="titulo-bienvenida" className="font-titulos text-3xl font-semibold md:text-[40px]">
            Comida de gigantes
          </h1>
          <p className="mt-2 mb-5">
            Hamburguesas, pizza, tex-mex y postres con sabor a diner americano, a un paso de la Torre de Hércules.
          </p>
          <Link
            to="/carta"
            className="inline-block rounded-md bg-rojo px-5 py-3 font-bold tracking-widest text-white uppercase"
          >
            Ver carta
          </Link>
        </article>
      </section>
      <section aria-labelledby="titulo-destacados" className="mx-auto max-w-6xl px-4 py-10">
        <h2
          id="titulo-destacados"
          className="mb-6 w-fit border-b-4 border-rojo pb-1 font-titulos text-[26px] font-semibold"
        >
          Platos destacados
        </h2>
        <ProductGrid platos={destacados} />
      </section>
      <section
        aria-labelledby="titulo-sobre-nosotros"
        className="mx-auto grid max-w-6xl gap-6 px-4 pb-12 md:grid-cols-[3fr_2fr]"
      >
        <h2
          id="titulo-sobre-nosotros"
          className="w-fit border-b-4 border-rojo pb-1 font-titulos text-[26px] font-semibold md:col-span-2"
        >
          Sobre nosotros
        </h2>
        <iframe
          title="Mapa con la ubicación de Crunna Diner en Calle San Andrés, A Coruña"
          src={restaurante.mapaIncrustado}
          loading="lazy"
          className="h-72 w-full rounded-xl border border-borde md:row-span-2 md:h-full md:min-h-96"
        />
        <article>
          <h3 className="mb-2 font-titulos text-2xl font-semibold text-rojo">Nuestra historia</h3>
          <p className="mb-3">
            Crunna Diner es un restaurante ficticio de cocina americana inspirado en A Coruña y en la leyenda de Gerión, el gigante al que Hércules venció y sobre cuya tumba levantó la Torre.
          </p>
          <p>
            De ahí sale nuestro eslogan «comida de gigantes»: platos generosos, producto fresco y buen ambiente para comer en familia o con amigos.
          </p>
        </article>
        <section aria-labelledby="titulo-ubicacion">
          <h3 id="titulo-ubicacion" className="mb-3 font-titulos text-2xl font-semibold text-rojo">
            Ubicación y horarios
          </h3>
          <address className="mb-4 flex items-start gap-3 text-lg not-italic">
            <LuMapPin aria-hidden="true" className="mt-1.5 h-5 w-5 shrink-0 text-rojo" />
            <a
              href={restaurante.mapa}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rojo underline-offset-4 hover:text-rojo"
            >
              {restaurante.direccion}
            </a>
          </address>
          <p className="mb-1 flex items-center gap-3 text-lg font-bold">
            <LuClock aria-hidden="true" className="h-5 w-5 shrink-0 text-rojo" />
            Horario
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 pl-8 text-lg">
            {restaurante.horario.map(({ diasLargo, horas }) => (
              <Fragment key={diasLargo}>
                <dt>{diasLargo}</dt>
                <dd>{horas}</dd>
              </Fragment>
            ))}
          </dl>
        </section>
      </section>
    </main>
  )
}

export default HomePage
