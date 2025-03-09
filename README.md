# Gestión de Inventario de Frutas (JavaScript)

## Descripción

Este proyecto implementa un sistema de gestión de inventario de frutas utilizando JavaScript. Permite agregar, eliminar, actualizar y mostrar información sobre diferentes frutas dentro de una tienda. El código se ejecuta completamente en la consola del navegador, lo que lo hace ideal para demostraciones y aprendizaje.

## Características

*   **Organización del Inventario:** Utiliza un objeto `inventario` que contiene una sección específica para `frutas`, facilitando la gestión y organización de este tipo de productos.
*   **Agregar Frutas:** Permite agregar nuevas frutas al inventario, especificando su nombre, precio y cantidad.
*   **Eliminar Frutas:** Permite eliminar frutas existentes del inventario por su nombre.
*   **Actualizar Cantidad:** Permite actualizar la cantidad disponible de una fruta específica.
*   **Visualizar Inventario:** Muestra un listado completo del inventario de frutas, incluyendo el nombre, precio y cantidad de cada una.
*   **Interacción por Consola:** La interacción con el sistema se realiza completamente a través de la consola del navegador.

## Estructura del Código

El código se organiza en un único archivo JavaScript, que define un objeto llamado `gestionDeTienda` con las siguientes propiedades y métodos:

*   `inventario`: Un objeto que contiene las diferentes categorías de productos. En este caso, solo se define la categoría `frutas`, que es un array de objetos. Cada objeto representa una fruta con las propiedades `nombre`, `precio` y `cantidad`.
*   `agregarFruta(nom, pre, cant)`: Agrega una nueva fruta al array `inventario.frutas`.
*   `eliminarFruta(nom)`: Elimina una fruta del array `inventario.frutas` por su nombre.
*   `actualizarCantidadFruta(nom, nuevaCant)`: Actualiza la cantidad de una fruta específica en el array `inventario.frutas`.
*   `mostrarInventarioFrutas()`: Muestra el inventario de frutas en la consola.

## Cómo Utilizar

1.  Abre el archivo HTML (que solo contiene la etiqueta `<script>` para enlazar el JavaScript) en tu navegador.
2.  Abre la consola del navegador (presiona F12).
3.  Copia y pega todo el código JavaScript en la consola.
4.  Utiliza las siguientes funciones para interactuar con el inventario:

    *   `gestionDeTienda.agregarFruta(nom, pre, cant)`: Agrega una nueva fruta.
        *   Ejemplo: `gestionDeTienda.agregarFruta("manzana", 1500, 20);`
    *   `gestionDeTienda.eliminarFruta(nom)`: Elimina una fruta.
        *   Ejemplo: `gestionDeTienda.eliminarFruta("plátano");`
    *   `gestionDeTienda.actualizarCantidadFruta(nom, nuevaCant)`: Actualiza la cantidad de una fruta.
        *   Ejemplo: `gestionDeTienda.actualizarCantidadFruta("manzana", 25);`
    *   `gestionDeTienda.mostrarInventarioFrutas()`: Muestra el inventario de frutas.
        *   Ejemplo: `gestionDeTienda.mostrarInventarioFrutas();`

## Ejemplo de Uso

```javascript
// Agregar algunas frutas
gestionDeTienda.agregarFruta("manzana", 1500, 20);
gestionDeTienda.agregarFruta("plátano", 1000, 30);
gestionDeTienda.agregarFruta("naranja", 1200, 25);

// Mostrar el inventario
gestionDeTienda.mostrarInventarioFrutas();

// Actualizar la cantidad de manzanas
gestionDeTienda.actualizarCantidadFruta("manzana", 25);

// Eliminar los plátanos
gestionDeTienda.eliminarFruta("plátano");

// Mostrar el inventario actualizado
gestionDeTienda.mostrarInventarioFrutas();

Código Fuente
A continuación, se muestra el código fuente completo del proyecto:

const gestionDeTienda = {
    inventario: {
        frutas: [
            { nombre: "manzana", precio: 1500, cantidad: 20 },
            { nombre: "plátano", precio: 1000, cantidad: 30 }
            // ... más frutas aquí
        ],
        // ... otras categorías de productos (verduras, lácteos, etc.)
    },

    agregarFruta(nom, pre, cant) {
        this.inventario.frutas.push({ nombre: nom, precio: pre, cantidad: cant });
    },

    eliminarFruta(nom) {
        this.inventario.frutas = this.inventario.frutas.filter(fruta => fruta.nombre !== nom);
    },

    actualizarCantidadFruta(nom, nuevaCant) {
        for (let i = 0; i < this.inventario.frutas.length; i++) {
            if (this.inventario.frutas[i].nombre === nom) {
                this.inventario.frutas[i].cantidad = nuevaCant;
                return;
            }
        }
        console.log(`No se encontró la fruta ${nom} en el inventario.`);
    },

    mostrarInventarioFrutas() {
        console.log("Inventario de Frutas:");
        this.inventario.frutas.forEach(fruta => {
            console.log(`${fruta.nombre}: Precio - ${fruta.precio}, Cantidad - ${fruta.cantidad}`);
        });
    }
};

// **Ejemplos de uso**
gestionDeTienda.agregarFruta("naranja", 1200, 25);
gestionDeTienda.eliminarFruta("plátano");
gestionDeTienda.actualizarCantidadFruta("manzana", 25);
gestionDeTienda.mostrarInventarioFrutas();
