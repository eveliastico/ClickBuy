import resenaSchema from '../../schemas/resenaSchema.js';
import mongoose from 'mongoose';

class reseñaDAO {

    async create(reseña) {
            return await resenaSchema.create(reseña);
    }

    async getAll() {
            return await resenaSchema.find();
    }

    async getOne(id) {
            return await resenaSchema.findById({ _id: new mongoose.Types.ObjectId(id) });
    }

    async update(id, reseña) {
            //tmbn puede usarse (_id: id) en lugar de (_id: new mongoose.Types.ObjectId(id))
            return await resenaSchema.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, reseña, { new: true });
    }

    async delete(id) {
            return await resenaSchema.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

}

export default new reseñaDAO();