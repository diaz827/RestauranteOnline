# Restaurante Online

## Sobre el proyecto

Este proyecto es un ejercicio de la asignatura **Desarrollo Web en Entorno Cliente (DWEC)** del ciclo formativo de **2º DAW**, dentro de la **1ª evaluación**. Consiste en crear una aplicación web de venta de productos con **React** y **TypeScript**.

El enunciado pide como mínimo:

- Una **página principal** con una descripción de la tienda y varios productos destacados.
- Una **página de la carta** con buscador y paginación.
- Una **página de detalle** de cada producto, con todos sus datos y un botón para añadirlo al carrito.
- Una **página de carrito** que permita cambiar cantidades, eliminar productos y vaciarlo, con confirmación en las acciones de borrado y con el precio total.
- Diseño **responsive**, adaptado a pantallas grandes y pequeñas.
- Los datos de los productos en un fichero **JSON** y las imágenes dentro del proyecto.

El ejercicio puede ampliarse después para convertirse en un proyecto de fin de ciclo.

## Sobre la tienda

La tienda es una **carta de restaurante online** de cocina americana: hamburguesas, sándwiches, Tex-Mex, pizza y pasta, ensaladas, principales, postres y bebidas. Es ficticia y se ha creado solo para este ejercicio.

La carta tiene **42 platos** repartidos en **9 categorías** (Entrantes, Hamburguesas, Sándwiches, Pizza y pasta, Ensaladas, Tex-Mex, Principales, Postres y Bebidas). Cada plato incluye su precio, una descripción, los ingredientes, los alérgenos, las calorías, el tiempo de preparación y si es vegetariano o picante. **8** platos aparecen como destacados en la página de inicio y **4** tienen precio de oferta.

El cliente puede:

- recorrer la carta y ver los platos destacados desde la página de inicio;
- buscar platos por nombre o descripción;
- abrir la ficha de un plato para ver todos sus datos;
- añadir platos al carrito, cambiar sus cantidades y ver el total del pedido.

Los datos se cargan desde un fichero JSON, así que la carta se puede ampliar o cambiar sin tocar el código de las páginas.

---

## Índice

