//Programa con la funcion constructora
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

Usuario.prototype.addBook = function(titulo, autor) {
    this.libros.push({ titulo, autor })
}

Usuario.prototype.getBooks = function(){
    let librosTitulo = []
    this.libros.forEach((libro) => librosTitulo.push(libro.titulo));
    return librosTitulo;
}


let usuario = new Usuario('Luciano','Yomayel', [{titulo: 'Maze Runer', autor:'Prendal'},{titulo:'Prueba de Fuego', autor:'Prendal'}], ['Tobi','Peque'])

console.log(usuario.getFullName());
console.log(usuario.getMascotas());
usuario.addMascota('Lola')
usuario.addMascota('Morita')
console.log(usuario.mascotas);

console.log(usuario.getMascotas());
console.log(usuario.getBooks());
usuario.addBook(titulo= 'Cura Mortal', autor='Prendal');
console.log(usuario.getBooks());
console.log(usuario.libros);
