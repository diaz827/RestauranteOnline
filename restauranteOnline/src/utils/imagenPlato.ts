// Vite no deja usar rutas de texto para las imágenes de src/assets: hay que importarlas.
// import.meta.glob importa de golpe todas las fotos de la carpeta y devuelve un objeto
// { "../assets/imgPlatos/nachos.jpg": "/assets/nachos-AbC123.jpg", ... }
const imagenes = import.meta.glob<string>('../assets/imgPlatos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

// Recibe el nombre del fichero que viene en el JSON ("nachos.jpg") y devuelve la URL real.
export function imagenPlato(nombre: string): string {
  return imagenes[`../assets/imgPlatos/${nombre}`] ?? ''
}
