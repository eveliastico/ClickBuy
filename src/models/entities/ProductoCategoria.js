export class ProductoCategoria {
    constructor(idProducto, idCategoria) {
        this.idProducto = idProducto;
        this.idCategoria = idCategoria;
    }

    getIdProducto() {
        return this.idProducto;
    }

    setIdProducto(idProducto) {
        this.idProducto = idProducto;
    }

    getIdCategoria() {
        return this.idCategoria;
    }

    setIdCategoria(idCategoria) {
        this.idCategoria = idCategoria;
    }

    toString() {
        return `Producto ID: ${this.idProducto}, Categoría ID: ${this.idCategoria}`;
    }
}