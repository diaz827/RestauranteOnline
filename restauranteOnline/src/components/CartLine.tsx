import { LuTrash2 } from 'react-icons/lu'
import { Link } from 'react-router'
import type { CartItem } from '../context/cartReducer'
import { useCart } from '../context/useCart'
import { formatearPrecio } from '../utils/formatearPrecio'
import { imagenPlato } from '../utils/imagenPlato'
import QuantitySelector from './QuantitySelector'

interface CartLineProps {
  item: CartItem
  onQuitar: () => void
}

export default function CartLine({ item, onQuitar }: CartLineProps) {
  const { cambiarCantidad } = useCart()
  const { plato, cantidad } = item
  const precio = plato.precioOferta ?? plato.precio

  return (
    <article className="grid grid-cols-[5rem_1fr_auto] gap-x-4 gap-y-3 rounded-xl border border-borde bg-white p-4 md:grid-cols-[6rem_1fr_auto_auto] md:items-center md:gap-x-6">
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

      <footer className="col-span-2 col-start-2 flex items-center justify-between gap-3 md:col-span-1 md:col-start-3 md:gap-6">
        <QuantitySelector
          nombre={plato.nombre}
          cantidad={cantidad}
          onCambiar={(nueva) => cambiarCantidad(plato.id, nueva)}
        />
        <p className="font-bold md:w-24 md:text-right">{formatearPrecio(precio * cantidad)}</p>
      </footer>

      <button
        type="button"
        aria-label={`Eliminar ${plato.nombre} del carrito`}
        onClick={onQuitar}
        className="col-start-3 row-start-1 grid h-10 w-10 place-items-center self-start rounded-md border border-borde md:col-start-4 md:row-start-auto md:self-center"
      >
        <LuTrash2 className="h-5 w-5" aria-hidden="true" />
      </button>
    </article>
  )
}
