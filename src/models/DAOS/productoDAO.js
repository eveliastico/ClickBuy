import productoSchema from '../../schemas/productoSchema.js';
import mongoose from 'mongoose';

class productoDAO {

    async create(producto){
            try {
                return await productoSchema.create(producto);
            } catch (error) {
                console.error('Error al crear un producto...'+ error);
            }finally{
                
            }
        }
    
        async getAll(){
            try {
                return await productoSchema.find(); 
            } catch (error) {
                console.error('Error al obtener los productos...'+ error);
            }finally{
            }
        }
    
        async getOne(id){
            try {
                return await productoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al obtener un producto...'+ error);
            }finally{
            }
        }
    
        async update(id, producto){
            try {
                //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
                return await productoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, producto, {new: true});
            } catch (error) {
                console.error('Error al actualizar un producto...');
                console.log(error);
            }finally{
            }
        }
    
        async delete(id){
            try {
                return await productoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al eliminar un producto...'+ error);
            }finally{
            }
        }
}

export default new productoDAO();