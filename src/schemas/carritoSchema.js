import mongoose from "mongoose";
import itemCarritoSchema from "./itemCarritoSchema.js";

const carritoSchema = new mongoose.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    //Aqui se almacena un arreglo de items 
    items: [
        itemCarritoSchema
    ],
    fechaActualizacion: {
        type: Date, default: Date.now
    }
});
export default mongoose.model('Carrito', carritoSchema);