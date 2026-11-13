import heroEscritorio from '../assets/imgBanner/hero-escritorio.webp'
import heroMovil from '../assets/imgBanner/hero-movil.webp'

function HomePage() {
    return (
        <main>
            <section aria-labelledby='titulo-bienvenida' className='relative'>
                <picture>
                    <source media="(min-width: 768px)" srcSet={heroEscritorio} />
                    <img
                        src={heroMovil}
                        alt="Hamburguesa doble con queso fundido sobre una mesa de madera"
                        className='h-128 w-full object-cover md:h-136 md:object-right'
                    />
                </picture>
                <article className="absolute right-4 bottom-4 left-4 rounded-xl border-l-8 border-rojo bg-hueso p-6 md:top-1/2 md:right-auto md:bottom-auto md:left-12 md:w-112 md:-translate-y-1/2 md:p-8">
                    <h1 id="titulo-bienvenida" className="font-titulos text-3xl font-semibold md:text-[40px]">
                        Comida de gigantes
                    </h1>
                    <p className="mt-2 mb-5">
                        Hamburguesas, pizza, tex-mex y postres con sabor a diner americano, a un paso de la Torre de Hércules.
                    </p>
                    <a
                        href="/carta"
                        className="inline-block rounded-md bg-rojo px-5 py-3 font-bold tracking-widest text-white uppercase"
                    >
                        Ver carta
                    </a>
                </article>
            </section>
        </main>
    )
}

export default HomePage