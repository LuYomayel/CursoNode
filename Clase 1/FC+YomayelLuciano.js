//Programa con la funcion constructora
function Usuario(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
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
    return this.libros.length;
}

let luciano = new Usuario('Luciano','Yomayel', ['Maze Runner'], ['Tobi'])

console.log(luciano.getFullName());
luciano.addMascota('Peque')
luciano.addMascota('Morita')
console.log(luciano.mascotas);
console.log(luciano.getMascotas());
luciano.addBook('Cura mortal')
luciano.addBook('Prueba de fuego')
console.log(luciano.libros);
console.log(luciano.getBooks());

