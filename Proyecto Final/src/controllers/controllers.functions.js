'use strict';

let usuario = false;

const verificarUsuario = (req, res, next)=>{
    if(usuario === true){
        next();
    }else{
        if(req.method === 'GET') next();
        else{
            res.send({
                error:-1,
                descripcion: `Ruta: ${req.originalUrl} , Metodo: ${req.method}. No tienes autorización para realizar esta accion.`
            });
        }
    }
}

export default {
    verificarUsuario
}