import express from 'express';
import cartsFunctions from '../controllers/carts/carts.functions.js';
const router = express.Router();

router.post('/',  cartsFunctions.addCart);

router.delete('/:cid',  cartsFunctions.deleteCart);

router.get('/:cid/products', cartsFunctions.getAllProducts);

router.post('/:cid/products/:pid',  cartsFunctions.addProductToCart);

router.delete('/:cid/products/:pid',  cartsFunctions.deleteProductFromCart);

export default router;