import mongoose from "mongoose";

const tiendaSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true
    },
    descripcion: {
        type: String
    },
    logo: {
        type: String

    },
    propietario: {
        type: mongoose.Types.ObjectId, ref: 'Usuario',
         required: true
    },
    // Campo "aprobado" indica si la tienda fue aprobada por el administrador
    aprobado: {
        type: Boolean, 
        default: false
    }
},{
    timestamps: true
}
);

export default mongoose.model('Tienda', tiendaSchema);