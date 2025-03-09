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

