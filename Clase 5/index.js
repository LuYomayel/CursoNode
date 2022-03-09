let http = require("http");
const port = process.env.PORT || 3000;
let numRandom = Math.floor(Math.random() * 10 + 1);

const obj = {
    id: numRandom,
    title: "Producto " + numRandom,
    price: (Math.random() * 9999 + 0).toFixed(2),
    thumbnail: "Foto " + numRandom
}

const server = http.createServer((req, res) => {
    try {
        res.end(JSON.stringify(obj))
    } catch (error) {
        console.log(error)
    }
    
})


server.listen(port, () => {
    console.log(`Servidor Http escuchando en el puerto ${port}`);
})