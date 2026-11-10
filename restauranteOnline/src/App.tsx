import logo from './assets/imgLogos/logo.png'
import { ShoppingCart } from 'lucide-react'

function App() {
  return (
    <>
      <header className="relative flex h-28 items-center justify-center bg-negro">
        <a href="/">
          <img src={logo} alt="Crunna Diner" className="h-20" />
        </a>
        <a
          href='/carrito'
          aria-label='Carrito'
          className='absolute right-4 flex items-center gap-1 text-crema'
        >

          <ShoppingCart className='h-6 w-6' aria-hidden='true' />
          <span className='rounded-full bg-rojo px-2 text-sm font-bold text-crema'>7</span>
        </a>
      </header>

    </>
  )
}

export default App
