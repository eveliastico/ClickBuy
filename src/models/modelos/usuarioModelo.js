import { ObjectId } from 'mongodb';
import dbClient from '../../config/dbClient.js';
const coleccionUsuarios = dbClient.obtenerColeccion('usuarios');

class usuarioModelo{

    async create(usuario){
        try {
            dbClient.connect();
            return await coleccionUsuarios.insertOne(usuario, {message: 'Usuario creado'});
        } catch (error) {
            console.error('Error al crear un usuario...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }

    async getAll(){
        try {
            dbClient.connect();
            return await coleccionUsuarios.find({/*Aqui se busca por filtros*/}).toArray();
        } catch (error) {
            console.error('Error al obtener los usuarios...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }

    async getOne(id){
        try {
            dbClient.connect();
            return await coleccionUsuarios.findOne({_id: new ObjectId(id)});
        } catch (error) {
            console.error('Error al obtener un usuario...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }

    async update(id, usuario){
        try {
            dbClient.connect();
            return await coleccionUsuarios.updateOne({_id: new ObjectId(id)}, {$set: usuario});
        } catch (error) {
            console.error('Error al actualizar un usuario...');
            console.log(error);
        }finally{
            dbClient.desconectar();
        }
    }

    async delete(id){
        try {
            dbClient.connect();
            return await coleccionUsuarios.deleteOne({_id: new ObjectId(id)});
        } catch (error) {
            console.error('Error al eliminar un usuario...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }
}

export default new usuarioModelo();