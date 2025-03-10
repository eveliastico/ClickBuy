import express from 'express';
import itemCarritoController from '../controllers/itemCarritoController.js';
const route = express.Router();

// En esta clase se definen las rutas que se pueden usar

route.post('/',itemCarritoController.create);
route.get('/:id', itemCarritoController.getOne);
route.get('/', itemCarritoController.getAll);
route.put('/:id', itemCarritoController.update);
route.delete('/:id', itemCarritoController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;