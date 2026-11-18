import { useEffect, useId, useRef } from 'react'

interface ConfirmDialogProps {
  abierto: boolean
  titulo: string
  texto: string
  textoConfirmar: string
  onConfirmar: () => void
  onCancelar: () => void
}

export default function ConfirmDialog({
  abierto,
  titulo,
  texto,
  textoConfirmar,
  onConfirmar,
  onCancelar,
}: ConfirmDialogProps) {
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
      onClose={onCancelar}
      aria-labelledby={idTitulo}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-xl p-6 backdrop:bg-black/50"
    >
      <h2 id={idTitulo} className="mb-3 font-titulos text-2xl font-semibold">
        {titulo}
      </h2>
      <p className="mb-6">{texto}</p>
      <footer className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancelar}
          className="rounded-md border border-negro px-5 py-3 font-bold tracking-widest uppercase"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={onConfirmar}
          className="rounded-md bg-negro px-5 py-3 font-bold tracking-widest text-white uppercase"
        >
          {textoConfirmar}
        </button>
      </footer>
    </dialog>
  )
}