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

- ver los platos destacados desde la página de inicio y recorrer toda la carta;
- **buscar** platos por nombre o descripción (con sugerencias mientras escribe), **filtrarlos por categoría** y **ordenarlos** por precio o por nombre;
- abrir la ficha de un plato para ver todos sus datos y otros platos relacionados;
- añadir platos al carrito, cambiar sus cantidades, eliminarlos o vaciar el carrito, y ver el total del pedido;
- **reservar mesa** con un formulario validado. La reserva es una **simulación**: no se guarda en ningún sitio y **no se envía ningún correo** (el aviso de confirmación es solo parte de la maqueta).

Los datos se cargan desde un fichero JSON, así que la carta se puede ampliar o cambiar sin tocar el código de las páginas.

---

## Índice

1. [Funcionalidades](#funcionalidades)
2. [Tecnologías](#tecnologías)
3. [Instalación y configuración](#instalación-y-configuración)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Datos de los productos](#datos-de-los-productos)
6. [Créditos y licencias](#créditos-y-licencias)

---

## Funcionalidades

| Página | Ruta | Qué se puede hacer |
|---|---|---|
| Inicio | `/` | Ver el banner principal, los **platos destacados** y la sección «Sobre nosotros» con un mapa, la historia del restaurante, la ubicación (dirección real con enlace al mapa) y el horario (ficticio). |
| Carta | `/carta` | Ver toda la carta en una rejilla de **12 platos por página**, con paginación. Se puede **buscar** por nombre o descripción (al escribir aparecen **sugerencias** que llevan directamente al plato), **filtrar por categoría** y **ordenar** por precio (de menor a mayor o al revés) o por nombre. La búsqueda ignora mayúsculas y tildes. La búsqueda, la categoría, el orden y la página se guardan en la dirección (por ejemplo `/carta?q=pizza&categoria=Postres&orden=precio-asc&page=2`), así que se pueden recargar y compartir. |
| Detalle | `/carta/:id` | Ver la foto, el nombre, el precio (con el precio de oferta si lo tiene), la descripción y el resto de datos: categoría, ingredientes, alérgenos, calorías, tiempo de preparación y si es vegetariano o picante. Se elige la cantidad y se pulsa **Añadir al carrito**. Debajo aparecen hasta 4 **platos relacionados** de la misma categoría. Si el plato no existe, se muestra el aviso «Este plato no existe». |
| Carrito | `/carrito` | Ver los platos añadidos, **aumentar o disminuir la cantidad** de cada uno, **eliminar** un plato y **vaciar** el carrito (las dos acciones piden **confirmación**) y ver el **precio total**, que en móvil queda fijo en la parte inferior. Si el carrito está vacío se muestra un aviso con un enlace a la carta. |
| Reservas | `/reservas` | Reservar mesa con un formulario de **nombre, teléfono, correo, fecha, hora, comensales, comentarios** y aceptación de la privacidad. La **hora** se elige cada 5 minutos según el día (de lunes a viernes de 13:00 a 15:00 y de 20:00 a 22:30; sábados y domingos de 13:00 a 23:00; la última reserva es una hora antes del cierre). Cada campo se **valida** con su mensaje de error. Al enviar, se muestra una **pantalla de confirmación** con el resumen. Es una **simulación**: no se guarda nada ni se envía ningún correo. Un panel lateral muestra el horario, información útil, la nota de privacidad y la ubicación. |
| No encontrada | `*` | Mensaje de página no encontrada con enlace a la carta. |

Partes comunes a todas las páginas:

- **Cabecera** con el logo, el menú de navegación y el icono del carrito con el número de unidades. En móvil el menú se pliega en un botón ☰.
- **Pie de página** con la dirección, el teléfono, el horario, enlaces rápidos, redes sociales y métodos de pago.
- **Diseño responsive**, adaptado a móvil, tablet y escritorio.
- Al cambiar de página, la pantalla vuelve arriba del todo.

---

## Tecnologías

| Tecnología | Para qué se usa |
|---|---|
| [React](https://react.dev/) | Librería para construir la interfaz con componentes. |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript con tipos; los productos se describen con la interfaz `Product`. |
| [Vite](https://vite.dev/) | Servidor de desarrollo y empaquetado de la aplicación. |
| [React Router](https://reactrouter.com/) | Navegación entre páginas (`/`, `/carta`, `/carta/:id`, `/carrito`, `/reservas`) y parámetros de la dirección (`?q`, `?categoria`, `?orden`, `?page`). |
| Context API + `useReducer` | Estado global del carrito, compartido por todas las páginas. |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos y diseño responsive (con una paleta propia definida en `src/index.css`). |
| [Google Fonts](https://fonts.google.com/) | Tipografías Oswald (títulos) y Lato (texto). |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter) | Revisión del código (`npm run lint`). |
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
git clone https://github.com/diaz827/RestauranteOnline.git
cd RestauranteOnline/restauranteOnline
```

La aplicación está dentro de la carpeta `restauranteOnline`; todos los comandos siguientes se ejecutan desde ella.

### 3. Instalar las dependencias

```bash
npm install
```

Este comando lee `package.json` y descarga en `node_modules/` las librerías que necesita la aplicación (React, React Router, Tailwind CSS, TypeScript, Vite...). No hace falta configurar nada más: los datos y las imágenes ya están dentro del proyecto.

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
├── docs/
│   ├── guiasEstilo/             # Guía de colores, tipografía y componentes
│   ├── prototipos/              # Prototipo HTML provisional de la página de inicio
│   └── wireframes/              # Wireframes de cada página (escritorio y móvil)
├── restauranteOnline/           # La aplicación React (los comandos npm se ejecutan aquí)
│   ├── public/
│   │   └── favicon.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── imgBanner/       # Imágenes del banner de la página de inicio
│   │   │   ├── imgLogos/        # Logos de Crunna Diner
│   │   │   └── imgPlatos/       # Fotos de los platos (nachos.jpg, burrito.jpg...)
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── Layout.tsx           # Cabecera + página actual + pie
│   │   │   ├── ScrollToTop.tsx      # Sube arriba al cambiar de página
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx      # Tarjeta de un plato
│   │   │   ├── ProductGrid.tsx      # Rejilla de tarjetas
│   │   │   ├── SearchBar.tsx        # Buscador con sugerencias
│   │   │   ├── CategoryFilter.tsx   # Pestañas de categorías
│   │   │   ├── SortSelect.tsx       # Desplegable de orden
│   │   │   ├── Pagination.tsx
│   │   │   ├── QuantitySelector.tsx # Selector de cantidad (– 1 +)
│   │   │   ├── AddToCart.tsx        # Cantidad + botón Añadir al carrito
│   │   │   ├── CartLine.tsx         # Una línea del carrito
│   │   │   ├── ConfirmDialog.tsx    # Diálogo de confirmación
│   │   │   ├── ReservasInfo.tsx     # Panel de información de Reservas
│   │   │   └── ReservaConfirmada.tsx # Pantalla de reserva recibida
│   │   ├── context/
│   │   │   ├── CartContext.tsx  # Contexto y proveedor del carrito, y hook useCart
│   │   │   └── cartReducer.ts   # Reducer con las acciones del carrito
│   │   ├── data/
│   │   │   ├── products.json    # Datos de los 42 platos
│   │   │   ├── platos.ts        # Carga el JSON como lista de Product
│   │   │   ├── categorias.ts    # Lista de las 9 categorías
│   │   │   └── restaurante.ts   # Dirección, teléfono y horario
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── CartaPage.tsx
│   │   │   ├── ProductDetailPage.tsx
│   │   │   ├── CartPage.tsx
│   │   │   ├── ReservasPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   ├── types/
│   │   │   ├── product.ts       # Interfaz Product y tipo Categoria
│   │   │   └── reserva.ts       # Interfaz DatosReserva
│   │   ├── utils/
│   │   │   ├── formatearPrecio.ts   # 8.95 → "8,95 €"
│   │   │   ├── horarioReservas.ts   # Horas disponibles según el día
│   │   │   ├── imagenPlato.ts       # Convierte "nachos.jpg" en la URL real de la foto
│   │   │   ├── normalizarTexto.ts   # Quita tildes y mayúsculas para buscar
│   │   │   ├── ordenarPlatos.ts     # Ordena por precio o nombre
│   │   │   └── validarReserva.ts    # Reglas de validación de la reserva
│   │   ├── App.tsx              # Definición de las rutas
│   │   ├── main.tsx             # Punto de entrada
│   │   └── index.css            # Estilos globales y paleta (Tailwind)
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
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
  imagen: string;                // fichero en src/assets/imgPlatos, p. ej. "nachos.jpg"
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

Las imágenes están en `src/assets/imgPlatos/`. En el JSON solo se guarda el **nombre del fichero** (`"nachos.jpg"`); la función `imagenPlato()` de `src/utils/imagenPlato.ts` lo convierte en la URL real que genera Vite al empaquetar.

Para **añadir un plato** basta con añadir un objeto nuevo al JSON (con un `id` que no se repita) y copiar su foto en `src/assets/imgPlatos/`. Si el plato es de una categoría nueva, hay que añadirla también al tipo `Categoria` de `src/types/product.ts` y a la lista de `src/data/categorias.ts`.

Los datos de contacto del restaurante (dirección, teléfono y horario) están en `src/data/restaurante.ts`, y de ahí los leen el pie, la página de inicio y la de reservas. Las franjas horarias de las reservas están en `src/utils/horarioReservas.ts`.

---

## Créditos y licencias

### Fotos de los platos

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

### Imágenes del banner

Las dos imágenes del banner de la página de inicio (`hero-escritorio.webp` y `hero-movil.webp`, en `src/assets/imgBanner/`) están **generadas con inteligencia artificial**: no son fotografías reales.

### Iconos y logos

- Los iconos de la interfaz (carrito, lupa, menú, papelera...) son de [Lucide](https://lucide.dev/) (licencia ISC), servidos con [React Icons](https://react-icons.github.io/react-icons/).
- Los logos de redes sociales son de [Font Awesome](https://fontawesome.com/) (licencia CC BY 4.0).
- Los logos de los métodos de pago son de [Simple Icons](https://simpleicons.org/) (licencia CC0).
- Los nombres y logos de marcas (Visa, Instagram, PayPal...) pertenecen a sus propietarios y se usan solo de forma ilustrativa.

### Contenido de terceros

- El **mapa** de la página de inicio es un mapa de Google incrustado, que carga contenido de terceros (puede instalar cookies de Google).
- Las tipografías se cargan desde Google Fonts.

### Qué es ficticio

Los nombres, descripciones, precios, teléfono, horarios y redes del restaurante son ficticios y se han creado solo para este ejercicio. La única excepción es la **ubicación** (Calle San Andrés 128, A Coruña), tomada de un local en alquiler para dar realismo al ejercicio: en ese local no existe ningún restaurante con este nombre.

Las **reservas son una simulación**: el formulario se valida y muestra una confirmación, pero no se guarda ningún dato ni se envía ningún correo. El **carrito** tampoco se guarda: se vacía al recargar la página.

---

## Autor

**Díaz** · [@diaz827](https://github.com/diaz827) · 2º DAW, curso 2026-2027.
