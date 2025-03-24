import express from 'express';
import usuarioController from '../controllers/usuarioController.js';
import { validarUsuario } from '../middlewares/validarEntradas.js';

const route = express.Router();
import { verificarToken } from '../helpers/autenticacion.js';
import usuarioSchema from '../schemas/usuarioSchema.js';

// En esta clase se definen las rutas que se pueden usar
<<<<<<< HEAD
route.post('/register',validarUsuario, usuarioController.create);
=======

route.post('/register',usuarioController.create);
route.post('/login', usuarioController.login);
>>>>>>> origin/main
route.get('/:id', usuarioController.getOne);
route.get('/', usuarioController.getAll);
route.put('/:id', usuarioController.update);
route.delete('/:id', usuarioController.delete);

// Con esta linea se dice que estas rutas estan disponibles 
// para ser usadas en otros archivos
export default route;