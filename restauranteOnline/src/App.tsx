import logo from './assets/imgLogos/logo.png'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  return (
    <>
      <header className="relative flex h-28 items-center justify-center bg-negro">
        <a href="/">
          <img src={logo} alt="Crunna Diner" className="h-20" />
        </a>
        <button type="button" aria-label='Abrir menú' className='absolute left-4 text-crema md:hidden'>
          <Menu className='h-6 w-6' aria-hidden='true' />
        </button>
        <form role="search" className='absolute right-24 flex items-center'>
          <input type="search"
            className="w-40 rounded-full border border-borde bg-hueso px-2 py-1 text-sm text-negro"
            placeholder="Buscar..."
            aria-label="Buscar en la carta"
          />
        </form>
        <a
          href='/carrito'
          aria-label='Carrito'
          className='absolute right-4 flex items-center gap-1 text-crema'
        >

          <ShoppingCart className='h-6 w-6' aria-hidden='true' />
          <span className='rounded-full bg-rojo px-2 text-sm font-bold text-crema'>7</span>
        </a>
      </header>
      <nav className="bg-gris-oscuro border-b-4 border-rojo py-2">
        <ul className='flex justify-center gap-8 md:gap-20'>
          <li>
            <a href="/" aria-current="page" className='block py-2 font-titulos text-crema border-b-2 border-rojo'>Destacados</a>
          </li>
          <li>
            <a href="/carta" className="block py-2 font-titulos text-crema border-b-2 border-transparent">Carta</a>
          </li>
          <li>
            <a href="/reservas"  className="block py-2 font-titulos text-crema border-b-2 border-transparent">Reservas</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
