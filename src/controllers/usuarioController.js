import { ObjectId } from 'mongodb';
import usuarioModelo from '../models/modelos/usuarioModelo.js';
import usuariosModel from '../models/modelos/usuarioModelo.js';

class usuarioController{
    constructor(){
    }

    async create(req, res){
        try {
            const respuesta = await usuariosModel.create(req.body);
            if (respuesta.acknowledged){
                res.status(200).json({message: 'Usuario creado'});
            }else{
                res.status(500).json({message: 'Error al crear usuario'});
                console.log(respuesta)
            }
        }catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async update(req, res){
        try {
            const respuesta = await usuariosModel.update(req.params.id, req.body);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async delete(req, res){
        try {
            const respuesta = await usuariosModel.delete(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getAll(req, res){
        try {
            const respuesta = await usuariosModel.getAll();
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
            const respuesta = await usuariosModel.getOne(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
}

// Se importa una instancia de esta clase
export default new usuarioController();