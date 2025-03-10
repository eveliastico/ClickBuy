import pedidoSchema from '../../schemas/pedidoSchema.js';
import mongoose, { Schema } from 'mongoose';

class pedidoDAO {

    async create(pedido){
            try {
                return await pedidoSchema.create(pedido);
            } catch (error) {
                console.error('Error al crear un pedido...'+ error);
            }finally{
                
            }
        }
    
        async getAll(){
            try {
                return await pedidoSchema.find(); 
            } catch (error) {
                console.error('Error al obtener los pedidos...'+ error);
            }finally{
            }
        }
    
        async getOne(id){
            try {
                return await pedidoSchema.findById({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al obtener un pedido...'+ error);
            }finally{
            }
        }
    
        async update(id, producto){
            try {
                //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
                return await pedidoSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, pedido, {new: true});
            } catch (error) {
                console.error('Error al actualizar un pedido...');
                console.log(error);
            }finally{
            }
        }
    
        async delete(id){
            try {
                return await pedidoSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al eliminar un pedido...'+ error);
            }finally{
            }
        }
}

export default new pedidoDAO();