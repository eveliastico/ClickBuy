import productoDAO from '../models/DAOS/productoDAO.js';
import catchAsync from '../utils/catchAsync.js';
import { MWError } from '../utils/mwError.js';

class productoController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.create(req.body);
        if(!respuesta) throw new MWError('Error al registrar el producto', 500);
        res.status(200).json({message: 'Producto creado', data: respuesta});
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.update(req.params.id, req.body);
        if(!respuesta) throw new MWError('Error al actualizar el producto', 500);
        res.status(200).json({message: 'El producto fue actualizado correctamente', data: respuesta});   
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.delete(req.params.id);
        if(!respuesta) throw new MWError('Error al eliminar el producto', 500);
        res.status(200).json({message: 'Producto eliminado con exito', data: respuesta});   
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.getAll();
        if(!respuesta) throw new MWError('Error al listar todos los productos', 404);
        res.status(200).json({message: 'Lista de todos los productos', data: respuesta});
    });

    getOne = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.getOne(req.params.id);
        if(!respuesta) throw new MWError('Error al buscar el producto', 404);
        res.status(200).json({message: 'Se encontro el producto con éxito', data: respuesta});   
    });

    //Consulta para buscar productos por IDVendedor
    getByIdVendedor = catchAsync(async (req, res, next)=> {
        const respuesta = await productoDAO.getByIdVendedor(req.params.idVendedor);
        if(!respuesta) throw new MWError('Error al buscar el producto', 404);
        res.status(200).json({message: 'Se encontro el producto con éxito', data: respuesta});   
    });
    
}
// Se importa una instancia de esta clase
export default new productoController();