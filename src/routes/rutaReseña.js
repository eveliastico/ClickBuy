import express from 'express';
import reseñaController from '../controllers/reseñaController.js';

const route = express.Router()

route.post('/', reseñaController.create)
route.get('/', reseñaController.getAll)
route.get('/:id', reseñaController.getOne)
route.put('/:id', reseñaController.update)
route.delete('/:id', reseñaController.delete)

export default route
