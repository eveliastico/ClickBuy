import resenaSchema from '../../schemas/resenaSchema.js';
import mongoose from 'mongoose';

class reseñaDAO {

    async create(reseña) {
        try {
            return await resenaSchema.create(reseña);
        } catch (error) {
            console.error('Error al crear una resena...' + error);
        } finally {

        }
    }

    async getAll() {
        try {
            return await resenaSchema.find();
        } catch (error) {
            console.error('Error al obtener las resenas...' + error);
        } finally {
        }
    }

    async getOne(id) {
        try {
            return await resenaSchema.findById({ _id: new mongoose.Types.ObjectId(id) });
        } catch (error) {
            console.error('Error al obtener una resena...' + error);
        } finally {
        }
    }

    async update(id, reseña) {
        try {
            //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
            return await resenaSchema.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, reseña, { new: true });
        } catch (error) {
            console.error('Error al actualizar una resena...');
            console.log(error);
        } finally {
        }
    }

    async delete(id) {
        try {
            return await resenaSchema.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
        } catch (error) {
            console.error('Error al eliminar una resena...' + error);
        } finally {
        }
    }

}

export default new reseñaDAO();