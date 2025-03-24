import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correoElectronico: {
        type: String,
        required: true,
        //Prueba de validacion para correo
        unique: true,
        validate: {
            validator: (v) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v),
            message: 'El formato del correo electronico no es correcto',
        },
    },
    contrasena: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        enum: ['cliente', 'vendedor', 'administrador'],
        default: 'cliente'
    },
    /**
     * Posible implementación de favoritos para crear una lista de productos favoritos asignada al usuario.
    favoritos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Producto'
        }
    ],
    */
}, {
    timestamps: true,
    // Hace que el esquema sea estricto, es decir, no se pueden agregar 
    // campos que no esten definidos en el esquema
    strict: true,
    collection: 'usuarios'
}
);

export default mongoose.model('usuarios', usuarioSchema);