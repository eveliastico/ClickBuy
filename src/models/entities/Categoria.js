export class Categoria {
    constructor(idCategoria, nombre) {
        this.idCategoria = idCategoria;
        this.nombre = nombre;
    }

    getIdCategoria() {
        return this.idCategoria;
    }

    setIdCategoria(idCategoria) {
        this.idCategoria = idCategoria;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    toString() {
        return `Categoría ID: ${this.idCategoria}, Nombre: ${this.nombre}`;
    }
}