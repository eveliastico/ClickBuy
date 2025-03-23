import pedidoDAO from '../models/DAOS/pedidoDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';


class pedidoController{
    constructor(){
    }

    /*async create(req, res){
        try {
            const respuesta = await pedidoDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            *
            if (respuesta){
                res.status(200).json({message: 'Pedido creado'});
            }else{
                res.status(500).json({message: 'Error al crear el Pedido'});
                console.log(respuesta)
            }
        }catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    create = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.create(req.body);
        if (!respuesta) {
            throw new MWError('Error al crear el pedido', 500);
        }
        res.status(201).json({message: 'Pedido creado con éxito'});
    });

    /*async update(req, res){
        try {
            const respuesta = await pedidoDAO.update(req.params.id, req.body);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    update = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.update(req.params.id, req.body);
        if (!respuesta) {
            throw new MWError('Error al actualizar el pedido', 500);
        }
        res.status(202).json({message: 'Pedido actualizado correctamente'}, respuesta);
    });

    /*async delete(req, res){
        try {
            const respuesta = await pedidoDAO.delete(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    delete = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.delete(req.params.id);
        if (!respuesta) {
            throw new MWError('Error al eliminar el pedido', 500);
        }
        res.status(200).json({message: 'Pedido eliminado con éxito'}, respuesta);
    });

    /*async getAll(req, res){
        try {
            const respuesta = await pedidoDAO.getAll();
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
    getAll = catchAsync(async (req, res, next)=> {
        const respuesta = await pedidoDAO.getAll();
        if (!respuesta) {
            throw new MWError('Error al listar los pedidos', 500);
        }
        res.status(200).json({message: 'Lista de todos los pedidos'}, respuesta);
    });

    /*async getOne(req, res){
        try {
            //Params: parametro que llega por la URL
            // De esta forma se puede obtener el parametro especifico id en este caso.
            //const {id} = req.params;
            //Query params: parametro que llega por la URL
            const respuesta = await pedidoDAO.getOne(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }*/
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