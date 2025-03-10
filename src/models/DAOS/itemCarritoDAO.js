import itemCarritoSchema from '../../schemas/itemCarritoSchema.js';
import mongoose from 'mongoose';

class itemCarrotioDAO {

    async create(itemCarrito){
            try {
                return await itemCarritoSchema.create(itemCarrito);
            } catch (error) {
                console.error('Error al crear un itemCarrito...'+ error);
            }finally{
                
            }
        }
    
        async getAll(){
            try {
                return await itemCarritoSchema.find(); 
            } catch (error) {
                console.error('Error al obtener los itemsCarrito...'+ error);
            }finally{
            }
        }
    
        async getOne(id){
            try {
                return await itemCarritoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al obtener un itemCarrito...'+ error);
            }finally{
            }
        }
    
        async update(id, itemCarrito){
            try {
                //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
                return await itemCarritoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, itemCarrito, {new: true});
            } catch (error) {
                console.error('Error al actualizar un itemCarrito...');
                console.log(error);
            }finally{
            }
        }
    
        async delete(id){
            try {
                return await itemCarritoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al eliminar un itemCarrito...'+ error);
            }finally{
            }
        }
}

export default new itemCarrotioDAO();