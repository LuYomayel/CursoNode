// Programa con el constructor class
class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    getMascotas(){
        return this.mascotas.length;
    }
    addBook(titulo, autor){
        this.libros.push({ titulo, autor })
    }
    getBooks(){
        let librosTitulo = []
        this.libros.forEach((libro) => librosTitulo.push(libro.titulo));
        return librosTitulo;
    }
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