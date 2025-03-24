import itemCarritoDAO from '../models/DAOS/itemCarritoDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class itemCarritoController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.create(req.body);
        if (!respuesta) {
            throw new MWError('Error al crear el item Carrito', 500);
        }
        res.status(201).json({message: 'item Carrito creado con éxito'});
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.update(req.params.id, req.body);
        if (!respuesta) {
            throw new MWError('Error al actualizar el item Carrito', 500);
        }
        res.status(202).json({message: 'El item Carrito fue actualizado correctamente'}, respuesta);
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.delete(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al eliminar el item Carrito', 500);
        }
        res.status(200).json({message: 'El item Carrito fue eliminado con éxito'}, respuesta);
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.getAll();
        if (!respuesta) {
            throw new MWError('Error al listar todos los items Carritos', 500);
        }
        res.status(200).json({message: 'Lista de todos los items Carritos'}, respuesta);
    });

    getOne = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.getOne(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al obtener el item Carrito', 500);
        }
        res.status(200).json({message: 'Item Carrito encontrado con éxito'}, respuesta);
    });
}
// Se importa una instancia de esta clase
export default new itemCarritoController();