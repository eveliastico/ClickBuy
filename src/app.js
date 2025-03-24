import 'dotenv/config';
import express from 'express';
import rutaUsuarios from './routes/rutaUsuarios.js';
import bodyParser from 'body-parser';
import dbClientMongoose from './config/dbClientMongoose.js';
import rutaProductos from './routes/rutaProductos.js';
import rutaTienda from './routes/rutaTienda.js';
import rutaItemCarrito from './routes/rutaItemCarrito.js';
import rutaPedido from './routes/rutaPedido.js';
import rutaReseña from './routes/rutaReseña.js'
import { MWError, adminError } from './utils/mwError.js';
import morgan from 'morgan';


const app = express();


app.use(express.json());
//Configurar el middleware de morgan para el registro de solicitudes
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/usuarios', rutaUsuarios);
app.use('/productos', rutaProductos);
app.use('/tienda', rutaTienda);
app.use('/item_carrito', rutaItemCarrito);
app.use('/pedido', rutaPedido);
app.use('/resena', rutaReseña)

app.all('*', (req, res, next)=> {
    throw new MWError(`No se pudo acceder a ${req.originalUrl} en el servidor.`, 404);
});
//Middleware para el manejo de errores
app.use(adminError);

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