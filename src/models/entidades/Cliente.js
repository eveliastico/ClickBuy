export class Cliente extends Usuario {
    constructor(id, nombre, correoElectronico, contrasena, direccion, telefono) {
        super(id, nombre, correoElectronico, contrasena, 'Cliente');
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    toString() {
        return `${super.toString()}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }
}

