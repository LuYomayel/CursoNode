import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.text({extended: true}))

// Routes
import controllers from './controllers/controllers.services.js';
import products from './routes/products.route.js';
import carts from './controllers/carts/carts.services.js';

app.use('/api', controllers)
app.use('/api/products', products);
app.use('/api/carts', carts);





app.listen(port, () => {
    console.log(`Listening to ${port}`);
})