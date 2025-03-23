import { ObjectId } from 'mongodb';
import usuariosDAO from '../models/DAOS/usuarioDAO.js';
import { MWError } from '../utils/mwError.js';

class usuarioController{
    constructor(){
    }

    async create(req, res, next){
        try {
            const respuesta = await usuariosDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            */
            if (respuesta){
                res.status(201).json({message: 'Usuario creado'});
            }else{
                throw new MWError('Error al crear el usuario', 500);
            }
        }catch (error) {
            //Pasa el error al middleware de errores
            next(error);
        }
    }

    async update(req, res, next){
        try {
            const respuesta = await usuariosDAO.update(req.params.id, req.body);
            if (respuesta) {
                res.status(202).json({message: 'El usuario fue actualizado correctamente '}, respuesta);
            }else {
                throw new MWError('Error al actualizar el usuario', 500);
            }
        } catch (error) {
            //Pasa el error al middleware de errores
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            const respuesta = await usuariosDAO.delete(req.params.id);
            if (respuesta) {
                res.status(200).json({message: 'Usuario eliminado con exito'});  
            }else {
                throw new MWError('Error al eliminar el usuario',500);
            }
        } catch (error) {
            //Pasa el error al middleware de errores
            next(error);
        }
    }

    async getAll(req, res, next){
        try {
            const respuesta = await usuariosDAO.getAll();
            if (respuesta) {
                res.status(200).json({message: 'Lista de todos los usuarios'},respuesta);   
            } else {
                throw new Error('Error al listar todos los usuarios',500);
            }
        } catch (error) {
            //Pasa el error al middleware de errores
            next(error);
        }
    }

    async getOne(req, res, next){
        try {
            //Params: parametro que llega por la URL
            // De esta forma se puede obtener el parametro especifico id en este caso.
            //const {id} = req.params;
            //Query params: parametro que llega por la URL
            const respuesta = await usuariosDAO.getOne(req.params.id);
            if (respuesta) {
                res.status(200).json({message: 'Se encontro el usuario con exito '},respuesta);
            } else {
               throw new MWError('Error al buscar el usuario', 500); 
            }
        } catch (error) {
            //Pasa el error al middleware de errores
            next(error);
        }
    }
}

// Se importa una instancia de esta clase
export default new usuarioController();