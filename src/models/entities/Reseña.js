export class Reseña {
    constructor(idReseña, idCliente, idProducto, calificacion, comentario) {
        this.idReseña = idReseña;
        this.idCliente = idCliente;
        this.idProducto = idProducto;
        this.calificacion = calificacion;
        this.comentario = comentario;
    }

    getIdReseña() {
        return this.idReseña;
    }

    setIdReseña(idReseña) {
        this.idReseña = idReseña;
    }

    getIdCliente() {
        return this.idCliente;
    }

    setIdCliente(idCliente) {
        this.idCliente = idCliente;
    }

    getIdProducto() {
        return this.idProducto;
    }

    setIdProducto(idProducto) {
        this.idProducto = idProducto;
    }

    getCalificacion() {
        return this.calificacion;
    }

    setCalificacion(calificacion) {
        this.calificacion = calificacion;
    }

    getComentario() {
        return this.comentario;
    }

    setComentario(comentario) {
        this.comentario = comentario;
    }

    toString() {
        return `Reseña ID: ${this.idReseña}, Cliente ID: ${this.idCliente}, Producto ID: ${this.idProducto}, Calificación: ${this.calificacion}, Comentario: ${this.comentario}`;
    }
}