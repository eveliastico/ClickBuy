export class DetallePedido {
    constructor(idDetallePedido, idPedido, idProducto, cantidad, precioTotal) {
        this.idDetallePedido = idDetallePedido;
        this.idPedido = idPedido;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.precioTotal = precioTotal;
    }

    getIdDetallePedido() {
        return this.idDetallePedido;
    }

    setIdDetallePedido(idDetallePedido) {
        this.idDetallePedido = idDetallePedido;
    }

    getIdPedido() {
        return this.idPedido;
    }

    setIdPedido(idPedido) {
        this.idPedido = idPedido;
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

    getPrecioTotal() {
        return this.precioTotal;
    }

    setPrecioTotal(precioTotal) {
        this.precioTotal = precioTotal;
    }

    toString() {
        return `Detalle Pedido ID: ${this.idDetallePedido}, Pedido ID: ${this.idPedido}, Producto ID: ${this.idProducto}, Cantidad: ${this.cantidad}, Precio Total: ${this.precioTotal}`;
    }
}