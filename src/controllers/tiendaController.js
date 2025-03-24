import tiendaDAO from '../models/DAOS/tiendaDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class tiendaController{
    constructor(){
    }

    create = catchAsync(async (req, res, next)=> {
        const respuesta = await tiendaDAO.create(req.body);
        if (!respuesta) {
            throw new MWError('Error al crear una tienda', 500);
        }
        res.status(200).json({message: 'Tienda creada con éxito'});
    });

    update = catchAsync(async (req, res, next)=> {
        const respuesta = await tiendaDAO.update(req.params.id, req.body);
        if (!respuesta) {
            throw new MWError('Error al actualizar la tienda', 500);
        }
        res.status(200).json({message: 'La tienda fue actualizada correctamente'}, respuesta);  
    });

    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await tiendaDAO.delete(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al eliminar la tienda', 500);
        }
        res.status(200).json({message: 'Tienda eliminada con éxito'}, respuesta);        
    });

    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await tiendaDAO.getAll();
        if (!respuesta) {
            throw new MWError('Error al listar todas las tiendas', 500);
        }
        res.status(200).json({message: 'Lista de todas las tiendas'}, respuesta);  
    });

   //Utilizando el catchAsync como envoltorio para el manejo de errores y no utilizar try-catch aqui
    getOne = catchAsync(async (req, res ,next)=> {
        //Params: parametro que llega por la URL
        // De esta forma se puede obtener el parametro especifico id en este caso.
        //const {id} = req.params;
        //Query params: parametro que llega por la URL
        const respuesta = await tiendaDAO.getOne(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al obtener la tienda', 500);
        } 
        res.status(200).json({message: 'Se encontro la tienda con exito'}, respuesta); 
    });
}
// Se importa una instancia de esta clase
export default new tiendaController();