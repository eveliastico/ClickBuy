export class Pedido {
    constructor(idPedido, idCliente, fechaCompra, estado) {
        this.idPedido = idPedido;
        this.idCliente = idCliente;
        this.fechaCompra = fechaCompra;
        this.estado = estado;
    }

    getIdPedido() {
        return this.idPedido;
    }

    setIdPedido(idPedido) {
        this.idPedido = idPedido;
    }

    getIdCliente() {
        return this.idCliente;
    }

    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }

    getFechaCompra() {
        return this.fechaCompra;
    }

    setFechaCompra(fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    getEstado() {
        return this.estado;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    toString() {
        return `Pedido ID: ${this.idPedido}, Cliente ID: ${this.idCliente}, Fecha de Compra: ${this.fechaCompra}, Estado: ${this.estado}`;
    }
}