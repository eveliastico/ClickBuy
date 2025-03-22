import mongoose from "mongoose";

//Aun no se si este esquema lo vamos a implementar
//pero de todas formas lo dejo aqui.
const resenaSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Types.ObjectId, 
        ref: 'Producto', 
        required: true 
    },
    usuario: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Usuario', 
        required: true 
    },
    calificacion: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },
    comentario: { 
        type: String 
    },
    fechaCreacion: { 
        type: Date, default: Date.now 
    }
});

export default mongoose.model('Resena', resenaSchema);