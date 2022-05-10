import config from '../../../config.json' assert {type: "json"};
import ContenedorMongoDB from '../../contenedores/contenedorMongoDB.js';

class ProductosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super('productos');
    }
}

module.exports = new ProductosDaoMongoDB();