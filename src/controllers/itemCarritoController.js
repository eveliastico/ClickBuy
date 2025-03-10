import itemCarritoDAO from '../models/DAOS/itemCarritoDAO.js';
import itemCarritoSchema from '../schemas/itemCarritoSchema.js';

class itemCarritoController{
    constructor(){
    }

    async create(req, res){
        try {
            const respuesta = await itemCarritoDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            */
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
    }

    async update(req, res){
        try {
            const respuesta = await itemCarritoDAO.update(req.params.id, req.body);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async delete(req, res){
        try {
            const respuesta = await itemCarritoDAO.delete(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getAll(req, res){
        try {
            const respuesta = await itemCarritoDAO.getAll();
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getOne(req, res){
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
    }
}

// Se importa una instancia de esta clase
export default new itemCarritoController();