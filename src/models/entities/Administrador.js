export class Administrador extends Usuario {
    constructor(id, nombre, correoElectronico, contrasena) {
        super(id, nombre, correoElectronico, contrasena, 'Administrador');
    }

    toString() {
        return `${super.toString()}`;
    }
}