import config from '../../config.json' assert {type: "json"};
import ProductosDaoMongoDB from './productos/productosDaoMongoDB.js'
import CarritosDaoMongoDB from './carritos/carritosDaoMongoDB.js'
let daoProductos;
let daoCarritos;
switch (config.database.engine) {
    case 'mongodb':
        daoProductos = ProductosDaoMongoDB;
        daoCarritos = CarritosDaoMongoDB;
        break;
        // case 'sqlLite3':
        //     daoProductos = require('./productos/ProductosDaoSqlLite3');
        //     break;
    default:
        daoProductos = ProductosDaoMongoDB;
        daoCarritos = CarritosDaoMongoDB;
}

export default {
    daoProductos,
    daoCarritos
}