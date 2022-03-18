import express from 'express';
import fs from 'fs';

let app = express();

const PORT = 8080;

let file = 'productos.txt';

class Producto{
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = 0;
    }
    
}

class Obj  {
    constructor(){
        this.item = [];
        this.cantidad = 0;
    }
    agregarProductos(productos){
        let i = 0;
        for(let producto of productos){
            producto.id = i++;
            this.item.push(producto);
        }
        this.cantidad = productos.length;
    }
    agregarAlTxt(){
        
        fs.writeFileSync(file,'{}')

        fs.writeFileSync(file, JSON.stringify(this.item,null,'\t'))
        console.log('Creamos el archivo y guardamos el array')
        
    }

    seleccionarAlAzar(){
        let content = fs.readFileSync(file, 'utf-8');
        

        let arrayItems = JSON.parse(content);
        let numRandom = Math.floor(Math.random() * arrayItems.length );

        return arrayItems[numRandom];
    }

    getObj(){
        return this;
    }
}


let obj = new Obj();

let item1 = new Producto('Auriculares', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')

let item2 = new Producto('Pc', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')

let item3 = new Producto('Mouse', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')
let item4 = new Producto('Teclado', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')
let item5 = new Producto('Escritorio', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')
let item6 = new Producto('Botella', 65000, 'https://images.samsung.com/is/image/samsung/latin-ru7100-un55ru7100pxpa-frontblack-155445710?$684_547_PNG$')


let arrayItems = []

arrayItems.push(item1);
arrayItems.push(item2);
arrayItems.push(item3);
arrayItems.push(item4);
arrayItems.push(item5);
arrayItems.push(item6);


obj.agregarProductos(arrayItems);
obj.agregarAlTxt();





app.listen(PORT, () => {
    console.log('Listening to... '+ PORT )
})

let cont1 = 0;
let cont2 = 0;

app.get('/get', (req, res) => {
    cont1++;
    res.send(obj.getObj())
})

app.get('/item-random', (req, res) => {
    cont2++;
    res.send({
        item: obj.seleccionarAlAzar()
    })
})

app.get('/visitas', (req, res) =>{
    res.send({
        visitas : {
            items: cont1,
            item: cont2
        }
    })
})