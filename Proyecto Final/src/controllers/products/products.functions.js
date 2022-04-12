'use strict';

import fs from 'fs';
import ProductManager from '../../models/product.model.js';

const file = 'products.json';

function leerTxt(){
    try {
        let content =   fs.readFileSync(file, 'utf-8'); 
        let arrayItems = JSON.parse(content);
        return arrayItems;
    } catch (error) {
        fs.writeFileSync(file,'[]');
        let arrayItems = [];
        return arrayItems;
    }
    
}

function agregarAlTxt(arrayProducts){
    fs.writeFileSync(file,'{}');
    fs.writeFileSync(file, JSON.stringify(arrayProducts,null,'\t'));
}

 function addProduct(req, res){
    if( req.body.title != null && req.body.price != null && req.body.thumbnail != null && req.body.description != null && req.body.code != null && req.body.stock != null &&
        req.body.title != '' && req.body.price != '' && req.body.thumbnail != '' && req.body.description != '' && req.body.code != '' && req.body.stock != '' && 
        isNaN(req.body.price) == false){
        
        const product = {
            title: req.body.title,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
            code: req.body.code,
            stock: req.body.stock,
            timestamp: Date.now()
        }
        
        let products = leerTxt();
        ProductManager.setProducts(products);
        ProductManager.set(product);
        agregarAlTxt(products);
        
        res.send('Producto Agregado.');
    }else{
        res.send('No se pudo agregar el producto.')
    }
    
}

function getAllProducts(req, res){
    let products = leerTxt();
    if(products.length === 0){
        res.send('No se encontraron registros');
    }else{
        res.send(products);
    }
    
}

function getProduct(req, res){
    let products = leerTxt();
    if(products.length === 0){
        res.send('No se encontraron registros');
    }
    else{
        
        let product = products.find(p => p.id == req.params.pid);
        if(product == null){
            res.send('No hay productos con este id');
        }else{
            let product = products.find(p => p.id == req.params.pid);
            res.send(product);
        }
    }
}

function updateProduct(req, res){
    let products = leerTxt();
    if(products.length === 0){
       res.send('No se encontraron registros');

    }
    else if(isNaN(req.params.pid))res.send('El id debe ser un número.');
    else{
        let body = req.body;
        let product = products.find(p => p.id == req.params.pid);
        if(product == null){
            res.send('No hay productos con este id');
        }else{
            if(body.title != null && body.title != '') product.title = body.title;
            if(body.price != null && body.price != '') product.price = body.price;
            if(body.thumbnail != null && body.thumbnail != '') product.thumbnail = body.thumbnail;
            if(body.description != null && body.description != '') product.description = body.description;
            if(body.code != null && body.code != '') product.code = body.code;
            if(body.stock != null && body.stock != '') product.stock = body.stock;
            let nuevoArray = products.filter(p => p.id != req.params.pid);

            product.id = req.params.pid;

            nuevoArray.push(product);

            agregarAlTxt(nuevoArray);
            res.send('Producto actualizado con exito');
        }
        
    }
    
}

function deleteProduct(req, res){
    let products = leerTxt();
    if(products.length === 0){
        res.send('No se encontraron registros');
    }else{
        console.log(req.params.pid);
        let product = products.find(p => p.id == req.params.pid);
        if(product == null){
            res.send('No hay productos con este id');
        }else{
            let nuevoArray = products.filter(p => p.id != req.params.pid);
            agregarAlTxt(nuevoArray);
            res.send('Producto Eliminado con exito');
        }
    }
    
}

export default {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}