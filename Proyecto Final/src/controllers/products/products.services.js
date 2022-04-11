'use strict';

import express from 'express';
import { response } from 'express';
const router = express.Router();
let products = [];
import productsFunctions from './products.functions.js'

router.get('/:pid', (req, res) => {
    
    alumnosFunctions.getAlumnos()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});


router.post('/', (req, res) => {
    console.log('Entre al post');
    products = productsFunctions.addProduct(req.body, products);
    console.log(products);
});

router.put('/:pid', (req, res ) => {
    alumnosFunctions.updateAlumno(req.params,req.body)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})

router.delete('/:pid', (req, res ) => {
    alumnosFunctions.deleteAlumno(req.params)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})
export default router;