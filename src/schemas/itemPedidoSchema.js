import mongoose from "mongoose";

const itemPedidoSchema = new mongoose.Schema({
    producto: { 
        type: mongoose.Types.ObjectId, 
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
},{
    colllection: 'itemsPedidos'
});

//export default mongoose.model('ItemPedido', itemPedidoSchema);
export default itemPedidoSchema;