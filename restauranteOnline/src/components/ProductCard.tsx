import type { Product } from '../types/product'
import { imagenPlato } from '../utils/imagenPlato'
import { formatearPrecio } from '../utils/formatearPrecio'
import { Link } from 'react-router'

interface ProductCardProps {
  plato: Product
}

function ProductCard({ plato }: ProductCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-borde bg-white text-center">
      <img
        src={imagenPlato(plato.imagen)}
        alt={plato.nombre}
        className="aspect-4/3 w-full object-cover"
      />
      <hgroup className="px-4 pt-4">
        <h3 className="font-titulos text-lg font-medium">
          <Link to={`/carta/${plato.id}`} className="after:absolute after:inset-0">
            {plato.nombre}
          </Link>
        </h3>
        <p className="text-[13px] text-gris">
          {plato.categoria}
          {plato.precioOferta !== null && <span className="font-bold text-rojo"> · Oferta</span>}
        </p>
      </hgroup>
      <p className="mt-auto flex items-center justify-center gap-2 px-4 pt-3 pb-4">
        {plato.precioOferta !== null && (
          <s className="text-[13px] text-gris">{formatearPrecio(plato.precio)}</s>
        )}
        <span className="rounded-md bg-rojo px-3 py-1 font-bold text-white">
          {formatearPrecio(plato.precioOferta ?? plato.precio)}
        </span>
      </p>
    </article>
  )
}

export default ProductCard