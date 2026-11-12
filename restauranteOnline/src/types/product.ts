export type Categoria =
  | 'Entrantes'
  | 'Hamburguesas'
  | 'Sándwiches'
  | 'Pizza y pasta'
  | 'Ensaladas'
  | 'Tex-Mex'
  | 'Principales'
  | 'Postres'
  | 'Bebidas';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
  precio: number;
  precioOferta: number | null; // precio rebajado, o null si no está en oferta
  imagen: string; // nombre del fichero en src/assets/imgPlatos, p. ej. "nachos.jpg"
  destacado: boolean; // se muestra en la Home
  ingredientes: string[];
  alergenos: string[];
  calorias: number; // kcal por ración
  vegetariano: boolean;
  picante: boolean;
  tiempoPreparacion: number; // minutos
  fotoAutor: string;
  fotoUrl: string;
}
