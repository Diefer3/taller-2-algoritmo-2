const gestionDeTienda = {
    productos: [
        { nombre: "frutas", precio: 2500, cantidad: 10 }
    ],

    agregarProducto(nom, pre, cant) {
        this.productos.push({ nombre: nom, precio: pre, cantidad: cant });
    },

    actualizarCantidad(nom, nuevaCant) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].nombre === nom) {
                this.productos[i].cantidad = nuevaCant;
                return;
            }
        }
    },

    mostrarProductos() {  
        console.log(this.productos);
    }
};


gestionDeTienda.agregarProducto("manzana", 1500, 20);
gestionDeTienda.actualizarCantidad("frutas", 30);
gestionDeTienda.mostrarProductos();

