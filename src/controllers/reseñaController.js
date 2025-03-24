import reseñaDAO from '../models/DAOS/reseñaDAO.js'
import { MWError } from '../utils/mwError.js';
import catchAsync from '../utils/catchAsync.js';

class reseñaController{
    constructor(){

    }

    /*async create(req, res){
        try{
            const respuesta = await reseñaDAO.create(req.body)
            if(respuesta){
                res.status(200).json({message: 'Resena Creada'})
            }else{
                res.status(500).json({message: 'Error al crear una resena'})
                console.log(respuesta)
            }
        }catch(error){
            res.status(500).send(error)
            console.log(`Error al crear una resena: ${error}`)
        }
    }*/
    create = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.create(req.body);
        if(!respuesta) throw new MWError('No se pudo crear la reseña', 500);
        res.status(200).json({message: 'Reseña Creada con éxito', data: respuesta})
    });

    /*async update(req, res){
        try{
            const respuesta = await reseñaDAO.update(req.params.id, req.boy)
            res.status(200).json(respuesta)
        }catch(error){
            res.status(500).send(error)
            console.log(`Error al actualizar la resena: ${error}`)
        }
    }*/
    update = catchAsync(async (req, res, next)=> {
        const respuesta = await reseñaDAO.update(req.params.id, req.boy);
        if(!respuesta) throw new MWError('No se pudo actualizar la reseña', 500);
        res.status(200).json({message: 'La Reseña fue actualizada con éxito', data: respuesta})
    });

    /*async delete(req, res){
        try{
            const respuesta = await reseñaDAO.delete(req.params.id, res.body)
            res.status(200).json(respuesta) 
        }catch(error){
            res.status(500)
            console.log(`Error al eliminar la reseña: ${error}`)
        }
    }*/
    delete = catchAsync(async (req, res, next)=>{
        const respuesta = await reseñaDAO.delete(req.params.id, res.body);
        if(!respuesta) throw new MWError('No se pudo eliminar la reseña', 500);
        res.status(200).json({data: respuesta}) 
    });

    /*async getAll(req, res){
        try{
            const respuesta = await reseñaDAO.getAll()
            res.status(200).json(respuesta)
        }catch(error){
            res.status(500).send(error)
            console.log(`Error al obtener las reseñas: ${error}`)
        }
    }*/
    getAll = catchAsync(async (req, res, next)=>{
        const respuesta = await reseñaDAO.getAll();
        if(!respuesta)  throw new MWError('Error al listar todas las reseñas', 404);
        res.status(200).json({data: respuesta})
    });

    /*async getOne(req, res){
        try {
            const respuesta = await reseñaDAO.getOne(req.params.id, res)
            res.status(200).json(respuesta)
        } catch (error) {
            res.status(500).send(error)
            console.log(`Error al obtener el usuario: ${error}`)
        }
    }*/
    getOne = catchAsync(async (req, res, next)=>{
        const respuesta = await reseñaDAO.getOne(req.params.id, res);
        if(!respuesta) throw new MWError('No se encontro la reseña', 404);
        res.status(200).json({data: respuesta})
    });
}

export default new reseñaController()