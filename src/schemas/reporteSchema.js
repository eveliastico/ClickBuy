import mongoose from "mongoose";

const reporteSchema = new mongoose.Schema({
    reportero: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    tipoReportado: {
        type: String,
        enum: ['Producto', 'Tienda'],
        required: true
    },
    // La propiedad 'reportado' se relaciona con el schema especificado en tipoReportado
    reportador: {
        type: Schema.Types.ObjectId,
        required: true,
        /*
        refPath: se utiliza para definir una referencia dinámica a otro modelo. 
        Específicamente, refPath permite que el nombre del modelo de 
        referencia se determine en tiempo de ejecución en función del 
        valor de otro campo en el documento.
        */
        refPath: 'tipoReportado'
    },
    razon: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    estado: {
        type: String,
        enum: ['pendiente', 'revisado', 'cerrado'],
        default: 'pendiente'
    }
}, {
    timestamps: true
});