import express from 'express';
import tiendaController from '../controllers/tiendaController.js';
const route = express.Router();

// En esta clase se definen las rutas que se pueden usar

route.post('/',tiendaController.create);
route.get('/:id', tiendaController.getOne);
route.get('/', tiendaController.getAll);
route.put('/:id', tiendaController.update);
route.delete('/:id', tiendaController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;