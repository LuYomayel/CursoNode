import config from '../../../config.json' assert {type: "json"};
import ContenedorMongoDB from '../../contenedores/contenedorMongoDB.js';

class CarritosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super('carritos');
    }
}

export default new CarritosDaoMongoDB();