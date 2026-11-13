export function formatearPrecio(importe: number): string {
    return importe.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })
}