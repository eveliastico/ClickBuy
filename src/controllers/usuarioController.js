import usuariosModel from '../models/modelos/usuarioModelo.js';

class usuarioController{
    constructor(){
    }

    async create(req, res){
        try {
            //const data = usuariosModel.create(req.body);
            usuariosModel.create();
            res.status(201).json({message: 'Usuario creado'});
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async update(req, res){
        try {
            res.status(201).json({message: 'Usuario actualizado'});
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async delete(req, res){
        try {
            res.status(201).json({message: 'Usuario eliminado'});
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getAll(req, res){
        try {
            res.status(201).json({message: 'Usuarios obtenidos'});
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getOne(req, res){
        try {
            res.status(201).json({message: 'Usuario obtenido'});
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }
}

// Se importa una instancia de esta clase
export default new usuarioController();