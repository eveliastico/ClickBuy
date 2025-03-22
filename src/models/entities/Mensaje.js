export class Mensaje {
    constructor(idMensaje, idCliente, idVendedor, contenido, fechaHora) {
        this.idMensaje = idMensaje;
        this.idCliente = idCliente;
        this.idVendedor = idVendedor;
        this.contenido = contenido;
        this.fechaHora = fechaHora;
    }

    getIdMensaje() {
        return this.idMensaje;
    }

    setIdMensaje(idMensaje) {
        this.idMensaje = idMensaje;
    }

    getIdCliente() {
        return this.idCliente;
    }

    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }

    getIdVendedor() {
        return this.idVendedor;
    }

    setIdVendedor(idVendedor) {
        this.idVendedor = idVendedor;
    }

    getContenido() {
        return this.contenido;
    }

    setContenido(contenido) {
        this.contenido = contenido;
    }

    getFechaHora() {
        return this.fechaHora;
    }

    setFechaHora(fechaHora) {
        this.fechaHora = fechaHora;
    }

    toString() {
        return `Mensaje ID: ${this.idMensaje}, Cliente ID: ${this.idCliente}, Vendedor ID: ${this.idVendedor}, Contenido: ${this.contenido}, Fecha y Hora: ${this.fechaHora}`;
    }
}