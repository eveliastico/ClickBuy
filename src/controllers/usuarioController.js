import { ObjectId } from 'mongodb';
import usuariosDAO from '../models/DAOS/usuarioDAO.js';
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { generarToken } from '../helpers/autenticacion.js';

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

        const usuarioExiste = await usuariosDAO.getByEmail( correoElectronico );
        if (!usuarioExiste) {
            return res.status(400).json({ error: 'El usuario no existe '});
        }
/*
        const claveValida = await bcrypt.compare(contrasena, usuarioExiste.constrasena);
        
        if(!claveValida) {
            return res.status(400).json({ error: 'Clave no valida'});
        }
*/
        if(usuarioExiste.contrasena == contrasena){
            const token = generarToken(email);
            return res.status(200).json({ msg: 'Usuario Autenticado', token});
        } else{
            return res.status(500).json({ error: 'Contraseña incorrecta'});           
        } 
    }
}
// Se importa una instancia de esta clase
export default new usuarioController();