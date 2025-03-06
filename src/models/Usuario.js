export class Usuario {
    constructor(id, nombre, correoElectronico, contrasena, tipoUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.contrasena = contrasena;
        this.tipoUsuario = tipoUsuario;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getCorreoElectronico() {
        return this.correoElectronico;
    }

    setCorreoElectronico(correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    getContrasena() {
        return this.contrasena;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }

    getTipoUsuario() {
        return this.tipoUsuario;
    }

    setTipoUsuario(tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    toString() {
        return `Usuario: ${this.nombre}, Correo: ${this.correoElectronico}, Tipo: ${this.tipoUsuario}`;
    }
}