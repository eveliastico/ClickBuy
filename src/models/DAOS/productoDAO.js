import { ObjectId } from "mongodb";
import dbClient from "../../config/dbClient";
const coleccionProductos = dbClient.obtenerColeccion("productos");


class productoServicio {

    async getProductos() {
        try {
            dbClient.connect();
            return await coleccionProductos.find({/*Aqui se busca por filtros*/ }).toArray();
        } catch (error) {
            console.error('Error al obtener los usuarios...' + error);
        } finally {
            dbClient.desconectar();
        }
    }

    async getProductoById(id) {
        try {
            dbClient.connect();
            return await coleccionProductos.findOne({ _id: new ObjectId(id) });
        } catch (error) {
            console.error('Error al obtener un usuario...' + error);
        } finally {
            dbClient.desconectar();
        }
    }

    async createProducto(producto) {
        try {
            dbClient.connect();
            return await coleccionProductos.insertOne(usuario, {message: 'Usuario creado'});
        } catch (error) {
            console.error('Error al crear un usuario...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }

    async updateProducto(id, producto) {
        try {
            dbClient.connect();
            return await coleccionProductos.updateOne({_id: new ObjectId(id)}, {$set: producto});
        } catch (error) {
            console.error('Error al actualizar un usuario...');
            console.log(error);
        }finally{
            dbClient.desconectar();
        }
    }

    async deleteProducto(id) {
        try {
            dbClient.connect();
            return await coleccionProductos.deleteOne({_id: new ObjectId(id)});
        } catch (error) {
            console.error('Error al eliminar un usuario...'+ error);
        }finally{
            dbClient.desconectar();
        }
    }
}