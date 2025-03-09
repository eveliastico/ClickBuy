import express from 'express';
import productoController from '../controllers/productoController.js';
const route = express.Router();

// En esta clase se definen las rutas que se pueden usar

route.post('/',productoController.create);
route.get('/:id', productoController.getOne);
route.get('/', productoController.getAll);
route.put('/:id', productoController.update);
route.delete('/:id', productoController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;