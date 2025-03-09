import 'dotenv/config';
import express from 'express';
import rutaUsuarios from './routes/rutaUsuarios.js';
import bodyParser from 'body-parser';
import dbClientMongoose from './config/dbClientMongoose.js';
import rutaProductos from './routes/rutaProductos.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', rutaUsuarios);
app.use('/productos', rutaProductos);

try {
    //Si no hay un perto estipulado en .env se usara el puerto 3000
    const PORT =process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error al correr el servidor: ', error);
}

process.on('SIGINT', async () => {
    dbClientMongoose.desconectarBD();
    process.exit(0);
});