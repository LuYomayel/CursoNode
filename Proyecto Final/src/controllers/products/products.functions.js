'use strict';

import Product from '../../models/product.model.js'
import ProductManager from '../../models/product.model.js'

 function addProduct(req, res){
    const product = req.body;
    ProductManager.set(product);
    res.send('Producto Agregado');
}

function getAllProducts(req, res){
    let products = ProductManager.get();
    res.send(products);
}

function getProduct(req, res){
    let products = ProductManager.get();
    let product = products.find(p => p.id == req.params.pid);
    res.send(product);
}

function updateProduct(req, res){
    let products = ProductManager.get();
    let product = products.find(p => p.id == req.params.pid);
    let nuevoArray = products.filter(p => p.id != req.params.pid);
    product = req.body;
    product.id = req.params.pid;
    nuevoArray.push(product);
    ProductManager.setProducts(nuevoArray)
    res.send('Producto actualizado con exito');
}

function deleteProduct(req, res){
    let products = ProductManager.get();
    let nuevoArray = products.filter(p => p.id != req.params.pid);
    ProductManager.setProducts(nuevoArray);
    res.send('Producto Eliminado con exito');
}

export default {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}