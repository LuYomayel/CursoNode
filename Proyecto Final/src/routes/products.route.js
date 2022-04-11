import express from 'express';
import productsFunctions from '../controllers/products/products.functions.js';

const router = express.Router();

router.get('/', productsFunctions.getAllProducts)

router.post('/', productsFunctions.addProduct)

router.get('/:pid', productsFunctions.getProduct);

router.put('/:pid', productsFunctions.updateProduct);

router.delete('/:pid', productsFunctions.deleteProduct);

export default router;