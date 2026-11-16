import ProductGrid from '../components/ProductGrid'
import { platos } from '../data/platos'

function CartaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 w-fit border-b-4 border-rojo pb-1 font-titulos text-3xl font-semibold md:text-[40px]">
        Nuestra carta
      </h1>
      <ProductGrid platos={platos} />
    </main>
  )
}

export default CartaPage