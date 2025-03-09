import mongoose from "mongoose";

const itemPedidoSchema = new mongoose.Schema({
    producto: { 
        type: Schema.Types.ObjectId, 
        ref: 'Producto', 
        required: true 
    },
    cantidad: { 
        type: Number, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    }
});

export default mongoose.model('ItemPedido', itemPedidoSchema);