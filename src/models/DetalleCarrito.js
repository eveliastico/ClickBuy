export class DetalleCarrito {
    constructor(idDetalle, idCarrito, idProducto, cantidad) {
        this.idDetalle = idDetalle;
        this.idCarrito = idCarrito;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
    }

    getIdDetalle() {
        return this.idDetalle;
    }

    setIdDetalle(idDetalle) {
        this.idDetalle = idDetalle;
    }

    getIdCarrito() {
        return this.idCarrito;
    }

    setIdCarrito(idCarrito) {
        this.idCarrito = idCarrito;
    }

    getIdProducto() {
        return this.idProducto;
    }

    setIdProducto(idProducto) {
        this.idProducto = idProducto;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    toString() {
        return `Detalle Carrito ID: ${this.idDetalle}, Carrito ID: ${this.idCarrito}, Producto ID: ${this.idProducto}, Cantidad: ${this.cantidad}`;
    }
}