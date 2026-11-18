import { Link } from 'react-router'
import { useCart } from '../context/CartContext'
import type { CartItem } from '../context/cartReducer'
import { formatearPrecio } from '../utils/formatearPrecio'
import { imagenPlato } from '../utils/imagenPlato'
import QuantitySelector from './QuantitySelector'

interface CartLineProps {
  item: CartItem
}

export default function CartLine({ item }: CartLineProps) {
  const { cambiarCantidad } = useCart()
  const { plato, cantidad } = item
  const precio = plato.precioOferta ?? plato.precio

  return (
    <article className="grid grid-cols-[5rem_1fr] gap-x-4 gap-y-3 rounded-xl border border-borde bg-white p-4 md:grid-cols-[6rem_1fr_auto] md:items-center md:gap-x-6">
      <img
        src={imagenPlato(plato.imagen)}
        alt={plato.nombre}
        className="row-span-2 h-20 w-20 rounded-md object-cover md:row-span-1 md:h-24 md:w-24"
      />

      <hgroup>
        <h2 className="font-titulos text-lg font-medium">
          <Link to={`/carta/${plato.id}`} className="underline">
            {plato.nombre}
          </Link>
        </h2>
        <p className="text-sm text-gris">{formatearPrecio(precio)} / ud.</p>
      </hgroup>

      <footer className="col-start-2 flex items-center justify-between gap-3 md:col-start-3 md:gap-6">
        <QuantitySelector
          nombre={plato.nombre}
          cantidad={cantidad}
          onCambiar={(nueva) => cambiarCantidad(plato.id, nueva)}
        />
        <p className="font-bold md:w-24 md:text-right">{formatearPrecio(precio * cantidad)}</p>
      </footer>
    </article>
  )
}