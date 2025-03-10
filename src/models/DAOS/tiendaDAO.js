import tiendaSchema from '../../schemas/tiendaSchema.js';
import mongoose from 'mongoose';

class tiendaDAO {

    async create(tienda){
            try {
                return await tiendaSchema.create(tienda);
            } catch (error) {
                console.error('Error al crear una tienda...'+ error);
            }finally{
                
            }
        }
    
        async getAll(){
            try {
                return await tiendaSchema.find(); 
            } catch (error) {
                console.error('Error al obtener las tiendas...'+ error);
            }finally{
            }
        }
    
        async getOne(id){
            try {
                return await tiendaSchema.findById({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al obtener una tienda...'+ error);
            }finally{
            }
        }
    
        async update(id, tienda){
            try {
                //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
                return await tiendaSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, tienda, {new: true});
            } catch (error) {
                console.error('Error al actualizar una tienda...');
                console.log(error);
            }finally{
            }
        }
    
        async delete(id){
            try {
                return await tiendaSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
            } catch (error) {
                console.error('Error al eliminar una tienda...'+ error);
            }finally{
            }
        }
}

export default new tiendaDAO();