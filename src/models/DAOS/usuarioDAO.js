import { ObjectId } from 'mongodb';
//import dbClient from '../../config/dbClient.js';
//const coleccionUsuarios = dbClient.obtenerColeccion('usuarios');
import Usuario from '../../schemas/usuarioSchema.js';
import mongoose from 'mongoose';

class usuarioServicio{

    async create(usuario){
        try {
            return await Usuario.create(usuario);
        } catch (error) {
            console.error('Error al crear un usuario...'+ error);
        }finally{
            
        }
    }

    async getAll(){
        try {
            return await Usuario.find(); 
        } catch (error) {
            console.error('Error al obtener los usuarios...'+ error);
        }finally{
        }
    }

    async getOne(id){
        try {
            return await Usuario.findById({_id: new mongoose.Types.ObjectId(id)});
        } catch (error) {
            console.error('Error al obtener un usuario...'+ error);
        }finally{
        }
    }

    async update(id, usuario){
        try {
            //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
            return await Usuario.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, usuario, {new: true});
        } catch (error) {
            console.error('Error al actualizar un usuario...');
            console.log(error);
        }finally{
        }
    }

    async getByEmail(correoElectronico) {
        try {
            return await Usuario.findOne({ correoElectronico });
        } catch (error) {
            console.error('Error al obtener un usuario por correo electrónico: ' + error);
            throw new Error('Error al obtener el usuario'); // Manejo de errores
        }
    }


    async delete(id){
        try {
            return await Usuario.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
        } catch (error) {
            console.error('Error al eliminar un usuario...'+ error);
        }finally{
        }
    }
}

export default new usuarioServicio();