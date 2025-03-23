import itemCarritoSchema from '../../schemas/itemCarritoSchema.js';
import mongoose from 'mongoose';

class itemCarrotioDAO {

    async create(itemCarrito){
        return await itemCarritoSchema.create(itemCarrito);
    }
    
    async getAll(){
        return await itemCarritoSchema.find(); 
    }
    
    async getOne(id){
        return await itemCarritoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
    }
    
    async update(id, itemCarrito){
        //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
        return await itemCarritoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, itemCarrito, {new: true});
    }
    
    async delete(id){
        return await itemCarritoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new itemCarrotioDAO();