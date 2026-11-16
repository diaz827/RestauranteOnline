import heroEscritorio from '../assets/imgBanner/hero-escritorio.webp'
import heroMovil from '../assets/imgBanner/hero-movil.webp'
import ProductCard from '../components/ProductCard'
import productos from '../data/products.json'
import type { Product } from '../types/product'

const platos = productos as Product[]
const destacados = platos.filter((plato) => plato.destacado)

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
            <section aria-labelledby="titulo-destacados" className="mx-auto max-w-6xl px-4 py-10">
                <h2
                    id="titulo-destacados"
                    className="mb-6 w-fit border-b-4 border-rojo pb-1 font-titulos text-[26px] font-semibold"
                >
                    Platos destacados
                </h2>
                <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {destacados.map((plato) => (
                        <li key={plato.id}>
                            <ProductCard plato={plato} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default HomePage