import config from '../../config.json' assert {type: "json"};
import cliente from './clienteMongoDB.js';

let client
(async function() {
    switch (config.database.engine) {
        case 'mongodb':
            client = cliente;
            await cliente.connect();
            break;
            // case 'sqllite3':
            //     cliente = require('./clienteSQLLite3');
            //     await cliente.connect();
            //     break;
        default:
            client = clienteMongoDB;
    }
})();

export default client;