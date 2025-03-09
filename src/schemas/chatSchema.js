import mongoose from "mongoose";
import mensajeSchema from "./mensajeSchema.js";

const chatSchema = new mongoose.Schema({
    participantes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        }
    ],
    mensajes: [
        mensajeSchema
    ]

}, {
    timestamps: true
});

export default mongoose.model('Chat', chatSchema);