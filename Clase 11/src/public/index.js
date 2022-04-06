const socket = io();

const btnAgregar = document.getElementById('btnAgregar');
const tbody = document.getElementById('tbody');
const input = document.getElementById('msj');
let usuario = '';
class Producto {
    constructor(nombre, precio, foto){
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

Swal.fire({
    title: 'Identificate',
    input: 'text',
    allowOutsideClick: false,
    inputValidator: value => {
        return !value && 'Necesitas escribir un nombre de usuario para participar del chat'
    }
}).then( value => {
    usuario = value.value;
})

btnAgregar.addEventListener('click', evt => {
    evt.preventDefault();
    let nombreProducto = document.getElementById('nombreProducto');
    let precioProducto = document.getElementById('precioProducto');
    let fotoProducto = document.getElementById('fotoProducto');
    if(nombreProducto.value != '' && precioProducto.value != '' && fotoProducto.value != ''){
        let producto = new Producto(nombreProducto.value, precioProducto.value, fotoProducto.value);
        
        nombreProducto.value = '';
        precioProducto.value = '';
        fotoProducto.value = '';
        socket.emit('agregarProducto', producto);
        
    }
    
})

socket.on('listarProductos', data => {
    tbody.innerHTML = '';
    for(let producto of data){
        tbody.innerHTML += `<tr>
                                <td> ${producto.nombre} </td>
                                <td> ${producto.precio} </td>
                                <td > <img src='${producto.foto}' class="img"> </td>
                            </tr>`
    }
})

input.addEventListener('keyup',evt=>{
    let mensaje;
    if(evt.key==="Enter"){
        if(input.value != ''){
            mensaje = {
                user: usuario,
                message: input.value
            }
            socket.emit('keyboard', mensaje);
            input.value ="";
        }
    }
})

socket.on('log',data=>{
    let log = document.getElementById('mensajes');
    let messages = "";
    data.forEach(log=>{
        messages = messages + `${log.user} dice: ${log.message}</br>`
    })
    log.innerHTML = messages;
})

