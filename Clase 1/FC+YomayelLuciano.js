//Programa con la funcion constructora
function libro(nombre, autor){
    this.nombre = nombre;
    this.autor = autor;
}
function Usuario(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros =  libros;
    this.mascotas = mascotas;
    
}

Usuario.prototype.getFullName = function() {
    return `${this.nombre} ${this.apellido}`;
}

Usuario.prototype.addMascota = function(mascota) {
    this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function(){
    return this.mascotas.length;
}

Usuario.prototype.addBook = function(libro) {
    this.libros.push(libro);
}

Usuario.prototype.getBooks = function(){
    let nombreslibros = [];
    this.libros.forEach(element => {
        nombreslibros.push(element.nombre)
    });
    return nombreslibros;
}

let libro1 = new libro('Maze Runner', 'Prendal');
let libro2 = new libro('Prueba de Fuego', 'Prendal');
let libro3 = new libro('Cura Mortal', 'Prendal');
let usuario = new Usuario('Luciano','Yomayel', [libro1,libro2], ['Tobi','Peque'])

console.log(usuario.getFullName());
console.log(usuario.getMascotas());
usuario.addMascota('Peque')
usuario.addMascota('Morita')
console.log(usuario.mascotas);
console.log(usuario.getMascotas());
console.log(usuario.getBooks());
usuario.addBook(libro3);
console.log(usuario.getBooks());

