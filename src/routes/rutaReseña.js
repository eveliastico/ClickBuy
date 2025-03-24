import express from 'express';
import reseñaController from '../controllers/reseñaController.js';
import { validarReseña } from '../middlewares/validarEntradas.js';


const route = express.Router()

route.post('/', validarReseña, reseñaController.create)
route.get('/', reseñaController.getAll)
route.get('/:id', reseñaController.getOne)
route.put('/:id', reseñaController.update)
route.delete('/:id', reseñaController.delete)


export default route
