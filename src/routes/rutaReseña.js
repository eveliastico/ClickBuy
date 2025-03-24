import express from 'express';
import reseñaController from '../controllers/reseñaController.js';
import { validarReseña } from '../middlewares/validarEntradas.js';


const route = express.Router()

<<<<<<< HEAD
route.post('/', validarReseña, reseñaController.create)
route.get('/', reseñaController.getAll)
route.get('/:id', reseñaController.getOne)
route.put('/:id', reseñaController.update)
route.delete('/:id', reseñaController.delete)
=======
route.post('/', reseñaController.create);
route.get('/', reseñaController.getAll);
route.get('/:id', reseñaController.getOne);
route.put('/:id', reseñaController.update);
route.delete('/:id', reseñaController.delete);
>>>>>>> origin/main

export default route
