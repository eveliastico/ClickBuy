export class Carrito {
    constructor(idCarrito, idCliente) {
        this.idCarrito = idCarrito;
        this.idCliente = idCliente;
    }

    getIdCarrito() {
        return this.idCarrito;
    }

    setIdCarrito(idCarrito) {
        this.idCarrito = idCarrito;
    }

    getIdCliente() {
        return this.idCliente;
    }

    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }

    toString() {
        return `Carrito ID: ${this.idCarrito}, Cliente ID: ${this.idCliente}`;
    }
}