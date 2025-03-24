import pedidoSchema from '../../schemas/pedidoSchema.js';
import mongoose, { Schema } from 'mongoose';

class pedidoDAO {

    async create(pedido){
        return await pedidoSchema.create(pedido);
    }
    
    async getAll(){
        return await pedidoSchema.find(); 
    }
    
    async getOne(id){
        return await pedidoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
    }
    
    async update(id, pedido){
        //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
        return await pedidoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, pedido, {new: true});
    }
    
    async delete(id){
        return await pedidoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new pedidoDAO();