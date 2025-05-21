import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String
    },
    stock:{
        type: Number,
        required: true
    },
    imagenes: [String],
    categoria: {
        type: mongoose.Types.ObjectId,
        ref: 'Categoria'
    },
    idVendedor: {
        type: mongoose.Types.ObjectId,
        ref: 'Tienda',
        required: true
    }
}, {
    timestamps: true
}
);

export default mongoose.model('Producto', productoSchema);