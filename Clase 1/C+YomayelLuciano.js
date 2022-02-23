// Programa con el constructor class
class Libro{
    constructor(nombre, autor){
        this.nombre = nombre;
        this.autor = autor;
    }
}
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
    addBook(libro){
        this.libros.push(libro);
    }
    getBooks(){
        let nombreslibros = [];
        this.libros.forEach(element => {
            nombreslibros.push(element.nombre)
        });
        return nombreslibros;
    }
}

let libro1 = new Libro('Maze Runner', 'Prendal');
let libro2 = new Libro('Prueba de Fuego', 'Prendal');
let libro3 = new Libro('Cura Mortal', 'Prendal');
let usuario = new Usuario('Luciano','Yomayel', [libro1,libro2,libro3], ['Tobi','Peque'])

console.log(usuario.getFullName());
console.log(usuario.getMascotas());
usuario.addMascota('Peque')
usuario.addMascota('Morita')
console.log(usuario.mascotas);
console.log(usuario.getMascotas());
console.log(usuario.getBooks());
usuario.addBook(libro3);
console.log(usuario.getBooks());