1. [Funcionalidades](#funcionalidades)
2. [Tecnologías](#tecnologías)
3. [Instalación y configuración](#instalación-y-configuración)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Datos de los productos](#datos-de-los-productos)
6. [Créditos de las imágenes](#créditos-de-las-imágenes)

---

## Funcionalidades

| Página | Ruta | Qué se puede hacer |
|---|---|---|
| Inicio | `/` | Ver el banner principal, una descripción de la tienda, los **platos destacados** y la información de contacto (dirección ficticia con mapa, teléfono, horario y redes sociales). |
| Carta | `/carta` | Ver toda la carta en una rejilla **paginada** y **buscar** platos: se escribe un texto, se pulsa *Buscar* y aparecen los platos que lo contienen en su **nombre o descripción**. |
| Detalle | `/carta/:id` | Ver la foto, el nombre, el precio (con el precio de oferta si lo tiene), la descripción y el resto de datos: categoría, ingredientes, alérgenos, calorías, tiempo de preparación y si es vegetariano o picante. Botón **Añadir al carrito**. |
| Carrito | `/carrito` | Ver los platos añadidos, **aumentar o disminuir la cantidad** de cada uno, **eliminar** un plato y **vaciar** el carrito (las dos acciones piden **confirmación**) y ver el **precio total**. |
| No encontrada | `*` | Mensaje de página no encontrada con enlace a la carta. |

Partes comunes a todas las páginas:

- **Cabecera** con el logo, el menú de navegación y el icono del carrito con el número de unidades. En móvil el menú se pliega en un botón ☰.
- **Pie de página** con la dirección, el teléfono, el horario, enlaces rápidos y redes sociales.
- **Diseño responsive**, adaptado a móvil, tablet y escritorio.

---

## Tecnologías

| Tecnología | Para qué se usa |
|---|---|
| [React](https://react.dev/) | Librería para construir la interfaz con componentes. |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript con tipos; los productos se describen con la interfaz `Product`. |
| [Vite](https://vite.dev/) | Servidor de desarrollo y empaquetado de la aplicación. |
| [React Router](https://reactrouter.com/) | Navegación entre páginas (`/`, `/carta`, `/carta/:id`, `/carrito`). |
| Context API + `useReducer` | Estado global del carrito, compartido por todas las páginas. |
| CSS propio (Flexbox y CSS Grid) | Estilos y diseño responsive. |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconos en SVG: los de interfaz (carrito, lupa, menú ☰) de la colección Lucide, y los logos de redes sociales y métodos de pago de Font Awesome y Simple Icons. |
| JSON | Fichero `products.json` con los datos de los platos. |

---

## Instalación y configuración

Sigue estos pasos en orden. Solo hay que hacerlos la primera vez.

### 1. Instalar las herramientas necesarias

- **Node.js 20 o superior** (incluye `npm`). Descárgalo desde <https://nodejs.org/> (versión *LTS*) e instálalo con las opciones por defecto.
- **Git**, para clonar el repositorio. Descárgalo desde <https://git-scm.com/downloads>. Si no quieres usar Git, en GitHub puedes pulsar **Code → Download ZIP** y descomprimir el archivo.

Para comprobar que están instalados, abre una terminal (en Windows, *PowerShell* o *Símbolo del sistema*) y ejecuta:

```bash
node -v     # debe mostrar v20.x.x o superior
npm -v      # debe mostrar un número de versión
git --version
```

### 2. Descargar el proyecto

```bash
git clone https://github.com/diaz827/NOMBRE-DEL-REPOSITORIO.git
cd NOMBRE-DEL-REPOSITORIO
```

### 3. Instalar las dependencias

```bash
npm install
```

Este comando lee `package.json` y descarga en `node_modules/` las librerías que necesita la aplicación (React, React Router, TypeScript, Vite...). No hace falta configurar nada más: los datos y las imágenes ya están dentro del proyecto.

### 4. Arrancar la aplicación

```bash
npm run dev
```

En la terminal aparecerá una dirección como `http://localhost:5173/`. Ábrela en el navegador. Para parar el servidor, pulsa `Ctrl + C` en la terminal.

### 5. (Opcional) Generar la versión de producción

```bash
npm run build     # crea la carpeta dist/ con la web optimizada
npm run preview   # sirve dist/ en http://localhost:4173/ para probarla
```

---

## Estructura del proyecto

```
├── public/
│   └── images/              # Fotos de los platos (nachos.jpg, burrito.jpg...)
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Layout.tsx       # Cabecera + página actual + pie
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx  # Tarjeta de un plato
│   │   ├── ProductGrid.tsx  # Rejilla de tarjetas
│   │   ├── PriceTag.tsx     # Precio normal o tachado + oferta
│   │   ├── SearchBar.tsx    # Campo de búsqueda + botón Buscar
│   │   ├── Pagination.tsx
│   │   ├── QuantitySelector.tsx
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── ConfirmDialog.tsx  # Diálogo de confirmación
│   ├── context/
│   │   └── CartContext.tsx  # Estado global del carrito (useReducer)
│   ├── data/
│   │   └── products.json    # Datos de los 42 platos
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── CartaPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── types/
│   │   └── product.ts       # Interfaz Product y tipo Categoria
│   ├── App.tsx              # Definición de las rutas
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Datos de los productos

Los platos están en `src/data/products.json` y cada uno sigue la interfaz `Product` de `src/types/product.ts`:

```ts
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: Categoria;          // 'Entrantes' | 'Hamburguesas' | ...
  precio: number;
  precioOferta: number | null;   // precio rebajado, o null si no está en oferta
  imagen: string;                // ruta dentro de public, p. ej. "/images/nachos.jpg"
  destacado: boolean;            // se muestra en la página de inicio
  ingredientes: string[];
  alergenos: string[];
  calorias: number;              // kcal por ración
  vegetariano: boolean;
  picante: boolean;
  tiempoPreparacion: number;     // minutos
  fotoAutor: string;
  fotoUrl: string;
}
```

Las imágenes están en `public/images/`. Vite sirve esa carpeta en la raíz de la web, por eso en el JSON las rutas empiezan por `/images/...`.

Para **añadir un plato** basta con añadir un objeto nuevo al JSON (con un `id` que no se repita) y copiar su foto en `public/images/`.

---

## Créditos de las imágenes

Todas las fotos de los platos son de [Unsplash](https://unsplash.com) y se usan bajo la [Licencia Unsplash](https://unsplash.com/license), que permite su uso gratuito sin obligación de atribución. Aun así, se agradece a sus autores:

<details>
<summary>Ver la lista de fotos y autores (42)</summary>

| Imagen | Plato | Categoría | Autor | Enlace |
|---|---|---|---|---|
| `nachos.jpg` | Nachos con queso y bacon | Entrantes | lap lap | [Ver en Unsplash](https://unsplash.com/photos/nachos-topped-with-melted-cheese-bacon-and-chives-5PkRWJ3ndOw) |
| `alitas-buffalo.jpg` | Alitas de pollo buffalo | Entrantes | Chad Montano | [Ver en Unsplash](https://unsplash.com/photos/buffalo-chicken-wings-appetizer-gE28aTnlqJA) |
| `aros-cebolla.jpg` | Aros de cebolla | Entrantes | satria setiawan | [Ver en Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-onion-rings-next-to-a-bowl-of-ketchup-uu3yWi0XVcQ) |
| `palitos-mozzarella.jpg` | Palitos de mozzarella | Entrantes | Ronald Vargas | [Ver en Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-fried-food-on-top-of-a-table-nRhHYzybDCE) |
| `patatas-fritas.jpg` | Patatas fritas | Entrantes | Cindy Bartillon | [Ver en Unsplash](https://unsplash.com/photos/a-pile-of-golden-french-fries-on-a-white-plate--doMDpFipzQ) |
| `tiras-pollo.jpg` | Tiras de pollo crujiente | Entrantes | logan jeffrey | [Ver en Unsplash](https://unsplash.com/photos/fried-chicken-on-white-ceramic-plate-Dr3vO9qZs6Y) |
| `hamburguesa-clasica.jpg` | Hamburguesa clásica | Hamburguesas | amirali mirhashemian | [Ver en Unsplash](https://unsplash.com/photos/burger-with-lettuce-and-tomatoes-sc5sTPMrVfk) |
| `hamburguesa-doble-queso.jpg` | Hamburguesa doble queso | Hamburguesas | amirali mirhashemian | [Ver en Unsplash](https://unsplash.com/photos/double-patty-cheeseburger-jh5XyK4Rr3Y) |
| `hamburguesa-completa.jpg` | Hamburguesa completa | Hamburguesas | engin akyurt | [Ver en Unsplash](https://unsplash.com/photos/a-juicy-hamburger-with-lettuce-tomato-onion-and-cheese-gAyHLRfUo5w) |
| `hamburguesa-vegetal.jpg` | Hamburguesa vegetal | Hamburguesas | Zoshua Colah | [Ver en Unsplash](https://unsplash.com/photos/veggie-burger-with-tomato-and-cheese-mBdGdycNse8) |
| `hamburguesa-pollo-crispy.jpg` | Hamburguesa de pollo crispy | Hamburguesas | Sultan Abdulrazzaq | [Ver en Unsplash](https://unsplash.com/photos/UDYjeBwFZf8) |
| `hamburguesa-gourmet.jpg` | Hamburguesa gourmet con patatas | Hamburguesas | Diego Arenas de Rodrigo | [Ver en Unsplash](https://unsplash.com/photos/a-gourmet-burger-with-fries-and-a-knife-B8yVEDvfM2A) |
| `club-sandwich.jpg` | Club sándwich | Sándwiches | Nima Naseri | [Ver en Unsplash](https://unsplash.com/photos/a-cut-in-half-sandwich-sitting-on-top-of-a-white-plate-6UjpUPobTUA) |
| `club-sandwich-patatas.jpg` | Club sándwich con patatas | Sándwiches | Orkun Orcan | [Ver en Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-a-cut-in-half-sandwich-and-fries-oBWEb-lAI60) |
| `wrap-pollo.jpg` | Wrap de pollo con ensalada | Sándwiches | Giorgio Trovato | [Ver en Unsplash](https://unsplash.com/photos/a-wrap-and-salad-on-a-white-plate--KLZWBqfq6c) |
| `sandwich-pollo.jpg` | Sándwich de pollo | Sándwiches | amin ramezani | [Ver en Unsplash](https://unsplash.com/photos/uo9TFEUwTc0) |
| `pizza-margarita.jpg` | Pizza margarita | Pizza y pasta | Alfonso Scarpa | [Ver en Unsplash](https://unsplash.com/photos/a-delicious-pizza-with-mozzarella-tomato-sauce-and-fresh-basil-qPorOVdCFzc) |
| `pizza-casa.jpg` | Pizza de la casa | Pizza y pasta | Aurélien Lemasson-Théobald | [Ver en Unsplash](https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk) |
| `espaguetis-carbonara.jpg` | Espaguetis carbonara | Pizza y pasta | Rob Wicks | [Ver en Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-spaghetti-and-bacon-fDLBn8X_IlU) |
| `lasana.jpg` | Lasaña de carne | Pizza y pasta | Emanuel Ekström | [Ver en Unsplash](https://unsplash.com/photos/a-white-plate-topped-with-lasagna-covered-in-sauce-flEUTTwGlJQ) |
| `ensalada-cesar.jpg` | Ensalada césar | Ensaladas | Cliffer Rebelo | [Ver en Unsplash](https://unsplash.com/photos/delicious-caesar-salad-is-presented-on-a-table-UdLsLK_KFLw) |
| `ensalada-mixta.jpg` | Ensalada mixta | Ensaladas | Tania Melnyczuk | [Ver en Unsplash](https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-xeTv9N2FjXA) |
| `poke-pollo.jpg` | Poke bowl de pollo | Ensaladas | abdelkader1001 | [Ver en Unsplash](https://unsplash.com/photos/a-colorful-poke-bowl-with-fresh-ingredients-and-chicken-OlHZpma28eU) |
| `bowl-vegetal.jpg` | Bowl vegetal | Ensaladas | Andreas Rasmussen | [Ver en Unsplash](https://unsplash.com/photos/vegetable-salad-in-white-ceramic-bowl-ZwzZ5F_pIBU) |
| `quesadilla.jpg` | Quesadilla de pollo | Tex-Mex | Benjamin Guardia | [Ver en Unsplash](https://unsplash.com/photos/a-plate-topped-with-a-quesadilla-cut-in-half-_BW-YmENFcM) |
| `burrito.jpg` | Burrito con ensalada | Tex-Mex | La La | [Ver en Unsplash](https://unsplash.com/photos/a-plate-with-a-burrito-and-salad-on-it-qYtfN2109Wg) |
| `tacos-pollo.jpg` | Tacos de pollo | Tex-Mex | Zoshua Colah | [Ver en Unsplash](https://unsplash.com/photos/chicken-tacos-with-lime-and-salsa-4gfomuxZFys) |
| `fajitas.jpg` | Fajitas de ternera | Tex-Mex | Oliver Esquivel | [Ver en Unsplash](https://unsplash.com/photos/hearty-meat-dish-with-corn-and-peppers-served-with-salsa-cNYpbGu_JWg) |
| `costillas-bbq.jpg` | Costillas barbacoa | Principales | Hoai Nam Mai | [Ver en Unsplash](https://unsplash.com/photos/barbecued-ribs-with-french-fries-and-salad-22ZfkYDJDpw) |
| `entrecot.jpg` | Entrecot con patatas | Principales | meat Adil | [Ver en Unsplash](https://unsplash.com/photos/a-perfectly-cooked-steak-with-fries-and-salad-d5EjL94rhZ0) |
| `salmon.jpg` | Salmón con brócoli | Principales | Camara Negra | [Ver en Unsplash](https://unsplash.com/photos/a-black-plate-topped-with-salmon-and-broccoli-RZV1-tNbHy4) |
| `pollo-frito.jpg` | Pollo frito | Principales | Scott Eckersley | [Ver en Unsplash](https://unsplash.com/photos/fried-chicken-on-black-plate-R-7_ErUOLxw) |
| `tortitas.jpg` | Tortitas | Postres | Sebastian Schuster | [Ver en Unsplash](https://unsplash.com/photos/a-tall-stack-of-golden-brown-pancakes-on-a-plate-vfl6y292kSI) |
| `tortitas-frutos-rojos.jpg` | Tortitas con frutos rojos | Postres | Jaqueline Pelzer | [Ver en Unsplash](https://unsplash.com/photos/pancakes-with-berries-on-white-ceramic-plate-MytHEJlzdcM) |
| `brownie-helado.jpg` | Brownie con helado | Postres | Junel Mujar | [Ver en Unsplash](https://unsplash.com/photos/chocolate-cake-with-white-ice-cream-on-white-ceramic-plate-Wq0tcKzIa0M) |
| `tarta-queso.jpg` | Tarta de queso | Postres | Med Wael Laraiedh | [Ver en Unsplash](https://unsplash.com/photos/a-piece-of-cheesecake-on-a-white-plate-hszGPnZGB3A) |
| `tarta-queso-arandanos.jpg` | Tarta de queso con arándanos | Postres | Kelsey Todd | [Ver en Unsplash](https://unsplash.com/photos/a-piece-of-cheesecake-with-blueberries-on-a-plate-nXsFPNyBqq4) |
| `batido-fresa.jpg` | Batido de fresa | Bebidas | Sebastian Coman Photography | [Ver en Unsplash](https://unsplash.com/photos/strawberry-shake-in-clear-drinking-glass-rwBJaJdesGg) |
| `batido-especial.jpg` | Batido especial con nata | Bebidas | Pranav Kumar Jain | [Ver en Unsplash](https://unsplash.com/photos/a-milkshake-topped-with-whipped-cream-and-candy-l74h63Dgv3I) |
| `limonada.jpg` | Limonada casera | Bebidas | Laura Chouette | [Ver en Unsplash](https://unsplash.com/photos/clear-drinking-glass-with-lemon-juice-TecD-1MTMiE) |
| `smoothie-verde.jpg` | Smoothie verde | Bebidas | Giorgi Iremadze | [Ver en Unsplash](https://unsplash.com/photos/green-liquid-in-clear-drinking-glass-with-straw-3OV0ft7mG_o) |
| `cafe-helado.jpg` | Café helado | Bebidas | Seungmin Yoon | [Ver en Unsplash](https://unsplash.com/photos/iced-coffee-with-cream-and-straw-on-wooden-table-0ix19Sp9K7g) |

</details>

Los nombres, descripciones, precios y datos del restaurante (dirección, teléfono...) son ficticios y se han creado solo para este ejercicio.

---

## Autor

**Díaz** · [@diaz827](https://github.com/diaz827) · 2º DAW, curso 2026-2027.
