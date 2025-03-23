import productoDAO from '../models/DAOS/productoDAO.js';
import { MWError } from '../utils/mwError.js';

class productoController{
    constructor(){
    }

    async create(req, res, next){
        try {
            const respuesta = await productoDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            */
            if (respuesta){
                res.status(201).json({message: 'Producto creado'});
            }else{
                throw new MWError('Error al registrar el producto', 500);
            }
        }catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {
            const respuesta = await productoDAO.update(req.params.id, req.body);
            if (condition) {
                res.status(202).json({message: 'El producto fue actualizado correctamente'}, respuesta);                
            } else {
                throw new MWError('Error al actualizar el producto', 500);
            }
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            const respuesta = await productoDAO.delete(req.params.id);
            if (respuesta) {
                res.status(200).json({message: 'Producto eliminado con exito'}, respuesta);                
            } else {
                throw new MWError('Error al eliminar el producto', 500);
            }
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next){
        try {
            const respuesta = await productoDAO.getAll();
            if (respuesta) {
                res.status(200).json({message: 'Lista de todos los productos'}, respuesta);
            } else {
                throw new MWError('Error al listar todos los productos', 500);
            }
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next){
        try {
            //Params: parametro que llega por la URL
            // De esta forma se puede obtener el parametro especifico id en este caso.
            //const {id} = req.params;
            //Query params: parametro que llega por la URL
            const respuesta = await productoDAO.getOne(req.params.id);
            if (respuesta) {
                res.status(200).json({message: 'Se encontro el producto con exito'}, respuesta);                
            } else {
              throw new MWError('Error al buscar el producto', 500);  
            }
        } catch (error) {
            next(error);
        }
    }
}

// Se importa una instancia de esta clase
export default new productoController();