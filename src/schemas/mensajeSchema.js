import mongoose from "mongoose";
const mensajeSchema = new mongoose.Schema({
    remitente: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

export default mongoose.model('Mensaje', mensajeSchema);