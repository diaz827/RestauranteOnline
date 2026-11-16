import type { Product } from '../types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  platos: Product[]
}

function ProductGrid({ platos }: ProductGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {platos.map((plato) => (
        <li key={plato.id}>
          <ProductCard plato={plato} />
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid