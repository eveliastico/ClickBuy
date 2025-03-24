import express from 'express';
import usuarioController from '../controllers/usuarioController.js';
const route = express.Router();
import { verificarToken } from '../helpers/autenticacion.js';
import usuarioSchema from '../schemas/usuarioSchema.js';

// En esta clase se definen las rutas que se pueden usar

route.post('/register',usuarioController.create);
route.get('/login', usuarioController.login);
route.get('/:id', usuarioController.getOne);
route.get('/', usuarioController.getAll);
route.put('/:id', usuarioController.update);
route.delete('/:id', usuarioController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;