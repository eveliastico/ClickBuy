export class Vendedor extends Usuario {
    constructor(id, nombre, correoElectronico, contrasena, nombreTienda, descripcionTienda) {
        super(id, nombre, correoElectronico, contrasena, 'Vendedor');
        this.nombreTienda = nombreTienda;
        this.descripcionTienda = descripcionTienda;
    }

    getNombreTienda() {
        return this.nombreTienda;
    }

    setNombreTienda(nombreTienda) {
        this.nombreTienda = nombreTienda;
    }

    getDescripcionTienda() {
        return this.descripcionTienda;
    }

    setDescripcionTienda(descripcionTienda) {
        this.descripcionTienda = descripcionTienda;
    }

    toString() {
        return `${super.toString()}, Tienda: ${this.nombreTienda}, Descripción: ${this.descripcionTienda}`;
    }
}