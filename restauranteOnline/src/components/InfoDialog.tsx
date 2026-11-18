import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'

interface InfoDialogProps {
  abierto: boolean
  titulo: string
  children: ReactNode
  onCerrar: () => void
}

export default function InfoDialog({ abierto, titulo, children, onCerrar }: InfoDialogProps) {
  const dialogo = useRef<HTMLDialogElement>(null)
  const idTitulo = useId()

  useEffect(() => {
    const elemento = dialogo.current
    if (elemento === null) {
      return
    }
    if (abierto && !elemento.open) {
      elemento.showModal()
    }
    if (!abierto && elemento.open) {
      elemento.close()
    }
  }, [abierto])

  return (
    <dialog
      ref={dialogo}
      onClose={onCerrar}
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) {
          onCerrar()
        }
      }}
      aria-labelledby={idTitulo}
      className="m-auto w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-xl backdrop:bg-black/50"
    >
      <article className="grid gap-4 p-6">
        <h2 id={idTitulo} className="font-titulos text-2xl font-semibold">
          {titulo}
        </h2>
        {children}
        <footer className="flex justify-end">
          <button
            type="button"
            onClick={onCerrar}
            className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
          >
            Cerrar
          </button>
        </footer>
      </article>
    </dialog>
  )
}
