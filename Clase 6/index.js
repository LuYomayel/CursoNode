import fs from 'fs';

class Archivo {
    constructor(nombre){
        this.nombre = nombre;
    }
    async leer(){
        try {
            if(!fs.existsSync(`${this.nombre}`)){
                
                await fs.promises.writeFile(`${this.nombre}`,'[]')
                return console.log('El archivo no existía asi que lo creamos.')
            }else{
                
                let content = await fs.promises.readFile(`${this.nombre}`, 'utf-8')
                console.log(content);
            }
        } catch (error) {
            console.log('Error al leer el archivo: ' + error);
        }
        
    }
    async guardar(producto){

        try {
            if(!fs.existsSync(`${this.nombre}`)) {
                console.log('El archivo no existe');
            }else{
                let listadoProductos = await fs.promises.readFile(`${this.nombre}`, 'utf-8')
                let parse = JSON.parse(listadoProductos)
                producto.id = parse.length + 1;
                parse.push(producto);
                await fs.promises.writeFile(`${this.nombre}`, JSON.stringify(parse,null,'\t'))
                console.log('Cargamos el producto al array!')
            }



        } catch (error) {
            console.log('Error al leer el archivo: ' + error);
        }
    }
    async borrar(){
        try {
            if(!fs.existsSync(`${this.nombre}`)) {
                console.log('El archivo no existe');
            }
            else{
                
                await fs.promises.unlink(`${this.nombre}`);
                return console.log('Documento Borrado')
            }
        } catch (error) {
            
        }

        
    }
}

class Producto{
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail
    }
    
}

let archivo = new Archivo('productos.txt');
await archivo.leer();


let p1 = new Producto('Samsung', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')
let p2 = new Producto('Samsung', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')


await archivo.guardar(p1);
await archivo.leer();
await archivo.borrar();

// No me va a dejar guardar porque el archivo no existe
await archivo.guardar(p2);