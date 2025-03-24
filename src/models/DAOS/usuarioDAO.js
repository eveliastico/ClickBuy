import { ObjectId } from 'mongodb';
//import dbClient from '../../config/dbClient.js';
//const coleccionUsuarios = dbClient.obtenerColeccion('usuarios');
import Usuario from '../../schemas/usuarioSchema.js';
import mongoose from 'mongoose';

class usuarioServicio{

    async create(usuario){
            return await Usuario.create(usuario);
    }

    async getAll(){
            return await Usuario.find(); 
    }

    async getOne(id){
            return await Usuario.findById({_id: new mongoose.Types.ObjectId(id)});
    }

    async update(id, usuario){
            //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
            return await Usuario.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, usuario, {new: true});
    }

    async delete(id){
            return await Usuario.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new usuarioServicio();