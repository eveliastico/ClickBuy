import tiendaSchema from '../../schemas/tiendaSchema.js';
import mongoose from 'mongoose';

class tiendaDAO {

    async create(tienda){
        return await tiendaSchema.create(tienda);
    }
    
    async getAll(){
        return await tiendaSchema.find(); 
    }
    
    async getOne(id){
        return await tiendaSchema.findById({_id: new mongoose.Types.ObjectId(id)});
    }
    
    async update(id, tienda){
        //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
        return await tiendaSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, tienda, {new: true});
    }
    
    async delete(id){
        return await tiendaSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new tiendaDAO();