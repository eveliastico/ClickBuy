import {MongoClient} from 'mongodb';

const url = 'mongodb://localhost:27017/';
const dbName = 'ClickBuy';

class dbClient{
    constructor(){
        this.options = {};
        this.client = new MongoClient(url+dbName, this.options);
    }

    obtenerColeccion(nombre){
        return this.client.db().collection(nombre);
    }

    async connect(){
        try{
            await this.client.connect();
            console.log('Coneccion exitosa a la base de datos...');
        }catch(error){
            console.error('Error al conectar a la base de datos...'+ error);
        }
    }

    desconectar(){
        try{
            this.client.close();
            console.log('Desconexion exitosa...');
        }catch(error){
            console.error('Error al desconectar de la base de datos...'+ error);
        }
    }
        
}

export default new dbClient();