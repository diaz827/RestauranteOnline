import { LuMapPin, LuPhone, LuClock } from 'react-icons/lu'
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa'
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal, SiApplepay, SiGooglepay, SiRevolut } from 'react-icons/si'

function Footer() {
  return (
    
    <footer className="grid gap-8 bg-negro px-4 py-8 text-crema md:grid-cols-3">
        <section>
          <h2 className="mb-3 w-fit border-b-2 border-rojo pb-1 font-titulos tracking-wide text-crema uppercase">Visítanos</h2>
          <address className='not-italic'>
            <ul className='space-y-2'>
              <li className="flex items-start gap-3">
                <LuMapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rojo" />
                <a href="https://www.google.com/maps/search/?api=1&query=Calle+San+Andr%C3%A9s+128+A+Coru%C3%B1a" target="_blank" rel="noopener noreferrer">
                  Calle San Andrés, 128 (entrada por calle Picos), 15003 A Coruña
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LuPhone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rojo" />
                <a href="tel:+34981000000">+34 981 00 00 00</a>
              </li>
              <li className="flex items-start gap-3">
                <LuClock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rojo" />
                <span>
                  Lun–Vie: 13:00–16:00 y 20:00–23:30
                  <br />
                  Sáb–Dom: 13:00–00:00
                </span>
              </li>
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
          <ul className="flex gap-3">
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded border border-crema/40 hover:border-rojo hover:text-rojo"
              >
                <FaInstagram aria-hidden="true" className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded border border-crema/40 hover:border-rojo hover:text-rojo"
              >
                <FaFacebook aria-hidden="true" className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Tiktok"
                className="flex h-10 w-10 items-center justify-center rounded border border-crema/40 hover:border-rojo hover:text-rojo"
              >
                <FaTiktok aria-hidden="true" className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Linkedin"
                className="flex h-10 w-10 items-center justify-center rounded border border-crema/40 hover:border-rojo hover:text-rojo"
              >
                <FaLinkedin aria-hidden="true" className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </section>
        <section className="md:col-span-3">
          <h2 className="sr-only">Métodos de pago</h2>
          <ul className="flex flex-wrap items-center justify-center gap-10 text-crema/80">
            <li><SiVisa aria-label="Visa" role="img" className="h-6 w-auto" /></li>
            <li><SiMastercard aria-label="Mastercard" role="img" className="h-6 w-auto" /></li>
            <li><SiAmericanexpress aria-label="American Express" role="img" className="h-6 w-auto" /></li>
            <li><SiPaypal aria-label="PayPal" role="img" className="h-6 w-auto" /></li>
            <li><SiApplepay aria-label="Apple Pay" role="img" className="h-6 w-auto" /></li>
            <li><SiGooglepay aria-label="Google Pay" role="img" className="h-6 w-auto" /></li>
            <li><SiRevolut aria-label="Revolut" role="img" className="h-6 w-auto" /></li>
          </ul>
        </section>
        <small className='border-t border-crema/20 pt-4 text-center md:col-span-3'>© 2026 Crunna Diner · Negocio ficticio</small>
      </footer>
  )
}

export default Footer

