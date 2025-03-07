import dbClient from '../../config/dbClient.js';
class usuarioModelo{

    async create(){
        dbClient.connect();
        const coleccionUsuarios = dbClient.obtenerColeccion('usuarios');
        await coleccionUsuarios.insertOne({nombre: 'Juan', apellido: 'Perez', edad: 30});
        dbClient.desconectar();
    }
}

export default new usuarioModelo();