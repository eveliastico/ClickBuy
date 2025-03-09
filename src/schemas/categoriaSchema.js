import mongoose from "mongoose";

//Categoria para clasificar por productos.
const categoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        // Unique se utiliza para asegurar que los valores de un campo sean únicos en la base de datos
        unique: true
    },
    descripcion: {
        type: String
    }
});

export default mongoose.model('Categoria', categoriaSchema);