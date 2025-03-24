import reseñaDAO from '../models/DAOS/reseñaDAO.js'
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class reseñaController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.create(req.body);
        if(!respuesta) throw new MWError('No se pudo crear la reseña', 500);
        res.status(200).json({message: 'Reseña Creada con éxito', data: respuesta})
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.update(req.params.id, req.boy);
        if(!respuesta) throw new MWError('No se pudo actualizar la reseña', 500);
        res.status(200).json({message: 'La Reseña fue actualizada con éxito', data: respuesta})
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.delete(req.params.id, res.body);
        if(!respuesta) throw new MWError('No se pudo eliminar la reseña', 500);
        res.status(200).json({data: respuesta}) 
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.getAll();
        if(!respuesta)  throw new MWError('Error al listar todas las reseñas', 404);
        res.status(200).json({data: respuesta})
    });

    getOne = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.getOne(req.params.id, res);
        if(!respuesta) throw new MWError('No se encontro la reseña', 404);
        res.status(200).json({data: respuesta})
    });
}
export default new reseñaController()