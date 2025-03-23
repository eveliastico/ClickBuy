import reseñaDAO from '../models/DAOS/reseñaDAO.js'

class reseñaController{
    constructor(){

    }

    async create(req, res){
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
    }

    async update(req, res){
        try{
            const respuesta = await reseñaDAO.update(req.params.id, req.boy)
            res.status(200).json(respuesta)
        }catch(error){
            res.status(500).send(error)
            console.log(`Error al actualizar la resena: ${error}`)
        }
    }

    async delete(req, res){
        try{
            const respuesta = await reseñaDAO.delete(req.params.id, res.body)
            res.status(200).json(respuesta) 
        }catch(error){
            res.status(500)
            console.log(`Error al eliminar la reseña: ${error}`)
        }
    }

    async getAll(req, res){
        try{
            const respuesta = await reseñaDAO.getAll()
            res.status(200).json(respuesta)
        }catch(error){
            res.status(500).send(error)
            console.log(`Error al obtener las reseñas: ${error}`)
        }
    }

    async getOne(req, res){
        try {
            const respuesta = await reseñaDAO.getOne(req.params.id, res)
            res.status(200).json(respuesta)
        } catch (error) {
            res.status(500).send(error)
            console.log(`Error al obtener el usuario: ${error}`)
        }
    }
}

export default new reseñaController()