import mongoose from "mongoose";
import itemPedidoSchema from "./itemPedidoSchema.js";

const pedidoSchema = new mongoose.Schema({
    usuario: { 
        type: Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: true 
    },
    items: [
        itemPedidoSchema
    ],
    precioTotal: { 
        type: Number, 
        required: true },
    direccionEnvio: {
        calle: String,
        ciudad: String,
        estado: String,
        codigoPostal: String,
        pais: String
    },
    metodoPago: {
        type: String,
        enum: ['tarjeta', 'paypal', 'otros'],
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'procesando', 'enviado', 'entregado', 'cancelado'],
        default: 'pendiente'
    },
},
{
    timestamps: true
});

export default mongoose.model('Pedido', pedidoSchema);
