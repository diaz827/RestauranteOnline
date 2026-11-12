import logo from './assets/imgLogos/logo.png'
import { LuShoppingCart, LuMenu, LuSearch } from 'react-icons/lu'
import { useState } from 'react'

function App() {
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
      <footer className="grid gap-8 bg-negro px-4 py-8 text-crema md:grid-cols-3">
        <section>
          <h2 className="mb-3 w-fit border-b-2 border-rojo pb-1 font-titulos tracking-wide text-crema uppercase">Visítanos</h2>
          <address className='not-italic'>
            <ul className='space-y-2'>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Calle+San+Andr%C3%A9s+128+A+Coru%C3%B1a" target="_blank" rel="noopener noreferrer">
                  Calle San Andrés, 128 (entrada por calle Picos), 15003 A Coruña
                </a>
              </li>
              <li>
                <a href="tel:+34981000000">+34 981 00 00 00</a>
              </li>
              <li>Lun–Vie: 13:00–16:00 y 20:00–23:30</li>
              <li>Sáb–Dom: 13:00–00:00</li>
            </ul>
          </address>
        </section>
        <nav aria-label="Enlaces rápidos">
          <h2 className="mb-3 w-fit border-b-2 border-rojo pb-1 font-titulos tracking-wide text-crema uppercase">Enlaces rápidos</h2>
          <ul className='space-y-2'>
            <li><a href="/">Destacados</a></li>
            <li><a href="/carta">Carta</a></li>
            <li><a href="/reservas">Reservas</a></li>
          </ul>
        </nav>
        <section>
          <h2 className="mb-3 w-fit border-b-2 border-rojo pb-1 font-titulos tracking-wide text-crema uppercase">Síguenos</h2>
          <ul className='space-y-2'>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </section>
        <small className='border-t border-crema/20 pt-4 text-center md:col-span-3'>© 2026 Crunna Diner · Negocio ficticio</small>
      </footer>
    </>
  )
}

export default App
