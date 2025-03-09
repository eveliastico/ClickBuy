import mongoose from "mongoose";

const itemCarritoSchema = new mongoose.Schema({
    producto: {
        type: Schema.Types.ObjectId, 
        ref: 'Producto', 
        required: true 
    },
    cantidad: { 
        type: Number, 
        default: 1 
    },
    precio: {
        type: Number,
        required: true
    }
});

export default mongoose.model('ItemCarrito', itemCarritoSchema);