import { ObjectId } from 'mongodb';
import usuariosDAO from '../models/DAOS/usuarioDAO.js';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { generarToken } from '../helpers/autenticacion.js';

class usuarioController{
    constructor(){
    }

    async create(req, res){
        try {
            const respuesta = await usuariosDAO.create(req.body);
            /*
            En mongodb se pede usar acknowledge para saber si se realizo la operacion
            acknowledge = true -> se realizo la operacion,
            pero en mongoose no se puede usar acknowledge porque ya devuelve si la 
            operacion se realizo con exito o no.
            */
            if (respuesta){
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
            const respuesta = await usuariosDAO.update(req.params.id, req.body);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async delete(req, res){
        try {
            const respuesta = await usuariosDAO.delete(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async getAll(req, res){
        try {
            const respuesta = await usuariosDAO.getAll();
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
            const respuesta = await usuariosDAO.getOne(req.params.id);
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).send(error);
            console.log(error);
        }
    }

    async register(req, res){
        try{
            const {correoElectronico, nombre, contrasena, tipoUsuario} = req.body;

            const usuarioExiste = await usuariosDAO.getOne({ correoElectronico });
            if (usuarioExiste){
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const claveEncryptada = await bcrypt.bash(contrasena, 10);
            
            const data = await usuariosDAO.create({
                correoElectronico,
                nombre,
                tipoUsuario,
                contrasena: claveEncryptada

            });

            res.status(201).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async login(req, res){
        const { correoElectronico, contrasena} = req.body;

        const usuarioExiste = await usuariosDAO.getOne({ correoElectronico });
        if (!usuarioExiste) {
            return res.status(400).json({ error: 'El usuario no existe '});
        }

        const claveValida = await bcrypt.compare(contrasena, usuarioExiste.constrasena);
        
        if(!claveValida) {
            return res.status(400).json({ error: 'Clave no valida'});
        }

        const token = generarToken(email);

        return res.status(200).json({ msg: 'Usuario autenticado', token});
    }
}

// Se importa una instancia de esta clase
export default new usuarioController();