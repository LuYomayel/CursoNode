'use strict';
import CartManager from '../../models/cart.model.js'
import fs from 'fs';
import { isArray } from 'util';
import util from 'util';
const file = 'cart.json';

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

function leerTxtProductos(){
    try {
        let content =   fs.readFileSync('products.json', 'utf-8'); 
        let arrayItems = JSON.parse(content);
        return arrayItems;
    } catch (error) {
        fs.writeFileSync('products.json','[]');
        let arrayItems = [];
        return arrayItems;
    }
}

function agregarAlTxt(arrayProducts){
    fs.writeFileSync(file,'{}');
    fs.writeFileSync(file, JSON.stringify(arrayProducts,null,'\t'));
}

 function addCart(req, res){
    let carritos = leerTxt();
    if(carritos.length === 0){
        let carrito = {
            timestamp: Date.now(),
            products: []
        }
        CartManager.set(carrito);
        carritos = CartManager.get();
        agregarAlTxt(carritos);
        res.send({
            id: carritos[carritos.length-1].id
        });
    }else{
        let carrito = {
            timestamp: Date.now(),
            products: []
        }
        CartManager.setCarts(carritos);
        CartManager.set(carrito);
        carritos = CartManager.get();
        agregarAlTxt(carritos);
        console.log(carritos[carritos.length-1].id)
        res.send({
            id: carritos[carritos.length-1].id
        });
    }
}

function getAllProducts(req, res){
    let carritos = leerTxt();
    if(carritos.length === 0){
        res.send('No se encontraron registros');
    }else{
        let cart = carritos.find(c => c.id == req.params.cid);
        if(cart != null){
            let carrito = [];
            let productos = leerTxtProductos();
            cart.products.forEach((p,index) => {
                productos.forEach(pListado => {
                    if(pListado.id == p.id){
                        // carrito.push({producto: pListado, quantity:p.quantity});
                        carrito.push(pListado);
                    }
                })
            })
            res.send(carrito);
        }else{
            res.send('No hay carritos con ese id.')
        }
    }
    
}

function deleteProductFromCart(req, res){
    let carritos = leerTxt();
    if(carritos.length === 0){
        res.send('No hay carritos disponibles.');
    }else{
        
        let products = leerTxtProductos();
        if(products.length === 0){
        res.send('No hay productos disponibles.');
        }
        else if(isNaN(req.params.pid) && isNaN(req.params.cid))res.send('El id debe ser un número.');
        else{
            let nuevoArray = carritos.filter(c => c.id != req.params.cid);
            let cart = carritos.find(c => c.id == req.params.cid);
            if(cart === null){
                res.send('No hay carritos con este id.');
            }else{
                let producto = cart.products.find(p => p.id == req.params.pid);
                if(producto != null){
                    let arrayProductos = cart.products.filter( p => p.id != req.params.pid);
                    cart.products = arrayProductos;
                }else{
                    res.send('El producto no existe.');
                }
                nuevoArray.push(cart);
                agregarAlTxt(nuevoArray);
                res.send('Producto eliminado con exito');
            }
        }
    }
}

function addProductToCart(req, res){
    let carritos = leerTxt();
    if(carritos.length === 0){
        res.send('No hay carritos disponibles.');
    }else{
        
        let products = leerTxtProductos();
        if(products.length === 0){
        res.send('No hay productos disponibles.');
        }
        else if(isNaN(req.params.pid) && isNaN(req.params.cid))res.send('El id debe ser un número.');
        else{
            
            let product = products.find(p => p.id == req.params.pid);
            if(product == null){
                res.send('No hay productos con este id');
            }else{
                let nuevoArray = carritos.filter(c => c.id != req.params.cid);
                product.id = req.params.pid;
                let cart = carritos.find(c => c.id == req.params.cid);
                if(cart === null){
                    res.send('No hay carritos con este id.');
                }else{
                    let producto = cart.products.find(p => p.id == product.id);
                    if(producto != null){
                        producto.quantity++;
                    }else{
                        producto = {
                            id: product.id,
                            quantity:1
                        }
                        cart.products.push(producto);
                    }
                    nuevoArray.push(cart);
                    agregarAlTxt(nuevoArray);
                    res.send('Producto actualizado con exito');
                }
            }
            
        }
    }
}

function deleteCart(req, res){
    let carts = leerTxt();
    if(carts.length === 0){
        res.send('No se encontraron registros');
    }else{
        
        let cart = carts.find(c => c.id == req.params.cid);
        if(cart == null){
            res.send('No hay carritos con este id');
        }else{
            let nuevoArray = carts.filter(c => c.id != req.params.cid);
            agregarAlTxt(nuevoArray);
            res.send('Carrito Eliminado con exito');
        }
    }
    
}

export default {
    addCart,
    deleteCart,
    getAllProducts,
    addProductToCart,
    deleteProductFromCart
}