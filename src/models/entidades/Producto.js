export class Producto {
    constructor(idProducto, nombre, descripcion, precio, stock, idVendedor) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.idVendedor = idVendedor;
    }

    getIdProducto() {
        return this.idProducto;
    }

    setIdProducto(idProducto) {
        this.idProducto = idProducto;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    getStock() {
        return this.stock;
    }

    setStock(stock) {
        this.stock = stock;
    }

    getIdVendedor() {
        return this.idVendedor;
    }

    setIdVendedor(idVendedor) {
        this.idVendedor = idVendedor;
    }

    toString() {
        return `Producto: ${this.nombre}, Descripción: ${this.descripcion}, Precio: ${this.precio}, Stock: ${this.stock}, Vendedor ID: ${this.idVendedor}`;
    }
}