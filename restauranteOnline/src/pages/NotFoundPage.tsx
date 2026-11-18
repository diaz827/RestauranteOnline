import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 text-center">
      <title>Página no encontrada · Crunna Diner</title>
      <h1 className="mb-4 font-titulos text-4xl font-semibold">Página no encontrada</h1>
      <p className="mb-6">La página que buscas no existe o ha cambiado de dirección.</p>
      <Link
        to="/carta"
        className="inline-block rounded-md bg-rojo px-5 py-3 font-bold tracking-widest text-white uppercase"
      >
        Ver la carta
      </Link>
    </main>
  )
}

export default NotFoundPage