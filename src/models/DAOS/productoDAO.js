import productoSchema from '../../schemas/productoSchema.js';
import mongoose from 'mongoose';

class productoDAO {

    async create(producto){
        return await productoSchema.create(producto);
    }
    
    async getAll(){
        return await productoSchema.find(); 
    }
    
    async getOne(id){
        return await productoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
    }
    
    async update(id, producto){
        //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
        return await productoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, producto, {new: true});
    }
    
    async delete(id){
        return await productoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new productoDAO();