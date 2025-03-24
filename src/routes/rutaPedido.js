import express from 'express';
import pedidoController from '../controllers/pedidoController.js';
import { validarPedido } from '../middlewares/validarEntradas.js';

const route = express.Router();

// En esta clase se definen las rutas que se pueden usar

route.post('/', validarPedido, pedidoController.create);
route.get('/:id', pedidoController.getOne);
route.get('/', pedidoController.getAll);
route.put('/:id', pedidoController.update);
route.delete('/:id', pedidoController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;