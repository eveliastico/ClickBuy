import itemCarritoDAO from '../models/DAOS/itemCarritoDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class itemCarritoController{
    constructor(){
    }

    /*async create(req, res){
        try {
            const respuesta = await itemCarritoDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            *
            if (respuesta){
                res.status(200).json({message: 'itemCarritoDAO creado'});
            }else{
                res.status(500).json({message: 'Error al crear itemCarritoDAO'});
                console.log(respuesta)
            }
        }catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    create = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.create(req.body);
        if (!respuesta) {
            throw new MWError('Error al crear el item Carrito', 500);
        }
        res.status(201).json({message: 'item Carrito creado con éxito'});
    });

    /*async update(req, res){
        try {
            const respuesta = await itemCarritoDAO.update(req.params.id, req.body);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    update = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.update(req.params.id, req.body);
        if (!respuesta) {
            throw new MWError('Error al actualizar el item Carrito', 500);
        }
        res.status(202).json({message: 'El item Carrito fue actualizado correctamente'}, respuesta);
    });

    /*async delete(req, res){
        try {
            const respuesta = await itemCarritoDAO.delete(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.delete(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al eliminar el item Carrito', 500);
        }
        res.status(200).json({message: 'El item Carrito fue eliminado con éxito'}, respuesta);
    });

    /*async getAll(req, res){
        try {
            const respuesta = await itemCarritoDAO.getAll();
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await itemCarritoDAO.getAll();
        if (!respuesta) {
            throw new MWError('Error al listar todos los items Carritos', 500);
        }
        res.status(200).json({message: 'Lista de todos los items Carritos'}, respuesta);
    });

    /*async getOne(req, res){
        try {
            //Params: parametro que llega por la URL
            // De esta forma se puede obtener el parametro especifico id en este caso.
            //const {id} = req.params;
            //Query params: parametro que llega por la URL
            const respuesta = await itemCarritoDAO.getOne(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
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