import pedidoDAO from '../models/DAOS/pedidoDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';


class pedidoController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.create(req.body);
        if (!respuesta) {
            throw new MWError('Error al crear el pedido', 500);
        }
        res.status(201).json({message: 'Pedido creado con éxito'});
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.update(req.params.id, req.body);
        if (!respuesta) {
            throw new MWError('Error al actualizar el pedido', 500);
        }
        res.status(202).json({message: 'Pedido actualizado correctamente'}, respuesta);
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.delete(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al eliminar el pedido', 500);
        }
        res.status(200).json({message: 'Pedido eliminado con éxito'}, respuesta);
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.getAll();
        if (!respuesta) {
            throw new MWError('Error al listar los pedidos', 500);
        }
        res.status(200).json({message: 'Lista de todos los pedidos'}, respuesta);
    });

    getOne = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.getOne(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al obtener el pedido', 500);
        }
        res.status(200).json({message: 'Pedido encontrado con éxito'}, respuesta);
    });

}
// Se importa una instancia de esta clase
export default new pedidoController();