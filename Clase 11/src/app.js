import express from "express";
import {Server} from 'socket.io';

const app = express();
const server = app.listen(8080, () => console.log('Listening to 8080'));

const io = new Server(server);

app.use(express.static('src/public'))

let listaProductos = [];
let messagelog = [];
io.on('connection', socket => {
    socket.broadcast.emit('notification');
    socket.emit("listarProductos",listaProductos);
    socket.emit("log",messagelog);

    socket.on('agregarProducto', data => {
        listaProductos.push({nombre: data.nombre , precio: data.precio, foto: data.foto});
        io.emit('listarProductos', listaProductos);
        console.log(data)
    })

    socket.on('keyboard',data=>{
        messagelog.push({user:data.user,message:data.message})
        console.log(messagelog);
        io.emit('log',messagelog)
    })
})