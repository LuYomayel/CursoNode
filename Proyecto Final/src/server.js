import config from '../config.json' assert {type: "json"};
import express from 'express';
import middleware from './controllers/controllers.functions.js'

const app = express();
import products from './routes/products.route.js'
import carts from './routes/carts.route.js'
import controllers from './controllers/controllers.services.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

// rutas
app.use('/api', controllers)
app.use('/api/products', middleware.verificarUsuario, products);
app.use('/api/carts', carts);

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(config.port, () => {
    console.log(`server listening on http://localhost:${config.port}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.error('error on the server:', error);
});

export default server;