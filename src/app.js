import 'dotenv/config';
import express from 'express';
import rutaUsuarios from './routes/rutaUsuarios.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import dbClientMongoose from './config/dbClientMongoose.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/usuarios', rutaUsuarios);

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