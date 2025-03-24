import { ObjectId } from 'mongodb';
import usuariosDAO from '../models/DAOS/usuarioDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class usuarioController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await usuariosDAO.create(req.body);
        if(!respuesta) throw new MWError('Error al crear el Usuario', 500);
        res.status(200).json({message: 'Usuario creado con éxito', data: respuesta});
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await usuariosDAO.update(req.params.id, req.body);
        if(!respuesta) throw new MWError('Error al actualizar el usuario', 500);
        res.status(200).json({message: 'El usuario fue actualizado correctamente ', data: respuesta});
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await usuariosDAO.delete(req.params.id);
        if(!respuesta) throw new MWError('Error al eliminar el usuario', 500);
        res.status(200).json({message: 'Usuario eliminado con éxito'});  
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await usuariosDAO.getAll();
        if(!respuesta) throw new MWError('Error al listar todos los usuarios', 404);
        res.status(200).json({message: 'Lista de todos los usuarios ', data: respuesta});
    });

    getOne = catchAsync(async (req, res, next)=> {
        //Params: parametro que llega por la URL
        // De esta forma se puede obtener el parametro especifico id en este caso.
        //const {id} = req.params;
        //Query params: parametro que llega por la URL
        const respuesta = await usuariosDAO.getOne(req.params.id);
        if(!respuesta) throw new MWError('Error al buscar el usuario', 404);
        res.status(200).json({message: 'Se encontro el usuario con exito ', data: respuesta});
    });
}
// Se importa una instancia de esta clase
export default new usuarioController();