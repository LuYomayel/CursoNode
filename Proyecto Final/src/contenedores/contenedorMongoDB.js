import config from '../../config.json' assert {type: "json"};
import cliente from '../conexiones/clienteMongoDB.js'

const database = cliente.db(config.database.name);
class ContenedorMongoDB {

    constructor(collection) {
        this.collection = database.collection(collection);
    }

    async findAll() {
        try {
            const cursor = this.collection.find({});
            return await cursor.toArray();
        } catch (error) {
            console.error("There was an error retrieving all collection " + error);
            return [];
        }
    }
}

export default ContenedorMongoDB;