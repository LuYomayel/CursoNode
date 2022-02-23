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
    addBook(libro){
        this.libros.push(libro);
    }
    getBooks(){
        return this.libros.length;
    }
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