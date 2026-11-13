import logo from '../assets/imgLogos/logo.png'
import { LuShoppingCart, LuMenu, LuSearch } from 'react-icons/lu'
import { useState } from 'react'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [buscadorAbierto, setBuscadorAbierto] = useState(false)
  return (
    <>
      <header className="relative flex h-28 items-center justify-center bg-negro">
        <a href="/">
          <img src={logo} alt="Crunna Diner" className="h-20" />
        </a>
        <button
          type="button"
          aria-label='Menú'
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => {
            setMenuAbierto(!menuAbierto)
            setBuscadorAbierto(false)
          }}
          className='absolute left-4 text-crema md:hidden'
        >
          <LuMenu className='h-6 w-6' aria-hidden='true' />
        </button>
        {buscadorAbierto && (
          <form
            role="search"
            className="absolute top-full left-0 z-10 flex w-full items-center bg-gris-oscuro 
            p-3 md:top-auto md:right-32 md:left-auto md:w-auto md:bg-transparent md:p-0">
            <input
              type="search"
              autoFocus
              className="w-full md:w-40 rounded-full border border-borde bg-hueso px-2 py-1 text-sm text-negro"
              placeholder="Buscar..."
              aria-label="Buscar en la carta"
            />
          </form>
        )}
        <button
          type="button"
          aria-label="Buscar"
          aria-expanded={buscadorAbierto}
          onClick={() => {
            setBuscadorAbierto(!buscadorAbierto)
            setMenuAbierto(false)
          }}
          className="absolute right-20 text-crema"
        >
          <LuSearch className="h-6 w-6" aria-hidden="true" />
        </button>
        <a
          href='/carrito'
          aria-label='Carrito'
          className='absolute right-4 flex items-center gap-1 text-crema'
        >

          <LuShoppingCart className='h-6 w-6' aria-hidden='true' />
          <span className='rounded-full bg-rojo px-2 text-sm font-bold text-crema'>7</span>
        </a>
      </header>
      <nav
        id="menu-principal"
        className={`bg-gris-oscuro border-b-4 border-rojo py-2 ${menuAbierto ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-20">
          <li>
            <a href="/" aria-current="page" className='block py-2 font-titulos text-crema border-b-2 border-rojo'>Destacados</a>
          </li>
          <li>
            <a href="/carta" className="block py-2 font-titulos text-crema border-b-2 border-transparent">Carta</a>
          </li>
          <li>
            <a href="/reservas" className="block py-2 font-titulos text-crema border-b-2 border-transparent">Reservas</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header